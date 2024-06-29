<script lang="ts">
	import { Flexilte, type LayoutConfig } from '@flexilte/core';
	import { components } from '../dnd/editorStore';
	import { aiResultStore } from '$lib/ai/AIStore';

	let layoutConfig: LayoutConfig<typeof components> = {
		rows: [
			{
				cols: [
					{
						component: 'TextBox',
						props: {
							text: 'Waiting for input'
						},
						posX: 'middle',
						posY: 'middle',
						nodeClass: 'h-96'
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

<div class="px-4 container mx-auto h-[30rem] w-full">
	<Flexilte {layoutConfig} {components}></Flexilte>
</div>
