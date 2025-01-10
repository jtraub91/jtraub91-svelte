<!-- src/routes/[slug]/+page.svelte -->
<script>
	import Blog from '$lib/components/Blog.svelte';
	export let data;
</script>

<div class="w-screen flex flex-col">
	<Blog {...data} />
</div>