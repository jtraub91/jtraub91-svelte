<script>
  let { title, date, content, author, slug } = $props();
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
  h2 {
    padding: 0.5rem 0.5rem 0.25rem 0.5rem;
    font-family: Georgia, 'Times New Roman', Times, serif;
    text-align: center;
    font-size: 1.2rem;
  }
</style>

<div class="bg-white border-2 border-pink-300 hover:border-indigo-700 rounded-lg m-10 w-3/4 h-48 flex flex-col">
  <a href={`/blog/${slug}`} class="w-full h-full grow">
    <h2>
      {title}
    </h2>
    <div class="flex flex-row justify-between text-xs text-gray-500">
      <div class="m-auto">
        {formattedDate}
      </div>
    </div>
  </a>
</div>