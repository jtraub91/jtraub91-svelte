<script>
  import { base } from '$app/paths';
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
    font-family: Georgia, 'Times New Roman', Times, serif;
    text-align: center;
    font-size: 1.5rem;
    margin: 0;
  }
  .blog-preview {
    display: flex;
    margin: 6rem auto;
    max-width: 420px;
    width: 95%;
    background: white;
    border: 0.125rem solid grey;
    border-radius: 0.5rem;
    transition: all 0.2s ease;
  }
  .blog-preview:hover{
    box-shadow: 0.25rem 0.25rem 0.5rem rgba(0, 0, 0, 0.1);
    transform: translateY(-2px);
  }
  .blog-preview a {
    width: 100%;
    height: 100%;
    flex-grow: 1;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding: 0.5rem;
  }
  .blog-date {
    display: flex;
    font-size: 0.875rem;
    line-height: 1.25rem;
    color: rgb(107 114 128 / var(--tw-text-opacity, 1)) /* #6b7280 */;
    --tw-text-opacity: 1;
  } 
</style>

<div class="blog-preview">
  <a href={`${base}/blog/${slug}`}>
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