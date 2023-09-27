<script setup lang="ts">
const { itemUrl } = defineProps<{ itemUrl?: string }>();
const url = itemUrl ?? 'https://www.wikidata.org/wiki/Wikidata:Main_Page';
</script>

<template>
  <NuxtLink :to="url" target="_blank">
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 270 270">
      <path fill-rule="evenodd"
        d="M 135 0 l 135 135 l -135 135 l -135 -135 z M 135 13.5 l 121.5 121.5 l -121.5 121.5 l -121.5 -121.5 z"
        class="blue" />
      <path d="M 13.5 135 l 9 9 v -18 z m 18 18 l 27 27 v -90 l -27 27 z m 36 36 l 27 27 v -162 l -27 27 z" class="red" />
      <path
        d="M 103.5 225 l 9 9 v -198 l -9 9 z m 18 18 l 9 9 v -234 l -9 9 z M 256.5 135 l -9 -9 v 18 z m -18 -18 l -9 -9 v 54 l 9 -9 z"
        class="green" />
      <path
        d="M 220.5 99 l -27 -27 v 126 l 27 -27 z m -36 -36 l -9 -9 v 162 l 9 -9 z m -18 -18 l -27 -27 v 234 l 27 -27 z"
        class="blue" />
    </svg>
  </NuxtLink>
</template>

<style scoped>
svg {
  aspect-ratio: 1/1;
  width: 100%;
}

@media (orientation: landscape) {
  svg {
    width: unset;
    height: 100%;
  }
}
</style>