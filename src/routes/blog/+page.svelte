<script>
  import BlogPreview from '$lib/components/BlogPreview.svelte';

  export let data;
</script>

<div>
  {#each data as post}
    <BlogPreview {...post} />
  {/each}
</div>
