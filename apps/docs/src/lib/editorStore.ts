import type { LayoutConfig } from '@flexilte/core';
import { TextBox, ImageBox, CardBox } from '@flexilte/skeleton';
import { CodeBlock } from '@skeletonlabs/skeleton';
import { writable } from 'svelte/store';
import AddBox from './AddBox.svelte';
import { SortableList } from '@sonderbase/svelte-sortablejs';
export const components = { CodeBlock, TextBox, ImageBox, CardBox, AddBox, SortableList };

export const selectedComponentStore = writable<string>();
export const componentStore = writable<LayoutConfig<typeof components>>({
	debug: true,
	rows: [
		{
			rows: [
				{
					cols: [{ component: 'AddBox' }, { component: 'AddBox' }]
				}
			]
		}
	]
});
