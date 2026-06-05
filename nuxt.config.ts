export default defineNuxtConfig({
  compatibilityDate: '2026-06-04',
  devtools: { enabled: false },
  nitro: {
    preset: 'static',
  },
  modules: ['@nuxt/fonts'],
  css: ['~/assets/css/main.css'],
  app: {
    baseURL: process.env.NUXT_APP_BASE_URL || '/',
    head: {
      title: 'Kristina Culka | Systemic Constellations and Life Coaching',
      meta: [
        {
          name: 'description',
          content:
            'Private family constellations, NLP coaching, and mindfulness coaching with Kristina Culka in London.',
        },
      ],
      htmlAttrs: {
        lang: 'en',
      },
    },
  },
  fonts: {
    families: [
      { name: 'Cormorant', provider: 'google', weights: [300, 400, 500, 600, 700] },
      { name: 'Montserrat', provider: 'google', weights: [300, 400, 500, 600, 700] },
    ],
  },
})
