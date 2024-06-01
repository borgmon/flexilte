<script lang="ts">
	import { JsonLayout, type LayoutConfig } from '@flexilte/core';
	import { ButtonBox, CardBox, ImageBox, TextBox } from '@flexilte/skeleton';
	import { SortableList } from '@sonderbase/svelte-sortablejs';
	import DNDList from '$lib/DNDList.svelte';
	import DNDBuilder from '$lib/DNDBuilder.svelte';
	import Inspector from '$lib/Inspector.svelte';
	import ExportButton from '$lib/ExportButton.svelte';
	import RemoveBox from '$lib/RemoveBox.svelte';
	import DNDPreview from '$lib/DNDPreview.svelte';
	import { componentStore } from '$lib/editorStore';
	import AddBox from '$lib/AddBox.svelte';
	const components = {
		ExportButton,
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
				centerX: 'middle'
			},
			{
				cols: [
					{
						component: 'ExportButton',
						props: {
							text: 'Export'
						},
						centerX: 'right',
						centerY: 'middle'
					}
				]
			},
			{
				layoutClass: 'mt-4',
				cols: [
					{
						width: 'md:w-2/6',
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
						width: 'md:w-5/6',
						layoutClass: 'variant-ghost p-4',

						rows: [
							{
								component: 'TextBox',
								props: {
									type: 'h4',
									text: 'Preview'
								}
							},
							{
								component: 'DNDPreview',
								nodeClass: 'flex-1'
							}
						]
					},
					{
						// inspector
						width: 'md:w-1/6',
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
