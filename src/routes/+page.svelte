<script>
  import { Hero, Services, Team, Articles } from "$lib";
  import Call from "$lib/landing/Call.svelte";
  import Seo from "$lib/assets/Seo.svelte";
  export let data;
  import { setContext } from "svelte";
  import { writable } from "svelte/store";
  import mixpanel from "mixpanel-browser";
  const trackCall = () => {
    mixpanel.track("Call icon clicked");
  };

  const articles = writable();
  $: articles.set(data.data);

  setContext("articles", articles);
</script>

<div class="relative m-0">
  <Call on:click={() => trackCall()} />
  <Hero />
  <Services />
  <Team />
  <Articles />
</div>
<Seo
  title="Baltijos veterinarijos klinika"
  description="Baltijos klinika - jūsų augintinių draugai."
  url={"/"}
  keywords="paslaugos, vet klinika"
/>
