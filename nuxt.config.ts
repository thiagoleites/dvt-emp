import tailwindcss from "@tailwindcss/vite";

export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  app: {
    pageTransition: { name: 'page', mode: 'out-in' }
  },
  devServer: {
    port: 3001
  },
  css: ['~/assets/css/main.css'],
  modules: [
    '@vueuse/nuxt',
    '@vueuse/motion/nuxt'
  ],
  vite: {
    plugins: [
      tailwindcss(),
    ],
  },
})
