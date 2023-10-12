<script>
  import WebNav from "./WebNav.svelte";
  import MobileNav from "./MobileNav.svelte";
  import LayoutOuterContainer from "../layout/LayoutOuterContainer.svelte";
</script>

<nav class="font-poppins text-primary_text bg-bg_light">
  <LayoutOuterContainer>
    <div class="md:hidden">
      <MobileNav />
    </div>
    <div class="hidden md:flex">
      <WebNav />
    </div>
  </LayoutOuterContainer>
</nav>
