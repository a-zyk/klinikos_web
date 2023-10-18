<script>
  import "../app.css";
  import { PUBLIC_MIXPANEL_TOKEN } from "$env/static/public";
  import { Nav, Footer, cookieConfig } from "$lib";
  import mixpanel from "mixpanel-browser";
  import "@beyonk/gdpr-cookie-consent-banner/banner.css"; // optional, you can also define your own styles
  import GdprBanner from "@beyonk/gdpr-cookie-consent-banner";
  import { page } from "$app/stores";

  const initAnalytics = () => {
    mixpanel.init(PUBLIC_MIXPANEL_TOKEN, {
      debug: true,
      track_pageview: false,
      persistence: "localStorage",
    });

    mixpanel.track_pageview()
  }
</script>

{#key $page.url.pathname}
  <GdprBanner {...cookieConfig} on:analytics={initAnalytics} />
{/key}

<div class="flex flex-col min-h-screen">
  <Nav />
  <slot />
  <Footer />
</div>
