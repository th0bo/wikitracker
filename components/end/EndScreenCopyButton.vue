<template>
  <button @click="$emit('copy-link');" :aria-label="$t('sharePath')">
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 200">
      <path class="frame" d="M 100 0 l 100 100 l -100 100 l -100 -100 Z M 100 10 l 90 90 l -90 90 l -90 -90 Z"></path>
      <path d="M 100 50 l 50 50 l -50 50 l -50 -50 Z"></path>
      <path d="M 100 50 l 50 50 l -50 50 l -50 -50 Z"></path>
    </svg>
  </button>
</template>

<style scoped lang="scss">
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
}

path:nth-child(1) {
  fill-rule: evenodd;
}
path:nth-child(2) {
  /* translate: 10% 10%; */
  filter: brightness(80%);
  scale: 0.8;
  translate: 8%;
  /* animation: slide-right 0.8s ease-in-out forwards; */
}
path:nth-child(3) {
  filter: brightness(120%);
  translate: -8%;
  /* animation: slide-left 0.8s ease-in-out forwards; */
}

button:hover path:nth-child(2), button:focus path:nth-child(2) {
  translate: 12%;
}

button:hover path:nth-child(3), button:focus path:nth-child(3) {
  translate: -12%;
}
</style>