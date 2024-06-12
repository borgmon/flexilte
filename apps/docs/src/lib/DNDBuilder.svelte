<script lang="ts">
	import {
		componentValueStore,
		components,
		selectedComponentStore,
		triggerFormat,
		triggerRefresh
	} from '$lib/editorStore';
	import { onMount } from 'svelte';
	import { JsonLayout, type LayoutConfig } from '@flexilte/core';
	import 'gridstack/dist/gridstack.min.css';
	import 'gridstack/dist/gridstack-extra.min.css';
	import {
		GridStack,
		type GridItemHTMLElement,
		type GridStackNode,
		type GridStackOptions,
		type GridStackWidget
	} from 'gridstack/dist/es5/gridstack';
	import defaultMap from './defaultMap';
	let previewEl: HTMLElement;
	let builderEl: HTMLElement;
	let box1: HTMLElement;
	let box2: HTMLElement;
	let grid: GridStack;
	const subConfig: GridStackOptions = {
		acceptWidgets: true,
		removable: '#trash',
		column: 'auto',
		cellHeight: '2rem',
		cellHeightThrottle: 500,
		animate: false,
		subGridDynamic: true,
		// disableResize:true,
		sizeToContent: true
	};
	let customlayout: LayoutConfig<typeof components> = {};
	const c: GridStackWidget[] = [
		{ w: 3, h: 3, content: 'item 2' },
		{ w: 3, h: 3, content: 'item 2' }
	];
	const gridConfig: GridStackOptions = {
		acceptWidgets: true,
		// margin:1,
		removable: '#trash',
		minRow: 2,
		float: true,
		// column:6,
		cellHeight: '2rem',
		cellHeightThrottle: 500,
		animate: false,
		subGridOpts: subConfig,
		subGridDynamic: true,
		// disableResize:true,
		sizeToContent: true
	};

	const rowFill = (newWidget: GridStackNode) => {
		const rowNodes = grid.engine.nodes.filter((e) => e.y === newWidget.y);
		if (!rowNodes) return;

		const totalColumns = grid.getColumn();
		const occupied = Array(totalColumns).fill(false);

		// Mark the occupied columns
		rowNodes.forEach((node) => {
			for (let i = node.x; i < node.x + node.w; i++) {
				occupied[i] = true;
			}
		});

		// Find the left and right expansion limits
		let leftLimit = newWidget.x;
		while (leftLimit > 0 && !occupied[leftLimit - 1]) {
			leftLimit--;
		}

		let rightLimit = newWidget.x + newWidget.w!;
		while (rightLimit < totalColumns && !occupied[rightLimit]) {
			rightLimit++;
		}

		const newWidth = rightLimit - leftLimit;
		// Check if the newWidget is already fully expanded
		// Expand the widget to the calculated width
		grid.update(newWidget.el!, { w: newWidth, x: leftLimit, y: newWidget.y });
	};

	const toggleFill = (newWidget: GridStackNode) => {
		const rowNodes = grid.engine.nodes.filter((e) => e.y === newWidget.y);
		if (!rowNodes) return;

		const totalColumns = grid.getColumn();
		const occupied = Array(totalColumns).fill(false);

		// Mark the occupied columns
		rowNodes.forEach((node) => {
			for (let i = node.x; i < node.x + node.w; i++) {
				occupied[i] = true;
			}
		});

		// Find the left and right expansion limits
		let leftLimit = newWidget.x;
		while (leftLimit > 0 && !occupied[leftLimit - 1]) {
			leftLimit--;
		}

		let rightLimit = newWidget.x + newWidget.w!;
		while (rightLimit < totalColumns && !occupied[rightLimit]) {
			rightLimit++;
		}

		const newWidth = rightLimit - leftLimit;
		// Check if the newWidget is already fully expanded
		if (newWidth === newWidget.w) {
			// Shrink the widget if it's fully expanded
			const smallW = 2;
			const left = newWidget.x;
			const right = newWidget.x + newWidget.w;
			const thing = Math.round((left + right) / 2) - smallW;
			console.log(thing);

			grid.update(newWidget.el!, { w: smallW, x: thing, y: newWidget.y });
		} else {
			// Expand the widget to the calculated width
			grid.update(newWidget.el!, { w: newWidth, x: leftLimit, y: newWidget.y });
		}
	};

	function extractComponentFromHTML(html: string): string | undefined {
		const match = html.match(/data-comp="([^"]*)"/);
		return match ? match[1] : undefined;
	}
	function convert(grid: GridStackOptions): LayoutConfig<typeof components> {
		const layout = {} as LayoutConfig<typeof components>;
		const rows: Record<string, LayoutConfig<typeof components>[]> = {}; // as [row#]:[values]
		const children = grid.subGridOpts?.children || grid.children || [];
		if (children) {
			children.forEach((child) => {
				const rowNum = child.y || 0;
				// debugger
				if (!rows[rowNum]) rows[rowNum] = [];

				if (child.subGridOpts?.children) {
					rows[rowNum].push(convert(child.subGridOpts));
				} else {
					if (child.content) {
						const comp = $componentValueStore[child.id!];
						comp.width = `w-${child.w || 1}/${12}`;
						rows[rowNum].push(comp);
					} else {
						console.warn('no content?', child);
					}
				}
			});
		}

		if (Object.keys(rows).length !== 0) {
			layout.rows = Object.keys(rows).map((k) => ({
				cols: rows[k]
			}));
		}

		return layout;
	}

	const initComp = (node: GridStackNode) => {
		const comp = {
			id: node.id,
			component: node!.el?.innerText,
			props: JSON.parse(JSON.stringify(defaultMap[node!.el?.innerText!]))
		};
		if (!node.id) node.id = Date.now().toString();
		const tryComp = $componentValueStore[node.id];
		if (!tryComp) {
			componentValueStore.update((store) => {
				store[node.id] = comp;
				return { ...store };
			});
			return comp;
		} else {
			return tryComp;
		}
	};

	const cropTopGrid = () => {
		const items = grid.getGridItems();
		const getMin = items.reduce((prev, curr) => Math.min(prev, curr.gridstackNode?.y), 99999);
		items.forEach((i) => {
			grid.update(i, { y: i.gridstackNode.y - getMin });
			// i.gridstackNode.y -= getMin
		});
		// grid.batchUpdate()
	};

	const formatGrid = () => {
		if (!grid) return;
		cropTopGrid();
		grid.getGridItems().forEach((x) => rowFill(x.gridstackNode!));
	};
	const saveLayout = () => {
		if (!grid) return;
		formatGrid();
		const save = grid.save(true, true) as GridStackOptions;
		customlayout = convert({ subGridOpts: { children: save.children } });
		console.log(customlayout);
	};
	let tmpW: string;
	onMount(() => {
		GridStack.setupDragIn('.sidebar .grid-stack-item', {
			helper: 'clone'
		});
		grid = GridStack.init(gridConfig, builderEl);
		// grid.on('added', function (event: Event, items: GridStackNode[]) {
		// 	console.log('added');
		// });
		// grid.on('change', function (event: Event, items: GridStackNode[]) {
		// 	console.log('change');
		// });
		// grid.on('dragstart', function(event: Event, el: GridItemHTMLElement) {
		// 	console.log('dragstart');
		// });
		// grid.on('dragstop', function(event: Event, el: GridItemHTMLElement) {
		// 	console.log('dragstop');
		// });
		grid.on(
			'dropped',
			function (event: Event, previousWidget: GridStackNode, newWidget: GridStackNode) {
				initComp(newWidget);
				newWidget.el?.addEventListener('dblclick', (e) => {
					toggleFill(newWidget);
				});
				newWidget.el?.addEventListener('click', (e) => {
					selectedComponentStore.set(newWidget.id);
				});
			}
		);
	});

	triggerRefresh.subscribe(() => saveLayout());
	triggerFormat.subscribe(() => formatGrid());
</script>

<div class="flexilte-row" bind:this={previewEl} id="preview">
	<JsonLayout layoutConfig={customlayout} {components} debug={true} />
</div>

<div bind:this={builderEl} id="builder" class=" grid-stack-item-content"></div>
