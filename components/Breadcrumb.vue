<script setup lang="ts">
import { Start, Step } from 'types/game';

const { start, steps, end, forward } = defineProps<{ start: Start, steps: Step[], end: Step, forward: boolean }>();
</script>

<template>
  <nav>
    <ol>
      <li @click="$emit('step-back', 0);">{{ start.label }}</li>
      <li v-for="step, i of steps" @click="$emit('step-back', i + 1)" :key="[step.id, step.forward, i].join('_')"
        :class="{ forward: step.forward }">{{ step.label }}</li>
      <li class="etc" :class="{ forward: forward }">•••</li>
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
  cursor: pointer;
}

nav ol li:hover {
  text-decoration: underline;
}

.etc:hover,
li:last-child:hover {
  text-decoration: unset;
}

nav ol li.etc {
  color: var(--light);
  cursor: unset;
}

nav ol li:first-child {
  color: var(--green);
}

nav ol li:last-child {
  color: var(--red);
  cursor: unset;
}

nav ol li:not(:first-child)::before {
  content: "<";
  color: var(--light);
  margin: 0 8px;
}

nav ol li:hover:not(:first-child)::before {
  text-decoration: none !important;
}

nav ol li.forward:not(:first-child)::before {
  content: ">";
}
</style>