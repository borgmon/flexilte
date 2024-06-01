import type { LayoutConfig } from '@flexilte/core';
import { TextBox, ImageBox, CardBox, ButtonBox } from '@flexilte/skeleton';
import { Avatar, CodeBlock, ProgressBar, ProgressRadial } from '@skeletonlabs/skeleton';
import { writable } from 'svelte/store';
import AddBox from './AddBox.svelte';
import { SortableList } from '@sonderbase/svelte-sortablejs';
export const components = {
	CodeBlock,
	TextBox,
	ImageBox,
	CardBox,
	AddBox,
	SortableList,
	ProgressRadial,
	ProgressBar,
	Avatar,
	ButtonBox
};

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
