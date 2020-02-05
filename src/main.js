import Vue from 'vue';
import { BootstrapVue } from 'bootstrap-vue';
import VueToastr from 'vue-toastr';

import { library } from '@fortawesome/fontawesome-svg-core';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';

import App from './App.vue';
import router from './router';

import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-vue/dist/bootstrap-vue.css';

library.add(faGithub);

Vue.component('font-awesome-icon', FontAwesomeIcon);

Vue.use(BootstrapVue);

Vue.use(VueToastr, {
  defaultPosition: 'toast-top-right',
  defaultPreventDuplicates: true,
  defaultTimeout: 0,
});

Vue.config.productionTip = false;

new Vue({
  router,
  render: (h) => h(App),
}).$mount('#auth-app');
