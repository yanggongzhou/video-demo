import Vue from 'vue'
import Router from 'vue-router'
import one from '@/components/one'
import ten from '@/components/ten'
import adeleven from '@/components/adeleven'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: 'adeleven'
    },
    {
      path: '/one',
      name: 'one',
      component: one
    },
    {
      path: '/ten',
      name: 'ten',
      component: ten
    },
    {
      path: '/adeleven',
      name: 'adeleven',
      component: adeleven
    }
  ]
})
