import Vue from 'vue'
import Router from 'vue-router'
import Routes from './routers/index'

Vue.use(Router)

export default new Router({
  mode: 'hash',
  base: process.env.BASE_URL,
  routes: Routes
})
