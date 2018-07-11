<template>
<div>
    <x-header :left-options="{backText: ''}">重置密码</x-header>
    <div id="reset-password">
        <x-input v-for="item in items" :name="item.name" :placeholder="item.placeholder" v-model.trim="item.value" class="field">
        </x-input>
        <x-button type="primary" class="btn-submit" @click.native="resetPassword">重置密码</x-button>
    </div>
    <!--
    <router-link class="login-btn" tag="a" :to="{ path: 'forgot-password' }">忘记密码？</router-link>
    -->
</div>
</template>

<script>
import {
    XHeader,
    XInput,
    XButton
} from 'vux'

export default {
    name: 'ResetPassword',
    components: {
        XHeader,
        XInput,
        XButton
    },
    data() {
        return {
            items: [{
                    name: 'username',
                    placeholder: '请输入用户名',
                    value: ''
                },
                {
                    name: 'oldPassword',
                    placeholder: '请输入原密码',
                    value: ''
                },
                {
                    name: 'newPassword',
                    placeholder: '请输入新密码',
                    value: ''
                }
            ]
        }
    },
    methods: {
        resetPassword() {
            var username = this.items[0].value
            var oldPassword = this.items[1].value
            var newPassword = this.items[2].value
            console.log('username is ' + username + ' oldPassword is ' + oldPassword + ' newPassword is ' + newPassword)
        }
    }
}
</script>

<style scoped>
#reset-password {
    margin: 30% 20px;
}

#reset-password .field {}

#reset-password .btn-submit {
    margin-top: 20px;
    width: 60%;
}
</style>
