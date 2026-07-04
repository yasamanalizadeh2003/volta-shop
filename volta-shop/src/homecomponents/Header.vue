<script setup>
import { ref } from 'vue'
import { RouterLink } from 'vue-router'
import { User, ShoppingCart, Menu, X, LogOut } from 'lucide-vue-next'
import { useUserStore } from '@/stores/user'
import { useProductStore } from '@/stores/products'

const mobileMenu = ref(false)
const store = useUserStore()
const store2 = useProductStore()

const navLinks = [
  { title: 'خانه', path: '/' },
  { title: 'فروشگاه', path: '/shop' },
  { title: 'دسته بندی ها', path: '/categories' },
  { title: 'وبلاگ', path: '/blog' },
  { title: 'درباره ما', path: '/about' },
  { title: 'تماس با ما', path: '/contact' },
]
</script>

<template>
  <header class="w-full px-5 sm:px-8 lg:px-10 py-5 sticky top-0 z-50 bg-white shadow-md rounded-xl">
    <div class="flex items-center justify-between">
      <!-- Logo -->
      <RouterLink to="/">
        <h1 class="text-3xl font-bold text-purple-700">ولتا</h1>
      </RouterLink>

      <!-- Desktop Menu -->
      <nav class="hidden lg:flex items-center gap-8">
        <RouterLink
          v-for="item in navLinks"
          :key="item.path"
          :to="item.path"
          custom
          v-slot="{ isActive, navigate }"
        >
          <button
            @click="navigate"
            :class="[
              'transition font-medium',
              isActive ? 'text-purple-700' : 'text-gray-700 hover:text-purple-700',
            ]"
          >
            {{ item.title }}
          </button>
        </RouterLink>
      </nav>

      <!-- Right Side -->
      <div class="flex items-center gap-4">
        <div v-if="store.isAuthenticated" class="flex items-center gap-4">
          <!-- Profile -->
          <div class="relative group">
            <User class="w-5 h-5 cursor-pointer hover:text-purple-700 transition" />

            <span
              class="absolute bottom-full left-1/2 -translate-x-1/2 my-1 text-xs text-gray-400 px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition whitespace-nowrap pointer-events-none"
            >
              پروفایل
            </span>
          </div>

          <!-- Cart -->
          <RouterLink to="/cart" class="relative group">
            <ShoppingCart class="w-5 h-5 cursor-pointer hover:text-purple-700 transition" />
            <span v-if="store2.cart.length> 0"
              class="absolute -top-2 -right-3 bg-purple-700 text-white
               text-[10px] w-5 h-5 flex items-center justify-center rounded-full"
              >{{ store2.cart.length }}</span
            >
            <span
              class="absolute bottom-full left-1/2 -translate-x-1/2 my-1 text-xs text-gray-400 px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition whitespace-nowrap pointer-events-none"
            >
              سبد خرید
            </span>
          </RouterLink>

          <div class="relative group">
            <LogOut
              @click="store.logout"
              class="w-5 h-5 cursor-pointer hover:text-purple-700 transition"
            />

            <span
              class="absolute bottom-full left-1/2 -translate-x-1/2 my-1 text-xs text-gray-400 px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition whitespace-nowrap pointer-events-none"
            >
              خروج
            </span>
          </div>
        </div>
        <div v-else class="flex gap-5">
          <RouterLink
            to="/signup"
            class="cursor-pointer hover:scale-105 transition py-1 px-2 rounded-lg text-white bg-gradient-to-br from-purple-900 to-purple-700"
          >
            عضویت
          </RouterLink>
          <RouterLink
            to="login"
            class="cursor-pointer hover:scale-105 transition py-1 px-2 rounded-lg text-white bg-gradient-to-br from-purple-900 to-purple-700"
          >
            ورود
          </RouterLink>
        </div>

        <!-- Mobile Menu Button -->
        <button class="lg:hidden" @click="mobileMenu = !mobileMenu">
          <Menu v-if="!mobileMenu" class="w-7 h-7" />

          <X v-else class="w-7 h-7" />
        </button>
      </div>
    </div>

    <!-- MOBILE MENU -->
    <Transition
      enter-active-class="transition duration-300 ease-out"
      enter-from-class="opacity-0 translate-y-6"
      enter-to-class="opacity-100 translate-y-0"
      leave-active-class="transition duration-200 ease-in"
      leave-from-class="opacity-100 translate-y-0"
      leave-to-class="opacity-0 translate-y-6"
    >
      <nav
        v-if="mobileMenu"
        class="lg:hidden absolute top-20 left-4 right-4 z-50 bg-white/95 backdrop-blur-2xl border border-gray-200/60 rounded-3xl shadow-2xl overflow-hidden"
      >
        <!-- LINKS -->
        <div class="p-5 space-y-1">
          <RouterLink
            v-for="item in navLinks"
            :key="item.path"
            :to="item.path"
            class="block py-3 px-3 rounded-xl text-gray-700 hover:bg-purple-50 hover:text-purple-700 transition"
            @click="mobileMenu = false"
          >
            {{ item.title }}
          </RouterLink>
        </div>
      </nav>
    </Transition>
  </header>
</template>
