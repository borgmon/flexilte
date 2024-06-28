<script lang="ts">
	import { Flexilte } from '@flexilte/core';
	import { ButtonBox, CardBox, TextBox } from '@flexilte/skeleton';
	import type { LayoutConfig } from '@flexilte/core';
	import { onMount } from 'svelte';
	import { CodeBlock } from '@skeletonlabs/skeleton';
	import DemoBox from '$lib/DemoBox.svelte';

	const components = { TextBox, CardBox, CodeBlock, DemoBox, ButtonBox };

	let layoutConfig: LayoutConfig<typeof components> = {};

	onMount(() => {
		fetch('frontpage.json')
			.then((r) => r.json())
			.then((j) => {
				layoutConfig = j;
			})
			.catch((e) => {
				console.error(e);
			});
	});
</script>

<div class="px-4 container mx-auto">
	<Flexilte {layoutConfig} {components}></Flexilte>
</div>
