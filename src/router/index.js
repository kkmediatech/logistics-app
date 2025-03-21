import Vue from 'vue';
import Router from 'vue-router';
import GrabSingle from '@/views/GrabSingle.vue';
import Home from '@/views/Home.vue'; 
import Details from '@/views/Details.vue';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home,
    },
    {
      path: '/grab-single',
      name: 'GrabSingle',
      component: GrabSingle,
      props: true,
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
