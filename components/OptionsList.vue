<script setup lang="ts">
import { Step } from 'types/game';
import { OptionsQueryData, OptionsBinding } from 'types/wikidata';

const { forward, item } = defineProps<{ forward: boolean, item: string }>();

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

const { data: optionsGroups } = await useFetch(buildSparqlRequest(query), {
  transform: (data: OptionsQueryData) => {
    const bindings = data.results.bindings;

    const propertyIdToOptionsGroup = new Map<string, OptionsBinding[]>();
    for (const binding of bindings) {
      const propId = binding.prop.value;
      (propertyIdToOptionsGroup.has(propId) ? (propertyIdToOptionsGroup.get(propId) as OptionsBinding[]) : (() => {
        const newGroup: OptionsBinding[] = [];
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
  <div>
    <div v-if="optionsGroups !== null && optionsGroups.length === 0">
      {{ $t('nothing') }}
    </div>
    <OptionsListGroup v-for="optionsGroup in optionsGroups" :key="optionsGroup[0].prop.value"
      @step-advance="(step: Step) => $emit('step-advance', step)" :data="optionsGroup" :backward="!forward"></OptionsListGroup>
  </div>
</template>

<style scoped>
div {
  overflow-y: auto;
}
</style>