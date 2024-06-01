<script lang="ts">
	import { CardBox } from '@flexilte/skeleton';
	import { SortableList } from '@sonderbase/svelte-sortablejs';
	import type { SortableEvent } from 'sortablejs';

	const items = [
		{
			icon: 'mdi:format-text',
			name: 'Text'
		},
		{
			icon: 'mdi:image',
			name: 'Image'
		},
		{
			icon: 'mdi:card-text',
			name: 'Card'
		},
		{
			icon: 'mdi:code',
			name: 'Code'
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
</script>

<div id="toolbox">
	<SortableList
		class="flex flex-1 flex-wrap gap-4 gap-y-6"
		group={{ name: 'toolbox', pull: 'clone', put: false }}
		animation={150}
		sort={false}
		onEnd={(e) => onDragEnd(e)}
	>
		{#each items as item}
			<div class="max-h-24 max-w-24" id={Date.now().toString()}>
				<CardBox icon={item.icon} body={item.name} style="variant-filled-surface" />
			</div>
		{/each}
	</SortableList>
</div>
