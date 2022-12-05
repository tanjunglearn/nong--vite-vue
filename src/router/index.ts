import { createRouter, createMemoryHistory } from "vue-router"

const router = createRouter({
  history: createMemoryHistory('/'),
  routes: [
    {
      name: 'Home',
      path: '/',
      alias: '/home',
      component: () => import('../features/home/Home.vue')
    },
    {
      name: 'Login',
      path: '/login',
      component: () => import('../features/login/Login.vue')
    },
    {
      path: '/:pathMatch(.*)*',
      name: 'NotFound',
      component: () => import('../features/not-found/NotFound.vue')
    },
  ]
})

export default router