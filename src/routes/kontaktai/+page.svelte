<script>
  import LayoutContainer from "../../lib/layout/LayoutContainer.svelte";
  import ContentContainer from "../../lib/layout/ContentContainer.svelte";
</script>

<div class="bg-bg_lightest w-full">
  <LayoutContainer>
    <ContentContainer>
      <div class="flex">
        <div class="flex flex-col gap-">
          <div class="font-semibold">+370 3489593</div>
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
        <div class="h-[500px] relative">
          <img class=" top-0 left-0 rounded-lg w-full" src="./map.png" alt="map" />
        </div>
      </div>
    </ContentContainer>
  </LayoutContainer>
</div>
