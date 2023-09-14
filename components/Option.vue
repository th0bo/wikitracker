<script setup lang="ts">
const { property, backward, position } = defineProps<{
  property: { id: string, url: string, label: string },
  item: { id: string, url: string, label: string },
  backward: boolean,
  position: 'header' | 'body' | 'footer',
}>();
const propertyDisplay = (() => {
  switch (position) {
    case 'header':
      return property.label;
    case 'body':
      return backward ? '─┤' : '├─';
    case 'footer':
      return backward ? '─┘' : '└─';
  }
})();
</script>

<template>
  <div @click="$emit('step-advance', { forward: !backward, ...item });" class="line" :class=" { 'backward': backward }">
    <div v-if="!backward" class="property" v-bind:aria-label="property.label">{{ propertyDisplay }}</div>
    <div class="item">{{ item.label }}</div>
    <div v-if="backward" class="property" v-bind:aria-label="property.label">{{ propertyDisplay }}</div>
  </div>
</template>

<style scoped>
.line {
  font-size: 20px;
  display: grid;
  grid-template-columns: 0 7fr;
  white-space: nowrap;
}

.line > * {
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
}
</style>