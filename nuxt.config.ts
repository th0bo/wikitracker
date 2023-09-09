export default defineNuxtConfig({
app: {
    baseURL: process.env.NODE_ENV === 'production' ? '/wikitracker/' : '',
  },
  devtools: { enabled: true },
  css: ['~/assets/css/main.css'],
  modules: [
    [
      '@nuxtjs/i18n',
      {
        langDir: 'locales',
        lazy: true,
        locales: [
          {
            code: 'en',
            iso: 'en-US',
            name: 'English',
            file: 'en.json'
          },
          {
            code: 'fr',
            iso: 'fr-FR',
            name: 'Français',
            file: 'fr.json'
          },
          {
            code: 'es',
            iso: 'es-ES',
            name: 'Español',
            file: 'es.json'
          },
          {
            code: 'ja',
            iso: 'ja-JA',
            name: '日本語',
            file: 'ja.json'
          },
        ],
        debug: false,
        defaultLocale: 'en',
        strategy: 'prefix',
        pages: {},
        detectBrowserLanguage: {
          alwaysRedirect: false,
          fallbackLocale: 'en',
          redirectOn: 'root',
          useCookie: true,
          cookieCrossOrigin: false,
          cookieDomain: null,
          cookieKey: 'i18n_redirected',
          cookieSecure: false
        }
        // vueI18n: './vue-i18n.options.ts'
      }
    ],
  ]
});
