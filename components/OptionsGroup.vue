<script setup lang="ts">
import { Binding } from 'types/wikidata';

const { data } = defineProps({ data: Array }) as { data: Binding[] };
const bodyOptions = [...data];
const headerOption = bodyOptions.shift() as Binding;
const footerOption = bodyOptions.pop();
const propertyLabel = headerOption.label2.value;
</script>

<template>
  <Option :property-name="propertyLabel" :property-display="propertyLabel" :item-id="headerOption.item.value" :item-display="headerOption.label1.value">
  </Option>
  <Option v-for="bodyOption in bodyOptions" :property-name="propertyLabel" property-display="├─" :item-id="bodyOption.item.value"
    :item-display="bodyOption.label1.value"></Option>
  <Option v-if="footerOption" :property-name="propertyLabel" property-display="└─" :item-id="footerOption.item.value"
    :item-display="footerOption.label1.value"></Option>
</template>