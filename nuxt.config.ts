// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  css: ['~/assets/css/main.css'],
  modules: [
    [
      '@nuxtjs/i18n',
      {
        experimental: {
          jsTsFormatResource: true
        },
        compilation: {
          strictMessage: false,
          escapeHtml: true
        },
        langDir: 'locales',
        lazy: false,
        baseUrl: 'http://localhost:3000',
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
        // trailingSlash: true,
        debug: false,
        defaultLocale: 'en',
        // strategy: 'no_prefix',
        // strategy: 'prefix',
        // strategy: 'prefix_and_default',
        strategy: 'prefix',
        // rootRedirect: '/ja/about-ja',
        // dynamicRouteParams: true,
        // customRoutes: 'config',
        pages: {},
        // differentDomains: true,
        // skipSettingLocaleOnNavigate: true,
        // detectBrowserLanguage: false,
        // detectBrowserLanguage: {
        //   useCookie: true
        //   // alwaysRedirect: true
        //   // cookieKey: 'i18n_redirected',
        //   // // cookieKey: 'my_custom_cookie_name',
        //   // redirectOn: 'root'
        // },
        // vueI18n: './vue-i18n.options.ts'
      }
    ],
  ]
})
