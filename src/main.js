import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './style/common.styl'
import './assets/icons/iconfont.css'
// import toast from './components/ui/toast/toast.js'
// import confirm from './components/ui/confirm/confirm.js'
import { toast, confirm, loading, message } from './components/zyPlugins.js'
Vue.config.productionTip = false
Vue.use(toast)
Vue.use(confirm)
Vue.use(loading)
Vue.use(message)

Vue.prototype.comm = false
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
