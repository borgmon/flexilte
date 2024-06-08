<script lang="ts">
	import Icon from '@iconify/svelte';
	import { SortableList } from '@sonderbase/svelte-sortablejs';
	import type { SortableEvent } from 'sortablejs';
	import { triggerRefresh } from './editorStore';
	let sortableList: HTMLDivElement;

	const onDelete = (event: SortableEvent) => {
		// if (event.item.id === 'placeholder') {
		// 	event.from.appendChild(event.item);
		// 	return;
		// }
		try {
			event.item.remove();
		} catch (e) {
			console.error(e);
		}
		triggerRefresh.update((a) => !a);
	};
</script>

<div class="relative h-32 w-full" bind:this={sortableList}>
	<SortableList
		class="flex flex-1 flex-wrap gap-4 gap-y-6 absolute inset-0"
		group={{ name: 'toolbox', pull: false }}
		animation={150}
		onAdd={onDelete}
	></SortableList>

	<div
		class="h-32 w-full bg-slate-400 border-2 border-slate-600 flex items-center justify-center absolute inset-0 z-10 opacity-75"
	>
		<Icon class="h-12 w-12 text-slate-300" icon="mdi:trash-outline" />
	</div>
</div>
