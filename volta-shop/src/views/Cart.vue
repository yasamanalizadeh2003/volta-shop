<script setup>
import ProductsList from '@/cartcomponents/ProductsList.vue'
import Sidebar from '@/cartcomponents/Sidebar.vue'
import { useProductStore } from '@/stores/products'

const store = useProductStore()
</script>

<template>
  <div class="bg-purple-50 min-h-screen pb-10">
    <div class="pt-24 px-3 sm:px-5 flex flex-col gap-1">
      <h1 class="text-2xl font-bold">سبد خرید</h1>
      <p class="text-gray-700">محصولات مورد نظر خود را بررسی کنید و خریدتان را نهایی کنید.</p>
    </div>

    <div class="sm:flex sm:gap-6 px-3 sm:px-5 mt-6 sm:items-start">
      <Sidebar class="w-full sm:w-80 flex-shrink-0" />
      <ProductsList :products="store.cart" />
    </div>
  </div>
</template>