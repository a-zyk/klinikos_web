<script>
  import WebNav from "./WebNav.svelte";
  import MobileNav from "./MobileNav.svelte";
</script>

<nav class="font-poppins text-primary_text bg-bg_light flex items-center justify-center w-full"> 
    <div class="flex w-full md:hidden">
      <MobileNav />
    </div>
    <div class="hidden md:flex w-full justify-center">
      <WebNav />
    </div>
</nav>
