import Vue from 'vue'
import Vuex from 'vuex'

import user from './modules/user'
import workflow from './modules/workflow'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    user,
    workflow
  },
  strict: false,
  plugins: []
})
