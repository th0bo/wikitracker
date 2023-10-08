import fetch from 'node-fetch';

const sparqlQuery = `SELECT ?startItem WHERE {
  VALUES ?startItem { wd:Q1 }
  ?startItem rdfs:label ?startItemLabel.
  VALUES ?endItem { wd:Q2 }
  ?endItem rdfs:label ?endItemLabel.
  FILTER(LANG(?startItemLabel) = "en")
  FILTER(LANG(?endItemLabel) = "en")
}`;
const url = `https://query.wikidata.org/sparql?query=${encodeURI(sparqlQuery)}&format=json`;

fetch(url)
  .then(response => response.json())
  .then(data => {
    console.log(data.results.bindings);
  });