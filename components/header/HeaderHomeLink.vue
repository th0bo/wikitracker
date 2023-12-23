<template>
  <NuxtLinkLocale to="index">
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 200">
      <path d="M 40 100 l 40 -40 h 40 l 40 40 l -40 40 h -40 Z" class="red" style="visibility: hidden;" />
      <!-- <path d="M 60 100 l 40 -40 h 20 l 40 40 l -40 40 h -20 Z" class="blue" /> -->
      <path d="M 110 60 l 40 40 l -40 40 l -40 -40 Z" class="green" />
      <path d="M 0 100 l 15 -15 h 70 l -15 15 l 15 15 h -70 Z" class="red" />
      <path fill-rule="evenodd" d="M 100 0 l 100 100 l -100 100 l -100 -100 Z M 100 20 l 80 80 l -80 80 l -80 -80 Z"
        class="blue" />
      <!-- <path d="M 120 60 l 40 40 l -40 40 l -40 -40 Z" class="blue" /> -->
      <!-- <path d="M 120 60 l 20 20 l -20 20 l -20 -20 Z" class="green" />
      <path d="M 120 100 l 20 20 l -20 20 l -20 -20 Z" class="green" />
      <path d="M 100 80 l 20 20 l -20 20 l -20 -20 Z" class="red" /> -->
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