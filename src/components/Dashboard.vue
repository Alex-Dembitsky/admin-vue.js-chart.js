<template>
  <div class="dashboard">
    <h1>{{ msg }}</h1>

    <h4>Users activity</h4>
    <div class="chart-line-container">
      <chart-line :height="200" :chart-data="chartLine"></chart-line>
    </div>

    <h4>Users are interested in</h4>
    <div class="md-layout md-gutter md-alignment-center">
      <div class="md-layout-item md-medium-size-33 md-small-size-50 md-xsmall-size-100">
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Error quibusdam, non molestias et! Earum magnam, similique, quo recusandae placeat dicta asperiores modi sint ea repudiandae maxime? Quae non explicabo, neque.</p>
      </div>
      <div class="md-layout-item md-medium-size-33 md-small-size-50 md-xsmall-size-100">
        <div class="chart-doughnut-container">
          <chart-doughnut :width="130" :height="130" :chart-data="chartDoughnut"></chart-doughnut>
        </div>
      </div>
    </div>

    <div class="md-layout md-gutter md-alignment-center custom-margin">
      <!--md-layout md-gutter md-alignment-center custom-margin-->
      <div class="md-layout-item md-medium-size-50 md-small-size-50 md-xsmall-size-100">
        <md-card md-with-hover>
          <md-card-header>
            <div class="md-title">Card with heading</div>
            <div class="md-subhead">It also have subheading</div>
          </md-card-header>

          <md-card-content>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Optio itaque ea, nostrum odio. Dolores, sed accusantium quasi non.
          </md-card-content>

          <md-card-actions>
            <md-button>Action</md-button>
            <md-button>Action</md-button>
          </md-card-actions>
        </md-card>
      </div>

      <div class="md-layout-item md-medium-size-50 md-small-size-50 md-xsmall-size-100">
        <md-card md-with-hover>
          <md-card-header>
            <div class="md-title">Card with heading</div>
            <div class="md-subhead">It also have subheading</div>
          </md-card-header>

          <md-card-content>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Optio itaque ea, nostrum odio. Dolores, sed accusantium quasi non.
          </md-card-content>

          <md-card-actions>
            <md-button>Action</md-button>
            <md-button>Action</md-button>
          </md-card-actions>
        </md-card>
      </div>
    </div>

    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Error quibusdam, non molestias et! Earum magnam, similique, quo recusandae placeat dicta asperiores modi sint ea repudiandae maxime? Quae non explicabo, neque.</p>
    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Error quibusdam, non molestias et! Earum magnam, similique, quo recusandae placeat dicta asperiores modi sint ea repudiandae maxime? Quae non explicabo, neque.</p>
    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Error quibusdam, non molestias et! Earum magnam, similique, quo recusandae placeat dicta asperiores modi sint ea repudiandae maxime? Quae non explicabo, neque.</p>
    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Error quibusdam, non molestias et! Earum magnam, similique, quo recusandae placeat dicta asperiores modi sint ea repudiandae maxime? Quae non explicabo, neque.</p>
    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Error quibusdam, non molestias et! Earum magnam, similique, quo recusandae placeat dicta asperiores modi sint ea repudiandae maxime? Quae non explicabo, neque.</p>
    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Error quibusdam, non molestias et! Earum magnam, similique, quo recusandae placeat dicta asperiores modi sint ea repudiandae maxime? Quae non explicabo, neque.</p>
    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Error quibusdam, non molestias et! Earum magnam, similique, quo recusandae placeat dicta asperiores modi sint ea repudiandae maxime? Quae non explicabo, neque.</p>
    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Error quibusdam, non molestias et! Earum magnam, similique, quo recusandae placeat dicta asperiores modi sint ea repudiandae maxime? Quae non explicabo, neque.</p>
  </div>
</template>

<script>
import chartDoughnut from './chartDoughnut'
import chartLine from './chartLine'

export default {
  name: 'Dashboard',
  components: {
    chartDoughnut,
    chartLine
  },
  data () {
    return {
      msg: 'Welcome to dashboard'
    }
  },
  computed: {
    chartLine () {
      this.$store.dispatch('usersActivitiesFetchData')
      let chartLineData = this.$store.state.usersActivities
      let chartLineValue = []
      let chartLineLabels = []
      for (let i = 0; i < chartLineData.length; i++) {
        let value = Math.round(chartLineData[i].activityLevel)
        let label = chartLineData[i].time
        chartLineValue.push(value)
        chartLineLabels.push(label)
      }
      return {
        labels: chartLineLabels,
        datasets: [
          {
            backgroundColor: '#f7fcfd',
            borderColor: '#33a1a7',
            pointBackgroundColor: '#33a1a7',
            borderWidth: 1,
            data: chartLineValue
          }
        ]
      }
    },
    chartDoughnut () {
      this.$store.dispatch('usersInterestingFetchData')
      let chartDoughnutData = this.$store.state.usersInterestingIn
      let chartDoughnutValue = []
      let chartDoughnutLabels = []
      for (let i = 0; i < chartDoughnutData.length; i++) {
        let value = Math.round(chartDoughnutData[i].value)
        let label = chartDoughnutData[i].name
        chartDoughnutValue.push(value)
        chartDoughnutLabels.push(label)
      }
      return {
        labels: chartDoughnutLabels,
        datasets: [
          {
            backgroundColor: [
              '#36abb4',
              '#3097a0',
              '#257a81',
              '#225361'
            ],
            borderWidth: 2,
            data: chartDoughnutValue
          }
        ]
      }
    }
  }
}
</script>

<style scoped>
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
.custom-margin{
  margin-top: 70px;
  margin-bottom: 70px;
}
.chart-doughnut-container {
  max-width: 200px;
  max-height: 200px;
}
</style>
