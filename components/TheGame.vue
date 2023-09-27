<script setup lang="ts">
import { Item, Property, PastStep } from 'types/game';
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
    let startItemLabel: string | null = null;
    let startItemUrl: string | null = null;
    let endItemLabel: string | null = null;
    let endItemUrl: string | null = null;
    for (const binding of data.results.bindings) {
      if (binding.item.value.endsWith(startId)) {
        startItemLabel = binding.label.value;
        startItemUrl = binding.item.value;
      } else if (binding.item.value.endsWith(endId)) {
        endItemLabel = binding.label.value;
        endItemUrl = binding.item.value;
      }
    }

    if ([startItemLabel, startItemUrl, endItemLabel, endItemUrl].includes(null)) {
      throw new Error();
    }

    return {
      startItem: {
        label: startItemLabel,
        url: startItemUrl,
        id: startId,
      },
      endItem: {
        label: endItemLabel,
        url: endItemUrl,
        id: endId,
      },
    } as { startItem: Item, endItem: Item };
  },
});

const startItem = data.value?.startItem as Item;
const endItem = data.value?.endItem as Item;
const currentlyBackward = ref(false);

const currentTopItem = ref(startItem);
const gameIsWon = computed(() => currentTopItem.value.id === endItem.id);

const pastSteps = ref<PastStep[]>([]);
const pastStepsKey = computed(() => pastSteps.value.map(
  ({ item, exitProperty }) => ([item.id, exitProperty.backward, exitProperty.id].join('-'))
).join(','));

const selectedIndex = ref(0);
const selectedPastStep = computed<PastStep | undefined>(() => pastSteps.value[selectedIndex.value]);
const selectedPastStepExitedBackward = computed<boolean | undefined>(
  () => (pastSteps.value[selectedIndex.value] ?? undefined)?.exitProperty.backward
);
watch(selectedPastStepExitedBackward, value => {
  if (value !== undefined) {
    currentlyBackward.value = value;
  }
});
const selectedItem = computed(() => selectedPastStep.value?.item ?? currentTopItem.value);

const stepAdvanceHandler = ({ exitProperty, newTopItem }: { exitProperty: Property, newTopItem: Item }) => {
  pastSteps.value = [
    ...pastSteps.value.slice(0, selectedIndex.value),
    {
      item: selectedItem.value,
      exitProperty,
    }
  ];
  currentTopItem.value = newTopItem;
  selectedIndex.value++;
}

</script>

<template>
  <EndModal v-if="gameIsWon" :past-steps="pastSteps" :end-item="endItem"></EndModal>
  <TheGameHeader @toggle-backward="currentlyBackward = !currentlyBackward" :currently-backward="currentlyBackward"
    :current-item-url="selectedItem.url">
  </TheGameHeader>
  <main>
    <TheGameBreadcrumb v-if="data" @step-back="(i: number) => selectedIndex = i" :past-steps="pastSteps"
      :selected-index="selectedIndex" :current-top-item="currentTopItem" :end-item="endItem"
      :currently-backward="currentlyBackward" :game-is-won="gameIsWon"
      :key="[pastStepsKey, selectedIndex, currentTopItem.id, endItem.id, currentlyBackward, gameIsWon].join('_')">
    </TheGameBreadcrumb>
    <transition name="fade" mode="out-in">
      <OptionsList @step-advance="stepAdvanceHandler" :currently-backward="currentlyBackward"
        :selected-item="selectedItem" :key="[selectedItem.id, currentlyBackward].join('_')"></OptionsList>
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