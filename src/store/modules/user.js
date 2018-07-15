import axios from 'axios'
import * as apiConfig from '../../config/api'

const state = {
  username: '',
  isLogin: false
}

const getters = {
  username: state => {
    return state.username
  },
  isLogin: state => {
    return state.isLogin
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
  },
  updateIsLogin(state, isLogin) {
    state.isLogin = isLogin
  }
}

export default {
  state,
  getters,
  actions,
  mutations
}
