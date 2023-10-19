<script>
  import FacebookIcon from "../assets/FacebookIcon.svelte";
  import InstagramIcon from "../assets/InstagramIcon.svelte";
  import FooterItemWrapper from "./FooterItemWrapper.svelte";
</script>

<div
  class="w-full flex flex-col items-center font-poppins bg-bg_light py-10 md:py-20"
>
  <div
    class="lg:max-w-[1600px] w-full px-8 py-4 flex flex-col gap-8 items-center md:items-start md:justify-between md:flex-row self-center"
  >
    <div class="hidden md:block">
      <img src="/small_logo.png" alt="small logo" />
    </div>
    <FooterItemWrapper>
      <div class="font-bold">Kontaktai</div>
      <div>+370 604845793</div>
      <div>baltijosklinika@gmail.com</div>
    </FooterItemWrapper>
    <FooterItemWrapper>
      <div class="font-bold">Darbo laikas</div>
      <div>I - V 10 - 20 val.</div>
      <div>VI 10 - 18 val.</div>
      <div>VII nedirbame</div>
    </FooterItemWrapper>
    <FooterItemWrapper>
      <div class="font-bold">Adresas</div>
      <div>Senasis Ukmergės k. 39A</div>
      <div>Užubaliai, Vilniaus r.</div>
    </FooterItemWrapper>
  </div>
  <div class="flex flex-col items-center justify-center mt-8">
    <div class="flex gap-5 my-5">
      <a
        href="https://www.facebook.com/baltijosveterinarijosklinika/"
        target="_blank"><FacebookIcon /></a
      >
      <a href="https://www.instagram.com/baltijosveterinarija/" target="_blank"
        ><InstagramIcon /></a
      >
    </div>
    <div class="mt-5 flex flex-col gap-2 items-center text-xs font-light">
      <div><a href="/privatumo-politika">Privatumo politika</a></div>
      <div>Visos teisės saugomos 2023</div>
      <div>Baltijos veterinarijos klinika</div>
    </div>
  </div>
</div>
