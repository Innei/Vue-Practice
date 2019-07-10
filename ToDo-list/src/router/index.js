import Vue from 'vue'
import Router from 'vue-router'
import todo from '../todo/todo.vue'
import active from '../todo/active.vue'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'todo',
      component: todo,
    },
    {
      path: '/active',
      name: 'active',
      component: active,
    }
  ]
})
