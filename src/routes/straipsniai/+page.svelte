<script>
  import LayoutContainer from "../../lib/layout/LayoutContainer.svelte";
  import ContentContainer from "../../lib/layout/ContentContainer.svelte";
  import CarouselItem from "../../lib/landing/CarouselItem.svelte";
</script>

<div class="bg-bg_lightest w-full">
  <LayoutContainer>
    <ContentContainer>
      <div class="flex flex-col items-center gap-7">
        <h1 class="text-2xl md:text-3xl lg:text-5xl font-bold font-jakarta">
          Straipsniai
        </h1>
        <div class="text-center">
          Kviečiame susipažinti su naudinga informacija gyvūnų auginimo, ligų,
          apsinuodijimų temomis
        </div>
      </div>
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 pt-10">
        <CarouselItem />
        <CarouselItem />
        <CarouselItem />
        <CarouselItem />
        <CarouselItem />
        <CarouselItem />
        <CarouselItem />
        <CarouselItem />
      </div>
    </ContentContainer>
  </LayoutContainer>
</div>
