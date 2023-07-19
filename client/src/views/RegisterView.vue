<script setup lang="ts">
import { ref } from "vue";
import AuthenticationService from "@/services/AuthenticationService";
import useAuthStore from "@/stores/AuthStore";

const authStore = useAuthStore();

const email = ref<string>("");
const password = ref<string>("");
const error = ref<string>("");

const register = async () => {
  try {
    const res = await AuthenticationService.register({
      email: email.value,
      password: password.value,
    });
    authStore.setToken(res.data.token);
    authStore.setUser(res.data.user);
    error.value = "";
  } catch (err: any) {
    error.value = err.response.data.error;
  }
};
</script>

<template>
  <div class="container">
    <div class="title">Register</div>
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
      <v-btn class="submit-btn" @click="register">Register</v-btn>
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
.danger-alert {
  font-size: 14px;
  color: red;
}
</style>
