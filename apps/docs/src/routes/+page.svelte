<script lang="ts">
	import { JsonLayout } from '@flexilte/core';
	import {
		TitleBox,
		type AsyncBoxProp,
		type ImageBoxProp,
		type TitleBoxProp
	} from '@flexilte/skeleton';
	import { ImageBox } from '@flexilte/skeleton';
	import { AsyncBox } from '@flexilte/skeleton';
	import { LoadingBox } from '@flexilte/skeleton';
	import type { LayoutConfig } from '@flexilte/core';
	import { onMount } from 'svelte';
	const components = { TitleBox, ImageBox, AsyncBox };
	type compTypes = TitleBoxProp | ImageBoxProp | AsyncBoxProp;

	let layoutConfig: LayoutConfig<typeof components, compTypes> = {};

	onMount(() => {
		fetch('/api/ui')
			.then((r) => r.json())
			.then((j) => {
				layoutConfig = j;
			})
			.catch((e) => {
				console.error(e);
			});
	});
</script>

<JsonLayout {layoutConfig} {components}></JsonLayout>
