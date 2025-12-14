<template>
  <nav>
    <NuxtLink to="/">Home</NuxtLink>
    <NuxtLink to="/about">About</NuxtLink>
  </nav>
  <NuxtPage />
</template>

<script setup lang="ts">

</script>

<style scoped>
nav {
  background-color: #333;
  padding: 1rem;
  display: flex;
  gap: 1rem;
}

nav a {
  color: white;
  text-decoration: none;
  font-size: 1.1rem;
}

nav a:hover {
  text-decoration: underline;
}

.router-link-exact-active {
  font-weight: bold;
}
</style>