<script setup lang="ts">
const timeUnit = 800;
let loading = false;

const { backward } = defineProps<{ backward: boolean, pendingDirectionChange: boolean }>();
const { dir } = useI18n().localeProperties.value;
const rtl = dir === 'rtl';

const zooming = ref(false);
const direction = ref(backward !== rtl ? -1 : 1);

const queryData = () => {
  loading = true;
  window.setTimeout(() => {
    loading = false;
  }, 2300);
}

const handleClick = () => {
  console.log('handleClick');
  queryData();
  zooming.value = true;
  const previousDirection = direction.value;
  direction.value = 0;
  let i = 0;
  const interval = window.setInterval(() => {
    if (i % 2 === 1 && direction.value !== 0) {
      zooming.value = false;
      window.clearInterval(interval);
    } else if (i % 2 === 0 && loading === false) {
      direction.value = -1 * previousDirection;
    }
    i++;
  }, timeUnit);

  // Loading delay simulation
}
</script>

<template>
  <button @click="$emit('toggle-backward');" :class="{ unclickable: zooming }">
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 200">
      <path class="frame" d="M 100 0 l 100 100 l -100 100 l -100 -100 Z M 100 10 l 90 90 l -90 90 l -90 -90 Z"></path>
      <g>
        <rect :class="{ zooming: zooming }" x="90" y="90" width="20" height="20" transform-origin="100 100"></rect>
        <path class="right arrow" :class="{ main: !pendingDirectionChange && direction === 1 }" stroke-width="10" transform-origin="100 100">
        </path>
        <path class="left arrow" :class="{ main: !pendingDirectionChange && direction === -1 }" stroke-width="10" transform-origin="100 100">
        </path>
      </g>
    </svg>
  </button>
</template>

<style scoped lang="scss">
button {
  all: unset;
  cursor: pointer;
  width: fit-content;
}

button.unclickable {
  pointer-events: none;
  cursor: wait;
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

.frame {
  fill-rule: evenodd;
  fill: var(--blue);
}

rect {
  rotate: 0.125turn;
  fill: var(--red);
}

rect.zooming {
  animation: zoom 800ms ease-in-out 0ms infinite alternate none;
}

@keyframes zoom {
  from {
    scale: 1 1;
  }

  to {
    scale: 0.5 0.5;
  }
}

.arrow {
  stroke: var(--green);
  stroke-linecap: square;
  fill: none;
  transition: d 300ms;
  d: path("M 120 90 l 10 10 l -10 10");
}

.left.arrow {
  scale: -1 1;
}

.main {
  d: path("M 90 60 l 40 40 l -40 40");
}

.turn-enter-to .arrow.main,
.turn-leave-from .arrow.main {
  d: path("M 90 60 l 40 40 l -40 40");
}

.turn-enter-from .arrow.main,
.turn-leave-to .arrow.main {
  d: path("M 120 90 l 10 10 l -10 10");
}
</style>