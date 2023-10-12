<script>
  import "../app.css";
  import { Nav, LayoutContainer, Footer } from "$lib";
</script>

<div class="flex flex-col min-h-screen">
  <Nav />
  <slot />
  <div class="flex-grow" />
  <Footer />
</div>
