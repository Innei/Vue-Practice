import Vue from "vue";
import App from "./App.vue";
import app from "./components/HelloWorld.vue";
import "./assets/main.css";
import router from "./router";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fas } from "@fortawesome/free-solid-svg-icons";
import { far } from "@fortawesome/free-regular-svg-icons";
import { fab } from "@fortawesome/free-brands-svg-icons";
import {
  FontAwesomeIcon,
  FontAwesomeLayers,
  FontAwesomeLayersText
} from "@fortawesome/vue-fontawesome";
library.add(fas, far, fab);

Vue.component("fi", FontAwesomeIcon);
Vue.component("fl", FontAwesomeLayers);
Vue.component("ft", FontAwesomeLayersText);

Vue.config.productionTip = false;
Vue.use(router);

new Vue({
  render: h => h(App),
  component: app,
  router
}).$mount("#app");
