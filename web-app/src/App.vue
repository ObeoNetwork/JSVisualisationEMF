<template>
  <div id="app">
    <header class="app-header">
      <img src="./assets/logo_obeo.png">
    </header>
    <div class="container mt-4">
      <router-view/>
    </div>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style src="./app.css"></style>
