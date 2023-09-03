<template>
  <div class="wrapper">
    <Header></Header>
    <main>
      <Breadcrumb></Breadcrumb>
      <slot />
    </main>
  </div>
</template>

<style>
body {
  margin: 0;
}

.wrapper {
  height: 98vh;
  width: 98vw;
  margin: 1vh 1vw;
  display: grid;
  column-gap: 1vw;
  row-gap: 1vh;
  grid-template-columns: 1fr;
  grid-template-rows: min-content auto;
}

@media (orientation: landscape) {
  .wrapper {
    grid-template-columns: max-content auto;
    grid-template-rows: 100%;
  }
}
</style>
