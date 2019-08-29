import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './style/common.styl'
import './assets/icons/iconfont.css'
import $http from './api/axios.js'
import { Xui, Toast, confirm, loading, message } from './components/plugins.js'
Vue.config.productionTip = false
Vue.use(Xui)
Vue.use(confirm)
Vue.use(loading)
Vue.use(message)
Vue.use(Toast)
Vue.prototype.$http = $http
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
