import Vue from "vue";
import VueRouter from "vue-router";
import Weather from "@/views/Weather"
import Settings from "@/views/Settings"

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Weather",
    component: Weather
  },
  {
    path: "/settings",
    name: "Settings",
    component: Settings
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
