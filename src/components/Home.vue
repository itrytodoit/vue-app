<template>
  <div id="home" class="">
    <group-title>功能菜单</group-title>
    <grid :show-lr-borders="false" :show-vertical-dividers="false" :cols="3">
      <grid-item :link="item.link" :label="item.label" v-for="item in items">
        <i :class="item.class" aria-hidden="true" slot="icon"></i>
      </grid-item>
    </grid>
  </div>
</template>

<script>
import { Grid, GridItem, GroupTitle } from 'vux'

export default {
  name: 'Home',
  components: {
    Grid,
    GridItem,
    GroupTitle
  },
  data () {
    return {
      items: [
        {
          label: '重置密码',
          class: 'fa fa-2x fa-key',
          link: 'reset-password'
        },
        {
          label: '重置密码',
          class: 'fa fa-2x fa-search',
          link: 'reset-password'
        },
        {
          label: '重置密码',
          class: 'fa fa-2x fa-key',
          link: 'reset-password'
        },
        {
          label: '重置密码',
          class: 'fa fa-2x fa-key',
          link: 'reset-password'
        },
        {
          label: '重置密码',
          class: 'fa fa-2x fa-key',
          link: 'reset-password'
        },
        {
          label: '重置密码',
          class: 'fa fa-2x fa-key',
          link: 'reset-password'
        }
      ]
    }
  }
}
</script>

<style scoped>
.grid-center {
  display: block;
  text-align: center;
  color: #666;
}
.weui-grids {
  background-color: #fff;
}
</style>