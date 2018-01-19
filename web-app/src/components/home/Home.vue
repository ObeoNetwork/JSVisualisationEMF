<template>
  <div class="home">
    <form class="form">
      <input type="text" class="form-control my-1" placeholder="Insérez votre modèle XML" @click="openFileInput()">
      <input type="file" class="hidden-input" id="xml-file" @change="processFileInput()">
    </form>
    <div class="chart-wrapper">
      <canvas class="chart" id="chart"></canvas>
    </div>
    <div class="mt-2">
      <p class="text-center">{{ message }}</p>
    </div>
  </div>
</template>

<script src="./home.js"></script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style src="./home.css" scoped></style>
