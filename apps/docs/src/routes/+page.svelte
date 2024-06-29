<script lang="ts">
	import { Flexilte } from '@flexilte/core';
	import { ButtonBox, CardBox, TextBox } from '@flexilte/skeleton';
	import { CodeBlock } from '@skeletonlabs/skeleton';
	import DemoBox from '$lib/DemoBox.svelte';
	import { frontPageStore } from '$lib/common';

	const components = { TextBox, CardBox, CodeBlock, DemoBox, ButtonBox };
</script>

{#if $frontPageStore}
	<div class="px-4 container mx-auto">
		<Flexilte layoutConfig={$frontPageStore} {components}></Flexilte>
	</div>
{/if}
