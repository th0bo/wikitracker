<script setup lang="ts">
import { OptionsBinding } from 'types/wikidata';

const { data } = defineProps<{ data: OptionsBinding[], backward: boolean }>();

const bodyOptions = [...data];
const headerOption = bodyOptions.shift() as OptionsBinding;
const footerOption = bodyOptions.pop();
</script>

<template>
  <Option
    :property="{ id: '', url: '', name: headerOption.label2.value }"
    :item="{ id: headerOption.item.value, url: '', name: headerOption.label1.value }"
    :backward="backward"
    position="header"
    ></Option>
  <Option
    v-for="bodyOption in bodyOptions"
    :property="{ id: '', url: '', name: bodyOption.label2.value }"
    :item="{ id: bodyOption.item.value, url: '', name: bodyOption.label1.value }"
    :backward="backward"
    position="body"
    ></Option>
  <Option
    v-if="footerOption"
    :property="{ id: '', url: '', name: footerOption.label2.value }"
    :item="{ id: footerOption.item.value, url: '', name: footerOption.label1.value }"
    :backward="backward"
    position="footer"
    ></Option>
</template>