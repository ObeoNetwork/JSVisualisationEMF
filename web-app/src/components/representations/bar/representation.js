import { Chart } from 'chart.js'

export default {

  name: 'representation-bar',

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
      var ctx = document.querySelector('#chart').getContext('2d');
      var barLabel = [];
      var barData = [];
      var barColors = [];
      chartData.forEach((data, index) => { // Récupération des données pour le graphe
        barLabel.push(data.label);
        barData.push(data.data.length);
        barColors.push(data.backgroundColor);
      });

      var myChart = new Chart(ctx, {
        type: 'bar',
        data: {
          labels: barLabel,
          datasets: [
            {
              backgroundColor: barColors,
              data: barData
            }
          ]
        },
        options: {
          responsive: true,
          legend: {
            display: false
          },
          scales: {
            yAxes: [{
              ticks: {
                beginAtZero: true,
                stepSize: 1
              }
            }]
          }
        }
      });
    }
  }
}
