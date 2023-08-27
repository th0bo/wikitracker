<script setup>
defineProps(['propertyName', 'propertyDisplay', 'itemId', 'itemDisplay']);
</script>

<template>
  <div>
    <div class="property" v-bind:aria-label="propertyName">{{ propertyDisplay }}</div>
    <div class="item">{{ itemDisplay }}</div>
  </div>
</template>

<style scoped>
.property {
  display: none;
}
</style>