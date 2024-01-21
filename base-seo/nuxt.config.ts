// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ['@nuxtjs/google-fonts', '@nuxtjs/seo'],
  googleFonts: {
    families: {
      'Noto Sans KR': [400, 700],
    },
  },
  ogImage: {
    fonts: ['Noto+Sans+KR:400', 'Noto+Sans+KR:700'],
  },
  robots: {
    enabled: false,
  },
  sitemap: {
    enabled: false,
  },
})
