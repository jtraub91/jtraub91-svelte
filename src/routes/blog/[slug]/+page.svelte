<!-- src/routes/[slug]/+page.svelte -->
<script>
	import Blog from '$lib/components/Blog.svelte';
	export let data;
</script>

<article>

	<Blog>
		<h1>{data.title}</h1>
		<p>Published: {data.date}</p>
		<svelte:component this={data.content} />
	</Blog>
</article>