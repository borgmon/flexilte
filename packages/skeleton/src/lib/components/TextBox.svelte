<script lang="ts">
	export let type: string | undefined;
	export let text: string;
</script>

<div class="  w-full">
	{#if type === 'title'}
		<div class="h-32 flex justify-center items-center">
			<h1 class="h1 text-5xl text-center">
				<div>{text}</div>
			</h1>
		</div>
	{:else if type === 'subtitle'}
		<div class="h-12 flex justify-center items-center">
			<h2 class="h2">
				<div>{text}</div>
			</h2>
		</div>
	{:else}
		<div class="flex justify-center items-center">
			<div>{text}</div>
		</div>
	{/if}
</div>
