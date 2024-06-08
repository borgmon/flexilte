<script lang="ts">
	import { JsonLayout, type LayoutConfig } from '@flexilte/core';
	import { components } from './editorStore';
	import { aiResultStore } from '$lib/AIStore';

	let layoutConfig: LayoutConfig<typeof components> = {
		rows: [
			{
				cols: [
					{
						component: 'TextBox',
						props: {
							text: 'Waiting for response'
						},
						posX: 'middle',
						posY: 'middle',
						layoutClass: 'h-96'
					}
				]
			}
		]
	};

	aiResultStore.subscribe((s) => {
		try {
			const data = JSON.parse(s);
			layoutConfig = JSON.parse(data.choices[0].message.content);
			console.log('ai', layoutConfig);
		} catch {}
	});
</script>

<div class="px-4 container mx-auto h-[48rem] w-full">
	<JsonLayout {layoutConfig} {components}></JsonLayout>
</div>
