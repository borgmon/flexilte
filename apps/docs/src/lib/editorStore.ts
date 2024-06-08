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
export const componentValueStore = writable<Record<string, LayoutConfig<typeof components>>>({
	'1': {
		id: '1',
		component: 'TextBox',
		posX: 'middle',
		posY: 'middle',
		props: {
			text: 'A'
		}
	},
	'2': {
		id: '2',
		component: 'TextBox',
		posX: 'middle',
		posY: 'middle',
		props: {
			text: 'B'
		}
	},
	'3': {
		id: '3',
		component: 'TextBox',
		posX: 'middle',
		posY: 'middle',
		props: {
			text: 'C'
		}
	},
	'4': {
		id: '4',
		component: 'TextBox',
		posX: 'middle',
		posY: 'middle',
		props: {
			text: 'D'
		}
	}
});
export const componentStore = writable<LayoutConfig<typeof components>>({
	rows: [
		{
			alignHeight: true,
			layoutClass: 'mx-4',
			cols: [
				{
					id: '1',
					component: 'TextBox',
					posX: 'middle',
					posY: 'middle',
					props: {
						text: 'A'
					}
				},
				{
					alignHeight: true,
					layoutClass: 'my-4',
					rows: [
						{
							id: '2',
							component: 'TextBox',
							posX: 'middle',
							posY: 'middle',
							props: {
								text: 'B'
							}
						},
						{
							id: '3',
							component: 'TextBox',
							posX: 'middle',
							posY: 'middle',
							props: {
								text: 'C'
							}
						}
					]
				}
			]
		},
		{
			id: '4',
			component: 'TextBox',
			posX: 'middle',
			posY: 'middle',
			props: {
				text: 'D'
			}
		}
	]
});
export const triggerRefresh = writable<boolean>();
