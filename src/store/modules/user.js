import axios from 'axios'
import * as apiConfig from '../../config/api'

const state = {
  username: ''
}

const getters = {
  username: state => {
    return state.username
  }
}

const actions = {
  login(context, options) {
    console.log(apiConfig.API_LOGIN)
    axios({
        method: 'POST',
        url: apiConfig.API_LOGIN,
        data: options.data
      }).then(function (res) {
        options.successCallback(res)
      })
      .catch(function (err) {
        options.errorCallback(err)
      })
  },
  updatePassword(context, options) {
    console.log(apiConfig.API_UPDATE_PASSWORD)
    axios({
        method: 'POST',
        url: apiConfig.API_UPDATE_PASSWORD,
        data: options.data
      }).then(function (res) {
        options.successCallback(res)
      })
      .catch(function (err) {
        options.errorCallback(err)
      })
  }
}

const mutations = {
  updateUsername(state, username) {
    state.username = username
  }
}

export default {
  state,
  getters,
  actions,
  mutations
}
