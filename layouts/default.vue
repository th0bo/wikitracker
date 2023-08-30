<template>
  <div>
    <header>
      <NuxtLink to="/">Home</NuxtLink>
      <Home></Home>
      <Distance target="89" current="25"></Distance>
      <Direction></Direction>
    </header>
    <slot />
    <NuxtLink to="/about">About</NuxtLink>
  </div>
</template>

<style scoped>
header > * {
  display: inline-block;
  width: 200px;
}
</style>
