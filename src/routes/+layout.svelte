<script>
  import "../app.css";
  import { Nav, Footer } from "$lib";
</script>

<div class="flex flex-col min-h-screen">
  <Nav />
  <slot />
  <Footer />
</div>
