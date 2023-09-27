<script setup lang="ts">
import { Step } from 'types/game';
import { OptionsBinding } from 'types/wikidata';

const { data } = defineProps<{ data: OptionsBinding[], backward: boolean }>();
const emit = defineEmits<(event: 'step-advance', step: Step) => void>();

const bodyOptions = [...data];
const headerOption = bodyOptions.shift() as OptionsBinding;
const footerOption = bodyOptions.pop();
</script>

<template>
  <OptionsListGroupItem @step-advance="(step: Step) => emit('step-advance', step)" :property="{
    id: headerOption.prop.value.split('/').pop() ?? '',
    url: headerOption.prop.value,
    label: headerOption.label2.value
  }" :item="{
  itemId: headerOption.item.value.split('/').pop() ?? '',
  wikidataUrl: headerOption.item.value,
  displayLabel: headerOption.label1.value
}" :backward="backward" position="header"></OptionsListGroupItem>
  <OptionsListGroupItem v-for="bodyOption in bodyOptions" :key="bodyOption.item.value"
    @step-advance="(step: Step) => emit('step-advance', step)" :property="{
      id: bodyOption.prop.value.split('/').pop() ?? '',
      url: bodyOption.prop.value,
      label: bodyOption.label2.value
    }" :item="{
  itemId: bodyOption.item.value.split('/').pop() ?? '',
  wikidataUrl: bodyOption.item.value,
  displayLabel: bodyOption.label1.value
}" :backward="backward" position="body"></OptionsListGroupItem>
  <OptionsListGroupItem v-if="footerOption" @step-advance="(step: Step) => $emit('step-advance', step)" :property="{
    id: footerOption.prop.value.split('/').pop() ?? '',
    url: footerOption.prop.value,
    label: footerOption.label2.value
  }" :item="{
  itemId: footerOption.item.value.split('/').pop() ?? '',
  wikidataUrl: footerOption.item.value,
  displayLabel: footerOption.label1.value
}" :backward="backward" position="footer"></OptionsListGroupItem>
</template>