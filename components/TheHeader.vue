<template>
  <header>
    <slot />
  </header>
</template>

<style scoped lang="scss">
header {
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  column-gap: inherit;
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

<style>
header > * {
  display: inline-block;
  width: fit-content;
}
</style>