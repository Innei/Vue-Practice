import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,

      children: [
        {
          path: '/',
          component: () => import('./views/Hello.vue'),
          meta: 'about'
        },
        {
          path: '/about',
          component: () => import('./views/About.vue'),
          meta: 'photo'
        },
        {
          path: '/photo',
          component: () => import('./views/Photo.vue'),
          meta: 'connect'
        },
        {
          path: '/connect',
          component: () => import('./views/Connect.vue')
        }
      ]
    }
  ]
})
