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
    <div>
      <p>{{ $t('congrats') }}</p>
      <p>{{ steps.map(({ label }) => label).join(', ') }}</p>
      <input type="text" :value="location" disabled="true" :aria-label="$t('sharePath')" />
      <button :onclick="copy">Copy</button>
    </div>
  </dialog>
</template>

<style scoped>
dialog {
  top: 0;
  left: 0;
  margin: 0;
  border: 0;
  padding: 0;
  width: 100vw;
  height: 100vh;
  background-color: transparent;
  backdrop-filter: blur(5px);
  display: grid;
  place-items: center;
}

div {
  background-color: var(--background);
  color: var(--text);
  width: min(100vw, 100vh);
  aspect-ratio: 1/1;
  display: grid;
  grid-template-columns: 9fr 1fr;
}

div>p {
  grid-column: 1 / 3;
}

input {
  all: unset;
}
</style>