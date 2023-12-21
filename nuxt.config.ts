import * as fs from "fs";
import * as path from "path";

const baseUrl =
  process.env.NODE_ENV === "production" && process.env.GITHUB_ACTIONS === "true"
    ? "/wikitracker/"
    : "/";

const link = fs
  .readdirSync(path.join(__dirname, "public", "favicon", "light"))
  .map((fileName) => ({ fileName, matcher: fileName.match(/\d+x\d+/) }))
  .filter(({ matcher }) => matcher !== null)
  .map(({ fileName, matcher }) => {
    const sizes = (matcher as RegExpMatchArray)[0];
    return {
      rel: "icon",
      type: "image/png",
      sizes,
      href: `${baseUrl}favicon/light/${fileName}`,
    };
  });

export default defineNuxtConfig({
  imports: {
    dirs: ["utils"],
  },
  app: {
    baseURL: baseUrl,
    head: {
      title: "WikiTracker",
      link,
    },
  },
  typescript: {
    strict: true,
    typeCheck: true,
  },
  devtools: { enabled: true },
  css: ["~/assets/css/main.css"],
  modules: [
    "@nuxtjs/robots",
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
          alwaysRedirect: false,
          fallbackLocale: "en",
          redirectOn: "no prefix",
          useCookie: false,
        },
        // vueI18n: './vue-i18n.options.ts'
      },
    ],
  ],
});
