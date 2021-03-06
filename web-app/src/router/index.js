import Vue from 'vue'
import Router from 'vue-router'
import Ecore from '@/components/ecore/Ecore.vue'
import MappingBubble from '@/components/mappings/bubble/Mapping.vue'
import MappingBar from '@/components/mappings/bar/Mapping.vue'
import RepresentationBubble from '@/components/representations/bubble/Representation.vue'
import RepresentationBar from '@/components/representations/bar/Representation.vue'
import RepresentationGraph from '@/components/representations/graph/Representation.vue'


Vue.use(Router)

export default new Router({  
  mode: 'history',
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
      path: '/mapping-bar',
      name: 'mapping-bar',
      component: MappingBar
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
    },
        {
      path: '/representation-graph',
      name: 'representation-graph',
      component: RepresentationGraph
    }
  ]
})
