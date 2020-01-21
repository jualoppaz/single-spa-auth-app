import Vue from "vue";
import App from "./App.vue";
import router from "./router";

import { BootstrapVue } from "bootstrap-vue";

import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue/dist/bootstrap-vue.css";

Vue.use(BootstrapVue);

import VueToastr from "vue-toastr";

Vue.use(VueToastr, {
  defaultPosition: "toast-top-right",
  defaultPreventDuplicates: true,
  defaultTimeout: 0
});

Vue.config.productionTip = false;

new Vue({
  router,
  render: h => h(App)
}).$mount("#auth-app");
