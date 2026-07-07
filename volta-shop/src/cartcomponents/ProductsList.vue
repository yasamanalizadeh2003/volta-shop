<script setup>
import ProductSection from './ProductSection.vue'

defineProps({
  products: {
    type: Array,
    required: true
  }
})
</script>

<template>
  <div class="bg-white rounded-2xl shadow-sm sm:p-6 p-3 flex-1 shadow-purple-300">
    <div class="my-2" v-for="(product, index) in products" :key="product.id">
      <ProductSection :product="product" />
      <hr  v-if="index < products.length - 1" class="border-gray-200 my-2" />
    </div>

    <button
      class="w-full mt-4 py-3 border border-gray-200 rounded-lg flex items-center justify-center gap-2 text-gray-600 hover:bg-gray-50 transition"
    >
      <svg xmlns="http://www.w3.org/2000/svg" class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7" />
      </svg>
      <RouterLink to="/shop">ادامه خرید</RouterLink>
    </button>
  </div>
</template>