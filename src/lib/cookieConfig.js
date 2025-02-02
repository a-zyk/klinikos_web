const cookieConfig = {
  /**
   * You must set the cookie name.
   **/
  cookieName: "bvk_priv",

  /**
   * Whether to display the banner to the user or not. This can be because you're in an iframe
   * and there is no room to show it if they haven't already consented, but, if they have already
   * consented, you want to action the "enableAnalytics" and similar handlers if they *have*.
   *
   * Default is true
   *
   * For Web Components, pass `visible="true"`
   **/
  visible: true,

  /**
   * The cookie configuration, such as domain and path.
   *
   * For web components, pass a JSON string: `cookie-config='{ "domain": "example.com", "path": "/" }'`
   **/
  // cookieConfig: {
  //   domain: "baltijosveterinarijosklinika.lt",
  //   path: "/",
  // },

  /**
   * These are the top two lines of text on the banner
   * The 'description' field can include html such as links
   **/
  heading: "Privatumo politika",
  description: `Baltijos veterinarijos klinikų internetinėje svetainėje mes taikome slapukus tam, kad užtikrintume jums aukštos kokybės paslaugą, atsimintume jūsų pasirinkimus ir pakartotinius vizitus. Kai paspausite "Sutinku", leisite naudoti VISUS slapukus. Tačiau jūs turite galimybę valdyti savo sutikimo parinktis spustelėję "Redaguoti" mygtuką. Daugiau informacijos apie slapukų ir privatumo politiką rasite <a href="/privatumo-politika">čia</a>`,

  /**
   * All the button labels and aria-label content.
   **/
  acceptLabel: "Patvirtinti",
  rejectLabel: "Atmesti visus",
  settingsLabel: "Redaguoti",
  closeLabel: "Uždaryti",
  editLabel: "Redaguoti",

  /**
   * These are the default opt-ins and their descriptions.
   * When value is set to true, the option will automatically be checked on load.
   *
   * If you want to hide a category, simply set it to false, e.g. 'marketing: false'
   **/
  choices: {
    necessary: {
      label: "Privalomieji slapukai",
      description:
        "Būtini slapukai reikalingi norint įgalinti pagrindines šios svetainės funkcijas, tokias kaip saugaus prisijungimo užtikrinimas arba sutikimo nuostatų koregavimas. Šie slapukai nesaugo jokių asmenį identifikuojančių duomenų.",
      value: true,
    },
    tracking: false,
    analytics: {
      label: "Analitiniai slapukai",
      description:
        "Analitiniai slapukai naudojami siekiant suprasti, kaip lankytojai sąveikauja su svetaine. Šie slapukai padeda teikti informaciją apie tokius rodiklius kaip lankytojų skaičius, atmetimo rodiklis, srauto šaltinis ir kt.",
      value: true,
    },
    marketing: false,
  },

  /**
   * Show an icon to edit cookies later, when banner is closed.
   **/
  showEditIcon: false,
};

export default cookieConfig;
