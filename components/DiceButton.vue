<template>
  <button>
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 200">
      <path class="frame" d="M 100 0 l 100 100 l -100 100 l -100 -100 Z M 100 10 l 90 90 l -90 90 l -90 -90 Z"></path>
      <g>
        <rect x="90" y="90" width="20" height="20"></rect>
      </g>
      <g>
        <rect x="60" y="60" width="20" height="20"></rect>
        <rect x="120" y="120" width="20" height="20"></rect>
      </g>
      <g>
        <rect x="60" y="60" width="20" height="20"></rect>
        <rect x="90" y="90" width="20" height="20"></rect>
        <rect x="120" y="120" width="20" height="20"></rect>
      </g>
      <g>
        <rect x="60" y="60" width="20" height="20"></rect>
        <rect x="120" y="120" width="20" height="20"></rect>
        <rect x="120" y="60" width="20" height="20"></rect>
        <rect x="60" y="120" width="20" height="20"></rect>
      </g>
      <g>
        <rect x="60" y="60" width="20" height="20"></rect>
        <rect x="90" y="90" width="20" height="20"></rect>
        <rect x="120" y="120" width="20" height="20"></rect>
        <rect x="60" y="120" width="20" height="20"></rect>
        <rect x="120" y="60" width="20" height="20"></rect>
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
  transition: translate 0.2s ease-in-out;
  fill-rule: evenodd;
}

rect {
  fill: var(--green);
  transform-origin: center;
  rotate: 0.125turn;
}

@keyframes face {
  0% {
    opacity: 0;
  }
  4% {
    opacity: 1;
  }
  16% {
    opacity: 1;
  }
  20% {
    opacity: 0;
  }
  100% {
    opacity: 0;
  }
}

g {
  animation-name: face;
  animation-duration: 5s;
  animation-iteration-count: infinite;
  animation-direction: forwards;
}

g:nth-child(1) {
  animation-delay: 0s;
}
g:nth-child(2) {
  animation-delay: 1s;
}
g:nth-child(3) {
  animation-delay: 2s;
}
g:nth-child(4) {
  animation-delay: 3s;
}
g:nth-child(5) {
  animation-delay: 4s;
}
</style>