import Vue from 'vue'
import App from './App.vue'
import router from './router'
import './plugins/element.js'
import http from './plugins/axios'
import mavonEditor from 'mavon-editor'
import 'mavon-editor/dist/css/index.css'
Vue.use(mavonEditor)
Vue.config.productionTip = false

Vue.prototype.$http = http
Vue.mixin({
  computed: {
    uploadUrl() {
      return $http.defaults.baseURL + '/upload'
    }
  },
  methods: {
    getAuthHeaders() {
      return {
        Authorization: localStorage.token || ''
      }
    }
  }
})
new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
