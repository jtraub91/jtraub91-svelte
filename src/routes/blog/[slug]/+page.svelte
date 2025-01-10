<!-- src/routes/[slug]/+page.svelte -->
<script>
	import Blog from '$lib/components/Blog.svelte';
	export let data;
</script>

<div class="flex flex-col">
	<Blog {...data} />
</div>
