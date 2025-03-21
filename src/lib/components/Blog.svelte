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
    font-size: 2rem;
    margin: 1rem auto 0.5rem auto;
  }
  article {
    margin: 1rem auto;
    padding: 0 1rem;
    width: 100%;
    max-width: 48rem;
  }
  @media (max-width: 960px){
    /* article {
      width: 32rem;
    } */
  }
  :global(article pre) {
    background-color: #f5f5f5;
    padding: 10px;
    border: 1px solid #ccc;
    border-radius: 5px;
    overflow-x: auto;
  }
  :global(article ul) {
    margin: 1rem 2rem;
    list-style-type: circle;
  }
  :global(article code) {
    font-family: 'Courier New', Courier, monospace;
    color: #333;
  }
  :global(article h2) {
    margin: 1rem 0;
    font-size: 1.75rem;
  }
  :global(article h3) {
    margin: 1rem 0;
    font-size: 1.5rem;
  }
  :global(article h4) {
    font-size: 1.25rem;
  }
  :global(article p) {
    margin: 1rem 0;
    padding: 0.5rem;
    background-color: white;
    border-radius: 0.5rem;
  }
  :global(article p a), :global(article ol li a) {
    color: dodgerblue;
    text-decoration: underline;
  }
</style>


  <h1 class="text-center">
    {title}
  </h1>
  <div class="text-center text-sm text-gray-500">
    {formattedDate}
  </div>
  <article>
    {@html content}
  </article>
