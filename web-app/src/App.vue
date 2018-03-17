<template>
  <div id="app">
    <header class="app-header">
      <div class="container">
        <img class="app-logo" src="./assets/logo_obeo.png">
        <span class="app-title"> JS Visualisation EMF </span>
      </div>
    </header>
	
    <div class="container">
      <div class="menu-container mt-3 mb-4">
        <nav class="menu">
          <span class="menu-item" :class="{ active: (onPage('ecore')) }"> 
            Meta-modèle 
          </span>
          <span class="menu-arrow"> &rang; </span>
          <span class="menu-item" :class="{ active: (onPage('mapping')) }"> 
            Configuration 
          </span>
          <span class="menu-arrow"> &rang; </span>
          <span class="menu-item" :class="{ active: (onPage('representation')) }"> 
            Représentation 
          </span>
        </nav>
      </div>

      <router-view/>

      <representation-selector/>
    </div>
  </div>
</template>

<script>
import RepresentationSelector from '@/components/representation-selector/Representation-selector.vue'

export default {
  name: 'App',

  components: {
    'representation-selector': RepresentationSelector
  },

  methods: {
    onPage(pageName) {
      switch (pageName) {
        case 'ecore':
          return (location.pathname == '/' || location.pathname == '/ecore');
          break;
        case 'mapping':
          return location.pathname.includes('mapping');
          break;
        case 'representation':
          return location.pathname.includes('representation');
          break;
      }
    }
  }
}
</script>

<style src="./app.css"></style>
