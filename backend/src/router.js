import Vue from "vue";
import Router from "vue-router";
import CreateArticle from "./views/CreateArticle.vue";
import ListArticle from "./views/ListArticle.vue";

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
    }
  ]
});
