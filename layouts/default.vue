<template>
  <div class="wrapper">
    <header>
      <Home></Home>
      <Distance target="89" current="25"></Distance>
      <Direction></Direction>
    </header>
    <main>
      <nav>Soleil &gt; (3959) Irwin &lt; (3960) Chaliubieju &lt; ••• &lt; feu</nav>
      <slot />
    </main>
  </div>
</template>

<style>
body {
  margin: 0;
}
header > * {
  display: inline-block;
  width: fit-content;
}

.wrapper {
  height: 98vh;
  width: 98vw;
  margin: 1vh 1vw;
  display: grid;
  grid-gap: 1vw;
  grid-template-columns: 1fr;
  grid-template-rows: min-content auto;
}

header {
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  grid-gap: 1vw;
}

@media (orientation: landscape) {
  .wrapper {
    grid-template-columns: max-content auto;
    grid-template-rows: 100%;
  }

  header {
    grid-template-columns: 1fr;
    grid-template-rows: repeat(6, 1fr);
  }
}
</style>
