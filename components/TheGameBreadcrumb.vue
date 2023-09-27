<script setup lang="ts">
import { Step } from 'types/game';

const { start, steps, end, backward, position, won } = defineProps<{
  start: Step,
  steps: Step[],
  end: Omit<Step, 'enterBackward'>,
  backward: boolean,
  position: number,
  won: boolean,
}>();
</script>

<template>
  <nav>
    <ol>
      <li @click="$emit('step-back', 0);" :class="{ active: position === 0 }"><span>{{ start.displayLabel }}</span></li>
      <li v-for="step, i of (won ? steps.slice(0, -1) : steps)" @click="$emit('step-back', i + 1)"
        :key="[step.itemId, !step.enterBackward, i].join('_')" :class="{ backward: step.enterBackward, active: position === i + 1 }">
        <span>{{ step.displayLabel }}</span></li>
      <li v-if="!won" class="etc" :class="{ backward }">•••</li>
      <li :class="{ backward, active: won }"><span>{{ end.displayLabel }}</span></li>
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
  color: var(--secondary);
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
  content: ">";
  color: var(--secondary);
  margin: 0 8px;
}

nav ol li.backward:not(:first-child)::before {
  content: "<";
}
</style>