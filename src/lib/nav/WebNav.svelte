<script>
  import data from "./data.js";
</script>

<div class="w-full flex gap-4 justify-between items-center">
  <div class="md:w-[200px] lg:w-[250px]">
    <img src="/logo.png" alt="logo" />
  </div>
  <ul class="flex gap-10">
    {#each data as item}
      <li><a href={item.link}>{item.name}</a></li>
    {/each}
  </ul>
</div>
