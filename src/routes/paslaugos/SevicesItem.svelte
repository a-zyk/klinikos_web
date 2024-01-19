<script>
  import { Stethoscope, Tooth, Syringe, Paw, Wave, Virus } from "$lib/assets";
  export let procedures = "";

  let iconsMap = {
    ["Bendrosios procedūros"]: Stethoscope,
    ["Profilaktinės procedūros"]: Paw,
    ["Chirurgija"]: Syringe,
    ["Laboratoriniai tyrimai"]: Virus,
    ["Ultragarsiniai tyrimai"]: Wave,
    ["Odontologija"]: Tooth,
  };
  let procedureIcon;

  Object.entries(iconsMap).forEach((entry) => {
    let [item, icon] = entry;
    if (procedures.title.includes(item)) {
      procedureIcon = icon;
    }
  });

  const sortedProcedureItems = (items) => {
    return items.sort((a, b) => a.sort - b.sort)
  }
</script>

<div class="flex flex-col p-6 md:p-8 w-full bg-white rounded-lg">
  <div class="flex flex-col gap-2 my-4">
    <div class="flex pb-3">
      <svelte:component this={procedureIcon} />
      <h3 class="text-lg md:text-xl font-bold ml-3">{procedures.title}</h3>
      <div class="flex-grow" />
      {#if procedures.title == "Chirurgija" || procedures.title == "Odontologija"}
        <div>Kaina, eur.*</div>
      {:else}
        <div>Kaina, eur.</div>
      {/if}
    </div>
    {#each sortedProcedureItems(procedures.items) as procedure}
      <div
        id={procedure.title}
        class="flex border-b-2 p-2 text-sm lg:text-base opacity-80"
      >
        <div class="">
          {procedure.title}
        </div>
        <div class="flex-grow" />
        <div>{procedure.price}</div>
      </div>
    {/each}
    {#if procedures.title == "Chirurgija" || procedures.title == "Odontologija"}
      <div class="text-xs lg:text-sm opacity-80 mt-2">
        * Procedūros kaina pateikta be anestezijos vaistų, sunaudotų operacinių
        priemonių, pooperacinių vaistų kainos.
      </div>
    {/if}
    <div class="text-xs lg:text-sm opacity-80 mt-2">
      Pateiktas nepilnas procedūrų sąrašas. Pilno paslaugų ir atliekamų
      procedūrų sąrašo bei kainų teiraukitės telefonu ar atvykę į kliniką.
    </div>
  </div>
</div>
