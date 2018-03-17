<template>
  <div>
    <!-- Modal -->
    <div class="modal fade" id="representation-selector-modal" tabindex="-1">
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title"> Choix de la représentation </h5>
            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true"> &times; </span>
            </button>
          </div>
          <div class="modal-body">
            <div class="representation-list">
              <p :class="{ 'text-info': selectedRepresentation == 0 }" @click="switchRepresentation(0)"> 
                Bulle 
              </p>
              <p :class="{ 'text-info': selectedRepresentation == 1 }" @click="switchRepresentation(1)"> 
                Histogramme 
              </p>
              <p :class="{ 'text-info': selectedRepresentation == 2 }" @click="switchRepresentation(2)"> 
                Réseau 
              </p>
            </div>
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-info" @click="openConfigPage()" data-dismiss="modal"> 
              Valider 
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script src="./representation-selector.js"></script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style src="./representation-selector.css" scoped></style>
