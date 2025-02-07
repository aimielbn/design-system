// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ["@nuxtjs/tailwindcss", "@nuxt/image"],
  css: [
    "remixicon/fonts/remixicon.css",
    "highlight.js/styles/night-owl.min.css",
    "@fortawesome/fontawesome-free/css/all.css",
    "./assets/font.css"
  ],
  tailwindcss: {
    config: {
      plugins: [require("@tailwindcss/forms")],
      theme: {
        extend: {
            fontFamily: {
              sans: ['Righteous'],
              serif: ['Montserrat']
            },
        },
      }
    },
  },
});