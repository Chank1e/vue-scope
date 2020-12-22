import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import { store } from "./store";

Vue.config.productionTip = false;
Vue.config.performance = true;
Vue.use({
  install() {
    Vue.prototype.$sdk = function(i: number) {
      return i * 2;
    };
  }
});

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
