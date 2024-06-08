<script lang="ts">
	import { CardBox, ImageBox, TextBox } from '@flexilte/skeleton';
	import Icon from '@iconify/svelte';
	import { SortableList } from '@sonderbase/svelte-sortablejs';
	import type { SortableEvent } from 'sortablejs';
	import { componentStore, components, selectedComponentStore } from './editorStore';
	import { JsonLayout, type LayoutConfig } from '@flexilte/core';
	import { CodeBlock } from '@skeletonlabs/skeleton';
	import defaultMap from './defaultMap';
	import { get } from 'svelte/store';
	import { onMount } from 'svelte';
	import DNDTest from './DNDTest.svelte';
	import AddBox from './AddBox.svelte';
	import Sortable from 'sortablejs';
	import type { a } from 'vitest/dist/reporters-yx5ZTtEV.js';

	let el: HTMLDivElement;
	let previewEmpty = true;

	const addToJson = (component: string, props: Record<string, any>): void => {
		componentStore.update((layoutConfig) => {
			const id = Date.now().toString();
			layoutConfig.rows = [
				...layoutConfig.rows!,
				{ component, props, id } as LayoutConfig<typeof components>
			];
			selectedComponentStore.set(id);
			return layoutConfig;
		});
	};
	const reorderJson = (id: string, newIndex: number): void => {
		componentStore.update((layoutConfig) => {
			const rows = layoutConfig?.rows;
			if (!rows) return layoutConfig;

			const rowIndex = rows.findIndex((row) => row.id === id);
			if (rowIndex === -1 || newIndex < 0 || newIndex >= rows.length) return layoutConfig;

			const [row] = rows.splice(rowIndex, 1);
			rows.splice(newIndex, 0, row);

			return layoutConfig;
		});
	};
	function removeUntilSibling(root: HTMLElement) {
		function checkAndRemove(node: HTMLElement): boolean {
			const children = Array.from(node.children) as HTMLElement[];
			for (const child of children) {
				if (child.id === 'placeholder') {
					node.removeChild(child);
					return true;
				}
				if (checkAndRemove(child)) {
					node.removeChild(child);
					return true;
				}
			}
			return false;
		}
		checkAndRemove(root);
	}
	function ensureAddBox(obj: LayoutConfig<typeof components>): void {
		const addBox: LayoutConfig<typeof components> = { component: 'AddBox' };

		const hasAddBox = (array: LayoutConfig<typeof components>[] | undefined) =>
			array?.some((item) => item.component === 'AddBox');

		if (!obj.component) {
			// if (obj.rows === undefined) {
			// 	obj.rows = [{
			// 		cols:[addBox]
			// 	}];
			// } else {
			// 	obj.rows.forEach(ensureAddBox);
			// }
			// if (!hasAddBox(obj.rows)) {
			// 	obj.rows.push(addBox);
			// } else {
			// 	console.log('has', obj.rows, obj);
			// }
			// if (obj.cols === undefined) {
			// 	obj.cols = [{
			// 		rows:[addBox]
			// 	}];
			// } else {
			// 	obj.cols.forEach(ensureAddBox);
			// }
			// if (!hasAddBox(obj.cols)) {
			// 	obj.cols.push(addBox);
			// } else {
			// 	console.log('has', obj.rows, obj);
			// }

			if (obj.rows) {
				obj.rows.forEach(ensureAddBox);
				if (!hasAddBox(obj.rows)) {
					obj.rows.push(addBox);
				}
			}
			//  else {
			// const index = obj.rows.findIndex((a) => a.component === 'AddBox');
			// const [element] = obj.rows.splice(index, 1);
			// obj.rows.push(element);
			// }

			if (obj.cols) {
				obj.cols.forEach(ensureAddBox);
				if (!hasAddBox(obj.cols)) {
					obj.cols.push(addBox);
				}
			}

			// else {
			// const index = obj.cols.findIndex((a) => a.component === 'AddBox');
			// const [element] = obj.cols.splice(index, 1);
			// obj.cols.push(element);
			// }

			// 	obj.rows = obj.rows ?? [];
			// 	obj.rows.push(addBox);
			// 	obj.cols = obj.cols ?? [];
			// 	obj.cols.push(addBox);
		}
	}

	function parseDOMtoConfig(element: HTMLDivElement) {
		let config = {} as LayoutConfig<typeof components>;
		if (!element) {
			return undefined;
		}
		// row
		if (element.classList?.contains('flexilte-row')) {
			console.log(1, element);
			const thing: LayoutConfig<typeof components>[] = Array.from(element.children)
				.map(parseDOMtoConfig)
				.filter((a): a is LayoutConfig<typeof components> => a !== undefined);

			if (thing.length > 0) config.rows = thing;
		} else if (element.classList?.contains('flexilte-col')) {
			console.log(2, element);
			const thing: LayoutConfig<typeof components>[] = Array.from(element.children)
				.map(parseDOMtoConfig)
				.filter((a): a is LayoutConfig<typeof components> => a !== undefined);

			if (thing.length > 0) config.cols = thing;
		} else if (element.id.startsWith('clone-')) {
			console.log(3, element, element.id);
			// const el = element.id.startsWith('clone-');
			config.component = element?.innerText as undefined;
			config.props = {}; // Set component props if necessary
		} else {
			console.log(4, element);
			return undefined;
		}
		console.log(5, config);
		if (!config.rows && !config.cols && !config.component) {
			return undefined;
		}
		return config;
	}

	function filterBox(obj: any): any | null {
		if (obj.component === 'AddBox') return null;

		if (Array.isArray(obj)) {
			const filteredArray = obj
				.map((item) => (typeof item === 'object' && item !== null ? filterBox(item) : item))
				.filter((item) => item !== null);
			return filteredArray;
		}

		const newObj: any = {};
		for (const key in obj) {
			if (obj.hasOwnProperty(key)) {
				const value = obj[key];
				if (typeof value === 'object' && value !== null) {
					const result = filterBox(value);
					if (result !== null) newObj[key] = result;
				} else {
					newObj[key] = value;
				}
			}
		}

		return newObj;
	}

	function scanAndSetProps(obj: any): void {
		if (obj && typeof obj === 'object') {
			for (const key in obj) {
				if (obj[key] && typeof obj[key] === 'object') {
					if (obj[key].component && defaultMap[obj[key].component]) {
						obj[key].props = defaultMap[obj[key].component];
					}
					scanAndSetProps(obj[key]);
				}
			}
		}
	}
	function deepMerge(target: any, source: any): any {
		if (Array.isArray(target) && Array.isArray(source)) {
			return target
				.map((item, index) => (index < source.length ? deepMerge(item, source[index]) : item))
				.concat(source.slice(target.length));
		} else if (target instanceof Object && source instanceof Object) {
			for (const key in source) {
				if (source[key] instanceof Object && key in target) {
					target[key] = deepMerge(target[key], source[key]);
				} else {
					target[key] = source[key];
				}
			}
			return target;
		} else {
			return source;
		}
	}

	const onAdd = (event: SortableEvent) => {
		console.log('add', event.item);
		const component = event.item.innerText;

		componentStore.update((layoutConfig) => {
			// layoutConfig.rows = [
			// 	...layoutConfig.rows!,
			// 	{ component, props: defaultMap[component] } as LayoutConfig<typeof components>
			// ];
			const config = parseDOMtoConfig(el.children[0]);
			if (config) {
				console.log('parsed', JSON.parse(JSON.stringify(config)));
				console.log('b4', JSON.parse(JSON.stringify(layoutConfig)));
				if (layoutConfig.rows?.length === 1 && layoutConfig.rows[0].component === 'AddBox') {
					layoutConfig = config;
				} else {
					layoutConfig = deepMerge(layoutConfig, config);
				}
				console.log('after', JSON.parse(JSON.stringify(layoutConfig)));
			}
			scanAndSetProps(layoutConfig);
			// ensureAddBox(layoutConfig);
			// event.item.remove();
			addSortable(el);

			return layoutConfig;
		});

		// removeUntilSibling(event.item.parentElement!)
		// if (el.children[0].children.length === 2) {
		// 	previewEmpty = false;
		// }
		// const name = event.item.innerText;
		// el.children[0].removeChild(event.item);
		// addToJson(name, defaultMap[name]);
	};

	const onRemove = (event: SortableEvent) => {
		console.log('onRemove', event.item);

		// if (el.children[0].children.length === 0) {
		// 	previewEmpty = true;
		// }
	};

	const onEnd = (event: SortableEvent) => {
		// console.log("onEnd",event.item.children[0].id, event.newIndex )
		// if (event.newIndex !== undefined) {
		// 	reorderJson(event.item.children[0].id, event.newIndex);
		// }
	};

	componentStore.subscribe((x) => console.log('config', x));

	const addSortable = (e: HTMLElement) => {
		console.log('ee', e);
		if (e.classList.contains('flexilte-row') || e.classList.contains('flexilte-col')) {
			Sortable.create(e, {
				group: { name: 'toolbox' },
				animation: 150,
				onAdd,
				onRemove
			});
			Array.from(e.children).forEach((c) => {
				addSortable(c as HTMLElement);
			});
		}
	};

	onMount(() => {
		console.log('init...');
		componentStore.update((layoutConfig) => {
			// ensureAddBox(layoutConfig);
			console.log('inited layout', layoutConfig);

			return { ...layoutConfig };
		});
	});

	function UpdateTree(
		root: HTMLElement,
		el: HTMLElement,
		currentTree: LayoutConfig<typeof components>
	): LayoutConfig<typeof components> {
		// Helper function to find the path from el to root
		function findPathToRoot(node: HTMLElement, target: HTMLElement): (number | string)[] | null {
			let path: (number | string)[] = [];
			let current = node;

			while (current !== target) {
				let parent = current.parentElement;
				if (parent === null) return null; // Just in case there's no parent

				let children = Array.from(parent.children);
				let isRow = children.some((a) => a.classList.contains('flexilte-row'));
				let isCol = children.some((a) => a.classList.contains('flexilte-col'));
				let isItem = children.some((a) => a.classList.contains('flexilte-item'));

				let index = children.indexOf(current);
				if (index === -1) return null; // Current element should always be in its parent's children

				if (isRow) path.unshift('rows', index);
				else if (isCol) path.unshift('cols', index);
				else if (isItem)
					path.unshift(parent.classList.contains('flexilte-row') ? 'cols' : 'rows', index);
				current = parent;
			}
			return path;
		}

		// Helper function to update tree immutably
		function updateTree(
			path: (number | string)[],
			tree: LayoutConfig<typeof components>
		): LayoutConfig<typeof components> {
			let [key, index, ...rest] = path as [string, number, ...(string | number)[]];
			let newTree = { ...tree } as LayoutConfig<typeof components>;

			if (key === 'rows' || key === 'cols') {
				// newTree[key] = newTree[key] ? [...newTree[key]!] : [];
				if (!newTree[key]) {
					newTree = {
						alignHeight: true,
						layoutClass: key === 'cols' ? 'mx-4' : 'my-4'
					};
					newTree[key] = [{ ...tree }];
				}
				if (rest.length === 0) {
					newTree[key]!.splice(index, 0, {
						component: el.innerText as unknown as undefined,
						posX: 'middle',
						posY: 'middle',
						props: {
							text: '123'
						}
					});
				} else {
					newTree[key]![index] = updateTree(rest, newTree[key]![index] || {});
				}
			}

			return newTree;
		}

		let path = findPathToRoot(el, root);
		if (path === null) throw new Error('Element is not a descendant of root');

		let updatedTree = updateTree(path, currentTree);

		return updatedTree;
	}
</script>

<div id="preview" bind:this={el} class="flexilte-row">
	<!-- <DNDTest layoutConfig={$componentStore} {components} {onAdd} {onRemove} /> -->
	<JsonLayout layoutConfig={$componentStore} {components} />
</div>
<button on:click={() => addSortable(el)}>init</button>
