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
	const components = {
		ActionButton,
		TextBox,
		DNDList,
		DNDBuilder,
		Inspector,
		ImageBox,
		RemoveBox,
		DNDPreview,
		AddBox
	};

	const editorLayout: LayoutConfig<typeof components> = {
		rows: [
			{
				component: 'TextBox',
				props: {
					type: 'h2',
					text: 'Flexilte Drag And Drop Editor'
				},
				posX: 'middle'
			},
			{
				cols: [
					{
						component: 'ActionButton',
						props: {
							type: 'export'
						},
						posX: 'right',
						posY: 'middle'
					}
				]
			},
			{
				layoutClass: 'mt-4',
				cols: [
					{
						width: 'w-2/6',
						layoutClass: 'variant-ghost p-4',
						rows: [
							{
								component: 'TextBox',
								props: {
									type: 'h4',
									text: 'UI Components'
								}
							},
							{
								component: 'DNDList',
								nodeClass: 'flex-1'
							},
							{
								component: 'RemoveBox'
							}
						]
					},
					{
						width: 'w-5/6',
						layoutClass: 'variant-ghost p-4',

						rows: [
							{
								cols: [
									{
										component: 'TextBox',
										props: {
											type: 'h4',
											text: 'Builder'
										}
									},
									{
										component: 'ActionButton',
										props: {
											type: 'format'
										},
										posX: 'right',
										posY: 'middle'
									},
									{
										component: 'ActionButton',
										props: {
											type: 'render'
										},
										posX: 'right',
										posY: 'middle'
									}
								]
							},

							{
								component: 'DNDBuilder',
								nodeClass: 'flex-1'
							}
						]
					},
					{
						// inspector
						width: 'w-1/6',
						layoutClass: 'variant-ghost p-4',
						rows: [
							{
								component: 'TextBox',
								props: {
									type: 'h4',
									text: 'Inspector'
								}
							},
							{
								component: 'Inspector',
								nodeClass: 'flex-1'
							}
						]
					}
				]
			}
		]
	};
</script>

<div class="container mx-auto mt-6">
	<JsonLayout layoutConfig={editorLayout} {components}></JsonLayout>
	<!-- <JsonLayout layoutConfig={$componentStore} {components} /> -->
</div>
