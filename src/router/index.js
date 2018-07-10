import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/components/Login'
import Home from '@/components/Home'
import ResetPassword from '@/components/ResetPassword'
import { homedir } from 'os';

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/login',
      name: 'Login',
      component: Login
    },
    {
      path: '/home',
      name: 'Home',
      component: Home
    },  
    {
      path: '/reset-password',
      name: 'ResetPassword',
      component: ResetPassword
    },
    {
      path: '/query-approval-list',
      name: 'QueryApprovalList',
      component: ResetPassword
    },  
    {
      path: '/show-bill',
      name: 'ShowBill',
      component: ResetPassword
    },
    {
      path: '/show-bill-det',
      name: 'ShowBillDet',
      component: ResetPassword
    },
    {
      path: '/commit-approval',
      name: 'CommitApproval',
      component: ResetPassword
    },
    {
      path: '/query-change-user-list',
      name: 'QueryChangeUserList',
      component: ResetPassword
    }
  ]
})
