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
  </div>
</template>

<script src="./graph.js"></script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style src="./graph.css" scoped></style>
