import Vue from "vue";
import VueRouter from "vue-router";

const Home = () => import("../views/Home.vue");

const Index = () => import("../views/index/Index.vue");
const Follow = () => import("../views/follow/Follow.vue");
const VideoList = () => import("../components/index/VideoList.vue");
const me = () => import("../views/me/me.vue");
const msg = () => import("../views/msg/msg.vue");

Vue.use(VueRouter);

const routes = [
  // 默认首页显示
  {
    path: "/",
    redirect: "/index",
  },
  {
    path: "/home",
    name: "Home",
    component: Home,
    children: [
      {
        path: "/index",
        name: "index",
        component: Index,
        //子路由
        children: [
          {
            path: "/index",
            component: VideoList,
          },
        ],
      },
      {
        path: "/follow",
        name: "follow",
        component: Follow,
      },
      {
        path: "/me",
        name: "me",
        component: me,
      },
      {
        path: "/msg",
        name: "msg",
        component: msg,
      },
    ],
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
