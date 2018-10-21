/**
 */
import Vuex from 'vuex'
import Vue from 'vue'

Vue.use(Vuex)
export default new Vuex.Store({
  state: {
    user: {},
    token: null,
    title: ''
  },
  mutations: {
    handleLogin: (state, data) => {
      localStorage.token = data
      state.token = data
    },
    handleLogout: state => {
      localStorage.removeItem('token')
      state.token = null
    },
    handleTitle: (state, data) => {
      localStorage.title = data
      state.title = data
    }
  }
})
