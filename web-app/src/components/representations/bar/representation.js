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
      var barLabel = [];
      var barData = [];
      chartData.forEach(function(data, index){ // Récupération des données pour le graphe
        console.log(data);
        barLabel.push(data.label);
        barData.push(data.data.length);
      });

      var myChart = new Chart(ctx, {
        type: 'bar',
        data: {
          labels: barLabel,
          datasets: [
            {
              backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9"],
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
