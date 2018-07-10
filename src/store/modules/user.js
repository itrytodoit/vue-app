import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const getters = {}

const actions = {
    login() {
        Vue.http.get(API_LOGIN).then((response) => {

        })
    }
}

export default {
    actions
}