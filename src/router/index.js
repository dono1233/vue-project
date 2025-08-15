import { createRouter, createWebHistory } from 'vue-router'
import FeedLayout from '@/views/authentication/main.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/login',
      name: 'login',
      component: () => import('@/views/guest/LoginView.vue')
    },
    {
      path: '/register',
      name: 'register',
      component: () => import('@/views/guest/RegisterView.vue')
    },
    {
      path: '/user',
      component: FeedLayout,
      children: [
        { path: '', redirect: 'communities' },
        {
          path: 'feed',
          component: () => import('@/views/authentication/FeedView.vue')
        },
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
        },
        
         {
          path: 'profile',
          component: () => import('@/views/authentication/profileView.vue')
        },
           {
          path: 'event',
          component: () => import('@/views/authentication/EventView.vue')
        }
      ]
    }
  ]
})

export default router
