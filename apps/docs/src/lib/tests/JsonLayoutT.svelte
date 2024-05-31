<script lang="ts" generics="C extends Record<string, ComponentType>">
	import type { LayoutConfigT } from './types';
	import type { ComponentType } from 'svelte';

	export let layoutConfig: LayoutConfigT<C>;
	export let components: Record<string, ComponentType>;

	const getAlignmentClass = (): string => {
		let classList = '';
		if (layoutConfig.centerX === 'middle') classList += ' justify-center';
		else if (layoutConfig.centerX === 'left') classList += ' justify-start';
		else if (layoutConfig.centerX === 'right') classList += ' justify-end';

		if (layoutConfig.centerY === 'middle') classList += ' items-center';
		else if (layoutConfig.centerY === 'top') classList += ' items-start';
		else if (layoutConfig.centerY === 'bottom') classList += ' items-end';

		if (layoutConfig.alignHeight) classList += ' flex-1';
		return classList;
	};

	const getWrapClass = (row: LayoutConfigT<C>): string => {
		let classList = '';
		if (row.wrap === 'wrap') classList += ' flex-wrap';
		else if (row.wrap === 'nowrap') classList += ' flex-nowrap';
		if (classList) {
			classList += ' overflow-auto';
		}

		return classList;
	};

	if (layoutConfig.alignHeight) {
		layoutConfig.cols?.forEach((col) => {
			col.alignHeight = true;
		});
	}
</script>

{#if layoutConfig.rows}
	{#each layoutConfig.rows as row}
		<div
			class={`flex flex-col md:flex-row w-full ${layoutConfig.layoutClass || ''} ${getAlignmentClass()} ${getWrapClass(row)}`}
		>
			<svelte:self {components} layoutConfig={row} />
		</div>
	{/each}
{:else if layoutConfig.cols}
	{#each layoutConfig.cols as col}
		<div
			class={`flex flex-col w-full   ${col.width || ''} ${layoutConfig.layoutClass || ''} ${getAlignmentClass()}`}
		>
			<svelte:self {components} layoutConfig={col} />
		</div>
	{/each}
{:else}
	<div class={`flex w-full ${getAlignmentClass()} ${layoutConfig.layoutClass || ''}`}>
		{#if layoutConfig.component}
			<svelte:component this={components[layoutConfig.component]} {...layoutConfig.props} />
		{/if}
	</div>
{/if}
