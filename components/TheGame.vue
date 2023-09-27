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
        displayLabel: startLabel,
        wikidataUrl: startUrl,
        itemId: startId,
        enterBackward: false,
      },
      end: {
        displayLabel: endLabel,
        wikidataUrl: endUrl,
        itemId: endId,
      },
    } as { start: Step, end: Omit<Step, 'enterBackward'> };
  },
});

const start = data.value?.start as Step;

const steps = ref([] as Step[]);
const index = ref(0);

const current = computed<Step>(() => {
  const value = [start, ...steps.value][index.value];
  return value;
});

const backward = ref(current.value.enterBackward);

const won = computed(() => current.value.itemId === endId);

watch(current, () => {
  const nextStep = steps.value[index.value];
  if (nextStep !== undefined) {
    backward.value = nextStep.enterBackward;
  } else {
    backward.value = current.value.enterBackward;
  }
});

</script>

<template>
  <EndModal v-if="won" :steps="steps"></EndModal>
  <TheGameHeader @toggle-backward="backward = !backward" :backward="backward" :current-url="current.wikidataUrl"></TheGameHeader>
  <main>
    <TheGameBreadcrumb v-if="data" @step-back="(i: number) => index = i" :start="data.start" :steps="steps"
      :end="data.end" :backward="backward" :position="index" :won="won"
      :key="[!current.enterBackward, data.start, ...steps, data.end].join('_')"></TheGameBreadcrumb>
    <transition name="fade" mode="out-in">
      <OptionsList @step-advance="(step: Step) => { steps = [...steps.slice(0, index), step]; index++; }"
        :backward="backward" :item="current.itemId" :key="[current.itemId, backward].join('_')"></OptionsList>
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
  transition: opacity 800ms;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>