<script lang="ts">
	import { CardBox } from '@flexilte/skeleton';
	import { SortableList } from '@sonderbase/svelte-sortablejs';
	import type { SortableEvent } from 'sortablejs';

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

	const onDragEnd = (event: SortableEvent) => {
		// if (e.item.)
		// console.log(event)
		// if (document.getElementById("delete-zone")!.contains(event.to) && ) {
		//   console.log(`Item dragged to delete: ${list[event.oldIndex]}`);
		//   list = list.filter((_, index) => index !== event.oldIndex);
		// }
	};

	const onClone = (event: SortableEvent) => {
		event.item.id = 'clone-' + Date.now().toString();
	};
</script>

<div id="toolbox">
	<SortableList
		class="flex flex-1 flex-wrap gap-4 gap-y-6"
		group={{ name: 'toolbox', pull: 'clone', put: false }}
		animation={150}
		sort={false}
		{onClone}
	>
		{#each items as item}
			<div class="max-h-24 w-32">
				<CardBox icon={item.icon} body={item.name} style="variant-filled-surface text-center" />
			</div>
		{/each}
	</SortableList>
</div>
