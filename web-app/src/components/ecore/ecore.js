import { Chart } from 'chart.js'

export default {

  name: 'ecore',

  data() {
    return {
      fileReader: new FileReader(),
      metaModelData: {
        name: '',
        entities: []
      },
      ecoreInput: {},
      message: ''
    }
  },

  created() {

  },

  mounted() {
    this.fileReader.onload = (e) => {
      const ecoreData = this.fileReader.result;
      this.metaModelData = this.ecoreConverter.ecoreToJsData(ecoreData);
    }
    this.ecoreInput = document.querySelector('#ecore-file');
  },

  methods: {
    openFileInput() {
      this.ecoreInput.click();
    },

    processFileInput() {
      if (this.ecoreInput.files.length) {
        this.fileReader.readAsText(this.ecoreInput.files[0]);
      }
    }
  }
}
