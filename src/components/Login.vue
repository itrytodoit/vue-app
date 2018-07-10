<template>
  <div class="">
    <x-input v-for="item in items"
      :name="item.name"
      :placeholder="item.placeholder"
      v-model.trim="item.value">
    </x-input>
    <x-button type="primary" class="" @click.native="login">登录</x-button>
    <router-link tag="a" :to="{ path: 'forgot-password' }">忘记密码？</router-link>
  </div>
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
      console.log('login' + this.items[0].value)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
