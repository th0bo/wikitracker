<script setup lang="ts">
definePageMeta({ layout: false });

const { start, end } = useRoute().params as { [key: string]: string };
const locale = useI18n().locale.value;
</script>

<template>
  <div class="wrapper">
    <TheGame :start-id="start" :end-id="end" :locale="locale" :key="[start, end, locale].join('-')"></TheGame>
  </div>
</template>

<style>
body {
  margin: 0;
}

.wrapper {
  height: 98vh;
  width: 98vw;
  margin: 1vh 1vw;
  display: grid;
  column-gap: 1vw;
  row-gap: 1vh;
  grid-template-columns: 1fr;
  grid-template-rows: min-content auto;
}

@media (orientation: landscape) {
  .wrapper {
    grid-template-columns: max-content auto;
    grid-template-rows: 100%;
  }
}
</style>
