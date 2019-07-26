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
  // 全局混入, 每个 Vue 实例中都有以下的方法或属性
  computed: {
    uploadUrl() {
      return this.$http.defaults.baseURL + '/upload'
    },
    getAuthHeaders() {
      return {
        Authorization: localStorage.token || ''
      }
    }
  },
  methods: {}
})
new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
