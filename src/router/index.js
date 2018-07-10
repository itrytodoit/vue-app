import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/components/Login'
import InitPassword from '@/components/InitPassword'
import ForgotPassword from '@/components/ForgotPassword'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/login',
      name: 'Login',
      component: Login
    },
    {
      path: '/init-password',
      name: 'InitPassword',
      component: InitPassword
    },
    {
      path: '/forgot-password',
      name: 'ForgotPassword',
      component: ForgotPassword
    }
  ]
})
