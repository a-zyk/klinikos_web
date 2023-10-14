<script>
  import LayoutContainer from "../../lib/layout/LayoutContainer.svelte";
  import ContentContainer from "../../lib/layout/ContentContainer.svelte";
  import ServicesItem from "./SevicesItem.svelte";
  import { Syringe } from "$lib/assets";
  const data = [
    {
      title: "Chirurgija",
      icon: Syringe,
      services: [
        {
          title: "Katės sterilizacija",
          price: "90e",
        },
        {
          title: "Katino kastracija",
          price: "60e",
        },
        {
          title: "Katino kriptorcho (sėklidė pilvo ertmėje) kastracija",
          price: "90e",
        },
        {
          title: "Katino kriptorcho (sėklidė kirkšnyje) kastracija",
          price: "80e",
        },
      ],
    },
    {
      title: "Labaratorinė diagnostika",
      icon: Syringe,
      services: [
        {
          title: "Katės sterilizacija",
          price: "90e",
        },
        {
          title: "Katino kastracija",
          price: "60e",
        },
        {
          title: "Katino kriptorcho (sėklidė pilvo ertmėje) kastracija",
          price: "90e",
        },
        {
          title: "Katino kriptorcho (sėklidė kirkšnyje) kastracija",
          price: "80e",
        },
      ],
    },
  ];
</script>

<div class="bg-bg_lightest w-full">
  <LayoutContainer>
    <ContentContainer>
      <div class="flex flex-col items-center gap-10">
        <h1 class="text-2xl md:text-3xl lg:text-5xl font-bold font-jakarta">
          Paslaugos
        </h1>
        <div class="text-center">
          Pagrindinės klinikoje teikiamos paslaugos ir procedūros. Dėl kitų
          paslaugų ir procedūrų teirautis klinikoje ar telefonu.
        </div>
      </div>
      <div class="flex justify-center ">
        <div class="lg:w-[900px] flex flex-col gap-10 mt-10">
        {#each data as procedure}
          <ServicesItem
            title={procedure.title}
            icon={procedure.icon}
            procedures={procedure.services}
          />
        {/each}
        </div>
      </div>
    </ContentContainer>
  </LayoutContainer>
</div>
