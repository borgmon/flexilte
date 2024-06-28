import type { LayoutConfig } from '@flexilte/core';
import { TextBox, ImageBox, CardBox, ButtonBox } from '@flexilte/skeleton';
import { Avatar, CodeBlock, ProgressBar, ProgressRadial } from '@skeletonlabs/skeleton';
import { writable } from 'svelte/store';
import AddBox from './AddBox.svelte';
import { SortableList } from '@sonderbase/svelte-sortablejs';
import type { GridStackOptions } from 'gridstack/dist/es5/gridstack';
import { onMount } from 'svelte';
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
export const componentValueStore = writable<Record<string, LayoutConfig<typeof components>>>({});
export const componentStore = writable<LayoutConfig<typeof components>>({});
export const gridStore = writable<GridStackOptions>();
export const triggerRefresh = writable<boolean>();
export const triggerFormat = writable<boolean>();
