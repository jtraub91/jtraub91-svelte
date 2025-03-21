<script>
  import {page} from '$app/stores';
</script>

<style>
  a {
    font-size: 2rem;
  }
  .nav-link {
    transition: color 0.2s ease-in-out;
  }
  @media (max-width: 600px){
    a {
      font-size: 1.5rem;
    }
  }
</style>

<header class="flex flex-row">
  <div class="top-0 left-0 h-20 w-20 min-h-20 min-w-20">
    <a href="/" id="yoshi-github-jtraub91">
      <img src="/images/yoshi-github-jtraub91.jpg" alt="yoshi-github-jtraub91"/>
    </a>
  </div>
  <a href="/blog" class="nav-link mx-2 mt-auto mb-0 font-mono text-lg text-[dodgerblue] hover:text-[indigo] {$page.url.pathname === '/blog' ? 'underline' : ''}">   
    blog
  </a>
  <a href="/links" class="nav-link mx-2 mt-auto mb-0 font-mono text-lg text-[dodgerblue] hover:text-[indigo] {$page.url.pathname === '/links' ? 'underline' : ''}">
    <span class="mb-0 mt-auto mx-auto">
      links
    </span>
  </a>
  <!-- <a class="ml-auto mr-4 mt-auto mb-0 flex" id="buymeacoffee"
    href="https://www.buymeacoffee.com/jtraub91" target="_blank">
    <img class="mt-auto mb-0" src="https://cdn.buymeacoffee.com/buttons/v2/default-violet.png" alt="Buy Me A Coffee" />
  </a> -->
</header>
