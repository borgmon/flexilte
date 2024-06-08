<script lang="ts">
	import { componentStore } from './editorStore';

	const exportJson = () => {
		console.log($componentStore);
		navigator.clipboard.writeText(JSON.stringify($componentStore, null, 2)).then(() => {
			alert('Copied to your clipboard! Also in the console');
		});
	};
</script>

<button class="btn variant-filled" on:click={exportJson}>Export</button>
