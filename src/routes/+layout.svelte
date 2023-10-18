<script>
  import "../app.css";
  import { Nav, Footer, cookieConfig } from "$lib";

  import "@beyonk/gdpr-cookie-consent-banner/banner.css"; // optional, you can also define your own styles
  import GdprBanner from "@beyonk/gdpr-cookie-consent-banner";

  function initAnalytics() {
    // do something with segment.io or google analytics etc
  }
</script>

<GdprBanner cookieName="baltijos_veterinarijos_klinika_privacy" {...cookieConfig} on:analytics={initAnalytics} />

<div class="flex flex-col min-h-screen">
  <Nav />
  <slot />
  <Footer />
</div>
