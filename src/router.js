import Vue from 'vue';
import Router from 'vue-router';

import Home from './views/Home.vue';
import CountryDetails from './views/CountryDetails.vue';
import About from './views/About.vue';
import Error from './views/Error.vue';

Vue.use(Router);

export default new Router({
  mode: 'history',

  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
    },
    {
      path: '/country',
      name: 'countryDetails',
      component: CountryDetails,
      props: true,
    },
    {
      path: '/about',
      name: 'about',
      component: About,
    },
    {
      path: '*',
      name: 'Error',
      component: Error,
    },
  ],

});
