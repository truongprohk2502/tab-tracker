import { defineStore } from "pinia";
import { computed, ref } from "vue";

interface IUser {
  id: number;
  email: string;
  password: string;
  createdAt: string;
  updatedAt: string;
}

const useAuthStore = defineStore("auth", () => {
  const token = ref<string>("");
  const user = ref<IUser | null>(null);

  const isUserLoggedIn = computed(() => !!token.value);

  const setToken = (newToken: string) => {
    token.value = newToken;
  };

  const setUser = (newUser: IUser | null) => {
    user.value = newUser;
  };

  const logout = () => {
    setToken("");
    setUser(null);
  };

  return { token, user, isUserLoggedIn, setToken, setUser, logout };
});

export default useAuthStore;
