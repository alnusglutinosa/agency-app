import Vue from 'vue'
import Router from 'vue-router'
import Vuelidate from 'vuelidate'
import VueScrollactive from 'vue-scrollactive'
import Homepage from '@/pages/Homepage'
import NotFound from '@/pages/NotFound'

Vue.use(Vuelidate)
Vue.use(Router);
Vue.use(VueScrollactive);

export default new Router({
  abstract: true,
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Homepage',
      component: Homepage
    },
    {
      path: '*',
      name: 'NotFound',
      component: NotFound
    }
  ],
  scrollBehavior (to) {
    if (to.hash) {
      return {
        selector: to.hash
      }
    }
  }

})
