<script>
  import { base } from '$app/paths';
</script>
<style>
  ul {
    margin: 2rem;
  }
  li {
    padding: 0.5rem;
    max-width: 320px;
    height: 2.5rem;
    margin: 2.5rem auto;
    border: 2px solid indigo;
    border-radius: 0.25rem;
    background-color: white;
    transition: border 0.2s linear;
  }
  li:hover {
    border: 2px solid yellow;
  }
  li a {
    display: flex;
    flex-direction: row;
    height: 100%;
  }
</style>

<div>
  <ul>
    <li>
      <a href="https://github.com/jtraub91" target="_blank">
        <div class="m-auto flex flex-row">
          <img class="h-4 w-4 my-auto mx-1"
            src="{base}/images/github-mark.svg" alt="github icon"/>
          <span class="my-auto mx-1">jtraub91</span>
        </div>
        
      </a>
    </li>
    <li>
      <a href="https://x.com/jtraub91" target="_blank">
        <div class="m-auto flex flex-row">
          <img class="h-4 w-4 my-auto mx-1 fill-black"
            src="{base}/images/x-logo-black.png" alt="x icon"/>
          <span class="my-auto mx-1">jtraub91</span>
        </div>
        
      </a>
    </li>
    <li>
      <a href="https://www.instagram.com/jason.traub/" target="_blank">
        <div class="m-auto flex flex-row">
          <img class="h-4 w-4 my-auto mx-1"
            src="{base}/images/Instagram_Glyph_Gradient.svg" alt="instagram icon"/>
          <span class="my-auto mx-1">jason.traub</span>
        </div>
        
      </a>
    </li>
    <li>
      <a href="https://www.linkedin.com/in/jtraub/" target="_blank">
        <div class="m-auto flex">
          <img class="h-4 w-auto my-auto mx-1"
            src="{base}/images/LI-In-Bug.png" alt="linkedin icon"/>
          <span class="my-auto mx-1">jtraub</span>
        </div>
      </a>
    </li>
    <li>
      <a href="mailto:jtraub91@gmail.com">
        <div class="m-auto flex flex-row">
          <i class="fa-regular fa-envelope h-4 my-auto mx-1"></i>
          <span class="my-auto mx-1">jtraub91@gmail.com</span>
        </div>  
      </a>
    </li>
  </ul>
</div>