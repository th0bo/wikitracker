<template>
  <div>
    <NuxtLink to="/">Home</NuxtLink>
    <Distance target="8" current="5" width="200px"></Distance>
    <slot />
    <NuxtLink to="/about">About</NuxtLink>
  </div>
</template>
