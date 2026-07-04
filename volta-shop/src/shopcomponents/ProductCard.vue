<script setup>
import { Heart } from 'lucide-vue-next'
import CartIcon from './CartIcon.vue'

defineProps({
  product: {
    type: Object,
    required: true
  }
})
</script>

<template>
  <div class="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 group">

    <div class="relative">
      <img
        :src="product.image"
        :alt="product.title"
        class="w-full h-56 sm:h-64 object-cover group-hover:scale-105 transition-transform duration-500"
      />

      <button class="absolute top-3 left-3 w-9 h-9 rounded-full bg-white/90 shadow flex items-center justify-center">
        <Heart class="w-5 h-5 text-gray-500 hover:text-red-500"/>
      </button>
    </div>

    <div class="p-4 sm:p-5">

      <h4 class="font-medium text-gray-800 text-sm sm:text-base line-clamp-2 min-h-[48px]">
        {{ product.title }}
      </h4>

      <div class="mt-4 flex items-center justify-between">
        <span class="text-lg font-bold text-gray-900">
          {{ product.price.toLocaleString('fa-IR') }}
          <span class="text-xs text-gray-500">تومان</span>
        </span>
      </div>

      <CartIcon :product="product"/>

    </div>

  </div>
</template>