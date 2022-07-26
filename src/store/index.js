import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
import $axios from './api'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    stateDrawerOpen: null,
    status: '',
    token: localStorage.getItem('token') || '',
    user: localStorage.getItem('user') || {}
  },
  mutations: {
    toggleDrawerOpen(state) {
      state.stateDrawerOpen = !state.stateDrawerOpen
    },
    auth_request(state) {
      state.status = 'loading'
    },
    auth_success(state, {
      token,
      user
    }) {
      state.status = 'success'
      state.token = token
      state.user = user
    },
    auth_error(state) {
      state.status = 'error'
    },
    logout(state) {
      state.status = ''
      state.token = ''
      localStorage.removeItem('user')
      state.user = {}
    },
  },

  actions: {
    toggleDrawer: (context) => {
      context.commit("toggleDrawerOpen")
    },
    login({ commit }, user) {
      return new Promise((resolve, reject) => {
        commit('auth_request')
        //axios.post('/api/auth/login', user)
        //  .then(res => {
        //    if (res.data.status == 'success') {
        //      let token = res.data.token
        //      let user = res.data.user
        let token = "duMm1e5t0k3n";
        let user = "datauser";

        localStorage.setItem('token', token)
        localStorage.setItem('user', JSON.stringify(user));
        $axios.defaults.headers.common['Authorization'] = token

        commit('auth_success', {
          token,
          user
        })
        resolve('ok')
        /*resolve(res)
              } else {
                resolve(res)
              }
            })
            .catch(err => {
              commit('auth_error')
              localStorage.removeItem('token')
              reject(err)
            })
        */
      })
    },

    logout({ commit }) {
      return new Promise((resolve, reject) => {
        commit('logout')
        console.log('logout')
        //axios.post('/api/auth/logout')
        localStorage.removeItem('token')
        localStorage.removeItem('user')
        delete $axios.defaults.headers.common['Authorization']
        resolve()
      })
    }
  },
  getters: {
    isLoggedIn: state => !!state.token,
    authStatus: state => state.status,
    user: state => state.user
  },
  modules: {},
})
