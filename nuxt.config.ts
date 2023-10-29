export default defineNuxtConfig({
  imports: {
    dirs: ["utils"],
  },
  app: {
    baseURL: process.env.NODE_ENV === "production" ? "/wikitracker/" : "",
  },
  typescript: {
    strict: true,
    typeCheck: true,
  },
  devtools: { enabled: true },
  css: ["~/assets/css/main.css"],
  modules: [
    [
      "@nuxtjs/i18n",
      {
        langDir: "locales",
        lazy: true,
        locales: [
          {
            code: "en",
            iso: "en-US",
            name: "English",
            file: "en.json",
          },
          {
            code: "fr",
            iso: "fr-FR",
            name: "Français",
            file: "fr.json",
          },
          {
            code: "es",
            iso: "es-ES",
            name: "Español",
            file: "es.json",
          },
          {
            code: "ja",
            iso: "ja-JA",
            name: "日本語",
            file: "ja.json",
          },
          {
            code: "ko",
            iso: "ko",
            name: "한국어",
            file: "ko.json",
          },
          {
            code: "he",
            iso: "he",
            name: "עִברִית",
            file: "he.json",
            dir: "rtl",
          },
        ],
        debug: false,
        defaultLocale: "en",
        strategy: "prefix",
        pages: {},
        detectBrowserLanguage: {
          alwaysRedirect: true,
          fallbackLocale: "en",
          redirectOn: "root",
          useCookie: false,
        },
        // vueI18n: './vue-i18n.options.ts'
      },
    ],
  ],
});
