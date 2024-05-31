<script lang="ts" generics="C extends Record<string, ComponentType>  ">
	import type { ComponentType } from 'svelte';
	import type { LayoutConfig } from './types.ts';

	export let layoutConfig: LayoutConfig<C>;
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
		<div class={`flex flex-col md:flex-row w-full  ${layoutConfig.className || ''}`}>
			<svelte:self {components} layoutConfig={row} />
		</div>
	{/each}
{:else if layoutConfig.cols}
	{#each layoutConfig.cols as col}
		<div class={`flex flex-col w-full ${getWidthClass(col.width)} ${layoutConfig.className || ''}`}>
			<svelte:self {components} layoutConfig={col} />
		</div>
	{/each}
{:else}
	<div class={`flex w-full ${layoutConfig.className || ''}`}>
		{#if layoutConfig.component}
			{#if layoutConfig.wrapperClass}
				<div class={`${layoutConfig.wrapperClass}`}>
					<svelte:component this={components[layoutConfig.component]} {...layoutConfig.props} />
				</div>
			{:else}
				<svelte:component this={components[layoutConfig.component]} {...layoutConfig.props} />
			{/if}
		{/if}
	</div>
{/if}
