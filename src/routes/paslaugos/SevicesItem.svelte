<script>
  import {
    Stethoscope,
    Tooth,
    Syringe,
    Paw,
    Wave,
    Virus,
  } from "$lib/assets";
  export let procedures = "";

  let iconsMap = {
    ["Bendros procedūros"]: Stethoscope,
    ["Profilaktinės procedūros"]: Paw,
    Chirurgija: Syringe,
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
</script>

<div class="flex flex-col p-6 md:p-8 w-full bg-white rounded-lg">
  <div class="flex flex-col gap-2 my-4">
    <div class="flex pb-3">
      <h3 class="text-lg md:text-xl font-bold">{procedures.title}</h3>
      <div class="flex-grow" />
      <svelte:component this={procedureIcon} />
    </div>
    {#each procedures.items as procedure}
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
  </div>
</div>
