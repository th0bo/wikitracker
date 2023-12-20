<script setup>
definePageMeta({ layout: false });
const { dir } = useI18n().localeProperties.value;
const rtl = dir === 'rtl';
</script>

<template>
  <div class="wrapper" :class="{ dirRtl: rtl }">
    <TheHeader>
      <HomeLink></HomeLink>
      <div></div>
      <div></div>
      <div></div>
      <InformationLink></InformationLink>
      <WikidataLink></WikidataLink>
    </TheHeader>
    <main>
      <div>
        <p>{{ $t("aboutText") }}</p>
      </div>
    </main>
  </div>
</template>

<style scoped lang="scss">
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

.dirRtl {
  direction: rtl;
}

@media (orientation: landscape) {
  .wrapper {
    grid-template-columns: max-content auto;
    grid-template-rows: 100%;
  }
}

main {
  width: 100%;
  height: 100%;
}
</style>