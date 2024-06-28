import { type LayoutConfig } from '@flexilte/core';
import { ImageBox, TextBox } from '@flexilte/skeleton';
import DNDList from '$lib/DNDList.svelte';
import DNDBuilder from '$lib/DNDBuilder.svelte';
import Inspector from '$lib/Inspector.svelte';
import ActionButton from '$lib/ActionButton.svelte';
import RemoveBox from '$lib/RemoveBox.svelte';
import DNDPreview from '$lib/DNDPreview.svelte';
import AddBox from '$lib/AddBox.svelte';
import { Avatar, CodeBlock } from '@skeletonlabs/skeleton';
export const components = {
	ActionButton,
	TextBox,
	DNDList,
	DNDBuilder,
	Inspector,
	ImageBox,
	RemoveBox,
	DNDPreview,
	AddBox,
	Avatar,
	CodeBlock
};
export const editorLayout: LayoutConfig<typeof components> = {
	rows: [
		{
			cols: [
				{
					width: 'w-1/6',
					layoutClass: 'variant-ghost p-4',
					rows: [
						{
							component: 'TextBox',
							props: {
								type: 'h4',
								text: 'UI Components'
							}
						},
						{
							component: 'DNDList',
							nodeClass: 'flex-1'
						},
						{
							component: 'RemoveBox'
						}
					]
				},
				{
					width: 'w-4/6',
					layoutClass: 'variant-ghost p-4',
					rows: [
						{
							// alignHeight: true,
							cols: [
								{
									posY: 'middle',
									component: 'TextBox',
									props: {
										type: 'h4',
										text: 'Builder'
									}
								},
								{
									width: 'w-1/6',
									posX: 'right',
									rows: [
										{
											cols: [
												{
													component: 'ActionButton',
													props: {
														type: 'render'
													},
													posX: 'right'
												}
											]
										}
									]
								}
							]
						},

						{
							component: 'DNDBuilder',
							nodeClass: 'flex-1'
						}
					]
				},
				{
					// inspector
					width: 'w-1/6',
					layoutClass: 'variant-ghost p-4',
					rows: [
						{
							component: 'TextBox',
							props: {
								type: 'h4',
								text: 'Inspector'
							}
						},
						{
							component: 'Inspector',
							nodeClass: 'flex-1'
						}
					]
				}
			]
		}
	]
};
