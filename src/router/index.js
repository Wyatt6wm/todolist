import { createRouter, createWebHistory } from 'vue-router'
import Start from '@/views/Start'

// 路由配置
const routes = [
  {
    path: '/',
    name: 'Start',
    component: Start
  },
  {
    path: '/home',
    name: 'Home',
    component: () => import('@/views/Home')
  }
]

// 创建路由对象
const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
