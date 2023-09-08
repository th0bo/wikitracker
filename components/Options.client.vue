<script setup lang="ts">
import { OptionsQueryData, Binding } from 'types/wikidata';

const { forward, item } = defineProps({
  forward: {
    type: Boolean,
    required: true,
  },
  item: {
    type: String,
    required: true,
  }
});

const locale = useI18n().locale.value;

const relation = forward ? `wd:${item} ?prop ?item.` : `?item ?prop wd:${item}.`;
const query =
`SELECT
  ?label1 ?item ?label2 ?prop ?p
WHERE {
  ${relation}
  ?item rdfs:label ?label1.
  ?p wikibase:directClaim ?prop.
  ?p rdfs:label ?label2.
  FILTER(LANG(?label1) = "${locale}").
  FILTER(LANG(?label2) = "${locale}").
}`;
const url = `https://query.wikidata.org/sparql?query=${encodeURI(query)}&format=json`;

const { data: optionsGroups } = await useFetch(url, {
  transform: (data: OptionsQueryData) => {
    const bindings = data.results.bindings;

    const propertyIdToOptionsGroup = new Map<string, Binding[]>();
    for (const binding of bindings) {
      const propId = binding.prop.value;
      (propertyIdToOptionsGroup.has(propId) ? (propertyIdToOptionsGroup.get(propId) as Binding[]) : (() => {
        const newGroup: Binding[] = [];
        propertyIdToOptionsGroup.set(propId, newGroup);
        return newGroup;
      })()).push(binding);
    }
    const optionsGroups = [...propertyIdToOptionsGroup.values()];
    return optionsGroups;
  }
});
</script>

<template>
  <OptionsGroup v-for="optionsGroup in optionsGroups" :data="optionsGroup"></OptionsGroup>
</template>