<template>
  <div id="app">
  <drawer
      width="200px;"
      :drawer-style="{'background-color':'#35495e', width: '200px'}">

    <div slot="drawer">
     <group title="Drawer demo(beta)" style="margin-top:20px;">
          <cell title="Demo" link="/demo" value="演示">
          </cell>
          <cell title="Buy me a coffee" link="project/donate">
          </cell>
          <cell title="Github" link="http://github.com/airyland/vux">
          </cell>
        </group>
    </div>

    <!-- rourer-view 作为默认插槽内容 -->
    <div>
      <router-view></router-view>
    </div>

    </drawer>
  </div>
</template>
<!--
<template>
  <div id="app">
    <router-view/>
  </div>
</template>
-->
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
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
