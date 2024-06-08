<script lang="ts">
	import { CardBox } from '@flexilte/skeleton';

	import { componentStore, components } from '$lib/editorStore';
	import { onMount } from 'svelte';
	import Sortable from 'sortablejs';
	import { JsonLayout, type LayoutConfig } from '@flexilte/core';

	let builderEl: HTMLElement;

	const onAdd = (event: Sortable.SortableEvent) => {
		console.log('onAdd', event.item);
		const newConfig = UpdateTree(builderEl, event.item, $componentStore);
		console.log('newConfig', newConfig);
		// componentStore.set({ ...newConfig });
	};
	const onRemove = (event: Sortable.SortableEvent) => {
		console.log('onRemove', event.item);
	};

	const addSortable = (e: HTMLElement) => {
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

	function UpdateTree(
		root: HTMLElement,
		el: HTMLElement,
		currentTree: LayoutConfig<typeof components>
	): LayoutConfig<typeof components> {
		// Helper function to find the path from el to root
		function findPathToRoot(node: HTMLElement, target: HTMLElement): number[] | null {
			let path: number[] = [];
			let current = node;

			while (current !== target) {
				let parent = current.parentElement;
				if (parent === null) return null; // Just in case there's no parent

				let children = Array.from(parent.children);
				let index = children.indexOf(current);
				if (index === -1) return null; // Current element should always be in its parent's children

				path.unshift(index);
				current = parent;
			}
			return path;
		}

		// Helper function to update tree immutably
		function updateTree(
			path: number[],
			tree: LayoutConfig<typeof components>
		): LayoutConfig<typeof components> {
			if (path.length === 0) return tree;

			let [index, ...rest] = path;
			let newTree: LayoutConfig<typeof components>;

			if (index >= (tree.rows?.length || 0)) {
				if (!tree.cols) tree.cols = [];
				tree.cols.push(updateTree(rest, {}));
				newTree = tree;
			} else if (tree.rows && index < tree.rows.length) {
				newTree = { ...tree, rows: [...tree.rows] };
				newTree.rows![index] = updateTree(rest, tree.rows[index] || {});
			} else {
				if (!tree.cols) tree.cols = [];
				newTree = { ...tree, cols: tree.cols ? [...tree.cols] : [] };
				newTree.cols![index - (tree.rows?.length || 0)] = updateTree(
					rest,
					tree.cols ? tree.cols[index - (tree.rows?.length || 0)] || {} : {}
				);
			}

			if (newTree.rows && newTree.rows.length === 0) delete newTree.rows;
			if (newTree.cols && newTree.cols.length === 0) delete newTree.cols;

			return newTree;
		}

		let path = findPathToRoot(el, root);
		console.log('path', path)
		console.log('currentTree', currentTree)
		if (path === null) throw new Error('Element is not a descendant of root');

		return updateTree(path, currentTree);
	}

	onMount(() => {
		addSortable(builderEl);
	});
</script>

<div class="flexilte-row" bind:this={builderEl} id="builder">
	<JsonLayout layoutConfig={$componentStore} {components} debug={true} />
</div>
