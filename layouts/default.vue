<template>
  <div>
    <header>
      <NuxtLink to="/">Home</NuxtLink>
      <Distance target="8" current="5"></Distance>
      <Direction width="200px"></Direction>
    </header>
    <slot />
    <NuxtLink to="/about">About</NuxtLink>
  </div>
</template>

<style scoped>
header > * {
  width: 200px;
}
</style>
