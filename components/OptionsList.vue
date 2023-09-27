<script setup lang="ts">
import { Item, Property } from 'types/game';
import { OptionsQueryData, OptionsBinding } from 'types/wikidata';

interface ItemsGroup {
  property: Property;
  items: Item[];
}

const { currentlyBackward, selectedItem } = defineProps<{ currentlyBackward: boolean, selectedItem: Item }>();

const locale = useI18n().locale.value;

const relation = currentlyBackward ? `?item ?prop wd:${selectedItem.id}.` : `wd:${selectedItem.id} ?prop ?item.`;
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

function mapExternalData({ prop, item, label1, label2 }: OptionsBinding): { property: Property, item: Item } {
  const propId = prop.value.split('/').pop() ?? '';
  const itemId = item.value.split('/').pop() ?? '';
  return {
    property: {
      id: propId,
      url: prop.value,
      label: label2.value,
      backward: currentlyBackward,
    },
    item: {
      id: itemId,
      url: item.value,
      label: label1.value,
    },
  }
}

const { data: itemsGroups } = await useFetch(buildSparqlRequest(query), {
  transform: (data: OptionsQueryData) => {
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
</script>

<template>
  <div>
    <div v-if="itemsGroups !== null && itemsGroups.length === 0">
      {{ $t('nothing') }}
    </div>
    <OptionsListGroup v-for="itemsGroup in itemsGroups" :key="itemsGroup.property.id"
      @step-advance="payload => $emit('step-advance', payload)" :property="itemsGroup.property" :items="itemsGroup.items">
    </OptionsListGroup>
  </div>
</template>

<style scoped>
div {
  overflow-y: auto;
}
</style>