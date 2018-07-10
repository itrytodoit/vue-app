<template>
  <div class="">
    <x-input placeholder="用户名"></x-input>
    <x-input placeholder="密码"></x-input>
    <x-button type="primary">重置密码</x-button>
  </div>
</template>

<script>
import { XInput, XButton } from 'vux'

export default {
  name: 'InitPassword',
  components: {
    XInput,
    XButton
  },
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
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
