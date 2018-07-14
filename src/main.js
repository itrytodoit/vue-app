// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
// please comment out below line if you don't want to use API mock
import Mock from './mock/mock'
import VeeValidate from 'vee-validate'
import messages from './assets/i18n/zh_CN'
import store from './store'
import 'font-awesome/css/font-awesome.min.css'

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  store,
  router,
  components: { App },
  template: '<App/>'
})

// Validator.updateDictionary({
//   zh_CN: {
//     messages
//   }
// });
const config = {
  errorBagName: 'aerrors', // change if property conflicts.
  delay: 0,
  locale: 'zh_CN',
  messages: null,
  strict: true
};
Vue.use(VeeValidate, config);