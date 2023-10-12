<script>
  import ContentContainer from "../layout/ContentContainer.svelte";
  import LayoutContainer from "../layout/LayoutContainer.svelte";

  import { Arrow } from "$lib/assets";
</script>

<div class="bg-bg_light w-full">
  <LayoutContainer>
    <ContentContainer>
      <div class="flex flex-col items-center gap-6">
        <h2 class="text-2xl md:text-3xl lg:text-5xl font-bold font-jakarta">
          Susipažinkime
        </h2>
        <div class="text-center">
          Klinikoje dirba veterinarijos gydytojai besispecelizuojantys įvairiose
          srityse. Esame pasiruoše padėti jūsų augintiniui būti sveikesniam.
        </div>
      </div>
      <div
        class=" max-w-[1100px] flex items-center justify-start md:justify-end mt-8 md:gap-2 cursor-pointer"
      >
        <div class="font-base text-sm md:font-md text-primary_blue">
          Plačiau apie komandą
        </div>
        <Arrow />
      </div>
    </ContentContainer>
  </LayoutContainer>
</div>
