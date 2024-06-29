<script lang="ts">
	import { Flexilte, type LayoutConfig } from '@flexilte/core';
	import { ButtonBox, CardBox, ImageBox, TextBox } from '@flexilte/skeleton';
	import { SortableList } from '@sonderbase/svelte-sortablejs';
	import DNDList from '$lib/dnd/DNDList.svelte';
	import DNDBuilder from '$lib/dnd/DNDBuilder.svelte';
	import Inspector from '$lib/dnd/Inspector.svelte';
	import ActionButton from '$lib/dnd/ActionButton.svelte';
	import RemoveBox from '$lib/dnd/RemoveBox.svelte';
	import { components, componentStore } from '$lib/dnd/editorStore';
	import { Avatar, CodeBlock, getDrawerStore } from '@skeletonlabs/skeleton';

	const config: LayoutConfig<typeof components> = {
		rows: [
			{
				cols: [
					{
						posY: 'middle',
						component: 'TextBox',
						props: {
							type: 'h2',
							text: 'Preview'
						}
					},
					{
						width: 'w-1/6',
						posX: 'right',
						rows: [
							{
								cols: [
									{
										component: 'ActionButton',
										props: {
											type: 'edit'
										}
									},
									{
										component: 'ActionButton',
										props: {
											type: 'export'
										}
									}
								]
							}
						]
					}
				]
			}
		]
	};

	const drawerStore = getDrawerStore();
	drawerStore.open({ id: 'dnd-builder', position: 'bottom', height: 'h-5/6' });
</script>

<div class="p-4 bg-surface-50-900-token">
	<Flexilte layoutConfig={config} {components}></Flexilte>
</div>

<div class="container mx-auto mt-12">
	<Flexilte layoutConfig={$componentStore} {components}></Flexilte>
</div>
