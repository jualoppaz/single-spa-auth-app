/* eslint-disable import/no-unresolved */
import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router);

export default new Router({
  mode: 'history',
  base: '/login',
  routes: [
    {
      path: '/',
      component: () => import('@/views/Login'),
      children: [],
    },
  ],
});
