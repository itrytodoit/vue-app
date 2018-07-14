<template>
<div>
    <x-header :left-options="{backText: ''}">修改密码</x-header>
    <div id="reset-password">
        <x-input v-for="item in items" :name="item.name" :type="item.type" :title="item.title" :placeholder="item.placeholder" v-model.trim="item.value" class="field">
        </x-input>
        <x-button type="primary" class="btn-submit" @click.native="updatePassword">重置密码</x-button>
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
                    name: 'username',
                    title: '用户名',
                    type: '',
                    placeholder: '',
                    value: this.$store.getters.username
                },
                {
                    name: 'oldPassword',
                    title: '原密码',
                    type: 'password',
                    placeholder: '请输入原密码',
                    value: ''
                },
                {
                    name: 'newPassword',
                    title: '新密码',
                    type: 'password',
                    placeholder: '请输入新密码',
                    value: ''
                }
            ]
        }
    },
    methods: {
        updatePassword() {
            var username = this.items[0].value
            var oldPassword = this.items[1].value
            var newPassword = this.items[2].value
            console.log('username is ' + username + ' oldPassword is ' + oldPassword + ' newPassword is ' + newPassword)
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
