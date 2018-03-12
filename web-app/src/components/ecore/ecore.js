
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
      localStorage.setItem('obeo-jsvemf_ecore-name', JSON.stringify(this.metaModelData.name));
      localStorage.setItem('obeo-jsvemf_entities', JSON.stringify(this.metaModelData.entities));
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
