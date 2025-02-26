import { createRouter, createWebHistory } from 'vue-router'
import QianQianMenu from '@/components/QianQianMenu.vue'
import DailyOrders from '@/components/DailyOrders.vue'

const routes = [
  {
    path: '/',
    name: 'QianQianMenu',
    component: QianQianMenu
  },
  {
    path: '/daily_order',
    name: 'DailyOrders',
    component: DailyOrders
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
