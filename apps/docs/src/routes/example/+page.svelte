<script lang="ts">
	import JsonLayoutT from '$lib/tests/JsonLayoutT.svelte';
	import Text from '$lib/tests/Text.svelte';
	import type { LayoutConfigT } from '$lib/tests/types';
	import { JsonLayout, type LayoutConfig } from '@flexilte/core';
	import { TextBox } from '@flexilte/skeleton';
	import { ProgressBar, ProgressRadial } from '@skeletonlabs/skeleton';

	const components = { TextBox, ProgressRadial, ProgressBar };

	const layoutConfig: LayoutConfig<typeof components> = {
		layoutClass: 'my-2',
		rows: [
			{
				component: 'TextBox',
				props: {
					text: 'Alignments',
					type: 'h4'
				},
				layoutClass: 'h-8'
			},
			{
				component: 'TextBox',
				props: {
					text: 'left'
				},
				posX: 'left',
				layoutClass: 'h-16'
			},
			{
				component: 'TextBox',
				props: {
					text: 'right'
				},
				posX: 'right',
				layoutClass: 'h-16'
			},
			{
				component: 'TextBox',
				props: {
					text: 'middle'
				},
				posX: 'middle',
				layoutClass: 'h-16'
			},
			{
				component: 'TextBox',
				props: {
					text: 'top'
				},
				posY: 'top',
				layoutClass: 'h-16'
			},
			{
				component: 'TextBox',
				props: {
					text: 'bottom'
				},
				posY: 'bottom',
				layoutClass: 'h-16'
			},
			{
				component: 'TextBox',
				props: {
					text: 'middle'
				},
				posY: 'middle',
				layoutClass: 'h-16'
			},
			{
				component: 'TextBox',
				props: {
					text: 'very middle'
				},
				posX: 'middle',
				posY: 'middle',
				layoutClass: 'h-16'
			},
			{
				component: 'TextBox',
				props: {
					text: 'Columns',
					type: 'h4'
				},
				layoutClass: 'h-8'
			},
			{
				layoutClass: 'md:mx-2',
				cols: [
					{
						width: 'md:w-1/3',
						component: 'TextBox',
						props: {
							text: 'test'
						},
						posX: 'middle',
						posY: 'middle',
						layoutClass: 'h-16'
					},
					{
						width: 'md:w-1/3',
						component: 'ProgressRadial',
						props: {
							value: 33
						},
						posX: 'middle',
						posY: 'middle',
						layoutClass: ''
					},
					{
						width: 'md:w-1/3',
						component: 'ProgressBar',
						posX: 'middle',
						posY: 'middle',
						layoutClass: 'h-16'
					}
				]
			},
			{
				layoutClass: 'md:mx-2',
				alignHeight: true,
				cols: [
					{
						width: 'md:w-1/3',
						component: 'TextBox',
						props: {
							text: 'test'
						},
						posX: 'middle',
						posY: 'middle',
						layoutClass: 'h-16'
					},
					{
						width: 'md:w-1/3',
						component: 'ProgressRadial',
						props: {
							value: 33
						},
						posX: 'middle',
						posY: 'middle',
						layoutClass: 'p-4'
					},
					{
						width: 'md:w-1/3',
						alignHeight: true,
						rows: [
							{
								layoutClass: 'md:mx-2',
								alignHeight: true,
								cols: [
									{
										width: 'md:w-1/3',
										component: 'TextBox',
										props: {
											text: 'test'
										},
										posX: 'middle',
										posY: 'middle',
										layoutClass: 'h-16'
									},
									{
										width: 'md:w-1/3',
										component: 'ProgressRadial',
										props: {
											value: 33
										},
										posX: 'middle',
										posY: 'middle',
										layoutClass: 'p-4'
									},
									{
										width: 'md:w-1/3',
										component: 'ProgressBar',
										posX: 'middle',
										posY: 'middle',
										layoutClass: 'h-16'
									}
								]
							}
						]
					}
				]
			},
			{
				component: 'TextBox',
				props: {
					text: 'Overflows/Wrap',
					type: 'h4'
				},
				layoutClass: 'h-8'
			},
			{
				layoutClass: 'md:mx-2',
				wrap: 'wrap',
				cols: [
					{
						component: 'TextBox',
						props: {
							text: 'test'
						},
						posX: 'middle',
						posY: 'middle',
						layoutClass: 'h-16 w-72'
					},
					{
						component: 'TextBox',
						props: {
							text: 'test'
						},
						posX: 'middle',
						posY: 'middle',
						layoutClass: 'h-16 w-72'
					},
					{
						component: 'TextBox',
						props: {
							text: 'test'
						},
						posX: 'middle',
						posY: 'middle',
						layoutClass: 'h-16 w-72'
					}
				]
			},
			{
				layoutClass: 'md:mx-2',
				wrap: 'nowrap',
				cols: [
					{
						component: 'TextBox',
						props: {
							text: 'test'
						},
						posX: 'middle',
						posY: 'middle',
						layoutClass: 'h-16 w-96'
					},
					{
						component: 'TextBox',
						props: {
							text: 'test'
						},
						posX: 'middle',
						posY: 'middle',
						layoutClass: 'h-16 w-96'
					},
					{
						component: 'TextBox',
						props: {
							text: 'test'
						},
						posX: 'middle',
						posY: 'middle',
						layoutClass: 'h-16 w-96'
					}
				]
			},
			{
				component: 'TextBox',
				props: {
					text: 'width',
					type: 'h4'
				},
				layoutClass: 'h-8'
			},
			{
				layoutClass: 'md:mx-2',
				cols: [
					{
						width: 'w-2/12',
						component: 'TextBox',
						props: {
							text: 'w-2/12'
						},
						posX: 'middle',
						posY: 'middle',
						layoutClass: 'h-16 w-72'
					},
					{
						width: 'w-5/12',
						component: 'TextBox',
						props: {
							text: 'w-5/12'
						},
						posX: 'middle',
						posY: 'middle',
						layoutClass: 'h-16 w-72'
					},
					{
						width: 'w-7/12',
						component: 'TextBox',
						props: {
							text: 'w-7/12'
						},
						posX: 'middle',
						posY: 'middle',
						layoutClass: 'h-16 w-72'
					}
				]
			}
		]
	};
</script>

<div class="px-4 container mx-auto">
	<JsonLayout {layoutConfig} {components} debug={true}></JsonLayout>
</div>
