<script lang="ts">
	import '../app.postcss';
	import {
		AppShell,
		AppBar,
		Drawer,
		initializeStores,
		getDrawerStore,
		Modal
	} from '@skeletonlabs/skeleton';

	// Highlight JS
	import hljs from 'highlight.js/lib/core';
	import 'highlight.js/styles/github-dark.css';
	import { storeHighlightJs } from '@skeletonlabs/skeleton';
	import xml from 'highlight.js/lib/languages/xml'; // for HTML
	import css from 'highlight.js/lib/languages/css';
	import javascript from 'highlight.js/lib/languages/javascript';
	import typescript from 'highlight.js/lib/languages/typescript';
	import Icon from '@iconify/svelte';
	import { getModalStore } from '@skeletonlabs/skeleton';

	hljs.registerLanguage('xml', xml); // for HTML
	hljs.registerLanguage('css', css);
	hljs.registerLanguage('javascript', javascript);
	hljs.registerLanguage('typescript', typescript);
	storeHighlightJs.set(hljs);
	initializeStores();
	const drawerStore = getDrawerStore();
	const modalStore = getModalStore();
</script>

<Modal />
<!-- App Shell -->
<AppShell>
	<svelte:fragment slot="header">
		<!-- App Bar -->
		<AppBar>
			<svelte:fragment slot="lead">
				<strong class="text-xl uppercase"><a href="./" rel="noreferrer"> Flexilte </a></strong>
			</svelte:fragment>
			<svelte:fragment slot="trail">
				<div class="hidden md:block">
					<a class="btn btn-sm variant-ghost-surface" href="./docs" rel="noreferrer">
						Documentation
					</a>
					<a class="btn btn-sm variant-ghost-surface" href="./example" rel="noreferrer">
						Example
					</a>
					<a class="btn btn-sm variant-ghost-surface" href="./editor" rel="noreferrer"> Editor </a>
					<a class="btn btn-sm variant-ghost-surface" href="./ai" rel="noreferrer"> AI </a>
					<a class="btn btn-sm variant-ghost-surface" href="https://github.com/" rel="noreferrer">
						GitHub
					</a>
				</div>
				<div class="block md:hidden">
					<button type="button" class="btn-icon bg-initial" on:click={() => drawerStore.open()}
						><Icon icon="mdi:hamburger-menu" /></button
					>
				</div>
			</svelte:fragment>
		</AppBar>
	</svelte:fragment>
	<!-- Page Route Content -->
	<slot />
</AppShell>
<Drawer position="right">
	<div class="flex flex-col item-center justify-center mt-10">
		<a
			href="./docs"
			class="btn variant-filled flex my-2 mx-10"
			data-sveltekit-preload-data="hover"
			on:click={() => drawerStore.close()}><span></span><span>Documentation</span></a
		>
		<a
			href="./example"
			class="btn variant-filled flex my-2 mx-10"
			data-sveltekit-preload-data="hover"
			on:click={() => drawerStore.close()}><span></span><span>Example</span></a
		>

		<a
			href="./editor"
			class="btn variant-filled flex my-2 mx-10"
			data-sveltekit-preload-data="hover"
			on:click={() => drawerStore.close()}><span></span><span>Editor</span></a
		>

		<a
			href="./ai"
			class="btn variant-filled flex my-2 mx-10"
			data-sveltekit-preload-data="hover"
			on:click={() => drawerStore.close()}><span></span><span>AI</span></a
		>
	</div>
</Drawer>
