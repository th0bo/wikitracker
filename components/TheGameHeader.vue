<script setup lang="ts">
const { backward, currentUrl } = defineProps<{ backward: boolean, currentUrl?: string }>();
</script>

<template>
  <header>
    <HomeLink></HomeLink>
    <div></div>
    <DirectionButton
      @toggle-backward="() => $emit('toggle-backward')"
      :backward="backward"
      :key="[backward].join('_')"
      ></DirectionButton>
    <div></div>
    <InformationLink></InformationLink>
    <WikidataLink :current-url="currentUrl" :key="currentUrl"></WikidataLink>
  </header>
</template>

<style scoped>
header {
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  column-gap: inherit;
}

header>* {
  display: inline-block;
  width: fit-content;
}

@media (orientation: landscape) {
  header {
    grid-template-columns: 1fr;
    grid-template-rows: repeat(6, 1fr);
    column-gap: unset;
    row-gap: inherit;
  }
}
</style>