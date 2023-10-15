<script>
  export let title = "";
  export let procedures = "";
  export let icon;
</script>

<div
  class="flex flex-col p-6 md:p-8 w-full bg-white rounded-lg"
>
  <div class="flex flex-col gap-2 my-4">
    <div class="flex pb-3">
      <h3 class="text-lg md:text-xl font-bold">{title}</h3>
      <div class="flex-grow" />
      <svelte:component this={icon} />
    </div>
    {#each procedures as procedure}
      <div id={procedure.title} class="flex border-b-2 p-2 text-sm lg:text-base opacity-80">
        <div class="">
          {procedure.title}
        </div>
        <div class="flex-grow" />
        <div>{procedure.price}</div>
      </div>
    {/each}
  </div>
</div>
