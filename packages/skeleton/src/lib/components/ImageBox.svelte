<script lang="ts" context="module">
	export interface ImageBoxProp {
		url: string;
	}
</script>

<script lang="ts">
	export let data: ImageBoxProp | undefined;
</script>

<div class="h-full debug w-full justify-center items-center flex">
	<img src={data?.url} alt="" srcset="" />
</div>
