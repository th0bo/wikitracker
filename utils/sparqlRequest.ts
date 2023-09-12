export const buildSparqlRequest = (sparqlQuery: string) => {
  const encodedLimitedQuery = encodeURI(sparqlQuery + ' LIMIT 200');
  return `https://query.wikidata.org/sparql?query=${encodedLimitedQuery}&format=json`;
}