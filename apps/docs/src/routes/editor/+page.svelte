<script lang="ts">
	import { JsonLayout, type LayoutConfig } from '@flexilte/core';
	import { ButtonBox, TextBox } from '@flexilte/skeleton';
	import { SortableList } from '@sonderbase/svelte-sortablejs';
	import SectionItemList from '$lib/SectionItemList.svelte';
	import DNDPreview from '$lib/DNDPreview.svelte';
	import Inspector from '$lib/Inspector.svelte';
	import ExportButton from '$lib/ExportButton.svelte';
	const exampleItems = ['a', 'b'];
	const components = { ExportButton, TextBox, SectionItemList, DNDPreview, Inspector };

	const editorLayout: LayoutConfig<typeof components> = {
		rows: [
			{
				component: 'ExportButton',
				className: 'debug ',
				wrapperClass: '   ml-auto',
				props: {
					text: 'Export'
				}
			},
			{
				cols: [
					{
						// tool bar
						width: '1/6',
						rows: [
							// sections
							{
								component: 'TextBox',
								props: {
									text: 'Layouts'
								}
							},
							{
								component: 'SectionItemList',
								props: {
									items: [
										{
											name: 'Row',
											img: ''
										},
										{
											name: 'Col',
											img: ''
										}
									]
								}
							}
						]
					},
					{
						width: '4/6',

						component: 'DNDPreview'
					},
					{
						// inspector
						width: '1/6',
						rows: [
							{
								component: 'TextBox',
								props: {
									text: 'Inspector'
								}
							},
							{
								component: 'Inspector'
							}
						]
					}
				]
			}
		]
	};
</script>

<!-- <div id="clone-list" class="mt-4 border rounded p-6">
	<h2 class="font-bold">Example 3 - Cloning Lists</h2>

	<div class="flex">
		<SortableList
			class="list-group col mr-6"
			group={{ name: 'shared3', pull: 'clone' }}
			animation={150}
		>
			{#each exampleItems as item}
				<div class="list-group-item bg-secondary text-white">{item} - Group 1</div>
			{/each}
		</SortableList>

		<SortableList class="list-group col" group={{ name: 'shared3', pull: 'clone' }} animation={150}>
			{#each exampleItems as item}
				<div class="list-group-item">{item} - Group 2</div>
			{/each}
		</SortableList>
	</div>
</div> -->

<div class="container mx-auto">
	<JsonLayout layoutConfig={editorLayout} {components}></JsonLayout>
</div>
