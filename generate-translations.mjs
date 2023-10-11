import fetch from "node-fetch";
import { Headers } from "node-fetch";
import * as process from "process";
import * as fs from "fs";
import { flatten, unflatten } from "flat";

console.log("generate-translations start");

const deeplAuthKey = process.env.DEEPL_AUTH_KEY;

const enLocale = JSON.parse(fs.readFileSync("locales/en.json").toString());

const flatEnLocale = Object.entries(flatten(enLocale));
const deeplMaxChunkSize = 50;
const chunkedEntries = Array.from({
  length: Math.ceil(flatEnLocale.length / deeplMaxChunkSize),
}).map((v, i) =>
  flatEnLocale.slice(i * deeplMaxChunkSize, (i + 1) * deeplMaxChunkSize)
);

for (const targetLocale of ["es", "ja", "ko"]) {
  const localeObject = unflatten(
    Object.fromEntries(
      (
        await Promise.all(
          chunkedEntries.map(async (entriesChunk) => {
            const body = JSON.stringify({
              text: entriesChunk.map(([, value]) => value), // 50 strings max
              target_lang: targetLocale,
              // source_lang: 'en',
            });
            console.log(body);
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
            console.log(data);
            return data.translations.map(({ text }, i) => [
              entriesChunk[i][0],
              text,
            ]);
          })
        )
      ).flat()
    )
  );
  fs.writeFileSync(
    `locales/${targetLocale}.json`,
    JSON.stringify(localeObject)
  );
}

console.log("generate-translations end");

// fetch("https://api-free.deepl.com/v2/translate", {
//   method: "POST",
//   headers: new Headers({
//     Authorization: `DeepL-Auth-Key ${deeplAuthKey}`,
//     "Content-Type": "application/json",
//   }),
//   body: JSON.stringify({
//     text: ["Hello, world!", "Yes"], // 50 strings max
//     target_lang: "de",
//   }),
// })
//   .then((response) => response.json())
//   .then((data) => {

//     {
//       translations: [
//         { detected_source_language: 'EN', text: 'Hallo, Welt!' },
//         { detected_source_language: 'EN', text: 'Ja' }
//       ]
//     }
//     console.log(data);
//   });
