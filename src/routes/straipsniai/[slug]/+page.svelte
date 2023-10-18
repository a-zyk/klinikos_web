<script>
  import LayoutContainer from "$lib/layout/LayoutContainer.svelte";
  import ContentContainer from "$lib/layout/ContentContainer.svelte";
  import Seo from "$lib/assets/Seo.svelte";
  import DOMPurify from 'isomorphic-dompurify';

  export let data;

  const cleanSmallContent = DOMPurify.sanitize(data.smallContent);
</script>

<div class="bg-bg_lightest w-full">
  <LayoutContainer>
    <ContentContainer>
      <div class="w-full flex items-center justify-center">
        <div class="flex flex-col items-center gap-10 max-w-[900px]">
          <div class="h-auto w-auto">
            <img
              class="w-full h-full"
              alt="straipsnio turini ilsiutruojanti nuotrauka"
              src="/cat_large.jpg"
            />
          </div>
          <h1 class="text-2xl md:text-3xl lg:text-5xl font-bold font-jakarta">
            {data.title}
          </h1>
          <div class="prose">
            {@html cleanSmallContent}
          </div>
        </div>
      </div>
    </ContentContainer>
  </LayoutContainer>
</div>

<Seo
  title={data.title}
  description={data.description}
  url={`/straipsniai/${data.slug}`}
  keywords="paslaugos, vet klinika"
/>
