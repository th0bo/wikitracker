import fetch from "node-fetch";
import jsonFormat from "json-format";
import { Headers } from "node-fetch";
import * as process from "process";
import * as fs from "fs";
import { flatten, unflatten } from "flat";

console.log("generate-translations start");

const deeplAuthKey = process.env.DEEPL_AUTH_KEY;

const enLocale = JSON.parse(fs.readFileSync("locales/en.json").toString());

const flatEnLocale = Object.entries(flatten(enLocale));
/** DeepL API is able to translate chunks of texts as large as 50 */
const deeplMaxChunkSize = 50;

const targetLocales = fs
  .readdirSync("locales")
  .map((fileName) => fileName.replace(".json", ""))
  .filter((locale) => locale !== "en");
for (const targetLocale of targetLocales) {
  const targetLocaleFilePath = `locales/${targetLocale}.json`;
  const flatTargetLocale = (() => {
    try {
      return flatten(
        JSON.parse(fs.readFileSync(targetLocaleFilePath).toString())
      );
    } catch (e) {
      return {};
    }
  })();
  const enEntriesToTranslate = flatEnLocale.filter(
    ([key]) => !Object.hasOwn(flatTargetLocale, key)
  );
  const chunkedEnEntriesToTranslate = Array.from({
    length: Math.ceil(enEntriesToTranslate.length / deeplMaxChunkSize),
  }).map((v, i) =>
    enEntriesToTranslate.slice(
      i * deeplMaxChunkSize,
      (i + 1) * deeplMaxChunkSize
    )
  );
  try {
    const localeObject = unflatten({
      ...Object.fromEntries(
        (
          await Promise.all(
            chunkedEnEntriesToTranslate.map(async (chunk) => {
              const body = JSON.stringify({
                text: chunk.map(([, value]) => value), // 50 strings max
                target_lang: targetLocale,
                source_lang: "en",
              });
              const response = await fetch(
                "https://api-free.deepl.com/v2/translate",
                {
                  method: "POST",
                  headers: new Headers({
                    Authorization: `DeepL-Auth-Key ${deeplAuthKey}`,
                    "Content-Type": "application/json",
                  }),
                  body,
                }
              );
              const data = await response.json();
              return data.translations.map(({ text }, i) => [
                chunk[i][0],
                text,
              ]);
            })
          )
        ).flat()
      ),
      ...flatTargetLocale,
    });
    fs.writeFileSync(
      targetLocaleFilePath,
      jsonFormat(localeObject, {
        type: "space",
        size: 2,
      })
    );
  } catch (e) {
    console.error(
      `Unable to retrieve DeepL translations for locale ${targetLocale}`
    );
  }
}

console.log("generate-translations end");
