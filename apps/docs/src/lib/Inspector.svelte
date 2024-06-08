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

	let comp: LayoutConfig<typeof components>;
	let props = [];
	selectedComponentStore.subscribe((id) => {
		if ($componentValueStore[id]) {
			comp = $componentValueStore[id];
			console.log('here', comp);
			props = Object.keys(comp.props).map((p) => ({ name: p, value: comp.props[p] }));
		}
	});
</script>

<div class="form-group">
	{#each props as prop}
		<label class="label">
			<span>{prop.name}</span>
			<input
				class="input"
				type="text"
				placeholder="Input"
				value={prop.value}
				on:change={(e) => {
					console.log(e);
					componentValueStore.update((store) => {
						store[comp.id].props[prop.name] = e.target.value;
						return { ...store };
					});
					triggerRefresh.update((e) => !e);
				}}
			/>
		</label>
	{/each}
</div>
