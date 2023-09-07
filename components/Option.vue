<script setup lang="ts">
defineProps({ propertyName: String, propertyDisplay: String, itemId: String, itemDisplay: String });
</script>

<template>
  <div class="line">
    <div class="property" v-bind:aria-label="propertyName">{{ propertyDisplay }}</div>
    <div class="item">{{ itemDisplay }}</div>
  </div>
</template>

<style scoped>
.line {
  font-size: 20px;
  display: grid;
  grid-template-columns: 0 7fr;
}

.property {
  text-align: right;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

@media (min-width: 420px) {
  .line {
    grid-template-columns: 5fr 7fr;
    column-gap: 32px;
  }
}
</style>