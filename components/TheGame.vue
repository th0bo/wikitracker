<script setup lang="ts">
import { Item, Property, PastStep } from '../types/game';
import { QueryData, ResultCell, ResultLabel } from '../types/wikidata';

interface EndsBinding {
  startItemLabel: ResultLabel;
  startItem: ResultCell;
  endItemLabel: ResultLabel;
  endItem: ResultCell;
}
type EndsQueryData = QueryData<EndsBinding>;

const { startId, endId, locale } = defineProps<{ startId: string, endId: string, locale: string }>();
const { t } = useI18n();

const query =
  `SELECT ?startItem ?startItemLabel ?endItem ?endItemLabel WHERE {
  VALUES ?startItem { wd:${startId} }
  ?startItem rdfs:label ?startItemLabel.
  VALUES ?endItem { wd:${endId} }
  ?endItem rdfs:label ?endItemLabel.
  FILTER(LANG(?startItemLabel) = "${locale}")
  FILTER(LANG(?endItemLabel) = "${locale}")
}`;

const { data, error } = await useFetch(buildSparqlRequest(query), {
  transform: (data: EndsQueryData) => {
    if (data.results.bindings.length === 0) {
      throw new Error();
    }
    const { startItem, startItemLabel, endItem, endItemLabel } = data.results.bindings[0];
    return {
      startItem: {
        label: startItemLabel.value,
        url: startItem.value,
        id: startId,
      },
      endItem: {
        label: endItemLabel.value,
        url: endItem.value,
        id: endId,
      },
    } as { startItem: Item, endItem: Item };
  },
});

if (error.value !== null) {
  throw createError({ statusCode: 404, fatal: true });
}

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

onBeforeRouteLeave((to, from, next) => {
  if (pastSteps.value.length > 0 && !confirm(t("quitGuard"))) {
    next(false);
  } else {
    next();
  }
});

</script>

<template>
  <EndModal v-if="gameIsWon" :past-steps="pastSteps" :end-item="endItem"></EndModal>
  <TheHeader>
    <HomeLink></HomeLink>
    <div></div>
    <Transition mode="out-in" name="turn">
      <DirectionButton @toggle-backward="currentlyBackward = !currentlyBackward" :backward="currentlyBackward"
        :key="[currentlyBackward].join('_')">
      </DirectionButton>
    </Transition>
    <div></div>
    <InformationLink></InformationLink>
    <WikidataLink :item-url="selectedItem.url" :key="selectedItem.url"></WikidataLink>
  </TheHeader>
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
  transition: opacity 200ms;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>