<template>
  <div id="home" class="">
    <x-header :left-options="{showBack: false}">首页</x-header> 
    <grid :show-lr-borders="false" :show-vertical-dividers="false" :cols="3">
      <grid-item :link="item.link" :label="item.label" v-for="item in items">
        <i :class="item.class" aria-hidden="true" slot="icon"></i>
      </grid-item>
    </grid>
  </div>
</template>

<script>
import { XHeader, Grid, GridItem, GroupTitle } from 'vux'

export default {
  name: 'Home',
  components: {
    XHeader,
    Grid,
    GridItem,
    GroupTitle
  },
  data () {
    return {
      items: [
        {
          label: '查询待审批列表',
          class: 'fa fa-2x fa-icon fa-list',
          link: 'query-approval-list'
        },
        /*
        {
          label: '查询单据',
          class: 'fa fa-2x fa-icon fa-search',
          link: 'show-bill'
        },
        {
          label: '查询可转签人',
          class: 'fa fa-2x fa-icon fa-id-card',
          link: 'query-change-user-list'
        },
        */
        {
          label: '修改密码',
          class: 'fa fa-2x fa-icon fa-key',
          link: 'update-password'
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

.weui-grid__label span {
  color: #fff;
}

.fa-icon {
  color: #1AAD19;
}
</style>