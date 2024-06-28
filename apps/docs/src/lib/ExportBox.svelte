<script lang="ts">
	import { CodeBlock, getModalStore } from '@skeletonlabs/skeleton';
	const modalStore = getModalStore();
	const { language, code } = $modalStore[0].meta;
</script>

<CodeBlock {language} {code}></CodeBlock>
