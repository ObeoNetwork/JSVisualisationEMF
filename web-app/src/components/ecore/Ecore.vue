<template>
  <div class="ecore">
    <form class="form">
      <input type="text" class="form-control my-1" :value="metaModelData.name"
        placeholder="Insérez votre meta-modèle ecore" @click="openFileInput()">
      <input type="file" class="hidden-input" id="ecore-file" @change="processFileInput()">
    </form>
    <div class="table-wrapper">
      <table class="table">
        <tr>
          <th scope="col"> # </th>
          <th> Entity </th>
          <th> Parent entity </th>
          <th> Attributes </th>
        </tr>
        <tr v-for="(m, i) in metaModelData.entities" :key="m.name">
          <td scope="row"> {{ i }} </td>
          <td> {{ m.name }} </td>
          <td> {{ m.superClass }} </td>
          <td> <span v-for=" a in m.attrs" :key="a"> {{ a }} </span> </td>
        </tr>
      </table>
    </div>
    <div class="mt-2">
      <p class="text-center">{{ message }}</p>
    </div>
  </div>
</template>

<script src="./ecore.js"></script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style src="./ecore.css" scoped></style>
