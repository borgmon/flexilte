<script lang="ts">
	import { CardBox } from '@flexilte/skeleton';

	import { componentStore, components } from '$lib/editorStore';
	import { onMount } from 'svelte';
	import Sortable from 'sortablejs';
	import { JsonLayout, type LayoutConfig } from '@flexilte/core';

	let builderEl: HTMLElement;

	const onAdd = (event: Sortable.SortableEvent) => {
		console.log('onAdd', event.item);
		// console.log(2, $componentStore);
		const newConfig = UpdateTree(builderEl, event.item, $componentStore);
		console.log('newConfig', newConfig);
		componentStore.set({ ...newConfig });
		event.item.remove();
		addSortable(builderEl);
	};
	const onRemove = (event: Sortable.SortableEvent) => {
		console.log('onRemove', event.item);
	};

	const addSortable = (e: HTMLElement) => {
		if (e.classList.contains('flexilte-col') || e.classList.contains('flexilte-row')) {
			Sortable.create(e, {
				group: { name: 'toolbox' },
				animation: 150,
				invertSwap: true,
				fallbackOnBody: true,
				invertedSwapThreshold:.65,
				onAdd,
				onRemove
			});
			Array.from(e.children).forEach((c) => {
				addSortable(c as HTMLElement);
			});
		} else if (e.classList.contains('flexilte-row')) {
			Array.from(e.children).forEach((c) => {
				addSortable(c as HTMLElement);
			});
		}
	};

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
			console.log(key, index);
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

		console.log('path', path);
		let updatedTree = updateTree(path, currentTree);

		return updatedTree;
	}

	onMount(() => {
		addSortable(builderEl);
		// console.log(1,$componentStore)
	});
</script>

<div class="flexilte-row" bind:this={builderEl} id="builder">
	<JsonLayout layoutConfig={$componentStore} {components} debug={true} />
</div>
