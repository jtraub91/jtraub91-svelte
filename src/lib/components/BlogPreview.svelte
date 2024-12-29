<script>
  let { title, date, content, author } = $props();
</script>

<style>
  h2 {
    font-family: Georgia, 'Times New Roman', Times, serif;
  }
</style>

<div class="bg-white  border rounded-lg">
  <h2>
    {title}
  </h2>
  <div>by {author}</div>
  <div>
    {new Date(date).toLocaleDateString()}
  </div>
  <div>
    {content}
  </div>
</div>