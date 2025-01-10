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
  .blog-preview {
    display: flex;
    margin: 3.5rem auto;
    width: 75%;
    background: white;
    border: 0.25rem solid pink;
    border-radius: 0.5rem;
  }
  .blog-preview a {
    width: 100%;
    height: 100%;
    flex-grow: 1;
  }
  .blog-date {
    margin: 0.25rem;
    padding: 0.25rem;
    display: flex;
    font-size: 0.75rem;
    line-height: 1rem;
    color: rgb(107 114 128 / var(--tw-text-opacity, 1)) /* #6b7280 */;
    --tw-text-opacity: 1;
  } 
</style>

<div class="blog-preview">
  <a href={`/blog/${slug}`}>
    <h2>
      {title}
    </h2>
    <div class="blog-date">
      <div class="m-auto">
        {formattedDate}
      </div>
    </div>
  </a>
</div>