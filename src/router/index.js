import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/home",
    name: "Home",
    component: Home
  },
  {
    path: "/a:id",
    name: "Asignatura",
    component: () => import(/* webpackChunkName: "Asignatura" */ "../views/Asignatura.vue")
  },
  {
    path: "/asignatura/sesion/:id",
    name: "Sesion",
    component: () => import(/* webpackChunkName: "Sesion" */ "../views/Sesion.vue")
  },
  {
    path: "/",
    name: "Login",
    component: () =>
      import(/* webpackChunkName: "login" */ "../views/Login.vue")
  },
  {
    path: "/signup",
    name: "Sign Up",
    component: () =>
      import(/* webpackChunkName: "login" */ "../views/SignUp.vue")
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
