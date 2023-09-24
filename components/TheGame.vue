<script setup lang="ts">
import { Step } from 'types/game';
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
    let startUrl: string | null = null;
    let endLabel: string | null = null;
    let endUrl: string | null = null;
    for (const binding of data.results.bindings) {
      if (binding.item.value.endsWith(startId)) {
        startLabel = binding.label.value;
        startUrl = binding.item.value;
      } else if (binding.item.value.endsWith(endId)) {
        endLabel = binding.label.value;
        endUrl = binding.item.value;
      }
    }

    if ([startLabel, startUrl, endLabel, endUrl].includes(null)) {
      throw new Error();
    }

    return {
      start: {
        label: startLabel,
        url: startUrl,
        id: startId,
        forward: true,
      },
      end: {
        label: endLabel,
        url: endUrl,
        id: endId,
        forward: true,
      },
    } as { start: Step, end: Omit<Step, 'forward'> };
  },
});

const start = data.value?.start as Step;

const steps = ref([] as Step[]);
const index = ref(0);

const current = computed<Step>(() => {
  const value = [start, ...steps.value][index.value];
  return value;
});

const backward = ref(!current.value.forward);

const won = computed(() => current.value.id === endId);

watch(current, () => {
  const nextStep = steps.value[index.value];
  if (nextStep !== undefined) {
    backward.value = !nextStep.forward;
  } else {
    backward.value = !current.value.forward;
  }
});

</script>

<template>
  <EndModal v-if="won" :steps="steps"></EndModal>
  <TheGameHeader @toggle-backward="backward = !backward" :backward="backward"></TheGameHeader>
  <main>
    <TheGameBreadcrumb v-if="data" @step-back="(i: number) => index = i" :start="data.start" :steps="steps"
      :end="data.end" :forward="!backward" :position="index" :won="won"
      :key="[current.forward, data.start, ...steps, data.end].join('_')"></TheGameBreadcrumb>
    <transition name="fade" mode="out-in">
      <OptionsList @step-advance="(step: Step) => { steps = [...steps.slice(0, index), step]; index++; }"
        :forward="!backward" :item="current.id" :key="[current.id, !backward].join('_')"></OptionsList>
    </transition>
  </main>
</template>

<style scoped>
main {
  display: grid;
  grid-template-rows: min-content auto;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.2s;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>