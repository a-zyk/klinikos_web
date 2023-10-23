<script>
  import { LtFlag, EnFlag, PlFlag, RuFlag } from "$lib/assets";
  export let name = "";
  export let profession = "";
  export let specialization = "";
  export let description = "";
  export let languages = "";
  export let photo = "";

  const languageIconMap = {
    lietuvių: LtFlag,
    anglų: EnFlag,
    lenkų: PlFlag,
    rusų: RuFlag,
  };

  let icons = [];

  Object.entries(languageIconMap).forEach((entry) => {
    let [language, icon] = entry;
    if (languages.includes(language)) {
      icons.push(icon);
    }
  });
</script>

<div
  class="flex flex-col items-start bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-full"
>
  {#if photo}
    <img
      class="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-60 md:rounded-none md:rounded-l-lg"
      src={photo}
      alt="vet. gydytojo portretas"
    />
  {/if}
  <div class="flex flex-col justify-between px-4 py-7 leading-normal">
    <div class="flex gap-3 items-center mb-2">
      <h3 class="text-xl font-bold tracking-tight">{name}</h3>
      <div class="flex flex-col md:flex-row gap-3">
        {#each icons as icon}
          <div class="w-[20px] h-auto">
            <svelte:component this={icon} />
          </div>
        {/each}
      </div>
    </div>
    <h4 class="mb-2 text-md font-base">{profession}</h4>
    <p class="my-2">
      <span>Specializacijos sritys: </span><span class="font-semibold"
        >{specialization}.</span
      >
    </p>
    <p class="my-2">
      {description}
    </p>
    <p>Konsultuoja kalbomis: {languages}.</p>
  </div>
</div>
