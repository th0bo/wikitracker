<script setup>
const localePath = useLocalePath();
</script>

<template>
  <NuxtLink :to="localePath('about')">
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 200">
      <path fill-rule="evenodd" d="M 100 0 l 100 100 l -100 100 l -100 -100 Z M 100 10 l 90 90 l -90 90 l -90 -90 Z"
        style="fill: #069;" />
      <path d="M 100 30 l 20 20 l -20 20 l -20 -20 Z" style="fill: #900;" />
      <path d="M 100 170 l 10 -10 v -85 l -10 10 l -10 -10 v 85 Z" style="fill: #063;" />
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
