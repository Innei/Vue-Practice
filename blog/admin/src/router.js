import Vue from "vue";
import Router from "vue-router";
import Main from "./views/Main.vue";
import CreateArticle from "./views/CreateArticle.vue";
import ListArticle from "./views/ListArticle.vue";
import EditArticle from "./views/EditArticle.vue";
import CreateCategory from "./views/CreateCategory.vue";
import ListCategory from "./views/ListCategory.vue";
Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/",
      name: "home",
      redirect: "posts/index",
      component: Main,
      children: [
        // 使用子路由, 父路由中的组件必须要存在 router-view 标签才能显示
        {
          path: "/posts/create",
          name: "create-article",
          component: CreateArticle
        },
        {
          path: "/posts/index",
          name: "list-article",
          component: ListArticle
        },
        {
          path: "/posts/edit/:id",
          name: "edit-article",
          component: EditArticle
        },
        {
          path: "/categories/create",
          name: "create-article",
          component: CreateCategory
        },
        {
          path: "/categories/edit/:id",
          name: "edit-article",
          component: CreateCategory,
          props: true
        },
        {
          path: "/categories/index",
          name: "list-article",
          component: ListCategory
        }
      ]
    }
  ]
});
