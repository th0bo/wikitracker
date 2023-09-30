<script setup lang="ts">
const { currentlyBackward, selectedItemUrl } = defineProps<{ currentlyBackward: boolean, selectedItemUrl?: string }>();
</script>

<template>
  <header>
    <HomeLink></HomeLink>
    <div></div>
    <Transition mode="out-in" name="turn">
      <DirectionButton @toggle-backward="() => $emit('toggle-backward')" :backward="currentlyBackward"
        :key="[currentlyBackward].join('_')">
      </DirectionButton>
    </Transition>
    <div></div>
    <InformationLink></InformationLink>
    <WikidataLink :item-url="selectedItemUrl" :key="selectedItemUrl"></WikidataLink>
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