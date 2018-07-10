<template>
  <div>
    <div id="show-bill" class="">
      <x-header :right-options="{showMore: true}" @on-click-more="showMenus = true">查询单据</x-header> 
      <group v-for="item in items">
        <cell title="个人报销单代码" :value="item.bill_code"></cell>
        <cell title="个人报销单名称" :value="item.bill_name"></cell>
        <cell title="报销单性质" :value="item.bill_type"></cell>
        <cell title="审批状态" :value="item.approve_state"></cell>
        <cell title="申请日期" :value="item.apply_date"></cell>
        <cell title="录入人" :value="item.checkin_man"></cell>
        <cell title="审批日期" :value="item.approve_date"></cell>
        <cell title="申请金额" :value="item.request_fee"></cell>
        <cell title="审批金额" :value="item.bill_approve"></cell>
        <cell title="审批人" :value="item.approve_man"></cell>
        <cell title="部门" :value="item.bill_dept"></cell>
        <cell title="借款人" :value="item.request_man"></cell>
      </group>     
    </div>
    <div v-transfer-dom>
      <actionsheet :menus="menus" v-model="showMenus" show-cancel></actionsheet>
    </div>
  </div>
</template>

<script>
import { XHeader, Actionsheet, TransferDom, ButtonTab, ButtonTabItem, Group, Cell } from 'vux'

export default {
  name: 'ShowBill',
  components: {
    XHeader,
    Actionsheet, 
    TransferDom, 
    ButtonTab, 
    ButtonTabItem,
    Group,
    Cell
  },
  data () {
    return {
      menus: {
        menu1: '审批通过',
        menu2: '审批不通过'
      },
      showMenus: false,
      items: [
        {
          bill_name: '0000013580',
          bill_code: 'JK2018062600000002',
          bill_type: 'PersonLoanRules',
          approve_state: '待审批',
          checkin_man: '杨勇',
          approve_date: '2018-09-09',
          apply_date: '2018-09-09',
          request_fee: '505.00',
          bill_approve: '505.00',
          approve_man: '杨勇',
          bill_dept: '部门',
          request_man: ''
        }
      ]
    }
  },
  methods: {

  }
}
</script>

<style scoped>
.vux-label {
    text-align: left;
}

</style>



