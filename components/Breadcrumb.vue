<template>
  <nav>
    <ol>
      <li>Soleil</li>
      <li>(3959) Irwin</li>
      <li>(3960) Chaliubieju</li>
      <li class="etc">•••</li>
      <li>feu</li>
    </ol>
  </nav>
</template>

<style scoped>
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