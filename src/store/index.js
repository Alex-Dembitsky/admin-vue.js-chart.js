import Vuex from 'vuex'
import Vue from 'vue'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    usersActivities: [],
    usersInterestingIn: []
  },
  actions: {
    usersActivitiesFetchData () {
      let response = [{'activityLevel': '25', 'time': '9:00'}, {'activityLevel': '65', 'time': '10:00'}, {'activityLevel': '34', 'time': '11:00'}, {'activityLevel': '35', 'time': '12:00'}, {'activityLevel': '75', 'time': '13:00'}, {'activityLevel': '75', 'time': '14:00'}, {'activityLevel': '45', 'time': '15:00'}, {'activityLevel': '47', 'time': '16:00'}, {'activityLevel': '67', 'time': '17:00'}, {'activityLevel': '77', 'time': '18:00'}]
      this.commit('toStateActivities', response)
    },
    usersInterestingFetchData () {
      let response = [{'name': 'Swimming', 'value': '30'}, {'name': 'Soccer', 'value': '10'}, {'name': 'Films', 'value': '15'}, {'name': 'Programming', 'value': '45'}]
      this.commit('toStateInterestingIn', response)
    }
  },
  mutations: {
    toStateActivities (state, usersActivities) {
      state.usersActivities = usersActivities
    },
    toStateInterestingIn (state, usersInterestingIn) {
      state.usersInterestingIn = usersInterestingIn
    }
  }
})

export default store
