<script lang="ts">
	import JsonLayoutT from '$lib/tests/JsonLayoutT.svelte';
	import { JsonLayout, type LayoutConfig } from '@flexilte/core';
	import { TextBox, ImageBox } from '@flexilte/skeleton';
	export let role: 'host' | 'guest';
	export let message = '';
</script>

{#if role === 'host'}
	<div class="grid grid-cols-[auto_1fr] gap-2">
		<div class="card p-4 variant-soft rounded-tl-none space-y-2">
			<header class="flex justify-between items-center">
				<p class="font-bold">Flexilte Guest</p>
			</header>
			<p>{message}</p>
		</div>
	</div>
{:else if role === 'guest'}
	<div class="grid grid-cols-[1fr_auto] gap-2">
		<div class="card p-4 rounded-tr-none space-y-2 variant-filled-surface">
			<header class="flex justify-between items-center">
				<p class="font-bold">AI Assistant</p>
			</header>
			<p>{message}</p>
		</div>
	</div>
{/if}
