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
            <option :value="color.value" v-for="color in colors" :key="color.name">
              {{ color.name }}
            </option>
          </select>
          <div class="colorDisplayer" :style="{ backgroundColor: metamodelItem.borderColor }"></div>
        </td>
      </tr>
    </table>
    
    <div class="mt-4 mb-4 text-right">
      <button type="button" class="btn btn-muted" @click="$router.push('/ecore')">
        Changer de meta-modèle
      </button>
       &nbsp; 
      <button type="button" class="btn btn-muted" data-toggle="modal" data-target="#representation-selector-modal">
        Changer de représentation
      </button>
       &nbsp; 
      <button type="button" class="btn btn-info" @click="$router.push('/representation-bar')">
        Afficher la représentation
      </button>
    </div>
  </div>
</template>

<script src="./mapping.js"></script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style src="./mapping.css" scoped></style>
