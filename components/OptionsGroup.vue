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
  <Option
    @step-advance="step => emit('step-advance', step)"
    :property="{
      id: headerOption.prop.value.split('/').pop() ?? '',
      url: headerOption.prop.value,
      label: headerOption.label2.value
    }"
    :item="{
      id: headerOption.item.value.split('/').pop() ?? '',
      url: headerOption.item.value,
      label: headerOption.label1.value
    }"
    :backward="backward"
    position="header"
    ></Option>
  <Option
    v-for="bodyOption in bodyOptions"
    @step-advance="step => emit('step-advance', step)"
    :property="{
      id: bodyOption.prop.value.split('/').pop() ?? '',
      url: bodyOption.prop.value,
      label: bodyOption.label2.value
    }"
    :item="{
      id: bodyOption.item.value.split('/').pop() ?? '',
      url: bodyOption.item.value,
      label: bodyOption.label1.value
    }"
    :backward="backward"
    position="body"
    ></Option>
  <Option
    v-if="footerOption"
    @step-advance="step => $emit('step-advance', step)"
    :property="{
      id: footerOption.prop.value.split('/').pop() ?? '',
      url: footerOption.prop.value,
      label: footerOption.label2.value
    }"
    :item="{
      id: footerOption.item.value.split('/').pop() ?? '',
      url: footerOption.item.value,
      label: footerOption.label1.value
    }"
    :backward="backward"
    position="footer"
    ></Option>
</template>