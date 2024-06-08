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

	let builderEl: HTMLElement;
	let componentKey = 0;

	export const reRender = () => {
		const newConfig = parseHTMLTree(builderEl);
		console.log('newConfig', newConfig);

		setTimeout(() => {
			componentStore.set({ ...newConfig });
			componentKey += 1;
		}, 100);
	};

	const onAdd = (event: Sortable.SortableEvent) => {
		console.log('onAdd', event.item);
		reRender();
		event.item.remove();
		addSortable(builderEl);
	};

	const onChoose = (event: Sortable.SortableEvent) => {
		console.log('onChoose', event.item);
		if (event.item.id) {
			selectedComponentStore.set(event.item.id);
		} else if (event.item.children[0].id) {
			selectedComponentStore.set(event.item.children[0].id);
		}
	};

	const addSortable = (e: HTMLElement) => {
		if (e.classList.contains('flexilte-col') || e.classList.contains('flexilte-row')) {
			Sortable.create(e, {
				group: { name: 'toolbox' },
				animation: 150,
				invertSwap: true,
				fallbackOnBody: true,
				invertedSwapThreshold: 1,
				onAdd,
				onChoose
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

	const convertItemToArray = (data: LayoutConfig<typeof components>, root: HTMLElement) => {
		if (root.classList.contains('flexilte-row')) {
			return {
				cols: [{ ...data }]
			};
		} else {
			return {
				rows: [{ ...data }]
			};
		}
	};

	const prepNewComp = (root: HTMLElement) => {
		const key = Date.now().toString();
		const newComp: LayoutConfig<typeof components> = {
			id: key,
			component: root.innerText as unknown as undefined,
			posX: 'middle',
			posY: 'middle',
			props: {
				text: '123'
			}
		};
		componentValueStore.update((store) => {
			store[key] = newComp;
			return store;
		});
		return newComp;
	};

	const parseHTMLTree = (root: HTMLElement): LayoutConfig<typeof components> => {
		let data = {} as LayoutConfig<typeof components>;
		const children = Array.from(root.children);

		const isRow = children.some((a) => a.classList.contains('flexilte-row'));
		const isCol = children.some((a) => a.classList.contains('flexilte-col'));
		const itemIdx = children.findIndex((a) => a.classList.contains('flexilte-item'));
		const compIdx = children.findIndex((a) => a.id.startsWith('clone-'));
		const newComp = compIdx !== -1 ? prepNewComp(children[compIdx] as HTMLElement) : undefined;

		if (isRow) {
			data.rows = [];
			data.rows = children
				.map((child) => parseHTMLTree(child as HTMLElement))
				.filter((a) => Object.keys(a).length > 0);
			if (newComp) {
				data.rows?.splice(compIdx, 0, newComp);
			}
			data = { ...data, ...{ layoutClass: 'my-4', alignHeight: true } };
		} else if (isCol) {
			data.cols = [];
			data.cols = children
				.map((child) => parseHTMLTree(child as HTMLElement))
				.filter((a) => Object.keys(a).length > 0);
			if (newComp) {
				data.cols?.splice(compIdx, 0, newComp);
			}
			data = { ...data, ...{ layoutClass: 'mx-4', alignHeight: true } };
		} else if (newComp) {
			if (itemIdx !== -1) {
				const storedData = $componentValueStore[children[itemIdx].id];
				if (storedData) data = storedData;
				data = convertItemToArray(data, root);
				if (data.cols) {
					// data = { ...data, ...{ layoutClass: 'my-4', alignHeight: true } };
					data.cols!.splice(compIdx, 0, newComp);
				}
				if (data.rows) {
					// data = { ...data, ...{ layoutClass: 'mx-4', alignHeight: true } };
					data.rows!.splice(compIdx, 0, newComp);
				}
			} else {
				console.log('woop1', data, root);
			}
		} else if (itemIdx !== -1) {
			const items = children.filter((c) => c.classList.contains('flexilte-item'));
			if (items.length > 1) {
				const [head, ...rest] = items.map((i) => $componentValueStore[i.id]);
				if (head) data = head;
				data = convertItemToArray(data, root);
				if (data.cols) {
					data.cols = [...data.cols, ...rest];
				}
				if (data.rows) {
					data.rows = [...data.rows, ...rest];
				}
			} else {
				const storedData = $componentValueStore[children[itemIdx].id];
				if (storedData) data = storedData;
			}
		} else {
			console.log('woop2', root);
		}
		if (data.rows?.length === 0) delete data.rows;
		if (data.cols?.length === 0) delete data.cols;
		return data;
	};

	onMount(() => {
		addSortable(builderEl);
		triggerRefresh.subscribe(() => {
			reRender();
		});
	});
</script>

<div class="flexilte-row" bind:this={builderEl} id="builder" data-id={componentKey}>
	<JsonLayout layoutConfig={$componentStore} {components} debug={true} />
</div>
