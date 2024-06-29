import type { LayoutConfig } from '@flexilte/core';
import { TextBox, ImageBox, CardBox } from '@flexilte/skeleton';
import { writable } from 'svelte/store';
import type { GridStackOptions } from 'gridstack/dist/es5/gridstack';
import DNDList from '$lib/dnd/DNDList.svelte';
import RemoveBox from '$lib/dnd/RemoveBox.svelte';
import ActionButton from '$lib/dnd/ActionButton.svelte';
import DNDBuilder from '$lib/dnd/DNDBuilder.svelte';
import Inspector from '$lib/dnd/Inspector.svelte';
export const components = {
	TextBox,
	ImageBox,
	CardBox,
	DNDList,
	RemoveBox,
	ActionButton,
	DNDBuilder,
	Inspector
};

export const selectedComponentStore = writable<string>();
export const componentValueStore = writable<Record<string, LayoutConfig<typeof components>>>({});
export const componentStore = writable<LayoutConfig<typeof components>>({});
export const gridStore = writable<GridStackOptions>();
export const triggerRefresh = writable<boolean>();
