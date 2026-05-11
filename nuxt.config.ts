const siteUrl = process.env.NUXT_SITE_URL || 'https://goodfoodrussia.uz';

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  modules: ['@nuxtjs/google-fonts', '@nuxtjs/i18n', '@nuxt/eslint', '@pinia/nuxt', '@nuxtjs/seo'],
  css: ['~/assets/scss/main.scss'],
  site: {
    url: siteUrl,
    name: 'Good Food Russia',
    description:
      'Official Good Food Russia showroom platform for products, services, recipes, and media.',
    defaultLocale: 'ru'
  },
  app: {
    head: {
      title: 'Good Food Russia',
      titleTemplate: '%s | Good Food Russia',
      htmlAttrs: {
        lang: 'ru'
      },
      link: [
        { rel: 'icon', type: 'image/svg+xml', href: '/favicon.svg' },
        { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
        { rel: 'icon', type: 'image/png', sizes: '96x96', href: '/favicon-96x96.png' },
        { rel: 'apple-touch-icon', sizes: '180x180', href: '/apple-touch-icon.png' },
        { rel: 'manifest', href: '/site.webmanifest' }
      ],
      meta: [
        { name: 'theme-color', content: '#ffffff' },
        { name: 'msapplication-TileColor', content: '#ffffff' }
      ]
    }
  },
  schemaOrg: {
    identity: {
      type: 'Organization',
      name: 'Good Food Russia',
      url: siteUrl,
      logo: `${siteUrl}/web-app-manifest-512x512.png`,
      email: 'support@goofood.uz',
      telephone: '+998901234567'
    }
  },
  sitemap: {
    discoverImages: true
  },
  robots: {
    credits: false
  },
  ogImage: {
    enabled: false
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
      Inter: '300..700',
      'Nunito Sans': '300..700',
      Dongle: [700]
    }
  },
  i18n: {
    defaultLocale: 'ru',
    baseUrl: siteUrl,
    detectBrowserLanguage: {
      useCookie: true,
      cookieKey: 'i18n_redirected',
      redirectOn: 'root'
    },
    locales: [
      {
        code: 'uz',
        language: 'uz-UZ',
        name: "O'zb",
        file: 'uz.json'
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
