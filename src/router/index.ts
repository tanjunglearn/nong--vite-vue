import { createRouter, createMemoryHistory, createWebHistory } from "vue-router"

const isServer = typeof window === 'undefined'
const history = isServer ? createMemoryHistory() : createWebHistory()
const metaArea = {layout: 'area'}
const metaNotFound = {layout: 'not-found'}
const routes = [
  {
    name: 'Home',
    path: '/',
    alias: '/home',
    meta: metaArea,
    component: () => import('../features/home/Home.vue')
  },
  {
    name: 'Login',
    path: '/login',
    meta: metaNotFound,
    component: () => import('../features/login/Login.vue')
  },
  {
    path: '/:pathMatch(.*)*',
    name: 'NotFound',
    meta: metaNotFound,
    component: () => import('../features/not-found/NotFound.vue')
  },
]

export default createRouter({history, routes})