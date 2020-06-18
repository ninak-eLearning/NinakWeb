import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home
  },
  {
    path: "/asignatura",
    name: "Asignatura",
    component: () => import(/* webpackChunkName: "Asignatura" */ "../views/Asignatura.vue")
  },
  {
    path: "/asignatura/sesion",
    name: "Sesion",
    component: () => import(/* webpackChunkName: "Sesion" */ "../views/Sesion.vue")
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
