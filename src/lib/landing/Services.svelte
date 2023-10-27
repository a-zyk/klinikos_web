<script>
  import Card from "./Card.svelte";
  import {
    Stethoscope,
    Tooth,
    Syringe,
    Paw,
    Wave,
    Virus,
    Arrow,
  } from "$lib/assets";
  import ContentContainer from "../layout/ContentContainer.svelte";
  import LayoutContainer from "../layout/LayoutContainer.svelte";

  const procedures = [
    {
      title: "Chirurgija",
      description:
        "Atliekame ginekologines, urologines, pilvo ertmės, darinių šalinimo chirurgines operacijas",
      icon: Syringe,
    },
    {
      title: "Vidaus ligų gydymas",
      description:
        "Atliekame diagnostiką ir paskiriame gydymą užkrečiamų ir neužkrečiamų vidaus ligų atvejais",
      icon: Stethoscope,
    },
    {
      title: "Odontologija",
      description: "Atliekame dantų higienos bei dantų šalinimo procedūras",
      icon: Tooth,
    },
    {
      title: "Labaratoriniai tyrimai",
      id: "Labaratoriniai-tyrimai",
      description: "Atliekame platų spektrą labaratorinių tyrimų",
      icon: Virus,
    },
    {
      title: "Dermatologija",
      description: "Konsultuojame odos ligų bei alergijų atvejais",
      icon: Paw,
    },
    {
      title: "Ultragarsiniai tyrimai",
      description:
        "Atliekame išsamią vidaus organų bei apžvalginę pilvo ir krūtinės echoskopiją skubiais atvejais",
      icon: Wave,
    },
  ];
</script>

<div class="bg-bg_lightest w-full">
  <LayoutContainer>
    <ContentContainer>
      <div class="flex flex-col items-center gap-7">
        <h2 class="text-2xl md:text-3xl lg:text-5xl font-bold font-jakarta">
          Paslaugos
        </h2>
        <div class="text-center">
          Klinikoje atliekame platų spektrą procedūrų ir paslaugų
        </div>
      </div>
      <div class="flex justify-center">
        <div
          class="mt-10 max-w-[1000px] grid md:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-12 justify-items-center"
        >
          {#each procedures as procedure}
            <Card
              id={procedure.id}
              title={procedure.title}
              description={procedure.description}
              icon={procedure.icon}
            />
          {/each}
        </div>
      </div>
      <!-- <a
        href="/paslaugos"
        class=" text-primary_blue max-w-[1100px] flex items-center justify-start md:justify-end mt-8 md:gap-2"
      >
        <div class="cursor-pointer font-base text-sm md:font-md  min-w-fit">
          Daugiau apie procedūras
        </div>
        <Arrow />
      </a> -->
    </ContentContainer>
  </LayoutContainer>
</div>
