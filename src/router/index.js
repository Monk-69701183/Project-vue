import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    
    component: () => import('../views/AboutView.vue')
  },
  {
    path: '/contact',
    name: 'contact',
    
    component: () => import('../views/Contact.vue')
  },
  {
    path: '/products_api',
    name: 'products_api',
    
    component: () => import('../views/Product_api.vue')
  },
  {
    path: '/products_table',
    name: 'products_table',
    
    component: () => import('../views/Product_table.vue')
  },
  {
    path: '/users',
    name: 'users',
    
    component: () => import('../views/Users.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
