<script setup lang="ts">
import { Item, PastStep } from '../types/game';

const { pastSteps, selectedIndex, currentTopItem, endItem, currentlyBackward, gameIsWon } = defineProps<{
  pastSteps: PastStep[],
  selectedIndex: number,
  currentTopItem: Item,
  endItem: Item,
  currentlyBackward: boolean,
  gameIsWon: boolean,
}>();

const currentTopItemIndex = computed(() => pastSteps.values.length);
</script>

<template>
  <nav>
    <ol>
      <li v-for="pastStep, i of pastSteps" @click="$emit('step-back', i)"
        :key="[pastStep.item.id, pastStep.exitProperty.id, pastStep.exitProperty.backward, i].join('_')"
        :class="{ backward: pastStep.exitProperty.backward, active: selectedIndex === i }">
        <span>{{ pastStep.item.label }}</span>
      </li>
      <li @click="$emit('step-back', currentTopItemIndex);"
        :class="{ active: selectedIndex === currentTopItemIndex, backward: currentlyBackward }"><span>{{
          currentTopItem.label }}</span></li>
      <template v-if="!gameIsWon">
        <li class="etc" :class="{ backward: currentlyBackward }">•••</li>
        <li><span>{{ endItem.label }}</span></li>
      </template>
    </ol>
  </nav>
</template>

<style scoped>
nav {
  font-size: 28px;
  padding-bottom: 14px;
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

nav ol li:not(:last-child)::after {
  content: "→";
  color: var(--secondary);
  margin: 0 8px;
}

nav ol li.backward:not(:last-child)::after {
  content: "←";
}
</style>