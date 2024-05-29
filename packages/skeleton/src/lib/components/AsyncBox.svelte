<script lang="ts" context="module">
	export interface AsyncBoxProp {
		url: string;
	}
</script>

<script lang="ts">
	import AsyncWrapper from './AsyncWrapper.svelte';

	import TitleBox from './TitleBox.svelte';

	export let data: AsyncBoxProp;
	let res: any;
</script>

<TitleBox data={{ content: res?.text }}>
	<AsyncWrapper url={data.url} bind:res>
		<div slot="fallback" let:error>{error}</div>
		<div slot="loading">loading...</div>
	</AsyncWrapper>
</TitleBox>
