import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import RegisterView from "../views/RegisterView.vue";
import LoginView from "../views/LoginView.vue";
import CreateSongView from "../views/CreateSongView.vue";
import SongsListView from "../views/SongsListView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
    {
      path: "/register",
      name: "register",
      component: RegisterView,
    },
    {
      path: "/login",
      name: "login",
      component: LoginView,
    },
    {
      path: "/create-song",
      name: "create-song",
      component: CreateSongView,
    },
    {
      path: "/songs",
      name: "songs",
      component: SongsListView,
    },
  ],
});

export default router;
