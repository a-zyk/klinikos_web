<script>
  export let href = "";
</script>

<a {href}>
  <button
    class="font-jakarta text-white text-xl font-semibold bg-primary_blue px-6 py-4 md:px-8 md:py-6 rounded-2xl hover:bg-blue-800 focus:outline-none"
  >
    <slot />
  </button>
</a>
