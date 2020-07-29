import Vue from "vue";
import VueRouter from "vue-router";

// import Home from "../components/Home.vue";
// import About from "../components/About.vue";
import Ghibli from "../components/Ghibli.vue";
import Rick from "../components/Rick.vue";
import Json from "../components/Json.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: () => import("../components/About.vue"),
  },
  {
    path: "/rick-and-morty",
    name: "RickAndMorty",
    component: Rick,
  },
  {
    path: "/studio-ghibli",
    name: "StudioGhibli",
    component: Ghibli,
  },
  {
    path: "/jsonplaceholder",
    name: "JsonPlaceHolder",
    component: Json,
  },
];

const router = new VueRouter({
  routes,
});

export default router;
