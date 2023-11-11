<script setup lang="ts">
definePageMeta({ layout: false });
const localePath = useLocalePath();
const { dir } = useI18n().localeProperties.value;
const rtl = dir === 'rtl';
const paths = [
  '/game/Q161904-Q41269',
  '/game/Q2736-Q4649',
  '/game/Q287-Q184872',
  '/game/Q235544-Q546523',
  '/game/Q2-Q11158',
  '/game/Q15620419-Q1048',
  '/game/Q105-Q1045',
  '/game/Q525-Q3196',
];
const randomPick = () => {
  const path = paths[Math.floor(Math.random() * paths.length)];
  useRouter().push(localePath({ path }));
} 
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
        <!-- <ClientOnly>
        <NuxtLink :to="localePath({ path: '/game/Q161904-Q41269' })">{{ $t('play') }}
        </NuxtLink>
        <NuxtLayout :to="localePath({ path: '/game/Q112241194-Q188971' })"></NuxtLayout>
      </ClientOnly> -->
        <DiceButton :aria-label="$t('randomPick')" @click="randomPick"></DiceButton>
      </div>
    </main>
  </div>
</template>

<style scoped>
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
  display: flex;
  justify-content: center;
  align-items: center;
}

main>div {
  width: fit-content;
  height: fit-content;
}

main>div>* {
  width: min(60vh, 60vw);
}
</style>
