import { createRouter, createWebHistory } from "vue-router";
import Welcome from "../views/Welcome.vue";
import Chatroom from "../views/Chatroom.vue";
import { projectAuth } from "@/firebase/config";

/** auth guard
  Khi chưa đăng nhập thì user không thể đến trang/route 'chatroom'.
  Vậy nên trước khi đến route trên thì phải kiểm tra
  + Nếu chưa đăng nhập thì redirect về trang Welcome
  + Nếu đã đăng nhập thành công thì cho phép redirect đén trang Chatroom
*/
const requireAuth = (to, from, next) => {
  const user = projectAuth.currentUser;

  // If not auth => redirect to welcome
  if (!user) {
    next({ name: "welcome" });
  } else {
    next();
  }
};

const requireNoAuth = (to, from, next) => {
  const user = projectAuth.currentUser;

  // If auth => redirect to chatroom
  if (user) {
    next({ name: "chatroom" });
  } else {
    next();
  }
};

const routes = [
  {
    path: "/",
    name: "welcome",
    component: Welcome,
    beforeEnter: requireNoAuth,
  },
  {
    path: "/chatroom",
    name: "chatroom",
    component: Chatroom,
    beforeEnter: requireAuth,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
