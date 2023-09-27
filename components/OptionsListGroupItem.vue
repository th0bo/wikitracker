<script setup lang="ts">
import { Step } from 'types/game';

const { property, backward, position } = defineProps<{
  property: { id: string, url: string, label: string },
  item: Omit<Step, 'enterBackward'>,
  backward: boolean,
  position: 'header' | 'body' | 'footer',
}>();
const { dir } = useI18n().localeProperties.value;
const rtl = dir === 'rtl';

const propertyDisplay = (() => {
  if (position === 'header') {
      return property.label;
  } else {
    let linkTopDown = null;
    if (position === 'body') {
      linkTopDown = backward !== rtl ? '┤' : '├';
    } else if (position === 'footer') {
      linkTopDown = backward !== rtl ? '┘' : '└';
    }
    if (backward) {
      return '─' + linkTopDown;
    } else {
      return linkTopDown + '─'; 
    }
  }
})();
</script>

<template>
  <div @click="$emit('step-advance', { enterBackward: backward, ...item });" class="line" :class="{ 'backward': backward }"
    tabindex="0">
    <div v-if="!backward" class="property" v-bind:aria-label="property.label">{{ propertyDisplay }}</div>
    <div class="item">{{ item.displayLabel }}</div>
    <div v-if="backward" class="property" v-bind:aria-label="property.label">{{ propertyDisplay }}</div>
  </div>
</template>

<style scoped>
.line {
  font-size: 20px;
  display: grid;
  grid-template-columns: 0 7fr;
  white-space: nowrap;
  cursor: pointer;
}

.line:hover .item {
  text-decoration: underline;
}

.line>* {
  overflow: hidden;
  text-overflow: ellipsis;
}

.property {
  text-align: end;
}

.backward.line {
  grid-template-columns: 7fr 0;
}

.backward .property {
  text-align: start;
}

.backward .item {
  text-align: end;
}

@media (min-width: 420px) {
  .line {
    grid-template-columns: 5fr 7fr;
    column-gap: 32px;
  }

  .line.backward {
    grid-template-columns: 7fr 5fr;
  }
}</style>