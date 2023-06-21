import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  { path: '/', name: 'login', component: () => { return import('@/views/login/login.vue') } },
  { path: '/sign-up', name: 'sign-up', component: () => { return import('@/views/login/sign-up.vue') } },
  { path: '/main', name: 'main', component: () => { return import('@/views/main/main.vue') } },
]

const router = createRouter({ history: createWebHistory(process.env.BASE_URL), routes })

export default router
