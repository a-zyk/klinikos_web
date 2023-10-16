<script>
  import LayoutContainer from "../layout/LayoutContainer.svelte";
  import ContentContainer from "../layout/ContentContainer.svelte";
  import Home from "../assets/Home.svelte";
  import Clock from "../assets/Clock.svelte";
  import HeroItemWrapper from "./HeroItemWrapper.svelte";
  import Phone from "../assets/Phone.svelte";
  import Button from "../assets/Button.svelte";
</script>

<div class="bg-bg_light w-full">
  <LayoutContainer>
    <ContentContainer>
      <div class="flex relative ">
        <div class="flex flex-col  z-20">
          <div class="flex my-1 items-center gap-2 font-jakarta font-semibold">
            <div
              class="w-[50px] md:w-[100px] opacity-60 border-b-4 border-b-primary_text rounded-md"
            />
            <h1 class="md:opacity-60 text-lg md:text-lg">Baltijos veterinarijos klinika</h1>
          </div>
          <div class="font-jakarta py-3 text-3xl md:text-4xl lg:text-7xl font-bold text-center md:text-start">
            Jūsų augintinių draugai
          </div>
          <div class="flex flex-col self-center md:self-start font-medium gap-7 py-5 md:py-10">
            <HeroItemWrapper>
              <Phone classes="h-10 w-10" />
              <div class="font-semibold">+370 3489593</div>
            </HeroItemWrapper>
            <div class="flex flex-col">
              <HeroItemWrapper>
                <Clock classes="h-10 w-10" />
                <div class="flex flex-col">
                  <div>I - V 10 - 20 val.</div>
                  <div>VI 10 - 18 val.</div>
                  <div>VII nedirbame</div>
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
          <div class="self-center md:self-auto lg:self-center my-6">
            <Button>Registracija vizitui</Button>
          </div>
        </div>
        <div class="flex-grow" />
        <div class="hidden md:flex flex-col h-auto w-[450px] absolute bottom-0 md:-right-10 lg:right-0 z-10">
          <img class="h-full" alt="puppy" src="/hero_dog.png" />
        </div>
        <div class="md:hidden flex flex-col opacity-60 h-auto w-[450px] absolute bottom-0 right-24 lg:right-0 z-10">
          <img class="h-full" alt="puppy" src="/hero_dog.png" />
        </div>
      </div>
    </ContentContainer>
  </LayoutContainer>
</div>
