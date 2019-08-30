let routes = [
  {
    path: '/',
    name: 'home',
    component: () => import('../views/home/index.vue')
  },
  {
    path: '/components',
    name: 'components',
    component: () => import('../views/components/index.vue')
  },
  {
    path: '/login',
    name: 'login',
    component: () => import('../views/login/index.vue')
  },
  {
    path: '/barConfig',
    name: 'barConfig',
    component: () => import('../views/bar-config/index.vue')
  },
  {
    path: '/webpack',
    name: 'webpack',
    component: () => import('../views/webpack/index.vue')
  }
]

export default routes
