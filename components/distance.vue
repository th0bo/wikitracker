<script setup>
defineProps(['current', 'target'])
</script>

<template>
  <div>
    <span>{{ current }}</span>
    <span>{{ target }}</span>
  </div>
</template>

<style scoped>
div {
  position: relative;
  width: 14vh;
  aspect-ratio: 1 / 1;
  background-image: url(../assets/svg/score-frame.svg);
  background-size: cover;
}
span {
  position: absolute;
  width: 10.5vh;
  aspect-ratio: 1 / 1;
  line-height: 10.5vh;
  size: 4.2vh;
  text-align: center;
  font-weight: 600;
}
span:first-child {
  top: 0;
  left: 0;
  color: var(--green);
}
span:last-child {
  bottom: 0;
  right: 0;
  color: var(--red);
}
</style>