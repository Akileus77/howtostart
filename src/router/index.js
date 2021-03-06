import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";

Vue.use(VueRouter);
  //TODO DAHA FAZLA SAYFA EKLENECEK
const routes = [
  {
    path: "/",
    name: "Home",
    component: Home
  },
  {
    path: "/web",
    name: "Web",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "web" */ "../views/web.vue")
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
