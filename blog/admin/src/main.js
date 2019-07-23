import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import "./plugins/element.js";
import axios from "axios";
import mavonEditor from "mavon-editor";
import "mavon-editor/dist/css/index.css";
Vue.use(mavonEditor)
Vue.config.productionTip = false;

Vue.prototype.$http = axios.create({
  baseURL: "http://localhost:3000/admin/api"
});
new Vue({
  router,
  render: h => h(App)
}).$mount("#app");
