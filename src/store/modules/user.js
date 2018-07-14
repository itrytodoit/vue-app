import Vue from 'vue'
import axios from 'axios'
import * as apiConfig from '../../config/api'

const state = {
    username: ""
}

const getters = {
    username: state => {
        return state.username
    }
}

const actions = {
    login(context, postData, callback) {
        console.log(context)
        console.log(postData)
        axios({
            method: 'post',
            url: apiConfig.API_LOGIN,
            data: postData
        }).then(function(res){
            console.log(res)
            if(res.data.resultCode == 200) {
                context.commit('updateUsername', postData.username)
            }

        })
        .catch(function(err){
            console.log(err)
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