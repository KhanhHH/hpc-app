// import Home from "@/views/Portal/Home.vue";
import Login from "@/views/Portal/Login.vue";
import Jwt from "@/utils/jwt";

const routes = [
  {
    path: "/",
    name: "Home",
    redirect: "/login"
    // component: Home
  },
  {
    path: "/login",
    name: "Login",
    component: Login,
    beforeEnter: (to, from, next) => {
      const accessToken = Jwt.getAccessToken();
      if (accessToken) {
        next("/app");
      } else {
        next();
      }
    }
  }
];
export default routes;
