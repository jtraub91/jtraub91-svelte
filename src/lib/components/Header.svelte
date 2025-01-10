<script>
  import {page} from '$app/stores';
</script>


<header class="w-full flex flex-row">
  <div class="top-0 left-0 h-20 w-20">
    <a href="/">
      <img src="/images/yoshi-github-jtraub91.jpg"/>
    </a>
  </div>
  <a href="/blog" class="mx-4 mt-auto mb-0 font-mono text-lg text-blue-500 hover:text-green-400 {$page.url.pathname === '/blog' ? 'underline' : ''}">   
    blog
  </a>
  <a href="/links" class="mx-4 mt-auto mb-0 font-mono text-lg text-blue-500 hover:text-green-400 flex {$page.url.pathname === '/links' ? 'underline' : ''}">
    <span class="mb-0 mt-auto mx-auto">
      links
    </span>
  </a>
  <a href="/contact" class="mx-4 mt-auto mb-0 font-mono text-lg text-blue-500 hover:text-green-400 {$page.url.pathname === '/contact' ? 'underline' : ''}">
    contact
  </a>
</header>