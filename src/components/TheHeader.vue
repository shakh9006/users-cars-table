<script setup>
import { RouterLink } from 'vue-router'
</script>

<template>
  <header>
    <nav>
      <RouterLink to="/">Home</RouterLink>
      <RouterLink to="/users">Users</RouterLink>
      <RouterLink to="/cars">Cars</RouterLink>
    </nav>
  </header>
</template>

<style scoped>
header {
  line-height: 1.5;
  max-height: 100vh;
}

nav a.router-link-exact-active {
  color: var(--color-text);
}

nav a.router-link-exact-active:hover {
  background-color: transparent;
}

nav a {
  display: inline-block;
  padding: 0 1rem;
  border-left: 1px solid var(--color-border);
}

nav a:first-of-type {
  border: 0;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding: 0;
  }

  nav {
    font-size: 1rem;
    padding: 1rem 0;
    margin: 0 auto 50px;
    width: 100%;
    text-align: center;
    border-bottom: 1px solid;
  }
}

</style>
