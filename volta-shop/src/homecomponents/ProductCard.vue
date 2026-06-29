<script setup>
import { Heart, ShoppingCart, Star } from 'lucide-vue-next'

defineProps({
  product: {
    type: Object,
    required: true,
  },
})
</script>

<template>
  <div
    class="group w-32 sm:w-64 lg:w-64 flex-shrink-0 mb-10 rounded-2xl border border-gray-200
     bg-white overflow-hidden transition-all duration-300 hover:shadow-xl snap-start"
  >
    <!-- تصویر -->
   <div class="relative h-32 sm:h-48 overflow-hidden ">
  <button
    class="absolute top-3 left-3 z-10 w-7 h-7 rounded-full bg-white shadow flex items-center justify-center"
  >
    <Heart class="w-4 h-4 text-gray-500" />
  </button>

  <img
    :src="product.image"
    :alt="product.title"
    class="w-full h-full"
  />
</div>

    <!-- اطلاعات -->
    <div class="p-4 flex flex-col justify-center items-center gap-1">
      <h3
        class="font-bold text-sm sm:text-lg mb-2 text-gray-800 text-center line-clamp-2"
      >
        {{ product.title }}
      </h3>

      <!-- قیمت -->
      <p class="text-purple-950 text-sm sm:text-base">
        {{ product.price.toLocaleString() }}
        <span class="text-xs sm:text-base font-normal">
          تومان
        </span>
      </p>

      <!-- امتیاز -->
      <div class="flex items-center gap-1 mb-3">
        <Star
          v-for="n in 5"
          :key="n"
          class="w-3 h-3 sm:w-4 sm:h-4"
          :class="n <= product.rate ? 'fill-yellow-400 text-yellow-400' : 'text-gray-300'"
        />

        <span class="text-xs sm:text-sm text-gray-500 mr-2">
          ({{ product.review }})
        </span>
      </div>

      <!-- دکمه -->
      <button
        class="hover:text-purple-800 hover:scale-105 transition flex items-center justify-center"
      >
        <ShoppingCart class="w-5 h-5" />
      </button>
    </div>
  </div>
</template>