<script setup lang="ts">
import type { Property, Item } from '../types/game';

const { property, items } = defineProps<{ property: Property, items: Item[] }>();

const emit = defineEmits<(event: 'step-advance', payload: { property: Property, item: Item }) => void>();

const bodyItems = [...items];
const headerItem = bodyItems.shift() as Item;
const footerItem = bodyItems.pop();
</script>

<template>
  <OptionsListGroupItem @step-advance="payload => emit('step-advance', payload)" :property="property" :item="headerItem"
    position="header"></OptionsListGroupItem>
  <OptionsListGroupItem v-for="item in bodyItems" @step-advance="payload => emit('step-advance', payload)" :key="item.id"
    :property="property" :item="item" position="body">
  </OptionsListGroupItem>
  <OptionsListGroupItem v-if="footerItem" @step-advance="payload => emit('step-advance', payload)" :property="property"
    :item="footerItem" position="footer">
  </OptionsListGroupItem>
</template>