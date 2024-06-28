<script lang="ts">
	import { JsonLayout, type LayoutConfig } from '@flexilte/core';
	import { ButtonBox, CardBox, ImageBox, TextBox } from '@flexilte/skeleton';
	import { SortableList } from '@sonderbase/svelte-sortablejs';
	import DNDList from '$lib/DNDList.svelte';
	import DNDBuilder from '$lib/DNDBuilder.svelte';
	import Inspector from '$lib/Inspector.svelte';
	import ActionButton from '$lib/ActionButton.svelte';
	import RemoveBox from '$lib/RemoveBox.svelte';
	import DNDPreview from '$lib/DNDPreview.svelte';
	import { componentStore } from '$lib/editorStore';
	import AddBox from '$lib/AddBox.svelte';
	import { Avatar, CodeBlock, getDrawerStore } from '@skeletonlabs/skeleton';
	const components = {
		ActionButton,
		TextBox,
		DNDList,
		DNDBuilder,
		Inspector,
		ImageBox,
		RemoveBox,
		DNDPreview,
		AddBox,
		Avatar,
		CodeBlock
	};

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
	<JsonLayout layoutConfig={config} {components}></JsonLayout>
</div>

<div class="container mx-auto mt-12">
	<JsonLayout layoutConfig={$componentStore} {components}></JsonLayout>
</div>
<div class="fixed bottom-0 left-0 right-0 bg-gray-800 text-white p-4">
	<!-- <JsonLayout layoutConfig={editorLayout} {components}></JsonLayout> -->
</div>
