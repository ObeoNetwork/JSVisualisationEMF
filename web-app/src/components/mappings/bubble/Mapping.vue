<template>
  <div class="mapping">
  	<table class="table">
	    <tr>
	      <th scope="col"> # </th>
	      <th> Entity Name</th>
	      <th> Color </th>
	    </tr>
      <tr v-for="metamodelItem in metamodel" :key="metamodelItem.label">
        <td scope="row"> {{  }} </td>
        <td> {{ metamodelItem.name }}</td>
        <td>
        	<select>
        		<option>Aucune couleur</option>
        		<option v-for='color in colors'>
        			{{ color.name}}
        		</option>
        	</select>
        </td>
      </tr>
    </table>
  </div>
</template>

<script src="./mapping.js"></script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style src="./mapping.css" scoped></style>
