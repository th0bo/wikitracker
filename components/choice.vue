<script setup>
defineProps(['propertyName', 'propertyDisplay', 'itemId', 'itemDisplay']);
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

@media (orientation: landscape) {
  .line {
    grid-template-columns: 5fr 7fr;
    column-gap: 24px;
  }
}

.property {
  text-align: right;
}
</style>