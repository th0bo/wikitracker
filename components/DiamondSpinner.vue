<template>
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 200">
    <g>
      <path stroke-width="10"></path>
    </g>
  </svg>
</template>

<style scoped>
svg {
  aspect-ratio: 1/1;
  width: 100%;
}

@keyframes spin {
  0% {
    d: path("M 100 10 l 1 1");
  }
  25% {
    d: path("M 100 10 l 90 90");
  }
  26% {
    d: path("M 100 10 l 90 90 l -1 1");
  }
  50% {
    d: path("M 100 10 l 90 90 l -90 90")
  }
  51% {
    d: path("M 100 10 l 90 90 l -90 90 l -1 -1")
  }
  75% {
    d: path("M 100 10 l 90 90 l -90 90 l -90 -90")
  }
  76% {
    d: path("M 100 10 l 90 90 l -90 90 l -90 -90 l 1 -1")
  }
  100% {
    d: path("M 100 10 l 90 90 l -90 90 l -90 -90 l 90 -90")
  }
}

path {
  stroke: var(--blue);
  fill: none;
  stroke-linecap: square;
  animation: 1.2s linear infinite alternate spin;
}

@keyframes back {
  0% {
    transform: scaleX(1);
  }
  50% {
    transform: scaleX(1);
  }
  50.1% {
    transform: scaleX(-1);
  }
  100% {
    transform: scaleX(-1);
  }
}

g {
  transform-origin: center;
  animation: 2.4s infinite back;
}
</style>