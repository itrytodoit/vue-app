import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const state = {
}

const getters = {}

const actions = {
    login() {
        let api = '/api/login'
        let params = ''
        this.$http.post(api,params).then((response) => {
            if(!response.data.success){
                toastConf.text = response.data.errorMsg
                this.$vux.toast.show(toastConf)
                return
            }
            this.$vux.alert.show({
                title: '修改成功',
                content: '请使用新设置的密码',
                onHide() {
                  // self.jsbridge.callLogout()
                  this.jsbridge.callLogin('logoutCb')
                }
              })
        }).catch((errorResponse) => {
            this.$store.dispatch('showErrorToast')
        })
    }
}

const mutations = {
    updateUsername(state) {
        alert('updateUsername')
        state.username = 'AAAAA'
    }
}

export default {
    state,
    getters,
    actions,
    mutations
}