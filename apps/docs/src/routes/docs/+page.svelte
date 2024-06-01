<script lang="ts">
	import JsonLayoutT from '$lib/tests/JsonLayoutT.svelte';
	import Text from '$lib/tests/Text.svelte';
	import type { LayoutConfigT } from '$lib/tests/types';
	import { JsonLayout, type LayoutConfig } from '@flexilte/core';
	import { ProgressBar, ProgressRadial } from '@skeletonlabs/skeleton';

	const components = { Text, ProgressRadial, ProgressBar };

	const layoutConfig: LayoutConfigT<typeof components> = {
		layoutClass: 'my-2',
		rows: [
			{
				component: 'Text',
				props: {
					text: 'Alignments'
				},
				layoutClass: 'h-8'
			},
			{
				component: 'Text',
				props: {
					text: 'left'
				},
				centerX: 'left',
				layoutClass: 'debug h-16'
			},
			{
				component: 'Text',
				props: {
					text: 'right'
				},
				centerX: 'right',
				layoutClass: 'debug h-16'
			},
			{
				component: 'Text',
				props: {
					text: 'middle'
				},
				centerX: 'middle',
				layoutClass: 'debug h-16'
			},
			{
				component: 'Text',
				props: {
					text: 'top'
				},
				centerY: 'top',
				layoutClass: 'debug h-16'
			},
			{
				component: 'Text',
				props: {
					text: 'bottom'
				},
				centerY: 'bottom',
				layoutClass: 'debug h-16'
			},
			{
				component: 'Text',
				props: {
					text: 'middle'
				},
				centerY: 'middle',
				layoutClass: 'debug h-16'
			},
			{
				component: 'Text',
				props: {
					text: 'very middle'
				},
				centerX: 'middle',
				centerY: 'middle',
				layoutClass: 'debug h-16'
			},
			{
				component: 'Text',
				props: {
					text: 'Columns'
				},
				layoutClass: 'h-8'
			},

			{
				layoutClass: 'md:mx-2',
				cols: [
					{
						width: 'md:w-1/3',
						component: 'Text',
						props: {
							text: 'test'
						},
						centerX: 'middle',
						centerY: 'middle',
						layoutClass: 'debug h-16'
					},
					{
						width: 'md:w-1/3',
						component: 'ProgressRadial',
						props: {
							value: 33
						},
						centerX: 'middle',
						centerY: 'middle',
						layoutClass: 'debug '
					},
					{
						width: 'md:w-1/3',
						component: 'ProgressBar',
						centerX: 'middle',
						centerY: 'middle',
						layoutClass: 'debug h-16'
					}
				]
			},
			{
				layoutClass: 'md:mx-2',
				alignHeight: true,
				cols: [
					{
						width: 'md:w-1/3',
						component: 'Text',
						props: {
							text: 'test'
						},
						centerX: 'middle',
						centerY: 'middle',
						layoutClass: 'debug h-16'
					},
					{
						width: 'md:w-1/3',
						component: 'ProgressRadial',
						props: {
							value: 33
						},
						centerX: 'middle',
						centerY: 'middle',
						layoutClass: 'debug p-4'
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
										component: 'Text',
										props: {
											text: 'test'
										},
										centerX: 'middle',
										centerY: 'middle',
										layoutClass: 'debug h-16'
									},
									{
										width: 'md:w-1/3',
										component: 'ProgressRadial',
										props: {
											value: 33
										},
										centerX: 'middle',
										centerY: 'middle',
										layoutClass: 'debug p-4'
									},
									{
										width: 'md:w-1/3',
										component: 'ProgressBar',
										centerX: 'middle',
										centerY: 'middle',
										layoutClass: 'debug h-16'
									}
								]
							}
						]
					}
				]
			},
			{
				component: 'Text',
				props: {
					text: 'Overflows/Wrap'
				},
				layoutClass: 'h-8'
			},

			{
				layoutClass: 'md:mx-2',
				wrap: 'wrap',
				cols: [
					{
						component: 'Text',
						props: {
							text: 'test'
						},
						centerX: 'middle',
						centerY: 'middle',
						layoutClass: 'debug h-16 w-72'
					},
					{
						component: 'Text',
						props: {
							text: 'test'
						},
						centerX: 'middle',
						centerY: 'middle',
						layoutClass: 'debug h-16 w-72'
					},
					{
						component: 'Text',
						props: {
							text: 'test'
						},
						centerX: 'middle',
						centerY: 'middle',
						layoutClass: 'debug h-16 w-72'
					}
				]
			},
			{
				layoutClass: 'md:mx-2',
				wrap: 'nowrap',
				cols: [
					{
						component: 'Text',
						props: {
							text: 'test'
						},
						centerX: 'middle',
						centerY: 'middle',
						layoutClass: 'debug h-16 w-96'
					},
					{
						component: 'Text',
						props: {
							text: 'test'
						},
						centerX: 'middle',
						centerY: 'middle',
						layoutClass: 'debug h-16 w-96'
					},
					{
						component: 'Text',
						props: {
							text: 'test'
						},
						centerX: 'middle',
						centerY: 'middle',
						layoutClass: 'debug h-16 w-96'
					}
				]
			}
		]
	};
</script>

<div class="px-4 container mx-auto">
	<JsonLayoutT {layoutConfig} {components}></JsonLayoutT>
</div>
