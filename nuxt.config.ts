// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  modules: ['@nuxtjs/google-fonts', '@nuxtjs/i18n', '@nuxt/eslint'],
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
      Inter: [300, 400, 500, 600, 700],
      'DM Sans': [300, 400, 500, 600, 700],
      Dongle: [700]
    }
  },
  i18n: {
    defaultLocale: 'ru',
    // baseUrl: 'https://www.tifw.uz/',
    detectBrowserLanguage: {
      useCookie: true,
      cookieKey: 'i18n_redirected',
      redirectOn: 'root'
    },
    locales: [
      {
        code: 'en',
        language: 'en-US',
        name: 'Eng',
        file: 'en.json'
      },
      {
        code: 'ru',
        language: 'ru-RU',
        name: 'Рус',
        file: 'ru.json'
      }
    ]
  }
});
