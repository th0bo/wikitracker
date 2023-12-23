<template>
  <NuxtLinkLocale to="about">
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 200">
      <path fill-rule="evenodd" d="M 100 0 l 100 100 l -100 100 l -100 -100 Z M 100 10 l 90 90 l -90 90 l -90 -90 Z"
        class="blue" />
      <path d="M 100 30 l 20 20 l -20 20 l -20 -20 Z" class="red" />
      <path d="M 100 170 l 10 -10 v -85 l -10 10 l -10 -10 v 85 Z" class="green" />
    </svg>
  </NuxtLinkLocale>
</template>

<style scoped lang="scss">
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
