<script setup lang="ts">
import { Start, Step } from 'types/game';

const { start, steps, end, forward, position, won } = defineProps<{
  start: Start,
  steps: Step[],
  end: Step,
  forward: boolean,
  position: number,
  won: boolean,
}>();
</script>

<template>
  <nav>
    <ol>
      <li @click="$emit('step-back', 0);" :class="{ active: position === 0 }"><span>{{ start.label }}</span></li>
      <li v-for="step, i of (won ? steps.slice(0, -1) : steps)" @click="$emit('step-back', i + 1)"
        :key="[step.id, step.forward, i].join('_')" :class="{ forward: step.forward, active: position === i + 1 }">
        <span>{{ step.label }}</span></li>
      <li v-if="!won" class="etc" :class="{ forward: forward }">•••</li>
      <li :class="{ forward: forward, active: won }"><span>{{ end.label }}</span></li>
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

nav ol li:hover span,
nav ol li.active span {
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

nav ol li.forward:not(:first-child)::before {
  content: ">";
}
</style>