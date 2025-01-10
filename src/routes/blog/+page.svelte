<script>
  import BlogPreview from '$lib/components/BlogPreview.svelte';

  export let data;
  const posts = data.posts;
</script>

<div>
  {#each posts as post}
    <BlogPreview {...post} />
  {/each}
</div>
