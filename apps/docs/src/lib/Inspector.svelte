<script lang="ts">
	import type { LayoutConfig } from '@flexilte/core';
	import {
		componentValueStore,
		components,
		selectedComponentStore,
		triggerRefresh
	} from './editorStore';
	import type { ComponentProps } from 'svelte';
	import { TextBox, ImageBox, CardBox, ButtonBox } from '@flexilte/skeleton';

	const compPropMap: Record<string, any> = {
		TextBox: {
			text: 'text'
		}
	};

	let props: Record<string, any> = {};
	let fields: string[] = [];
	let elId: string;
	selectedComponentStore.subscribe((comp) => {
		if (!comp) return;
		const { id, type } = comp;
		elId = id;
		props = JSON.parse(JSON.stringify(compPropMap[type]));
		if ($componentValueStore[id]) {
			props = $componentValueStore[id];
		}
		fields = Object.keys(props);
	});
</script>

<div class="form-group">
	{#each fields as prop}
		<label class="label">
			<span>{prop}</span>
			<input
				class="input pl-1"
				type="text"
				placeholder="Input"
				value={props[prop]}
				on:change={(e) => {
					componentValueStore.update((store) => {
						props[prop] = e.target.value;
						store[elId] = props;
						return { ...store };
					});
				}}
			/>
		</label>
	{/each}
</div>
