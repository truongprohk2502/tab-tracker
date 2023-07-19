<script setup lang="ts">
import AuthenticationService from "@/services/AuthenticationService";
import { ref } from "vue";

const email = ref<string>("");
const password = ref<string>("");
const error = ref<string>("");

const login = async () => {
  try {
    await AuthenticationService.login({
      email: email.value,
      password: password.value,
    });
    error.value = "";
  } catch (err: any) {
    error.value = err.response.data.error;
  }
};
</script>

<template>
  <div class="container">
    <div class="title">Login</div>
    <form name="tab-tracker-form" autocomplete="off" class="form">
      <v-text-field variant="underlined" label="Email" v-model="email"></v-text-field>
      <br />
      <v-text-field
        variant="underlined"
        label="Password"
        type="password"
        v-model="password"
        autocomplete="new-password"
      ></v-text-field>
      <br />
      <div class="danger-alert" v-html="error" />
      <br />
      <v-btn class="submit-btn" @click="login">Login</v-btn>
    </form>
  </div>
</template>

<style scoped>
.title {
  background-color: #29b6f6;
  padding: 0.5rem 1rem;
  color: white;
}
.container {
  margin: 2rem auto;
  padding: 1rem;
  max-width: 50rem;
}
.form {
  border: 1px solid lightgrey;
  padding: 0.5rem 1rem 2rem 1rem;
}
.submit-btn {
  margin: auto;
}
</style>
