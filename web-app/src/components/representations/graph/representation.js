import vis from 'vis';

export default {

  name: 'representation-graph',

  data() {
    return {
      fileReader: new FileReader(),
      chartData: {},
      xmlInput: {},
      message: ''
    }
  },

  created() {

  },

  mounted() {
     this.fileReader.onload = (e) => {
      const entities = JSON.parse((localStorage.getItem('obeo-jsvemf_entities') || '[]'));
      const xmlData = this.fileReader.result;
      this.chartData = this.xmlConverter.xmlToToChartData(entities, xmlData);
      this.loadChart(this.chartData);
    }
    this.xmlInput = document.querySelector('#xml-file');
  },

  methods: {
    openFileInput() {
      this.xmlInput.click();
    },


    processFileInput() {
      if (this.xmlInput.files.length) {
        this.fileReader.readAsText(this.xmlInput.files[0]);
      }
    },

    loadChart(chartData) {
      chartData.forEach(function(modelItem, index){
        modelItem.id = index;
      });

      var container = document.getElementById('graph');
      var nodes = new vis.DataSet(chartData);

      var data = {
        nodes
      };

      var net = new vis.Network(container, data, {});
    }
  }
}
