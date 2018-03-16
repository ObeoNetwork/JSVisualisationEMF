<template>
  <div id="app">
    <header class="app-header">
      <div class="container">
        <img class="app-logo" src="./assets/logo_obeo.png">
        <span class="app-title"> JS Visualisation EMF </span>
      </div>
    </header>
	
    <div class="container mt-4">
      <div class="menu-container">
        <nav class="menu">
          <span class="menu-item" :class="{ active: (onPage('ecore')) }" @click="ecoreClick()"> 
            Meta-modèle 
          </span>
          <span class="menu-arrow"> &rang; </span>
          <span class="menu-item" :class="{ active: (onPage('mapping')) }" @click="mappingClick()"> 
            Configuration 
          </span>
          <span class="menu-arrow"> &rang; </span>
          <span class="menu-item" :class="{ active: (onPage('representation')) }" @click="representationClick()"> 
            Représentation 
          </span>
        </nav>
      </div>

      <router-view/>
    </div>
  </div>
</template>

<script>
export default {
  name: 'App',

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
    },
    ecoreClick() {
      this.$router.push('/ecore');
    },
    mappingClick() {
      if (location.pathname == '/' || location.pathname == '/ecore') {
        this.$router.push('/mapping-bubble');
      }
      if (location.pathname.includes('representation')) {
        this.$router.back();
      }
    },
    representationClick() {
      if (location.pathname.includes('mapping')) {
        this.$router.push(location.pathname.replace('mapping', 'representation'));
      }
    }
  }
}
</script>

<style src="./app.css"></style>
