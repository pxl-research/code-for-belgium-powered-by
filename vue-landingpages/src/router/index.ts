import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/nsiv',
      name: 'nsiv',
      component: () => import('../views/NsivView.vue'),
    },
    {
      path: '/vincentius',
      name: 'vincentius',
      component: () => import('../views/VincentiusView.vue'),
    },
    {
      path: '/about',
      name: 'about',
      component: () => import('../views/AboutView.vue'),
    },
  ],
})

export default router
