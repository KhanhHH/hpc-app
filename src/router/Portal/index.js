import Home from "@/views/Portal/Home.vue";
import Login from "@/views/Portal/Login.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home
  },
  {
    path: "/login",
    name: "Login",
    component: Login
  }
];
export default routes;
