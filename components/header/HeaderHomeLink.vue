<template>
  <NuxtLinkLocale to="index">    
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 200">
      <path class="edges" stroke-width="10"></path>
      <g class="nodes">
        <path transform-origin="100 100"></path>
        <path transform-origin="100 100"></path>
        <path transform-origin="100 100"></path>
        <path transform-origin="100 100"></path>
        <path transform-origin="100 100"></path>
      </g>
    </svg>
  </NuxtLinkLocale>
</template>

<style scoped lang="scss">
svg {
  aspect-ratio: 1/1;
  width: 100%;
}

@media (orientation: landscape) {
  svg {
    width: unset;
    height: 100%;
  }
}

.edges {
  fill: none;
  stroke: var(--blue);
  animation: edges-progression 0.9s ease-in-out 1.2s 1 normal forwards;
}

@keyframes edges-progression {
  0% {
    d: path("M 20 100 l 0 -0 l 0 0 l 0 0");
  }

  33% {
    d: path("M 20 100 l 80 -80 l 0 0 l 0 0");
  }

  67% {
    d: path("M 20 100 l 80 -80 l 80 80 l 0 0");
  }

  100% {
    d: path("M 20 100 l 80 -80 l 80 80 l -80 80");
  }
}

.nodes path {
  fill: var(--blue);
  animation: node-positioning 0.9s ease-in-out 0s 1 normal forwards;
}

@keyframes node-positioning {
  from {
    d: path("M 80 100 l 20 -20 l 20 20 l -20 20 Z");
  }

  to {
    d: path("M 0 100 l 20 -20 l 20 20 l -20 20 Z");
  }
}

.nodes :nth-child(1) {
  fill: var(--green);
}

.nodes :nth-child(2) {
  rotate: 0.25turn;
  animation-delay: 0.3s;
}

.nodes :nth-child(3) {
  rotate: 0.5turn;
  animation-delay: 0.6s;
}

.nodes :nth-child(4) {
  fill: var(--red);
  rotate: 0.75turn;
  animation-delay: 0.9s;
}

.nodes :nth-child(5) {
  animation-play-state: paused;
}</style>