<script>
  import LayoutContainer from "$lib/layout/LayoutContainer.svelte";
  import ContentContainer from "$lib/layout/ContentContainer.svelte";
  import ServicesItem from "./SevicesItem.svelte";
  import Seo from "$lib/assets/Seo.svelte";
  import { Syringe } from "$lib/assets";

  export let data;

</script>

<div class="bg-bg_lightest w-full">
  <LayoutContainer>
    <ContentContainer>
      <div class="flex flex-col items-center gap-10">
        <h1 class="text-2xl md:text-3xl lg:text-5xl font-bold font-jakarta">
          Paslaugos. Puslapis ruošiamas
        </h1>
        <!-- <div class="text-center">
          Pagrindinės klinikoje teikiamos paslaugos ir procedūros. Dėl kitų
          paslaugų ir procedūrų teirautis klinikoje ar telefonu.
        </div>
      </div>
      <div class="flex justify-center ">
        <div class="w-[900px] flex flex-col gap-10 mt-10">
        {#each data.data as proceduresList}
     
          <ServicesItem
          procedures={proceduresList}
          />
        {/each}
        </div> -->
       
      </div>
    </ContentContainer>
  </LayoutContainer>
</div>

<Seo title="Paslaugos | Baltijos veterinarijos klinika" description="Teikiame platų spektrą veterinarijos paslaugų" url={`/paslaugos`} keywords="veterinarijos paslaugos, vet klinika, kastracija, sterilizacija"/>