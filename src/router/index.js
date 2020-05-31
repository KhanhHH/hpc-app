import Vue from "vue";
import VueRouter from "vue-router";
import PortalRoutes from "./Portal";
import AppRoutes from "./App";

Vue.use(VueRouter);

const routes = [...PortalRoutes, ...AppRoutes];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
  scrollBehavior() {
    document.getElementById("app").scrollIntoView();
  }
});

// router.beforeEach((to, from, next) => {

// })
export default router;
