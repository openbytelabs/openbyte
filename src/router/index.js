import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../pages/HomeView.vue'
import SynapicView from '../pages/products/SynapicView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView 
  },
  {
    path: '/products/synapic',
    name: 'synapic',
    component: SynapicView
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router