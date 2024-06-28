<script lang="ts">
	import { components } from '$lib/editorStore';
	import JsonLayoutT from '$lib/tests/JsonLayoutT.svelte';
	import Text from '$lib/tests/Text.svelte';
	import type { LayoutConfigT } from '$lib/tests/types';
	import { Flexilte, type LayoutConfig } from '@flexilte/core';
	import { TextBox } from '@flexilte/skeleton';
	import { ProgressBar, ProgressRadial } from '@skeletonlabs/skeleton';

	const layoutConfig: LayoutConfig<typeof components> = {
		nodeClass: 'my-6',
		rows: [
			{
				component: 'TextBox',
				props: {
					text: 'Documentation',
					type: 'h1'
				}
			},
			{
				component: 'TextBox',
				props: {
					text: 'Once you use it you will be like: WHY NOBODY HAVE DONE THIS YET UNTIL NOW?!'
				}
			},
			{
				component: 'TextBox',
				props: {
					text: "What's Flexilte",
					type: 'h2'
				}
			},
			{
				component: 'TextBox',
				props: {
					text: 'Flexilte is a svelte lib that turns json/yaml into a webpage! It uses a opinionated flex box concept and dynamically construct page layout, create svelte components, and inject props. It can be done both on server side or client side.'
				}
			},
			{
				component: 'TextBox',
				props: {
					text: 'How To Install',
					type: 'h2'
				}
			},
			{
				component: 'TextBox',
				props: {
					text: 'Flexilte works with ANY svelte UI frameworks. It comes with skeleton UI wrappers, you can get started by install'
				}
			},
			{
				component: 'CodeBlock',
				props: {
					code: 'pnpm i @flexilte/core @flexilte/skeleton',
					language: 'bash'
				}
			},
			{
				component: 'TextBox',
				props: {
					text: 'Basic Example',
					type: 'h2'
				}
			},
			{
				component: 'TextBox',
				props: {
					text: 'It is extremely simple to use Flexilte.'
				}
			},
			{
				component: 'CodeBlock',
				props: {
					code: `<script lang="ts">
	import { InputChip } from '@skeletonlabs/skeleton';
	const components = { InputChip };
	const layoutConfig: LayoutConfig<typeof components> = {
		component: 'InputChip',
		props: {
			value: ['Hello', 'World'],
			name: "chips"
		}
	}
<\/script>
<Flexilte {layoutConfig} {components}></Flexilte>`,
					language: 'typescript'
				}
			},
			{
				component: 'TextBox',
				props: {
					text: 'And the above code will render:'
				}
			},
			{
				component: 'InputChip',
				props: {
					value: ['Hello', 'World'],
					name: 'chips'
				}
			},
			{
				component: 'TextBox',
				props: {
					text: '(Yes the above example is Flexilte generated. In fact, this entire website is powered with Flexilte!)'
				}
			},
			{
				component: 'TextBox',
				props: {
					text: "JSON Schema",
					type: 'h2'
				}
			},
			{
				component: 'TextBox',
				props: {
					text: 'Flexilte json is a recursive tree. It can be a row, a col, or an component.'
				}
			},
			{
				component: 'CodeBlock',
				props: {
					code: `{
	id?: string; // will be added to the element
	width?: string; // tailwind class for the width (w-1/6)
	component?: keyof C & string; // component name
	props?: Record<string, any>; // component props
	nodeClass?: string; // classes apply to cols/rows/elements
	wrapperClass?: string; // wrap element with a div, this is for components that doesn't like flex box
	layoutClass?: string; // classes apply to cols/rows
	cols?: LayoutConfig<C>[]; // array of itself
	rows?: LayoutConfig<C>[]; // array of itself
	posX?: 'left' | 'right' | 'middle'; // we solved css! choose how to position your element horizontally
	posY?: 'top' | 'bottom' | 'middle'; // we solved css! choose how to position your element vertically
	alignHeight?: boolean; // if true then all element in the same row/col will align at the bottom
	wrap?: 'wrap' | 'nowrap'; // choose if element wrap around flex way
	gap?: string, // tailwind class for the gap (gap-4)
}`,
					language: 'typescript'
				}
			},

		]
	};
</script>

<div class="px-4 container mx-auto">
	<Flexilte {layoutConfig} {components}></Flexilte>
</div>
