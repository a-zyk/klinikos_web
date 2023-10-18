/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,js,svelte,ts}"],
  theme: {
    extend: {
      colors: {
        primary_blue: "#3781E3",
        secondary_blue: "#488FDD",
        primary_text: "#00214D",
        bg_lightest: "#E9F4FF",
        bg_light: "#D5E5F5",
        accent_blue: "#75A4DA",
      },
      fontFamily: {
        jakarta: ['"Plus Jakarta Sans"'],
        poppins: ['"Poppins"'],
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
};