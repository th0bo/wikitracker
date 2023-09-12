<script setup lang="ts">
import { Start, Step } from 'types/game';
import { EndsQueryData } from 'types/wikidata';

const { startId, endId, locale } = defineProps<{ startId: string, endId: string, locale: string }>();

const query =
`SELECT ?item ?label WHERE {
  VALUES ?item {  wd:${startId} wd:${endId} }
  ?item rdfs:label ?label.
  FILTER(LANG(?label) = "${locale}")
}`;

const { data } = await useFetch(buildSparqlRequest(query), {
  transform: (data: EndsQueryData) => {
    let startLabel: string | null = null;
    let endLabel: string | null = null;
    for (const binding of data.results.bindings) {
      if (binding.item.value.endsWith(startId)) {
        startLabel = binding.label.value;
      } else if (binding.item.value.endsWith(endId)) {
        endLabel = binding.label.value;
      }
    }

    if (startLabel === null || endLabel === null) {
      throw new Error();
    }

    return {
      start: {
        label: startLabel as string,
        url: '',
        id: startId,
      },
      end: {
        label: endLabel as string,
        url: '',
        id: endId,
      },
    } as { start: Start, end: Step };
  },
});

const steps = ref([
  { forward: true, id: 'Q3', label: 'vie', url: '' },
  { forward: true, id: 'Q4', label: 'mort', url: '' },
  { forward: false, id: 'Q5', label: 'être humain', url: '' },
  { forward: true, id: 'Q20', label: 'Norvège', url: '' },

] as Step[]);
const index = ref(0);
const forward = ref(true);

const current = computed(() => {
  console.log([startId, ...steps.value.map(({ id }) => id)][index.value]);
  return [startId, ...steps.value.map(({ id }) => id)][index.value];
});
</script>

<template>
  <Header></Header>
  <main>
    <Breadcrumb v-if="data" @step-back="i => index = i" :start="data.start" :steps="steps" :end="data.end" :forward="forward" :key="[forward, data.start, ...steps, data.end].join('_')"></Breadcrumb>
    <Options :forward="forward" :item="current" :key="[current, forward].join('_')"></Options>
  </main>
</template>