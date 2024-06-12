<script lang="ts">
	import { componentStore, triggerFormat, triggerRefresh } from './editorStore';

	export let type = '';
	const exportJson = () => {
		console.log($componentStore);
		navigator.clipboard.writeText(JSON.stringify($componentStore, null, 2)).then(() => {
			alert('Copied to your clipboard! Also in the console');
		});
	};
</script>

{#if type === 'format'}
	<button class="btn variant-filled" on:click={() => triggerFormat.update((e) => !e)}>Format</button
	>
{:else if type === 'render'}
	<button class="btn variant-filled" on:click={() => triggerRefresh.update((e) => !e)}
		>Render</button
	>
{:else if type === 'export'}
	<button class="btn variant-filled" on:click={exportJson}>Export</button>
{/if}
