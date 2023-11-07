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

/**
 * This query fetches data for start and end items.
 */
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
/**
 * True if the items currently shown are those with links
 * to the current item, false if they are those that the 
 * current item links to.
 */
const currentlyBackward = ref(false);

/**
 * The item on top of the steps chain. It is not yet a past step as 
 * we don't currently know the property that will be used to leave it.
 */
const currentTopItem = ref(startItem);
const gameIsWon = computed(() => currentTopItem.value.id === endItem.id);

/** Past steps are composed of an item and the property used to 
 * leave this item with a boolean indicating if this property's is backwards
 * (true if the property links to the item false if it link from it).
 */
const pastSteps = ref<PastStep[]>([]);
const pastStepsKey = computed(() => pastSteps.value.map(
  ({ item, exitProperty }) => ([item.id, exitProperty.backward, exitProperty.id].join('-'))
).join(','));

/**
 * Index of the selected item in the array made out of the past steps' items
 * and the current top item at the end.
 */
const selectedIndex = ref(0);
const selectedPastStep = computed<PastStep | undefined>(() => pastSteps.value[selectedIndex.value]);
/**
 * When the value of this computed variable changes, if its new value is not 
 * undefined, the currentlyBackward state variable takes this value.
 */
const selectedPastStepExitedBackward = computed<boolean | undefined>(
  () => (pastSteps.value[selectedIndex.value] ?? undefined)?.exitProperty.backward
);
watch(selectedPastStepExitedBackward, value => {
  if (value !== undefined) {
    currentlyBackward.value = value;
  }
});
/**
 * Item for which next items are currently shown.
 */
const selectedItem = computed(() => selectedPastStep.value?.item ?? currentTopItem.value);

/**
 * When a next step is chosen, some past steps can be discarded (if the selected item belonged
 * to a past step). Then, a past step is made out of the selected item, the chosen property
 * and the chosen item becomes the current top item and the index of the currently selected 
 * item is incremented, so the current top item becomes the selected item.
 */
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
};

/**
 * When a past step is chosen, the index of the currently selected item changes.
 */
const stepBackHandler = (i: number) => {
  selectedIndex.value = i;
};

onBeforeRouteLeave((to, from, next) => {
  if (pastSteps.value.length > 0 && !confirm(t("quitGuard"))) {
    next(false);
  } else {
    next();
  }
});

const beforeUnloadListener = (event: BeforeUnloadEvent) => {
  if (pastSteps.value.length > 0) {
    event.preventDefault();
    event.returnValue = t("quitGuard");
  }
};
onBeforeMount(() => {
  window.window.addEventListener("beforeunload", beforeUnloadListener);
});
onBeforeUnmount(() => {
  window.removeEventListener("beforeunload", beforeUnloadListener);
});

</script>

<template>
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
    <TheGameBreadcrumb v-if="data" @step-back="stepBackHandler" :past-steps="pastSteps" :selected-index="selectedIndex"
      :current-top-item="currentTopItem" :end-item="endItem" :currently-backward="currentlyBackward"
      :game-is-won="gameIsWon"
      :key="[pastStepsKey, selectedIndex, currentTopItem.id, endItem.id, currentlyBackward, gameIsWon].join('_')">
    </TheGameBreadcrumb>
    <div id="options-container">
      <div class="fade-buffer">
      </div>
      <transition name="fade" mode="out-in">
        <EndScreen v-if="gameIsWon" :past-steps="pastSteps" :end-item="endItem"></EndScreen>
        <OptionsList v-else @step-advance="stepAdvanceHandler" :currently-backward="currentlyBackward"
          :selected-item="selectedItem" :key="[selectedItem.id, currentlyBackward].join('_')"></OptionsList>
      </transition>
    </div>
  </main>
</template>

<style scoped>
main {
  display: grid;
  grid-template-rows: min-content auto;
}

#options-container {
  position: relative;
  overflow-y: auto;
}


div#options-container::-webkit-scrollbar {
  width: 0.4rem;
  background: var(--tertiary);
}
div#options-container::-webkit-scrollbar-thumb {
  background: var(--blue);
}

.fade-buffer {
  height: 0.75rem;
  position: sticky;
  top: 0;
  background: linear-gradient(to top, transparent, var(--background));
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