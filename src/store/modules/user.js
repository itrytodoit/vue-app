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
  login (context, options) {
    console.log(apiConfig.API_LOGIN)
    axios({
      method: 'post',
      url: apiConfig.API_LOGIN,
      data: options.data
    }).then(function (res) {
      if (res.data.resultCode === 200) {
        options.successCallback()
      }
    })
      .catch(function (err) {
        options.errorCallback()
      })
  },
  updatePassword (context, options) {
    console.log(apiConfig.API_UPDATE_PASSWORD)
    axios({
      method: 'post',
      url: apiConfig.API_UPDATE_PASSWORD,
      data: options.data
    }).then(function (res) {
      if (res.data.resultCode == 200) {
        options.successCallback()
      }
    })
      .catch(function (err) {
        options.errorCallback()
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
mutations}
