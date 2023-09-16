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

const steps = ref([] as Step[]);
const index = ref(0);

const current = computed<{ id: string, forward: boolean }>(() => {
  const value = [{ id: startId, forward: true }, ...steps.value][index.value];
  return value;
});

const backward = ref(!current.value.forward);

const won = computed(() => current.value.id === endId);

watch(current, (newCurrentValue, oldCurrentValue) => {
  const nextStep = steps.value[index.value];
  if (nextStep !== undefined) {
    backward.value = !nextStep.forward; 
  } else {
    backward.value = !current.value.forward;
  }
});

</script>

<template>
  <EndModal
    v-if="won"
    :steps="steps"></EndModal>
  <Header
    @toggle-backward="backward = !backward"
    :backward="backward"
    ></Header>
  <main>
    <Breadcrumb
      v-if="data"
      @step-back="(i: number) => index = i"
      :start="data.start"
      :steps="steps"
      :end="data.end"
      :forward="!backward"
      :key="[current.forward, data.start, ...steps, data.end].join('_')"
      ></Breadcrumb>
    <Options
      @step-advance="(step: Step) => { steps = [...steps.slice(0, index), step]; index++; }"
      :forward="!backward"
      :item="current.id"
      :key="[current.id, !backward].join('_')"
      ></Options>
  </main>
</template>