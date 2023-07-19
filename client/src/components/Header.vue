<script setup lang="ts">
import useAuthStore from "@/stores/AuthStore";
import { storeToRefs } from "pinia";
import { RouterLink } from "vue-router";

const authStore = useAuthStore();
const { isUserLoggedIn } = storeToRefs(authStore);
const { logout } = authStore;
</script>

<template>
  <header class="container">
    <div class="links">
      <RouterLink to="/" class="home-link">Tab Tracker</RouterLink>
      <RouterLink to="/songs" class="link">Browse</RouterLink>
    </div>
    <div class="links" v-if="!isUserLoggedIn">
      <RouterLink to="/login" class="link">LOGIN</RouterLink>
      <RouterLink to="/register" class="link">SIGN UP</RouterLink>
    </div>
    <v-btn v-else @click="logout" size="small">Logout</v-btn>
  </header>
</template>

<style scoped>
.container {
  height: 60px;
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
  font-size: 18px;
  font-weight: bold;
}
.links {
  display: flex;
  align-items: center;
}
.link {
  color: white;
  text-decoration: none;
  font-size: 14px;
  margin-left: 1rem;
}
</style>
