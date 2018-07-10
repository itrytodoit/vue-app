import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/components/Login'
import Home from '@/components/Home'
import UpdatePassword from '@/components/UpdatePassword'
import QueryApprovalList from '@/components/QueryApprovalList'
import ShowBill from '@/components/ShowBill'
import ShowBillDet from '@/components/ShowBillDet'
import QueryChangeUserList from '@/components/QueryChangeUserList'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/login',
      name: 'Login',
      component: Login
    },
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/update-password',
      name: 'UpdatePassword',
      component: UpdatePassword
    },
    {
      path: '/query-approval-list',
      name: 'QueryApprovalList',
      component: QueryApprovalList
    },
    {
      path: '/show-bill',
      name: 'ShowBill',
      component: ShowBill
    },
    {
      path: '/show-bill-det',
      name: 'ShowBillDet',
      component: ShowBillDet
    },
    {
      path: '/query-change-user-list',
      name: 'QueryChangeUserList',
      component: QueryChangeUserList
    }
  ]
})
