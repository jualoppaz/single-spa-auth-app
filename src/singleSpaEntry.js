import "./set-public-path";
import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import singleSpaVue from "single-spa-vue";

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

const vueLifecycles = singleSpaVue({
  Vue,
  appOptions: {
    render: h => h(App),
    router
  }
});

export const bootstrap = vueLifecycles.bootstrap;
export const mount = vueLifecycles.mount;
export const unmount = vueLifecycles.unmount;
