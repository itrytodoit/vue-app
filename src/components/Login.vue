<template>
  <idv>
    <div id="login" class="">
      <x-input v-for="item in items"
        :name="item.name"
        :placeholder="item.placeholder"
        v-model.trim="item.value"
        class="field">
      </x-input>
      <x-button type="primary" class="btn-submit" @click.native="login">登录</x-button>
      <!--
      <router-link class="login-btn" tag="a" :to="{ path: 'forgot-password' }">忘记密码？</router-link>
      -->
    </div>
  </idv>
</template>

<script>
import { XInput, XButton } from 'vux'

export default {
  name: 'Login',
  components: {
    XInput,
    XButton
  },
  data () {
    return {
      items: [
        {
          name: 'username',
          placeholder: '请输入用户名',
          value: ''
        },
        {
          name: 'password',
          placeholder: '请输入密码',
          value: ''
        }
      ]
    }
  },
  methods: {
    login () {
      var username = this.items[0].value
      var password = this.items[1].value
      console.log('username is ' + username + ' password is ' + password)
    }
  }
}
</script>

<style scoped>
#login {
  margin: 30% 20px;
}

#login .field {

}

#login .btn-submit {
  margin-top: 20px;
  width: 60%;
}

a {
  color: #42b983;
}
</style>
