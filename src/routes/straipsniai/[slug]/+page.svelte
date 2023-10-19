<script>
  import LayoutContainer from "$lib/layout/LayoutContainer.svelte";
  import ContentContainer from "$lib/layout/ContentContainer.svelte";
  import Seo from "$lib/assets/Seo.svelte";
  import DOMPurify from "isomorphic-dompurify";
  import WhiteButton from "$lib/assets/WhiteButton.svelte";
  import Arrow from "$lib/assets/Arrow.svelte";
  export let data;

  const cleanSmallContent = DOMPurify.sanitize(data.smallContent);
</script>

<div class="bg-bg_lightest w-full">
  <LayoutContainer>
    <ContentContainer>
      <div class="w-full flex flex-col gap-4 items-center justify-center">
        <div class="flex flex-col gap-10 max-w-[900px]">
          <div class="h-auto w-auto">
            <img
              class="w-full h-full"
              alt="straipsnio turini ilsiutruojanti nuotrauka"
              src="https://klinika.fleetkick.com/assets/{data.largeImage}"
            />
          </div>
          <h1 class="text-2xl md:text-3xl lg:text-5xl font-bold font-jakarta">
            {data.title}
          </h1>
          <div class="prose max-w-full">
            {@html cleanSmallContent}
          </div>
        </div>

        <WhiteButton href="/kontaktai">
          <div class="flex gap-2 items-center">
            Registruotis vizitui <Arrow />
          </div></WhiteButton
        >
      </div>
    </ContentContainer>
  </LayoutContainer>
</div>

<Seo
  title={data.title}
  description={data.description}
  url={`/straipsniai/${data.slug}`}
  keywords={data.keywords}
/>
