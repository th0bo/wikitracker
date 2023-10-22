<template>
  <NuxtPage />
</template>

<style>
.page-enter-active,
.page-leave-active {
  transition: all 0.8s;
}

.page-enter-from,
.page-leave-to {
  opacity: 0;
  filter: blur(10rem);
}
</style>