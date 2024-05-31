<script lang="ts">
	export let type: string | undefined;
	export let text: string;
</script>

{#if type === 'title'}
	<h1 class="h1 text-5xl">
		<div>{text}</div>
	</h1>
{:else if type === 'subtitle'}
	<h2 class="h2">
		<div>{text}</div>
	</h2>
{:else}
	<div>{text}</div>
{/if}
