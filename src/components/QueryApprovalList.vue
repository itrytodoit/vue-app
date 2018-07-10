<template>
  <idv>
    <div id="query-approval-list" class="">
      <x-header>查询待审批列表</x-header> 
      <x-table :cell-bordered="false" :content-bordered="false" style="background-color:#fff;">
        <thead>
          <tr style="background-color: #F7F7F7">
            <th>工作流编码</th>
            <!--<th>单据类型</th>-->
            <th>单据号</th>
            <th>送审人</th>
            <!--<th>描述</th>-->
          </tr>
        </thead>
        <tbody>
          <tr v-for="item in items">
            <td>{{item.workflow_code}}</td>
            <!--<td>{{item.bill_type}}</td>-->
            <td><router-link :to="{'path':'show-bill'}">{{item.bill_code}}</router-link></td>
            <td>{{item.initiator}}</td>
            <!--<td>{{item.description}}</td>-->
          </tr>
        </tbody>
      </x-table>
    </div>
  </idv>
</template>

<script>
import { XHeader, XTable } from 'vux'

export default {
  name: 'Login',
  components: {
    XHeader,
    XTable
  },
  data () {
    return {
      items: [
        {
          workflow_code: '0000013580',
          bill_code: 'JK2018062600000002',
          bill_type: 'PersonLoanRules',
          initiator: '杨勇',
          description: '杨勇发起[ 借款测试—差旅 ]的申请'
        },
        {
          workflow_code: '0000013580',
          bill_code: 'JK2018062600000002',
          bill_type: 'PersonLoanRules',
          initiator: '杨勇',
          description: '杨勇发起[ 借款测试—差旅 ]的申请'
        },
      ]
    }
  },
  methods: {

  }
}
</script>

<style scoped>

</style>



