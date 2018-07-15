<template>
<div>
    <x-header :left-options="{backText: ''}">修改密码</x-header>
    <div id="reset-password">
        <x-input v-for="item in items" :name="item.name" :type="item.type" :title="item.title" :placeholder="item.placeholder" v-model.trim="item.value" :disabled="item.disabled" class="field">
        </x-input>
        <x-button type="primary" class="btn-submit" @click.native="updatePassword">修改密码</x-button>
    </div>
</div>
</template>

<script>
import {
    XHeader,
    XInput,
    XButton
} from 'vux'

export default {
    name: 'UpdatePassword',
    components: {
        XHeader,
        XInput,
        XButton
    },
    data() {
        return {
            items: [{
                    name: 'oldPassword',
                    title: '原密码',
                    type: 'password',
                    placeholder: '请输入原密码',
                    class: '',
                    value: ''
                },
                {
                    name: 'newPassword',
                    title: '新密码',
                    type: 'password',
                    placeholder: '请输入新密码',
                    class: '',
                    value: ''
                },
                {
                    name: 'newPassword2',
                    title: '   ',
                    type: 'password',
                    placeholder: '请再次输入新密码',
                    class: '',
                    value: ''
                }
            ]
        }
    },
    mounted: function () {
        let isLogin = this.$store.getters.isLogin;
        if (!isLogin) {
            this.$router.push({
                path: '/login'
            })
        }
    },
    methods: {
        updatePassword() {
            var data = {
                loginName: this.$store.getters.username,
                oldPassword: this.items[0].value,
                newPassword: this.items[1].value
            }

            let successCallback = (res) => {
                if (res.data.resultCode === '200') {
                    //TODO
                }
            }

            let errorCallback = (err) => {}

            this.$store.dispatch('updatePassword', {
                data: data,
                successCallback: successCallback,
                errorCallback: errorCallback
            })
        }
    }
}
</script>

<style scoped>
#reset-password {}

#reset-password .field {}

#reset-password .btn-submit {
    margin-top: 20px;
    width: 60%;
}
</style>
