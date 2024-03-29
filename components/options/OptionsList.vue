<script setup lang="ts">
import type { Item, Property } from '~/types/game';
import type { QueryData, ResultCell, ResultLabel } from '~/types/wikidata';

import excludedProperties from '~/assets/json/excluded-properties.json';

interface OptionsBinding {
  prop: ResultCell;
  currentItem: ResultCell;
  p: ResultCell;
  currentItemLabel: ResultLabel;
  propLabel: ResultLabel;
}
type OptionsQueryData = QueryData<OptionsBinding>;

interface ItemsGroup {
  property: Property;
  items: Item[];
}

const { currentlyBackward, selectedItem } = defineProps<{ currentlyBackward: boolean, selectedItem: Item }>();

const locale = useI18n().locale.value;

const emit = defineEmits(['step-advance', 'loading-end']);

const exclusionClause = excludedProperties.map(p => 'wdt:' + p).join(', ');

const relation = currentlyBackward ? `?currentItem ?prop wd:${selectedItem.id}.` : `wd:${selectedItem.id} ?prop ?currentItem.`;
const query =
  `SELECT ?prop ?currentItem ?propLabel ?currentItemLabel ?p
WHERE {
  ${relation}
  FILTER( ?prop NOT IN(${exclusionClause}) ).
  ?currentItem rdfs:label ?currentItemLabel.
  ?p wikibase:directClaim ?prop.
  ?p rdfs:label ?propLabel.
  FILTER(LANG(?currentItemLabel) = "${locale}").
  FILTER(LANG(?propLabel) = "${locale}").
}`;

function mapExternalData({ prop, currentItem, propLabel, currentItemLabel }: OptionsBinding): { property: Property, item: Item } {
  const propId = prop.value.split('/').pop() ?? '';
  const itemId = currentItem.value.split('/').pop() ?? '';
  return {
    property: {
      id: propId,
      url: prop.value,
      label: propLabel.value,
      backward: currentlyBackward,
    },
    item: {
      id: itemId,
      url: currentItem.value,
      label: currentItemLabel.value,
    },
  }
}

const partial = ref(false);

const { data: itemsGroups, pending } = useFetch(buildSparqlRequest(query), {
  transform: (data: OptionsQueryData) => {
    partial.value = isPartial(data);
    const mappedData = data.results.bindings.map(mapExternalData);
    const propertyIdToItemsGroup = new Map<string, ItemsGroup>();

    for (const { property, item } of mappedData) {
      (propertyIdToItemsGroup.has(property.id) ? (propertyIdToItemsGroup.get(property.id) as ItemsGroup) : (() => {
        const newItemsGroup = { property, items: [] };
        propertyIdToItemsGroup.set(property.id, newItemsGroup);
        return newItemsGroup;
      })()).items.push(item);
    }
    const itemsGroups = [...propertyIdToItemsGroup.values()];
    return itemsGroups;
  }
});

watch(pending, value => {
  if (value === false) {
    emit("loading-end");
  }
});
</script>

<template>
  <div :class="{ loading: pending }">
    <div v-if="itemsGroups !== null && itemsGroups.length === 0">
      {{ $t('nothing') }}
    </div>
    <div v-if="partial">
      {{ $t("notAllItems") }}
    </div>
    <DiamondSpinner id="spinner" v-if="pending"></DiamondSpinner>
    <OptionsListGroup v-else v-for="itemsGroup in itemsGroups" :key="itemsGroup.property.id"
      @step-advance="(payload: any) => $emit('step-advance', payload)" :property="itemsGroup.property"
      :items="itemsGroup.items">
    </OptionsListGroup>
  </div>
</template>

<style scoped lang="scss">
.loading {
  display: flex;
  justify-content: center;
  align-items: center;
}

#spinner {
  width: min(35vh, 35vw);
}
</style>