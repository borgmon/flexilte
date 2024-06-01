<script lang="ts" generics="C extends Record<string, ComponentType>">
	import type { LayoutConfig } from './types.ts';
	import type { ComponentType } from 'svelte';

	export let layoutConfig: LayoutConfig<C>;
	export let components: Record<string, ComponentType>;

	const getAlignmentClass = (next?: LayoutConfig<C>): string => {
		let classList = '';
		if (layoutConfig.centerX === 'middle') classList += ' justify-center';
		else if (layoutConfig.centerX === 'left') classList += ' justify-start';
		else if (layoutConfig.centerX === 'right') classList += ' justify-end';

		if (layoutConfig.centerY === 'middle') classList += ' items-center';
		else if (layoutConfig.centerY === 'top') classList += ' items-start';
		else if (layoutConfig.centerY === 'bottom') classList += ' items-end';

		if (layoutConfig.alignHeight) classList += ' flex-1';

		if (next && layoutConfig.debug) {
			classList += ' debug';
			next.debug = true;
		}
		return classList;
	};

	const getWrapClass = (row: LayoutConfig<C>): string => {
		let classList = '';
		if (row.wrap === 'wrap') classList += ' flex-wrap';
		else if (row.wrap === 'nowrap') classList += ' flex-nowrap';
		if (classList) {
			classList += ' overflow-auto';
		}

		return classList;
	};

	if (layoutConfig.alignHeight) {
		layoutConfig.cols?.forEach((col: LayoutConfig<C>) => {
			col.alignHeight = true;
		});
	}
</script>

{#if layoutConfig.rows}
	{#each layoutConfig.rows as row}
		<div
			class={`flex flex-col md:flex-row w-full ${layoutConfig.layoutClass || ''} ${getAlignmentClass(row)} ${getWrapClass(row)} ${row.nodeClass || ''}`}
		>
			<svelte:self {components} layoutConfig={row} />
		</div>
	{/each}
{:else if layoutConfig.cols}
	{#each layoutConfig.cols as col}
		<div
			class={`flex flex-col w-full ${col.width || ''} ${layoutConfig.layoutClass || ''} ${getAlignmentClass(col)} ${col.nodeClass || ''}`}
		>
			<svelte:self {components} layoutConfig={col} />
		</div>
	{/each}
{:else}
	<div class={`flex w-full ${getAlignmentClass()} ${layoutConfig.layoutClass || ''}`}>
		{#if layoutConfig.component}
			{#if layoutConfig.wrapperClass}
				<div class={`${layoutConfig.wrapperClass}`}>
					<svelte:component
						this={components[layoutConfig.component]}
						{...layoutConfig.props}
						class={layoutConfig.nodeClass || ''}
					/>
				</div>
			{:else}
				<svelte:component
					this={components[layoutConfig.component]}
					{...layoutConfig.props}
					class={layoutConfig.nodeClass || ''}
				/>
			{/if}
		{/if}
	</div>
{/if}
