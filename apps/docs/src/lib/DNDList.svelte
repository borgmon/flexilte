<script lang="ts">
	import { CardBox } from '@flexilte/skeleton';
	import { SortableList } from '@sonderbase/svelte-sortablejs';
	import type { SortableEvent } from 'sortablejs';
	import { triggerRefresh } from './editorStore';

	const items = [
		{
			icon: 'mdi:format-text',
			name: 'TextBox'
		},
		{
			icon: 'mdi:image',
			name: 'ImageBox'
		},
		{
			icon: 'mdi:card-text',
			name: 'CardBox'
		},
		{
			icon: 'mdi:code',
			name: 'CodeBlock'
		},
		{
			icon: 'mdi:table-row-plus-after',
			name: 'Add Row'
		},
		{
			icon: 'mdi:table-column-plus-after',
			name: 'Add Col'
		}
	];

	// const onDragEnd = (event: SortableEvent) => {
	// if (e.item.)
	// console.log(event)
	// if (document.getElementById("delete-zone")!.contains(event.to) && ) {
	//   console.log(`Item dragged to delete: ${list[event.oldIndex]}`);
	//   list = list.filter((_, index) => index !== event.oldIndex);
	// }
	// };

	const onClone = (event: SortableEvent) => {
		event.item.id = 'clone-' + Date.now().toString();
	};
	const onDragEnd = () => {
		triggerRefresh.update((e) => !e);
	};
</script>

<div id="toolbox" class="sidebar">
	{#each items as item, index}
		<div class="grid-stack-item w-32 cursor-grab select-none">
			<div class="grid-stack-item-content">
				<div data-comp={item.name}>
					<CardBox icon={item.icon} body={item.name} style="variant-filled-surface text-center" />
				</div>
			</div>
		</div>
		<!-- <div class="grid-stack-item">
				<div class="grid-stack-item-content">
					{item.name}
				</div>
			</div> -->
	{/each}
</div>
