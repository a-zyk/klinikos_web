<script>
  import LayoutContainer from "../../lib/layout/LayoutContainer.svelte";
  import ContentContainer from "../../lib/layout/ContentContainer.svelte";
  import TeamCard from "./TeamCard.svelte";
  import data from "./data";
</script>

<div class="bg-bg_lightest w-full">
  <LayoutContainer>
    <ContentContainer>
      <div class="flex flex-col items-center gap-10">
        <h1 class="text-2xl md:text-3xl lg:text-5xl font-bold font-jakarta">
          Komanda
        </h1>
        <div class="text-center">
          Susipažinkite su Baltijos veterinarijos klinikoje dirbančiais specialistais
        </div>
      </div>
      <div class="w-full flex flex-col gap-10 mt-10">
        {#each data as doctor}
          <TeamCard
            name={doctor.name}
            profession={doctor.profession}
            description={doctor.description}
            icons={doctor.icons}
            specialisation={doctor.specialisation}
            languages={doctor.languages}
            photo={doctor.photo}
          />
        {/each}
      </div>
    </ContentContainer>
  </LayoutContainer>
</div>
