<script>
  import { browser } from "$app/environment";
  import Carousel from "svelte-carousel";
  import CarouselItem from "./CarouselItem.svelte";
  let carousel; // for calling methods of the carousel instance
  const handleNextClick = () => {
    carousel.goToNext();
  };

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
    <div class="px-2"><CarouselItem /></div>
    <div class="px-2"><CarouselItem /></div>
    <div class="px-2"><CarouselItem /></div>
    <div class="px-2"><CarouselItem /></div>
    <div class="px-2"><CarouselItem /></div>
    <div class="px-2"><CarouselItem /></div>
  </Carousel>
  <!--   
  <button on:click={handleNextClick}>Next</button> -->
{/if}

