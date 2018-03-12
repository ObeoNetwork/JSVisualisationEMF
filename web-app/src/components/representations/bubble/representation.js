import { Chart } from 'chart.js'

export default {

  name: 'representation-bubble',

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
      const xmlData = this.fileReader.result;
      this.chartData = this.xmlConverter.xmlToBubbleData(xmlData);
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
      var ctx = document.querySelector('#chart').getContext('2d');
      var myChart = new Chart(ctx, {
        type: 'bubble',
        data: {
          datasets: chartData
        },
        options: {
          layout: {
            padding: {
              top: 100,
              right: 100,
              bottom: 100,
              left: 100
            }
          },
          scales: {
            xAxes: [{
              display: false
            }],
            yAxes: [{
              display: false
            }]
          },
          tooltips: {
            callbacks: {
              label: (tooltipItem, data) => {
                const entityIndex = tooltipItem.datasetIndex;
                const itemIndex = tooltipItem.index;
                return data.datasets[entityIndex].data[itemIndex].label;
              }
            }
          }
        }
      });
    }
  }
}
