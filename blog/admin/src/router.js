import Vue from "vue";
import Router from "vue-router";
import CreateArticle from "./views/CreateArticle.vue";
import ListArticle from "./views/ListArticle.vue";
import EditArticle from "./views/EditArticle.vue";
import CreateCategory from "./views/CreateCategory.vue";
import ListCategory from './views/ListCategory.vue'
Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/",
      name: "home",
      redirect: "articles/index"
    },
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
      path: "/categories/index",
      name: "list-article",
      component: ListCategory
    }
  ]
});
