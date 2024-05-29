<script lang="ts" generics="C extends Record<string, ComponentType> ,T">
	import type { ComponentType } from 'svelte';
	import type { LayoutConfig } from './types.ts';

	export let layoutConfig: LayoutConfig<C, T>;
	export let components: Record<string, ComponentType>;
	function getWidthClass(size?: string | number) {
		if (!size) return '';
		if (typeof size === 'string' && size.includes('/')) {
			const [numerator, denominator] = size.split('/');
			return `md:w-${numerator}/${denominator}`;
		} else {
			return `md:w-[${size}rem]`;
		}
	}
</script>

{#if layoutConfig.rows}
	{#each layoutConfig.rows as row}
		<div class="flex flex-col md:flex-row w-full">
			<svelte:self {components} layoutConfig={row} />
		</div>
	{/each}
{:else if layoutConfig.cols}
	{#each layoutConfig.cols as col}
		<div class={`flex flex-col w-full ${getWidthClass(col.width)}`}>
			<svelte:self {components} layoutConfig={col} />
		</div>
	{/each}
{:else}
	<div class={`flex w-full ${layoutConfig.style || ''}`}>
		{#if layoutConfig.component}
			<svelte:component this={components[layoutConfig.component]} data={layoutConfig.data} />
		{/if}
	</div>
{/if}
