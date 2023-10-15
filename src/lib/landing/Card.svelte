<script>
  export let title = "";
  export let description = "";
  export let icon;
  export let id;
</script>

<a
href="/paslaugos#{id}"
  class=" hover:translate-y-2 flex flex-col p-6 md:p-8 w-[250px] h-[250px] md:w-[300px] md:h-[300px] bg-white rounded-lg cursor-pointer"
>
  <svelte:component this={icon} />
  <div class="flex-grow" />
  <div class="flex flex-col gap-2 my-4">
    <h3 class="text-lg md:text-xl font-bold">{title}</h3>
    <p class="text-sm lg:text-base opacity-80">
      {description}
    </p>
  </div>
</a>
