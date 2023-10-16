<script>
  import LayoutContainer from "../../lib/layout/LayoutContainer.svelte";
  import ContentContainer from "../../lib/layout/ContentContainer.svelte";
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
      <div class="flex flex-col-reverse md:flex-row items-center justify-center mt-10 gap-10 md:gap-20 lg:gap-30">
        <div class="h-[300px] w-full md:h-[500px] md:w-full relative rounded-lg overflow-hidden">
          <img
            class="absolute top-0 lg:-top-[50%] left-0 rounded-lg w-full"
            src="./map.png"
            alt="map"
          />
        </div>
        <div class="flex flex-col justify-center gap-8 text-2xl lg:text-3xl">
          <div class="font-semibold ">+370 3489593</div>
          <div class="flex flex-col">
            <div>I - V 10 - 20 val.</div>
            <div>VI 10 - 18 val.</div>
            <div>VII nedirbame</div>
          </div>
          <div class="flex flex-col">
            <div>Senasis Ukmergės k. 39A</div>
            <div>Užubaliai, Vilniaus r.</div>
          </div>
        </div>
      </div>
    </ContentContainer>
  </LayoutContainer>
</div>
