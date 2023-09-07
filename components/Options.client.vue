<script setup>
const url = `https://query.wikidata.org/sparql?query=SELECT%20?label1%20?item%20?label2%20?prop%20?p%20WHERE%20%7B%0A%20%20%20%20%20%20%20%20wd:Q161904%20?prop%20?item.%0A%20%20%20%20%20%20%20%20?item%20rdfs:label%20?label1.%0A%20%20%20%20%20%20%20%20?p%20wikibase:directClaim%20?prop.%0A%20%20%20%20%20%20%20%20?p%20rdfs:label%20?label2.%0A%20%20%20%20%20%20%20%20FILTER(LANG(?label1)%20=%20%22fr%22).%0A%20%20%20%20%20%20%20%20FILTER(LANG(?label2)%20=%20%22fr%22).%0A%20%20%20%20%7D&format=json`;
const { data: optionsGroups } = await useFetch(url, {
  transform: (data) => {
    /**
     * @type Array<{ prop: { type: "uri", value: string }, item: { type: "uri", value: string }, p: { type: "uri", value: string }, label1: { type: "literal", "xml:lang": string, value: string }, label2: { type: "literal", "xml:lang": string, value: string } }>
     */
    const bindings = data.results.bindings;

    /**
     * @type Map<string, any[]>
     */
    const propertyIdToOptionsGroup = new Map();
    for (const binding of bindings) {
      const propId = binding.prop.value;
      (propertyIdToOptionsGroup.has(propId) ? propertyIdToOptionsGroup.get(propId) : (() => {
        const newGroup = [];
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