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
	import { Avatar, CodeBlock } from '@skeletonlabs/skeleton';
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

	const editorLayout: LayoutConfig<typeof components> = {
		rows: [
			{
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
								alignHeight: true,
								cols: [
									{
										posY: 'middle',
										component: 'TextBox',
										props: {
											type: 'h4',
											text: 'Builder'
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
															type: 'format'
														},
														posX: 'right'
													},
													{
														component: 'ActionButton',
														props: {
															type: 'render'
														},
														posX: 'right'
													},
													{
														component: 'ActionButton',
														props: {
															type: 'export'
														},
														posX: 'right'
													}
												]
											}
										]
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

	const defaultLayout = {
		rows: [
			{
				cols: [
					{
						id: '1718176210843',
						component: 'TextBox',
						props: {
							text: 'Flexilte Editor',
							type: 'h1'
						},
						posX: 'middle',
						posY: 'middle',
						width: 'w-12/12'
					}
				]
			},
			{
				cols: [
					{
						id: '1718176285682',
						component: 'TextBox',
						props: {
							text: 'Try this awsome editor',
							type: 'h5'
						},
						posX: 'middle',
						posY: 'middle',
						width: 'w-12/12'
					}
				]
			},
			{
				cols: [
					{
						id: '1718176212709',
						component: 'ImageBox',
						props: {
							url: 'https://placedog.net/200/200'
						},
						posX: 'middle',
						posY: 'middle',
						width: 'w-5/12'
					},
					{
						id: '1718176473646',
						component: 'TextBox',
						props: {
							text: 'Different Layout',
							type: 'h2'
						},
						posX: 'middle',
						posY: 'middle',
						width: 'w-7/12'
					}
				]
			}
		]
	};
</script>

<div class="container mx-auto mt-12 mb-[26rem]">
	<JsonLayout
		layoutConfig={$componentStore.component ? $componentStore : defaultLayout}
		{components}
	></JsonLayout>
</div>
<div class="fixed bottom-0 left-0 right-0 bg-gray-800 text-white p-4">
	<JsonLayout layoutConfig={editorLayout} {components}></JsonLayout>
</div>
