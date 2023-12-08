import fetch from "node-fetch";
import * as fs from "fs";

console.log('generate-excluded-properties start');

// const sparqlQuery = `SELECT ?startItem WHERE {
//   VALUES ?startItem { wd:Q1 }
//   ?startItem rdfs:label ?startItemLabel.
//   VALUES ?endItem { wd:Q2 }
//   ?endItem rdfs:label ?endItemLabel.
//   FILTER(LANG(?startItemLabel) = "en")
//   FILTER(LANG(?endItemLabel) = "en")
// }`;
// const url = `https://query.wikidata.org/sparql?query=${encodeURI(
//   sparqlQuery
// )}&format=json`;

// const data = await fetch(url)
//   .then((response) => response.json())
//   .then((data) => {
//     console.log(data.results.bindings);
//     return [];
//   });

const data = ["P301", "P910", "P1424", "P5008"];
const fileContent = JSON.stringify(data);
const dir = "assets/json";
if (!fs.existsSync(dir)) {
  fs.mkdirSync(dir, { recursive: true });
}
fs.writeFileSync(dir + "/excluded-properties.json", fileContent);

console.log('generate-excluded-properties end');
