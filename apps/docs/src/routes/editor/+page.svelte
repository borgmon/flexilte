<script lang="ts">
	import { Flexilte, type LayoutConfig } from '@flexilte/core';
	import { components, componentStore } from '$lib/editor/editorStore';
	import { getDrawerStore } from '@skeletonlabs/skeleton';

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
