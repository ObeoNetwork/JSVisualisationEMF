<template>
  <div class="representation">
    <form class="form">
      <input type="text" class="form-control my-1" placeholder="Insérez votre modèle XML" @click="openFileInput()">
      <input type="file" class="hidden-input" id="xml-file" @change="processFileInput()">
    </form>
    <div class="chart-wrapper">
      <div class="chart" id="graph"></div>
    </div>
    <div class="mt-2">
      <p class="text-center">{{ message }}</p>
    </div>
    
    <div class="mt-4 mb-4 text-right">
      <button type="button" class="btn btn-muted" @click="$router.push('/ecore')">
        Changer de meta-modèle
      </button>
       &nbsp; 
      <button type="button" class="btn btn-muted" data-toggle="modal" data-target="#representation-selector-modal">
        Changer de représentation
      </button>
    </div>
  </div>
</template>

<script src="./representation.js"></script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style src="./representation.css" scoped></style>
