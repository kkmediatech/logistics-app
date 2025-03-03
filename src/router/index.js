import Vue from 'vue';
import Router from 'vue-router';
import Home from '@/views/Home.vue';
import Details from '@/views/Details.vue';

Vue.use(Router);

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      component: Home,
    },
    {
      path: '/details/:id',
      name: 'Details',
      component: Details,
      props: true,
    },
    {
      path: '*',
      redirect: '/',
    },
  ],
});