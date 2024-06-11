<script lang="ts">
	import { CardBox } from '@flexilte/skeleton';

	import {
		componentValueStore,
		componentStore,
		components,
		triggerRefresh,
		selectedComponentStore
	} from '$lib/editorStore';
	import { onMount } from 'svelte';
	import Sortable from 'sortablejs';
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
	import Icon from '@iconify/svelte';

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
		// column:6,
		cellHeight: '2rem',
		cellHeightThrottle: 500,
		animate: false,
		subGridOpts: subConfig,
		subGridDynamic: true,
		// disableResize:true,
		sizeToContent: true
	};

	const fillRow = (newWidget: GridStackNode) => {
		const rowNodes = newWidget.grid?.engine.nodes.filter((e) => e.y === newWidget.y);
		// console.log(rowNodes);

		const totalColumns = newWidget.grid!.getColumn();
		const usedColumns = rowNodes!.reduce((sum, currentNode) => sum + currentNode.w, 0);
		const remainingColumns = totalColumns - usedColumns + newWidget.w!;

		// Calculate current x position
		const currentX = rowNodes!.reduce(
			(maxX, currentNode) => Math.max(maxX, currentNode.x + currentNode.w),
			0
		);

		grid.update(newWidget.el!, { w: remainingColumns, x: currentX });
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
						rows[rowNum].push({
							component: extractComponentFromHTML(child.content) as unknown as undefined,
							props: {
								text: '123'
							}
						});
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

	const cloneHelper =
		(eventType: string, listener: (injectedEvent: Event) => void) => (event: Event) => {
			const el = event.target as HTMLElement;
			const newEl = GridStack.Utils.cloneNode(el);
			newEl.addEventListener(eventType, listener);
			// el.addEventListener(eventType, listener);
			console.log(newEl);
			return newEl;
		};

	const testHelper = (event: Event) => {
		console.log(event);
		return GridStack.Utils.cloneNode(event.target);
	};

	const testHelper2 = (event: Event) => {
		Array.from(builderEl.querySelectorAll('.grid-stack-item')).forEach((x) =>
			x.addEventListener('mouseout', saveLayout)
		);
	};

	let tmpW: string;
	onMount(() => {
		console.log(typeof cloneHelper('mouseout', saveLayout));
		GridStack.setupDragIn('.sidebar .grid-stack-item', {
			helper: 'clone'
		});
		grid = GridStack.init(gridConfig, builderEl);
		// grid.addWidget({ w: 3, h: 3, content: 'item 1' });
		// grid.load(c);
		// grid.on('dropped', (event: Event, previousWidget: GridStackNode, newWidget: GridStackNode) => {
		// 	// saveLayout()
		// 	console.log('dropped')
		// });
		// grid.on('change', (event: Event, el: GridItemHTMLElement) => {
		// 	console.log('change');
		// });
		// grid.on('added', function (event: Event, items: GridStackNode[]) {
		// 	console.log(items)
		// });
		// grid.on('dragstart', (event: Event, el: GridItemHTMLElement) => {
		// 	console.log('dragstart')
		// });
	});

	const saveLayout = () => {
		if (!grid) return;
		const save = grid.save(true, true) as GridStackOptions;
		console.log(save);
		customlayout = convert({ subGridOpts: { children: save.children } });
		// console.log(customlayout);
	};
	triggerRefresh.subscribe(() => saveLayout());
</script>

<div class="flexilte-row" bind:this={previewEl} id="preview">
	<JsonLayout layoutConfig={customlayout} {components} debug={true} />
</div>

<div
	bind:this={builderEl}
	id="builder"
	class=" grid-stack-item-content"
	on:mouseenter={testHelper2}
></div>
<button on:click={saveLayout}>save</button>
