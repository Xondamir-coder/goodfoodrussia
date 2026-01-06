// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  modules: ['@nuxtjs/google-fonts'],
  css: ['~/assets/scss/main.scss'],
  app: {
    head: {
      title: 'GoodFoodRussia',
      meta: [
        {
          name: 'description',
          content: 'Landing page for GoodFoodRussia'
        }
      ]
    }
  },
  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: `
          @use "~/assets/scss/abstracts/variables" as vars;
          @use "~/assets/scss/abstracts/mixins" as mix;
          `
        }
      }
    }
  },
  googleFonts: {
    display: 'swap',
    families: {
      Amarante: [400]
    }
  }
});
