<script setup lang="ts">
defineProps({ current: Number, target: Number });
</script>

<template>
  <div role="progressbar">
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 200">
      <path fill-rule="evenodd" d="M 100 0 l 100 100 l -100 100 l -100 -100 Z M 100 10 l 42.5 42.5 l -90 90 l -42.5 -42.5 Z M 147.5 57.5 l 42.5 42.5 l -90 90 l -42.5 -42.5 Z" class="blue" />
      <text x="75" y="75" font-size="50" dominant-baseline="central" class="score">{{ current }}</text>
      <!-- <circle cx="75" cy="75" color="red" r="10"></circle> -->
      <text x="125" y="125" font-size="50" dominant-baseline="central" class="target">{{ target }}</text>
    </svg>
  </div>
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

text {
  text-anchor: middle;
  font-weight: 600;
}

text.score {
  fill: var(--green);
}
text.target {
  fill: var(--red);
}
</style>