<script setup>
import { useProductStore } from '@/stores/products'
import { Trash2 } from 'lucide-vue-next'
defineProps({
  product: {
    type: Object,
    required: true,
  },
})

const store = useProductStore()

const formatPrice = (price) => {
  return `${Number(price).toLocaleString('fa-IR')} تومان`
}
</script>

<template>
  <div>
    <div class="flex justify-between flex-col sm:flex-row sm:text-base text-sm">
      <div class="flex gap-6">
        <img
          class="sm:w-26 sm:h-24 rounded-lg w-14 h-16 self-center"
          :src="product.image"
          :alt="product.title"
        />
        <div class="flex gap-6 sm:flex-col self-center ">
          <h1 class="text-gray-800">{{ product.title }}</h1>
          <p class="text-purple-900">{{ formatPrice(product.price) }}</p>
        </div>
      </div>

      <!-- counter -->
      <div class="flex justify-between gap-10 items-center mt-4 sm:mt-0">
        <div class="border-2 border-purple-200 flex gap-5 items-center h-9 w-28 rounded-lg">
          <span
            class="sm:inline-flex items-center justify-center cursor-pointer border-b-2 border-l-2 border-t-2 border-purple-200 rounded-lg px-2 h-9 w-8 text-center text-2xl bg-purple-50"
            @click="store.increaseCount(product.id)"
            >+</span
          >
          <span>{{ product.count }}</span>
          <span
            class="inline-flex items-center justify-center cursor-pointer border-b-2 border-r-2 border-t-2 border-purple-200 rounded-lg px-2 h-9 w-8 text-center text-2xl bg-purple-50"
            @click="store.decreaseCount(product.id)"
            >-</span
          >
        </div>

        <!-- delete -->
        <button @click="store.removeFromCart(product.id)"
          class="w-9 h-9 flex items-center justify-center border-2 border-purple-200 rounded-lg"
        >
          <Trash2 class="w-5 h-5" />
        </button>
      </div>
    </div>
  </div>
</template>
