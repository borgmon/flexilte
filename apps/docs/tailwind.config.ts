import { join } from 'path';
import type { Config } from 'tailwindcss';
import { skeleton } from '@skeletonlabs/tw-plugin';

export default {
	darkMode: 'class',
	content: [
		'./src/**/*.{html,js,svelte,ts,json}',
		'./static/**/*.json',
		join(require.resolve('@skeletonlabs/skeleton'), '../**/*.{html,js,svelte,ts}'),
		join(require.resolve('@flexilte/skeleton'), '../**/*.{html,js,svelte,ts}')
	],
	theme: {
		extend: {}
	},
	plugins: [
		skeleton({
			themes: {
				preset: [
					{
						name: 'skeleton',
						enhancements: true
					}
				]
			}
		})
	],
	safelist: [
		'md:w-1/2',
		'md:w-1/3',
		'md:w-2/3',
		'md:w-1/4',
		'md:w-2/4',
		'md:w-3/4',
		'md:w-1/6',
		'md:w-2/6',
		'md:w-3/6',
		'md:w-4/6',
		'md:w-5/6',
		'h-0',
		'h-px',
		'h-0.5',
		'h-1',
		'h-1.5',
		'h-2',
		'h-2.5',
		'h-3',
		'h-3.5',
		'h-4',
		'h-5',
		'h-6',
		'h-7',
		'h-8',
		'h-9',
		'h-10',
		'h-11',
		'h-12',
		'h-14',
		'h-16',
		'h-20',
		'h-24',
		'h-28',
		'h-32',
		'h-36',
		'h-40',
		'h-44',
		'h-48',
		'h-52',
		'h-56',
		'h-60',
		'h-64',
		'h-72',
		'h-80',
		'h-96',
		'h-auto',
		'h-1/2',
		'h-1/3',
		'h-2/3',
		'h-1/4',
		'h-2/4',
		'h-3/4',
		'h-1/5',
		'h-2/5',
		'h-3/5',
		'h-4/5',
		'h-1/6',
		'h-2/6',
		'h-3/6',
		'h-4/6',
		'h-5/6',
		'h-full',
		'h-screen',
		'h-min',
		'h-max',
		'h-fit'
	]
} satisfies Config;
