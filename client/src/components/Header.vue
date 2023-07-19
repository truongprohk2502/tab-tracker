<script setup lang="ts">
import { RouterLink } from "vue-router";
</script>

<template>
  <header class="container">
    <RouterLink to="/" class="home-link">Tab Tracker</RouterLink>
    <div class="links">
      <RouterLink to="/login" class="link">LOGIN</RouterLink>
      <RouterLink to="/register" class="link">SIGN UP</RouterLink>
    </div>
  </header>
</template>

<style scoped>
.container {
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  background-color: #29b6f6;
  padding: 1rem 2rem;
  color: white;
}
.home-link {
  color: white;
  text-decoration: none;
}
.links {
  display: flex;
}
.link {
  color: white;
  text-decoration: none;
  font-size: 14px;
  margin-left: 1rem;
}
</style>
