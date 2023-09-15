<script setup lang="ts">
import { Step } from 'types/game';

const { steps } = defineProps<{ steps: Step[] }>();
const location = window.location.toString();
const copy = () => {
  navigator.clipboard.writeText(location);
}
</script>

<template>
  <dialog open>
    <p>{{ $t('congrats') }}</p>
    <p>{{ steps.map(({ label }) => label).join(', ') }}</p>
    <input type="text" :value="location" disabled="true" :aria-label="$t('sharePath')" />
    <button :onclick="copy">Copy</button>
  </dialog>
</template>

<style scoped>

dialog {
  background-color: var(--background);
  color: var(--text);
  margin: 10vh 10vw;
  height: 80vh;
  width: 80vw;
  display: grid;
  grid-template-columns: 9fr 1fr;
}

dialog > p {
  grid-column: 1 / 3;
}

input {
  all: unset;
}
</style>