<script>
  import data from "./data.js";
</script>

<div class="flex gap-4 items-center w-full px-8 py-4 lg:max-w-[1600px]">
  <a href="/" class="md:w-[200px] lg:w-[250px]">
    <img src="/logo.png" alt="logo" />
  </a>
  <div class="flex-grow"/>
  <ul class="flex gap-10">
    {#each data as item}
      <li><a href={item.link}>{item.name}</a></li>
    {/each}
  </ul>
</div>
