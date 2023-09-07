<template>
  <header>
    <Home></Home>
    <Distance :target="89" :current="25"></Distance>
    <Direction></Direction>
    <div></div>
    <Information></Information>
    <Wikidata></Wikidata>
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