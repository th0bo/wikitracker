<script setup lang="ts">
const { property, backward, position } = defineProps<{
  property: { id: string, url: string, name: string },
  item: { id: string, url: string, name: string },
  backward: boolean,
  position: 'header' | 'body' | 'footer',
}>();
const propertyDisplay = (() => {
  switch (position) {
    case 'header':
      return property.name;
    case 'body':
      return backward ? '─┤' : '├─';
    case 'footer':
      return backward ? '─┘' : '└─';
  }
})();
</script>

<template>
  <div class="line" :class=" { 'backward': backward }">
    <div v-if="!backward" class="property" v-bind:aria-label="property.name">{{ propertyDisplay }}</div>
    <div class="item">{{ item.name }}</div>
    <div v-if="backward" class="property" v-bind:aria-label="property.name">{{ propertyDisplay }}</div>
  </div>
</template>

<style scoped>
.line {
  font-size: 20px;
  display: grid;
  grid-template-columns: 0 7fr;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.property {
  text-align: end;
  overflow: hidden;
}

.backward.line {
  grid-template-columns: 7 0fr;
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