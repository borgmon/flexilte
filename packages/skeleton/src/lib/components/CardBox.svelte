<script lang="ts">
	export let img: string | undefined;
	export let title: string | undefined;
	export let body: string | undefined;
	export let link: string | undefined;
	export let footer: string | undefined;
</script>

<div class="w-full">
	<a href={link}
		><div class="card bg-initial card-hover overflow-hidden h-full">
			{#if img}
				<div class="w-full max-h-64 overflow-hidden">
					<img class="w-full h-full object-cover object-center" src={img} alt="" />
				</div>
			{/if}
			{#if title}
				<header class="card-header">
					<h3 class="h3">{title}</h3>
				</header>
			{/if}
			{#if body}
				<section class="p-4">{body}</section>
			{/if}
			{#if footer}
				<footer class="card-footer">{title}</footer>
			{/if}
		</div>
	</a>
</div>
