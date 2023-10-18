<script>
  import { browser } from "$app/environment";
  import Carousel from "svelte-carousel";
  import CarouselItem from "./CarouselItem.svelte";

  import { getContext } from "svelte";
  const articles = getContext("articles");

  let carousel;

  const getParticleCount = (width) => {
    if (width > 1024) {
      return 3;
    } else if (width > 768) {
      return 2;
    } else {
      return 1;
    }
  };

  let innerWidth;

  $: particleCount = getParticleCount(innerWidth);
</script>

<svelte:window bind:innerWidth />

{#if browser}
  <Carousel
    bind:this={carousel}
    particlesToShow={particleCount}
    particlesToScroll={particleCount}
    arrows={false}
    swiping={true}
  >
    {#each $articles.slice(0, 6) as article}
      <div key={article.title} class="px-2">
        <CarouselItem
          title={article.title}
          description={article.description}
          image={article.smallImage}
          slug={article.slug}
        />
      </div>
    {/each}
  </Carousel>
{/if}
