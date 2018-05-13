/* eslint-disable */
import { Line, mixins } from 'vue-chartjs'

export default {
  extends: Line,
  mixins: [mixins.reactiveProp],
  props: ['chartData'],
  data () {
    return {
      options: {
        responsive: true,
        maintainAspectRatio: false,
        scales: {
          yAxes: [{
            gridLines: {
              drawBorder: false
            },
            ticks: {
              display: false
            }
          }],
          xAxes: [{
            gridLines: {
              color: '#33a1a7',
              lineWidth: 0.5
            },
            ticks: {
              beginAtZero: true,
              fontSize: '11',
              fontColor: 'rgba(27,96,116,.6)'
            }
          }]
        },
        legend: {
          display: false
        },
        borderWidth: 2,
        layout: {
          padding: {
            left: 0,
            right: 0,
            top: 20,
            bottom: 30
          }
        }
      }
    }
  },
  mounted () {
    this.renderChart(this.chartData, this.options)
  }
}
