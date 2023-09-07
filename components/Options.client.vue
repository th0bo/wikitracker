<script setup lang="ts">
import { OptionsQueryData, Binding } from 'types/wikidata';

const url = `https://query.wikidata.org/sparql?query=SELECT%20?label1%20?item%20?label2%20?prop%20?p%20WHERE%20%7B%0A%20%20%20%20%20%20%20%20wd:Q161904%20?prop%20?item.%0A%20%20%20%20%20%20%20%20?item%20rdfs:label%20?label1.%0A%20%20%20%20%20%20%20%20?p%20wikibase:directClaim%20?prop.%0A%20%20%20%20%20%20%20%20?p%20rdfs:label%20?label2.%0A%20%20%20%20%20%20%20%20FILTER(LANG(?label1)%20=%20%22fr%22).%0A%20%20%20%20%20%20%20%20FILTER(LANG(?label2)%20=%20%22fr%22).%0A%20%20%20%20%7D&format=json`;

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