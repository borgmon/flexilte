<script lang="ts" generics="C extends Record<string, ComponentType>">
	import type { LayoutConfig } from '@flexilte/core';
	import { SortableList } from '@sonderbase/svelte-sortablejs';
	import type { ComponentType } from 'svelte';
	import type { SortableEvent } from 'sortablejs';
	import Sortable from 'sortablejs';

	export let layoutConfig: LayoutConfig<C>;
	export let components: Record<string, ComponentType>;

	export let onAdd: (event: SortableEvent) => void;
	export let onRemove: (event: SortableEvent) => void;

	const getAlignmentClass = (next?: LayoutConfig<C>): string => {
		let classList = '';
		if (layoutConfig.posX === 'middle') classList += ' justify-center';
		else if (layoutConfig.posX === 'left') classList += ' justify-start';
		else if (layoutConfig.posX === 'right') classList += ' justify-end';

		if (layoutConfig.posY === 'middle') classList += ' items-center';
		else if (layoutConfig.posY === 'top') classList += ' items-start';
		else if (layoutConfig.posY === 'bottom') classList += ' items-end';

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

	const idToElId = () => layoutConfig.id;
</script>

{#if layoutConfig.rows}
	{#each layoutConfig.rows as row}
		<SortableList
			class={`flex flex-col md:flex-row w-full ${layoutConfig.layoutClass || ''} ${getAlignmentClass(row)} ${getWrapClass(row)} ${row.nodeClass || ''}`}
			group={{ name: 'toolbox' }}
			animation={150}
			multiDragClass="border-6"
			{onAdd}
			{onRemove}
		>
			<svelte:self {components} layoutConfig={row} {onAdd} {onRemove} />
		</SortableList>
	{/each}
{:else if layoutConfig.cols}
	{#each layoutConfig.cols as col}
		<SortableList
			class={`flex flex-col w-full ${col.width || ''} ${layoutConfig.layoutClass || ''} ${getAlignmentClass(col)} ${col.nodeClass || ''}`}
			group={{ name: 'toolbox' }}
			animation={150}
			multiDragClass="border-6"
			{onAdd}
			{onRemove}
		>
			<svelte:self {components} layoutConfig={col} {onAdd} {onRemove} />
		</SortableList>
	{/each}
{:else}
	<SortableList
		class={`flex w-full ${getAlignmentClass()} ${layoutConfig.layoutClass || ''}`}
		group={{ name: 'toolbox' }}
		animation={150}
		multiDragClass="border-6"
		{onAdd}
		{onRemove}
	>
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
	</SortableList>
{/if}
