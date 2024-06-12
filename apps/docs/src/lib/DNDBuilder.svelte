<script lang="ts">
	import { components, triggerRefresh } from '$lib/editorStore';
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
		console.log(occupied, leftLimit, rightLimit, newWidth);
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

	const injectEvent = (event: Event) => {
		Array.from(builderEl.querySelectorAll('.grid-stack-item')).forEach((x) => {
			if (!x.hasAttribute('patched')) {
				x.addEventListener('mouseout', saveLayout);
				x.addEventListener('dblclick', (e: Event) => {
					let cur = e.target as GridItemHTMLElement;
					while (cur && !cur.gridstackNode) {
						cur = cur.parentElement as GridItemHTMLElement;
					}
					if (cur.gridstackNode) {
						toggleFill(cur.gridstackNode);
					}
				});
				x.setAttribute('patched', '');
			}
		});
	};
	const saveLayout = () => {
		if (!grid) return;
		const save = grid.save(true, true) as GridStackOptions;
		customlayout = convert({ subGridOpts: { children: save.children } });
	};
	let tmpW: string;
	onMount(() => {
		GridStack.setupDragIn('.sidebar .grid-stack-item', {
			helper: 'clone'
		});
		grid = GridStack.init(gridConfig, builderEl);
	});

	triggerRefresh.subscribe(() => saveLayout());
</script>

<div class="flexilte-row" bind:this={previewEl} id="preview">
	<JsonLayout layoutConfig={customlayout} {components} debug={true} />
</div>

<div
	bind:this={builderEl}
	id="builder"
	class=" grid-stack-item-content"
	on:mouseenter={injectEvent}
></div>
<button on:click={saveLayout}>save</button>
