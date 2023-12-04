<script setup lang="ts">
import type { PastStep, Item } from '../types/game';

const { pastSteps, endItem } = defineProps<{ pastSteps: PastStep[], endItem: Item }>();
const location = window.location.toString();
const copy = () => {
  navigator.clipboard.writeText(location);
}
</script>

<template>
  <div class="outer">
    <h2>{{ $t('congrats') }}</h2>
    <ol>
      <li v-for="pastStep, i of pastSteps">
        {{ pastStep.exitProperty.backward ? `${(pastSteps[i + 1])?.item.label ??
          endItem.label} ${pastStep.exitProperty.label} ${pastStep.item.label}` : `${pastStep.item.label}
                ${pastStep.exitProperty.label} ${(pastSteps[i + 1])?.item.label ?? endItem.label}` }}
      </li>
    </ol>
    <div>
      <div id="location" :aria-label="$t('sharePath')">{{ location }}</div>
      <EndScreenCopyButton @copy-link="copy"></EndScreenCopyButton>
    </div>
  </div>
</template>

<style scoped>
.outer {
  display: grid;
  text-align: center;
  font-size: large;
}

h2 {
  display: flex;
  justify-content: center;
  align-items: center;
}

li {
  list-style: none;
}

.outer > div {
  display: flex;
  height: min-content;
  justify-content: center;
  align-items: center;
}

.outer > div > button {
  width: 2.5rem;
}

#location {
  padding: 0 1rem;
}

button {
  aspect-ratio: 1/1;
}
</style>