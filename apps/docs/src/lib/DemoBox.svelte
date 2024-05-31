<script lang="ts">
	import { JsonLayout, type LayoutConfig } from '@flexilte/core';
	import { CodeBlock } from '@skeletonlabs/skeleton';
	import { onMount } from 'svelte';
	import { ProgressRadial } from '@skeletonlabs/skeleton';
	import { ProgressBar } from '@skeletonlabs/skeleton';
	import { TextBox } from '@flexilte/skeleton';
	import { Avatar } from '@skeletonlabs/skeleton';

	const components = { CodeBlock, Avatar, ProgressRadial, ProgressBar, TextBox };

	const radialData: LayoutConfig<typeof components> = {
		component: 'ProgressRadial',
		props: {
			value: '33'
		},
		centerX: 'middle',
		centerY: 'middle',
		layoutClass: 'h-full my-12'
	};

	const avatarData: LayoutConfig<typeof components> = {
		component: 'Avatar',
		props: {
			src: 'https://placedog.net/512/512',
			width: 'w-32',
			rounded: 'rounded-full'
		},
		centerX: 'middle',
		centerY: 'middle',
		layoutClass: 'h-full my-12'
	};

	const loadingBarData: LayoutConfig<typeof components> = {
		component: 'ProgressBar',
		centerX: 'middle',
		centerY: 'middle',
		wrapperClass: 'w-48',
		layoutClass: 'md:h-full my-12'
	};
	let demoJson: LayoutConfig<typeof components> = {
		rows: [
			{
				alignHeight: true,
				cols: [
					{
						component: 'CodeBlock',
						props: {
							language: 'ts',
							code: '// Select a json to render'
						}
						// wrapperClass: 'w-full flex justify-center'
					}
				]
			}
		]
	};

	const buildExample = () => {
		const copy = JSON.parse(JSON.stringify(demoJson));
		copy.rows![0].cols = copy.rows![0].cols.slice(1);
		return `const components = { ProgressRadial, Avatar, ProgressBar };
const layoutConfig: LayoutConfig<typeof components> = ${JSON.stringify(copy, null, 2)}
<JsonLayout {layoutConfig} {components}></JsonLayout>`;
	};

	const onDemoClick = (demo: string) => {
		let data: LayoutConfig<typeof components> = {};
		if (demo === 'radial') {
			data = radialData;
		} else if (demo === 'avatar') {
			data = avatarData;
		} else if (demo === 'loadingBar') {
			data = loadingBarData;
		}
		if (data) {
			demoJson.rows![0].cols![1] = data;
			demoJson.rows![0].cols![0].props!.code = '';
			demoJson.rows![0].cols![0].props!.code = buildExample();
		}
	};

	onMount(() => {
		onDemoClick('avatar');
	});
</script>

<div class="w-full">
	<div class="flex justify-center mt-6">
		<div class="btn-group variant-filled mx-auto">
			<button on:click={() => onDemoClick('radial')}>radial</button>
			<button on:click={() => onDemoClick('avatar')}>avatar</button>
			<button on:click={() => onDemoClick('loadingBar')}>loading bar</button>
		</div>
	</div>

	<div class="h-[36rem] mt-6">
		<JsonLayout layoutConfig={demoJson} {components}></JsonLayout>
	</div>
</div>
