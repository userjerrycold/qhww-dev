import { createRouter, createWebHistory } from 'vue-router'
import Login from '@/views/Login.vue'
import Home from '@/views/Home.vue'
import Memories from '@/views/Memories.vue'
import Memo from '@/views/Memo.vue'
import Tools from '@/views/Tools.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'login',
      component: Login
    },
    {
      path: '/home',
      name: 'home',
      component: Home
    },
    {
      path: '/memories',
      name: 'memories',
      component: Memories
    },
    {
      path: '/memo',
      name: 'memo',
      component: Memo
    },
    {
      path: '/tools',
      name: 'tools',
      component: Tools
    }
  ]
})

export default router 