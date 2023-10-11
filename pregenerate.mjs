import fetch from "node-fetch";
import { Headers } from "node-fetch";
import * as process from "process";
import * as fs from "fs";

const sparqlQuery = `SELECT ?startItem WHERE {
  VALUES ?startItem { wd:Q1 }
  ?startItem rdfs:label ?startItemLabel.
  VALUES ?endItem { wd:Q2 }
  ?endItem rdfs:label ?endItemLabel.
  FILTER(LANG(?startItemLabel) = "en")
  FILTER(LANG(?endItemLabel) = "en")
}`;
const url = `https://query.wikidata.org/sparql?query=${encodeURI(
  sparqlQuery
)}&format=json`;

fetch(url)
  .then((response) => response.json())
  .then((data) => {
    const fileContent = JSON.stringify(["P301", "P910", "P1424", "P5008"]);
    // const fileContent = JSON.stringify(["P301"]);
    // const fileContent = JSON.stringify(data.results.bindings);
    const dir = "assets/json";
    if (!fs.existsSync(dir)) {
      fs.mkdirSync(dir, { recursive: true });
    }
    fs.writeFileSync(dir + "/excluded-properties.json", fileContent);
    console.log(data.results.bindings);
  });

const deeplAuthKey = process.env.DEEPL_AUTH_KEY;

fetch("https://api-free.deepl.com/v2/translate", {
  method: "POST",
  headers: new Headers({
    Authorization: `DeepL-Auth-Key ${deeplAuthKey}`,
    "Content-Type": "application/json",
  }),
  body: JSON.stringify({
    text: ["Hello, world!", "Yes"],
    target_lang: "de",
  }),
})
  .then((response) => response.json())
  .then((data) => {
    console.log(data);
  });
