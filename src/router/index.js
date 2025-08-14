import { createRouter, createWebHistory } from 'vue-router'
import FeedLayout from '@/views/authentication/main.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/user',
      component: FeedLayout,
      children: [
        { path: '', redirect: 'communities' },
        {
          path: 'communities',
          component: () => import('@/views/authentication/CommunitiesView.vue')
        },
        {
          path: 'assignment',
          component: () => import('@/views/authentication/AssignmentView.vue')
        },
        {
          path: 'chat',
          component: () => import('@/views/authentication/ChatView.vue')
        }
      ]
    }
  ]
})

export default router
