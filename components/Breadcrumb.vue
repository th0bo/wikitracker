<script setup lang="ts">
import { Start, Step } from 'types/game';

const { start, steps, end, forward } = defineProps<{ start: Start, steps: Step[], end: Step, forward: boolean }>();
</script>

<template>
  <nav>
    <ol>
      <li @click="$emit('step-back', 0);">{{ start.label }}</li>
      <li v-for="step, i of steps" @click="$emit('step-back', i + 1)" :class="{ forward: step.forward }">{{  step.label }}</li>
      <li :class="{ etc: true, forward: forward }">•••</li>
      <li :class="{ forward: forward }">{{ end.label }}</li>
    </ol>
  </nav>
</template>

<style scoped>
nav {
  font-size: 28px;
}

nav ol {
  all: unset;
  list-style: none;
}

nav ol li {
  display: inline-block;
  color: var(--blue);
}

nav ol li.etc {
  color: var(--light);
}

nav ol li:first-child {
  color: var(--green);
}

nav ol li:last-child {
  color: var(--red);
}

nav ol li:not(:first-child)::before {
  content: "<";
  color: var(--light);
  margin: 0 8px;
}

nav ol li.forward:not(:first-child)::before {
  content: ">";
}
</style>