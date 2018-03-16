<template>
  <div class="mapping">
  	<table class="table">
	    <tr>
	      <th scope="col"> # </th>
	      <th> Entity Name</th>
	      <th> Color </th>
        <th> Border color </th>
	    </tr>
      <tr v-for="(metamodelItem, index) in metamodels" :key="metamodelItem.label">
        <td scope="row"> {{ index }} </td>
        <td> {{ metamodelItem.name }}</td>
        <td>
        	<select v-model="metamodelItem.backgroundColor" @change="saveMetamodel()">
        		<option>Aucune couleur</option>
        		<option :value="color.value" v-for="color in colors" :key="color.name">
        			{{ color.name }}
        		</option>
        	</select>
          <div class="colorDisplayer" :style="{ backgroundColor: metamodelItem.backgroundColor }"></div>
        </td>

        <td>
          <select v-model="metamodelItem.borderColor" @change="saveMetamodel()">
            <option>Aucune couleur</option>
            <option :value="color.value" v-for='color in colors'>
              {{ color.name }}
            </option>
          </select>
          <div class="colorDisplayer" :style="{ backgroundColor: metamodelItem.borderColor }"></div>
        </td>
      </tr>
    </table>
  </div>
</template>

<script src="./mapping.js"></script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style src="./mapping.css" scoped></style>
