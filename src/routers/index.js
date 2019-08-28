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
  }
]

export default routes
