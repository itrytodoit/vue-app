<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
import { Drawer, Group, Cell } from 'vux'
export default {
  name: 'App',
  components: {
    Drawer,
    Group,
    Cell
  }
}
</script>

<style>
body {
  margin: 0;
}

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  /*text-align: center;*/
  color: #2c3e50;
  /*margin-top: 60px;*/
}
</style>
