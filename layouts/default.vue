<template>
  <div class="wrapper">
    <header>
      <Home></Home>
      <Distance target="89" current="25"></Distance>
      <Direction></Direction>
    </header>
    <main>
      <nav>
        <ol>
          <li>Soleil</li>
          <li>(3959) Irwin</li>
          <li>(3960) Chaliubieju</li>
          <li class="etc">•••</li>
          <li>feu</li>
        </ol>
      </nav>
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
  column-gap: 1vw;
  row-gap: 1vh;
  grid-template-columns: 1fr;
  grid-template-rows: min-content auto;
}

header {
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  column-gap: inherit;
}

@media (orientation: landscape) {
  .wrapper {
    grid-template-columns: max-content auto;
    grid-template-rows: 100%;
  }

  header {
    grid-template-columns: 1fr;
    grid-template-rows: repeat(6, 1fr);
    column-gap: unset;
    row-gap: inherit;
  }
}

nav {
  font-size: 28px;
}

nav ol {
  all: unset;
  list-style: none;
}

nav ol li {
  display: inline-block;
  color: var(--blue);
}

nav ol li.etc {
  color: var(--light);
}

nav ol li:first-child {
  color: var(--green);
}

nav ol li:last-child {
  color: var(--red);
}

nav ol li:not(:first-child)::before {
  content: ">";
  color: var(--light);
  margin: 0 8px;
}
</style>
