<script>
  import { Arrow } from "$lib/assets";
  import WhiteButton from "../assets/WhiteButton.svelte";
  import mixpanel from "mixpanel-browser";

  export let title;
  export let description;
  export let image;
  export let slug;

  const trackArticle = (slug) => {
    mixpanel.track("Article clicked", { slug });
  };
</script>

<div class="max-w-sm bg-white border border-gray-200 rounded-lg shadow">
  <a href="/straipsniai/{slug}">
    <img
      class="rounded-t-lg"
      src="https://klinika.fleetkick.com/assets/{image}?width=450&height=470"
      alt="article"
    />
  </a>
  <div class="p-5 min-h-[300px] flex flex-col">
    <a href="/">
      <h5 class="mb-5 text-2xl font-bold tracking-tight">
        {title}
      </h5>
    </a>
    <p class="mb-7 font-normal">
      {description}
    </p>
    <div class="flex-grow" />
    <WhiteButton href="/straipsniai/{slug}">
      <div
        on:click={() => trackArticle(slug)}
        class="flex gap-2 justify-center items-center"
      >
        <div class="md:hidden">Plačiau</div>
        <div class="hidden md:flex">Skaitykite plačiau</div>
        <Arrow />
      </div>
    </WhiteButton>
  </div>
</div>
