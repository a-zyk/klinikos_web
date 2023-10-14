<script>
  import { fade } from "svelte/transition";
  import data from "./data.js";
  import Bars from "../assets/Bars.svelte";
  import Close from "../assets/Close.svelte";

  let isNavShown = false;
</script>

{#if isNavShown}
  <div
    transition:fade
    class="fixed top-0 left-0 z-40 duration-100 bg-white h-full w-full flex flex-col items-end px-8 py-5"
  >
    <button class="cursor-pointer pt-4" on:click={() => (isNavShown = false)}
      ><Close /></button
    >
    <ul class="flex flex-col items-end py-16 leading-[86px] text-xl font-light">
      {#each data as item}
        <li>
          <a on:click={() => (isNavShown = false)} href={item.link}
            >{item.name}</a
          >
        </li>
      {/each}
    </ul>
  </div>
{/if}

<div class="flex w-full px-8 py-4">
  <a href="/">
    <img src="/small_logo.png" alt="small logo" />
  </a>
  <div class="flex-grow" />
  <button class="cursor-pointer" on:click={() => (isNavShown = true)}
    ><Bars /></button
  >
</div>
