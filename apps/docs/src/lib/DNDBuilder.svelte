<script lang="ts">
	import { CardBox } from '@flexilte/skeleton';
	import { SortableList } from '@sonderbase/svelte-sortablejs';
</script>

<div id="preview" class="w-full h-full">
	<SortableList
		class="flex flex-1 flex-nowrap gap-4 overflow-auto"
		group={{ name: 'toolbox' }}
		animation={150}
	></SortableList>
</div>
