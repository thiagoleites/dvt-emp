import tailwindcss from "@tailwindcss/vite";

export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: process.env.NODE_ENV !== 'production' },
  app: {
    pageTransition: { name: 'page', mode: 'out-in' },
    head: {
      htmlAttrs: {
        lang: 'pt-BR'
      },
      link: [
        { rel: 'icon', type: 'image/svg+xml', href: '/favico.svg' },
        { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
        { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: '' },
        { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Figtree:ital,wght@0,300..900;1,300..900&display=swap' }
      ]
    }
  },
  runtimeConfig: {
    jwtSecret: process.env.JWT_SECRET,
    mailersendApiKey: process.env.MAILERSEND_API_KEY,
    mailersendFromEmail: process.env.MAILERSEND_FROM_EMAIL,
    mailersendToEmail: process.env.MAILERSEND_TO_EMAIL,
    powSecret: process.env.POW_SECRET,
  },
  devServer: {
    port: 3001
  },
  css: ['~/assets/css/main.css'],
  modules: [
    '@vueuse/nuxt',
    '@vueuse/motion/nuxt'
  ],
  routeRules: {
    '/': { swr: 300 },
    '/termos': { swr: 86400 },
    '/privacidade': { swr: 86400 },
  },
  nitro: {
    compressPublicAssets: true,
  },
  vite: {
    plugins: [
      tailwindcss(),
    ],
  },
})
