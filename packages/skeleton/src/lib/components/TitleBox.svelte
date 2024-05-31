<script lang="ts" context="module">
	export interface TitleBoxProp {
		content: string;
	}
</script>

<script lang="ts">
	export let data: TitleBoxProp | undefined;
</script>

<div class="h-40 debug w-full justify-center items-center flex">
	<slot />
	{#if data?.content}
		<div class="text-3xl">{data?.content}</div>
	{/if}
</div>
