<template>
<idv>
    <div id="login" class="">
        <x-input v-for="item in items" :name="item.name" :type="item.type" :placeholder="item.placeholder" v-model.trim="item.value" class="field">
            <i :class="item.icon" aria-hidden="true" slot="label"></i>
        </x-input>
        <x-button type="primary" class="btn-submit" @click.native="login">登录</x-button>
    </div>
</idv>
</template>

<script>
import {
    XInput,
    XButton
} from 'vux'

export default {
    name: 'Login',
    components: {
        XInput,
        XButton
    },
    data() {
        return {
            items: [{
                    name: 'username',
                    title: '用户名',
                    type: '',
                    placeholder: '请输入用户名',
                    value: '',
                    icon: 'fa fa-user fa-icon'
                },
                {
                    name: 'password',
                    title: '密码',
                    type: 'password',
                    placeholder: '请输入密码',
                    value: '',
                    icon: 'fa fa-key fa-icon'
                }
            ]
        }
    },
    methods: {
        login() {
            var username = this.items[0].value
            var password = this.items[1].value
            console.log('username is ' + username + ' password is ' + password)
            location.href = '/'
        }
    }
}
</script>

<style scoped>
#login {
    margin: 30% 20px;
}

#login .field {}

#login .btn-submit {
    margin-top: 20px;
    width: 60%;
}

.fa-icon {
    width: 24px;
    height: 24px;
    color: #35495e;
    padding-right: 10px;
}
</style>
