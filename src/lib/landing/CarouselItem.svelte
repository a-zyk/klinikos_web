<script>
  import { Arrow } from "$lib/assets";
  import WhiteButton from "../assets/WhiteButton.svelte";
</script>

<div class="max-w-sm h-auto bg-white border border-gray-200 rounded-lg shadow">
  <a href="/">
    <img class="rounded-t-lg" src="/article_cat.jpg" alt="cat" />
  </a>
  <div class="p-5">
    <a href="/">
      <h5 class="mb-2 text-2xl font-bold tracking-tight">
        6 patarimai kaip išlaikyti augintinį sveika rudenį
      </h5>
    </a>
    <p class="mb-3 font-normal">
      Rudens sezonas atneša ne tik spalvingus lapus, bet ir vis dar aktyvias
      erkes bei kitus pavojus!
    </p>
    <WhiteButton href="/">
      <div class="flex gap-2 justify-center items-center">
        Skaitykite plačiau
        <Arrow />
      </div>
    </WhiteButton>
  </div>
</div>
