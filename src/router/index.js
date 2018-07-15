import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/applications/Login'
import Home from '@/applications/Home'
import UpdatePassword from '@/applications/UpdatePassword'
import QueryApprovalList from '@/applications/QueryApprovalList'
import ShowBill from '@/applications/ShowBill'

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
    }
  ]
})
