import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/home/Home.vue'
import Ecore from '@/components/ecore/Ecore.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/ecore',
      name: 'ecore',
      component: Ecore
    }
  ]
})
