<template>
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 200">
    <path stroke-width="10"></path>
  </svg>
</template>

<style scoped>
svg {
  aspect-ratio: 1/1;
  width: 100%;
}

@keyframes spin {
  0% {
    d: path("M 99 1 l 1 -1 l 1 1");
  }
  12.5% {
    d: path("M 99 1 l 1 -1 l 100 100");
  }
  25% {
    d: path("M 99 1 l 1 -1 l 100 100 l -100 100")
  }
  37.5% {
    d: path("M 99 1 l 1 -1 l 100 100 l -100 100 l -100 -100")
  }
  50% {
    d: path("M 99 1 l 1 -1 l 100 100 l -100 100 l -100 -100 Z")
  }
  62.5% {
    d: path("M 199 99 l 1 1 l -100 100 l -100 -100 l 100 -100")
  }
  75% {
    d: path("M 100 200 l -100 -100 l 100 -100")
  }
  87.5% {
    d: path("M 0 100 l 100 -100")
  }
  100% {
    d: path("M 100 0 l 1 1")
  }
}

path {
  stroke: var(--blue);
  fill: none;
  stroke-linecap: square;
  animation: 4s infinite spin;
}
</style>