<script lang="ts">
	import JsonLayoutT from '$lib/tests/JsonLayoutT.svelte';
	import { JsonLayout, type LayoutConfig } from '@flexilte/core';
	import { TextBox, ImageBox } from '@flexilte/skeleton';
	import ChatView from '$lib/ChatView.svelte';
	import InputView from '$lib/InputView.svelte';

	const components = {
		TextBox,
		ImageBox,
		ChatView,
		InputView
	};

	const layoutConfig: LayoutConfig<typeof components> = {
		rows: [
			{
				component: 'ChatView'
			},
			{
				component: 'InputView'
			}
		]
	};
</script>

<div class="px-4 container mx-auto">
	<JsonLayout {layoutConfig} {components}></JsonLayout>
</div>
