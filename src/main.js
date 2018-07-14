// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import Mock from './mock/mock'
// import { AjaxPlugin } from 'vux'
import VueResource from 'vue-resource'
import VeeValidate, { Validator } from 'vee-validate'
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

// Vue.use(AjaxPlugin)
Vue.use(Mock)
Vue.use(VueResource)
Vue.http.options = {
  // root: API_BASE,
  headers: {
    'Content-Type': 'application/x-www-form-urlencoded'
  },
  emulateJSON: true,
  loadingUIRequired: true // 触发该请求时默认是不隐藏（展示）loading 效果的
}
Vue.config.devtools = true

Validator.updateDictionary({
  zh_CN: {
      messages
  }
});
const config = {
  errorBagName: 'errors', // change if property conflicts.
  delay: 0,
  locale: 'zh_CN',
  messages: null,
  strict: true
};
Vue.use(VeeValidate,config);