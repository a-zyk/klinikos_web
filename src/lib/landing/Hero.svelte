<script>
  import LayoutContainer from "../layout/LayoutContainer.svelte";
  import ContentContainer from "../layout/ContentContainer.svelte";
  import Home from "../assets/Home.svelte";
  import Clock from "../assets/Clock.svelte";
  import HeroItemWrapper from "./HeroItemWrapper.svelte";
  import Phone from "../assets/Phone.svelte";
  import Button from "../assets/Button.svelte";
  import mixpanel from "mixpanel-browser";
  const trackRegButton = () => {
  mixpanel.track("Reg button clicked");
}
</script>

<div class="bg-bg_light w-full">
  <LayoutContainer>
    <ContentContainer>
      <div class="flex relative">
        <div class="flex flex-col z-20">
          <div class="flex my-1 items-center gap-2 font-jakarta font-semibold">
            <div
              class="w-[50px] md:w-[100px] opacity-60 border-b-4 border-b-primary_text rounded-md"
            />
            <h1 class="md:opacity-60 text-lg md:text-lg">
              Baltijos veterinarijos klinika
            </h1>
          </div>
          <div
            class="font-jakarta py-3 text-3xl md:text-4xl lg:text-7xl font-bold text-center md:text-start"
          >
            Jūsų augintinių draugai
          </div>
          <div
            class="flex flex-col self-center md:self-start font-medium gap-7 py-5 md:py-10"
          >
            <HeroItemWrapper>
              <Phone classes="h-10 w-10" />
              <div class="font-semibold">+370 63633343</div>
            </HeroItemWrapper>
            <div class="flex flex-col">
              <HeroItemWrapper>
                <Clock classes="h-10 w-10" />
                <div class="flex flex-col">
                  <div class="flex gap-2 justify-between">
                    <div>I - V</div>
                    <div>10 - 19 val.</div>
                  </div>
                  <div class="flex gap-2 justify-between">
                    <div>VI</div>
                    <div>10 - 15 val.</div>
                  </div>
                  <div class="flex gap-2 justify-between">
                    <div>VII</div>
                    <div>nedirbame</div>
                  </div>
                </div>
              </HeroItemWrapper>
            </div>
            <div class="flex flex-col">
              <HeroItemWrapper>
                <Home classes="h-10 w-10" />
                <div>
                  <div>Senasis Ukmergės k. 39A</div>
                  <div>Užubaliai, Vilniaus r.</div>
                </div>
              </HeroItemWrapper>
            </div>
          </div> 
          <div  on:click={() => trackRegButton()}  class="hidden md:flex self-center md:self-auto lg:self-center my-6">
            <Button  href="/kontaktai">Registracija vizitui</Button>
          </div>
        </div>
        <div class="flex-grow" />
        <div
          class="hidden md:flex flex-col h-auto w-[450px] absolute bottom-0 md:-right-10 lg:right-0 z-10"
        >
          <img class="h-full" alt="puppy" src="/hero_dog.webp" />
        </div>
        <div
          class="md:hidden flex flex-col opacity-60 h-auto w-[450px] absolute bottom-0 right-24 lg:right-0 z-10"
        >
          <img class="h-full" alt="puppy" src="/hero_dog.webp" />
        </div>
      </div>
    </ContentContainer>
  </LayoutContainer>
</div>
