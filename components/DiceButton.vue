<template>
  <button>
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 200">
      <path class="frame" d="M 100 0 l 100 100 l -100 100 l -100 -100 Z M 100 10 l 90 90 l -90 90 l -90 -90 Z"></path>
      <g>
        <rect x="90" y="90" width="20" height="20"></rect>
        <rect x="90" y="90" width="20" height="20"></rect>
        <rect x="90" y="90" width="20" height="20"></rect>
        <rect x="90" y="90" width="20" height="20"></rect>
        <rect x="90" y="90" width="20" height="20"></rect>
      </g>
    </svg>
  </button>
</template>

<style scoped>
button {
  all: unset;
  cursor: pointer;
  width: fit-content;
}

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

path {
  fill: var(--blue);
  transform-origin: center;
  fill-rule: evenodd;
}

rect {
  fill: var(--green);
  transform-origin: center;
  rotate: 0.125turn;
}

@keyframes dot1 {
  0% {
    x: 90;
    y: 90;
  }
  10% {
    x: 90;
    y: 90;
  }
  12.5% {
    x: 60;
    y: 60;
  }
  22.5% {
    x: 60;
    y: 60;
  }
  25% {
    x: 90;
    y: 90;
  }
  35% {
    x: 90;
    y: 90;
  }
  37.5% {
    x: 60;
    y: 60;
  }
  47.5% {
    x: 60;
    y: 60;
  }
  50% {
    x: 90;
    y: 90;
  }
  60% {
    x: 90;
    y: 90;
  }
  62.5% {
    x: 60;
    y: 60;
  }
  72.5% {
    x: 60;
    y: 60;
  }
  75% {
    x: 90;
    y: 90;
  }
  85% {
    x: 90;
    y: 90;
  }
  87.5% {
    x: 60;
    y: 60;
  }
  97.5% {
    x: 60;
    y: 60;
  }
  100% {
    x: 90;
    y: 90;
  }
}

@keyframes dot2 {
  0% {
    x: 90;
    y: 90;
  }
  10% {
    x: 90;
    y: 90;
  }
  12.5% {
    x: 60;
    y: 60;
  }
  22.5% {
    x: 60;
    y: 60;
  }
  25% {
    x: 90;
    y: 90;
  }
  35% {
    x: 90;
    y: 90;
  }
  37.5% {
    x: 60;
    y: 60;
  }
  47.5% {
    x: 60;
    y: 60;
  }
  50% {
    x: 90;
    y: 90;
  }
  60% {
    x: 90;
    y: 90;
  }
  62.5% {
    x: 60;
    y: 60;
  }
  72.5% {
    x: 60;
    y: 60;
  }
  75% {
    x: 90;
    y: 90;
  }
  85% {
    x: 90;
    y: 90;
  }
  87.5% {
    x: 60;
    y: 120;
  }
  97.5% {
    x: 60;
    y: 120;
  }
  100% {
    x: 90;
    y: 90;
  }
}

@keyframes dot3 {
  0% {
    x: 90;
    y: 90;
  }
  10% {
    x: 90;
    y: 90;
  }
  12.5% {
    x: 60;
    y: 60;
  }
  22.5% {
    x: 60;
    y: 60;
  }
  25% {
    x: 90;
    y: 90;
  }
  35% {
    x: 90;
    y: 90;
  }
  37.5% {
    x: 60;
    y: 60;
  }
  47.5% {
    x: 60;
    y: 60;
  }
  50% {
    x: 90;
    y: 90;
  }
  60% {
    x: 90;
    y: 90;
  }
  62.5% {
    x: 60;
    y: 120;
  }
  72.5% {
    x: 60;
    y: 120;
  }
  75% {
    x: 90;
    y: 90;
  }
  85% {
    x: 90;
    y: 90;
  }
  87.5% {
    x: 120;
    y: 120;
  }
  97.5% {
    x: 120;
    y: 120;
  }
  100% {
    x: 90;
    y: 90;
  }
}

@keyframes dot4 {
  0% {
    x: 90;
    y: 90;
  }
  10% {
    x: 90;
    y: 90;
  }
  12.5% {
    x: 60;
    y: 60;
  }
  22.5% {
    x: 60;
    y: 60;
  }
  25% {
    x: 90;
    y: 90;
  }
  35% {
    x: 90;
    y: 90;
  }
  37.5% {
    x: 90;
    y: 90;
  }
  47.5% {
    x: 90;
    y: 90;
  }
  50% {
    x: 90;
    y: 90;
  }
  60% {
    x: 90;
    y: 90;
  }
  62.5% {
    x: 120;
    y: 60;
  }
  72.5% {
    x: 120;
    y: 60;
  }
  75% {
    x: 90;
    y: 90;
  }
  85% {
    x: 90;
    y: 90;
  }
  87.5% {
    x: 120;
    y: 60;
  }
  97.5% {
    x: 120;
    y: 60;
  }
  100% {
    x: 90;
    y: 90;
  }
}

@keyframes dot5 {
  0% {
    x: 90;
    y: 90;
  }
  10% {
    x: 90;
    y: 90;
  }
  12.5% {
    x: 120;
    y: 120;
  }
  22.5% {
    x: 120;
    y: 120;
  }
  25% {
    x: 90;
    y: 90;
  }
  35% {
    x: 90;
    y: 90;
  }
  37.5% {
    x: 120;
    y: 120;
  }
  47.5% {
    x: 120;
    y: 120;
  }
  50% {
    x: 90;
    y: 90;
  }
  60% {
    x: 90;
    y: 90;
  }
  62.5% {
    x: 120;
    y: 120;
  }
  72.5% {
    x: 120;
    y: 120;
  }
  75% {
    x: 90;
    y: 90;
  }
  85% {
    x: 90;
    y: 90;
  }
  87.5% {
    x: 90;
    y: 90;
  }
  97.5% {
    x: 90;
    y: 90;
  }
  100% {
    x: 90;
    y: 90;
  }
}

rect {
  animation-duration: 10s;
  animation-iteration-count: infinite;
  animation-direction: forwards;
}
rect:nth-child(1) {
  animation-name: dot1;
}
rect:nth-child(2) {
  animation-name: dot2;
}
rect:nth-child(3) {
  animation-name: dot3;
}
rect:nth-child(4) {
  animation-name: dot4;
}
rect:nth-child(5) {
  animation-name: dot5;
}
</style>