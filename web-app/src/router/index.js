import Vue from 'vue'
import Router from 'vue-router'
import Ecore from '@/components/ecore/Ecore.vue'
import MappingBubble from '@/components/mappings/bubble/Mapping.vue'
import RepresentationBubble from '@/components/representations/bubble/Representation.vue'
import RepresentationBar from '@/components/representations/bar/Representation.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Ecore
    },
    {
      path: '/ecore',
      name: 'ecore',
      component: Ecore
    },
    {
      path: '/mapping-bubble',
      name: 'mapping-bubble',
      component: MappingBubble
    },
    {
      path: '/representation-bubble',
      name: 'representation-bubble',
      component: RepresentationBubble
    },
    {
      path: '/representation-bar',
      name: 'representation-bar',
      component: RepresentationBar
    }
  ]
})
