<script setup lang="ts">
defineProps<{
  propertyName: string,
  propertyDisplay: string,
  itemId: string,
  itemDisplay: string,
  backward: boolean,
}>();
</script>

<template>
  <div class="line" :class=" { 'backward': backward }">
    <div v-if="!backward" class="property" v-bind:aria-label="propertyName">{{ propertyDisplay }}</div>
    <div class="item">{{ itemDisplay }}</div>
    <div v-if="backward" class="property" v-bind:aria-label="propertyName">{{ propertyDisplay }}</div>
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
  text-align: right;
  overflow: hidden;
}

.backward.line {
  grid-template-columns: 7 0fr;
}
.backward .property {
  text-align: left;
}
.backward .item {
  text-align: right;
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