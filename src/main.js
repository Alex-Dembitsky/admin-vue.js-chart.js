import Vue from 'vue'
import store from './store/index'
import router from './router'
import VueCharts from 'vue-chartjs'
import VueMaterial from 'vue-material'
import 'vue-material/dist/vue-material.min.css'
import App from './App'

Vue.use(VueMaterial)
Vue.use(VueCharts)
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  store,
  router,
  components: { App },
  template: '<App/>'
})
