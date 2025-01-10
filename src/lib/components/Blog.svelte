<script>
  let { title, date, content, author } = $props();
  let d = new Date(date);
  let months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December"
  ]
  let formattedDate = months[d.getMonth()] + " " + d.getDay() + ", " + d.getFullYear(); 
</script>

<style>
  h1 {
    font-family: Georgia, 'Times New Roman', Times, serif;
    font-size: 1.5rem;
  }
  :global(article h2) {
    font-size: 1.25rem;
  }
  :global(article p) {
    margin: 0.5rem;
  }
</style>

<div class="border rounded-lg w-3/4 mx-auto my-4">
  <h1 class="text-center">
    {title}
  </h1>
  <div class="text-center text-sm text-gray-500">
    {formattedDate}
  </div>
  <article class="bg-white my-4 p-2">
    {@html content}
  </article>
</div>
