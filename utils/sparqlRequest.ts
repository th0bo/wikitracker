import { QueryData } from '../types/wikidata';

const limit = 200;

export const buildSparqlRequest = (sparqlQuery: string) => {
  const encodedLimitedQuery = encodeURI(sparqlQuery + ' LIMIT ' + limit);
  return `https://query.wikidata.org/sparql?query=${encodedLimitedQuery}&format=json`;
}

export const isPartial = <Binding>(data: QueryData<Binding>) => {
  return data.results.bindings.length === limit;
}