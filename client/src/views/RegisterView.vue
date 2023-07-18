<script setup lang="ts">
import AuthenticationService from "@/services/AuthenticationService";
import { ref } from "vue";

const email = ref<string>("");
const password = ref<string>("");

const register = async () => {
  const res = await AuthenticationService.register({
    email: email.value,
    password: password.value,
  });
  console.log(res.data);
};
</script>

<template>
  <div>
    <h1>Register</h1>

    <input type="email" name="email" placeholder="email" v-model="email" /><br />
    <input type="password" name="password" placeholder="password" v-model="password" /><br />
    <button @click="register">Register</button>
  </div>
</template>
