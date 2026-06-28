import Home from '../views/Home.vue'
import Signup from '../views/Signup.vue'
import { createRouter, createWebHistory } from 'vue-router'
import Login from '../views/Login.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
     {
    path: '/',
    name: 'home',
    component: Home,
    meta: { requiresHeader: true }
  },
  {
    path: '/login',
    name: 'login',
    component: Login,
    meta: { hideHeader: true }
  },
  {
    path: '/signup',
    name: 'signup',
    component: Signup,
    meta: { hideHeader: true }
  }
   
   
  ],
})

export default router
