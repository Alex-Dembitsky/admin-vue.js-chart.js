/* eslint-disable */
import { Doughnut, mixins } from 'vue-chartjs'

export default {
  extends: Doughnut,
  mixins: [mixins.reactiveProp],
  props: ['chartData'],
  data () {
    return {
      options: {
        legend: {
          display: false
        },
        tooltips: {
          callbacks: {
            label: function (tooltipItem, data) {
              let allData = data.datasets[tooltipItem.datasetIndex].data
              let tooltipLabel = data.labels[tooltipItem.index]
              let tooltipData = allData[tooltipItem.index]
              for (let i in allData) {
                allData[i]
              }
              let tooltipPercentage = tooltipData
              return tooltipLabel + ': ' + tooltipPercentage + '%'
            }
          }
        }
      }
    }
  },
  mounted () {
    this.renderChart(this.chartData, this.options, this.labels)
  }
}
