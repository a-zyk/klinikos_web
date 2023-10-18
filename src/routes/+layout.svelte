<script>
  import "../app.css";
  import { Nav, Footer } from "$lib";

  import "@beyonk/gdpr-cookie-consent-banner/banner.css"; // optional, you can also define your own styles
  import GdprBanner from "@beyonk/gdpr-cookie-consent-banner";

  import cookieConfig from '$lib/cookieConfig'
  
  function initAnalytics() {
    // do something with segment.io or google analytics etc
  }
</script>

<GdprBanner class="bg-slate-300" {...cookieConfig} on:analytics={initAnalytics} />

<div class="flex flex-col min-h-screen">
  <Nav />
  <slot />
  <Footer />
</div>
