<script lang="ts">
	export let type = '';
	export let text = '';
</script>

{#if type === 'title'}
	<h1 class="h1 text-5xl">
		<div>{text}</div>
	</h1>
{:else if type === 'h1'}
	<h1 class="h1">
		<div>{text}</div>
	</h1>
{:else if type === 'h2'}
	<h2 class="h2">
		<div>{text}</div>
	</h2>
{:else if type === 'h3'}
	<h3 class="h3">
		<div>{text}</div>
	</h3>
{:else if type === 'h4'}
	<h4 class="h4">
		<div>{text}</div>
	</h4>
{:else if type === 'h5'}
	<h5 class="h5">
		<div>{text}</div>
	</h5>
{:else if type === 'h6'}
	<h6 class="h6">
		<div>{text}</div>
	</h6>
{:else}
	<div>{text}</div>
{/if}
