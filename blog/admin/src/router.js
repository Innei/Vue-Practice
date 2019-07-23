import Vue from "vue";
import Router from "vue-router";
import Main from "./views/Main.vue";

import ListArticle from "./views/ListArticle.vue";
import EditArticle from "./views/EditArticle.vue";

import CreateCategory from "./views/EditCategory.vue";
import ListCategory from "./views/ListCategory.vue";

import ListAdminUser from "./views/ListAdminUser.vue";
import EditAdminUser from "./views/EditAdminUser.vue";

import Login from "./views/Login.vue";

Vue.use(Router);

export default new Router({
  routes: [
    { path: "/login", name: "login", component: Login },
    {
      path: "/",
      name: "home",
      redirect: "posts/index",
      component: Main,
      children: [
        // 使用子路由, 父路由中的组件必须要存在 router-view 标签才能显示
        {
          path: "/posts/create",
          component: EditArticle
        },
        {
          path: "/posts/index",
          component: ListArticle
        },
        {
          path: "/posts/edit/:id",
          component: EditArticle,
          props: true
        },
        {
          path: "/categories/create",
          component: CreateCategory
        },
        {
          path: "/categories/edit/:id",
          component: CreateCategory,
          props: true
        },
        {
          path: "/categories/index",
          component: ListCategory
        },
        {
          path: "/admin_users/index",
          component: ListAdminUser
        },
        {
          path: "/admin_users/edit/:id",
          component: EditAdminUser,
          props: true
        },
        {
          path: "/admin_users/create",
          component: EditAdminUser
        }
      ]
    }
  ]
});
