import Home from '../views/Home.vue'
import Signup from '../views/Signup.vue'
import Login from '../views/Login.vue'
import Shop from '@/views/Shop.vue'
import Cart from '@/views/Cart.vue'

import { createRouter, createWebHistory } from 'vue-router'
import ProductDetail from '@/views/ProductDetail.vue'
import Dashboard from '@/views/Dashboard.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),

  scrollBehavior(to, from, savedPosition) {
    // اگر کاربر با Back یا Forward جابه‌جا شد
    if (savedPosition) {
      return savedPosition
    }

    // هنگام رفتن به صفحات جدید
    return {
      top: 0,
      left: 0,
      behavior: 'smooth',
    }
  },

  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
      meta: { requiresHeader: true, requiresFooter: true },
    },
    {
      path: '/login',
      name: 'login',
      component: Login,
      meta: { hideHeader: true, hideFooter: true },
    },
    {
      path: '/signup',
      name: 'signup',
      component: Signup,
      meta: { hideHeader: true, hideFooter: true },
    },
    {
      path: '/shop',
      name: 'shop',
      component: Shop,
      meta: { requiresHeader: true, requiresFooter: true },
    },
    {
      path: '/cart',
      name: 'cart',
      component: Cart,
      meta: { requiresHeader: true, requiresFooter: true },
    },
    {
  path: '/product/:id',
  name: 'ProductDetails',
  component:ProductDetail,
  meta: { requiresHeader: true, requiresFooter: true },
},
{
      path: '/dashboard',
      name: 'dashboard',
      component: Dashboard,
      meta: { hideHeader: true, hideFooter: true },
    },
  ],
})

export default router