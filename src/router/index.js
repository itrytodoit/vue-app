import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/applications/Login'
import Home from '@/applications/Home'
import UpdatePassword from '@/applications/UpdatePassword'
import QueryApprovalList from '@/applications/QueryApprovalList'
import ShowBill from '@/applications/ShowBill'
import ShowBillDet from '@/applications/ShowBillDet'
import QueryChangeUserList from '@/applications/QueryChangeUserList'

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
