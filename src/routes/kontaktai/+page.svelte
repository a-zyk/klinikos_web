<script>
  import LayoutContainer from "$lib/layout/LayoutContainer.svelte";
  import ContentContainer from "$lib/layout/ContentContainer.svelte";
  import Seo from "$lib/assets/Seo.svelte";
</script>

<div class="bg-bg_lightest w-full">
  <LayoutContainer>
    <ContentContainer>
      <div class="flex flex-col items-center justify-center gap-10">
        <h1 class="text-2xl md:text-3xl lg:text-5xl font-bold font-jakarta">
          Kontaktai
        </h1>
        <div class="text-center">
          Kviečiame registruotis vizitui telefonu ar elektroniniu paštu. Esant
          skubiems atvejams nedvejodami skambinkite nurodytu telefonu.
          Registracija vizitui būtina.
        </div>
      </div>
      <div
        class="flex flex-col-reverse md:flex-row items-center justify-center mt-10 gap-10 md:gap-20 lg:gap-30"
      >
        <div
          class="h-[300px] w-full md:h-[400px] md:w-[500px] relative rounded-lg overflow-hidden"
        >
          <img
            class="absolute top-0 lg:-top-[50%] left-0 rounded-lg w-full"
            src="./map.png"
            alt="map"
          />
        </div>
        <div class="flex flex-col items-center justify-center gap-8 text-xl lg:text-3xl">
          <div class="font-semibold">+370 63633343</div>
          <div>baltijosveterinarija@gmail.com</div>
          <div class="flex flex-col">
            <div class="flex gap-2 wrap-0 ">
              <div class="whitespace-nowrap">I - V</div>
              <div class="whitespace-nowrap">10 - 20 val.</div>
            </div>
            <div class="flex gap-2 ">
              <div>VI</div>
              <div>10 - 16 val.</div>
            </div>
            <div class="flex gap-2">
              <div>VII</div>
              <div>nedirbame</div>
            </div>
          </div>
        </div>
        
      </div>
    </ContentContainer>
  </LayoutContainer>
</div>

<Seo
  title="Kontaktai | Baltijos veterinarijos klinika"
  description="Baltijos klinika jusu augintiniu draugai"
  url={`/kontaktai`}
  keywords="telefono numeris baltijos veterinarijos klinika"
/>
