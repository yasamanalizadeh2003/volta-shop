<script setup>
import { useProductStore } from '@/stores/products';

defineProps({
  product: {
    type: Object,
    required: true,
  },
})

const store=useProductStore()

const formatPrice = (price) => {
  return `${Number(price).toLocaleString('fa-IR')} تومان`
}
</script>

<template>
  <div>
    <div class="flex justify-between">
      <div class="flex gap-6">
        <img
          class="sm:w-26 sm:h-24 rounded-lg w-18 h-18 self-center"
          :src="product.image"
          :alt="product.title"
        />
        <div class="flex gap-2 flex-col self-center">
          <h1 class="text-gray-800">{{ product.title }}</h1>
          <p class="text-purple-900">{{ formatPrice(product.price) }}</p>
        </div>
      </div>

      <!-- counter -->
<div class="border-2 border-purple-200 flex gap-5 items-center h-9 rounded-lg ">
    <span class="cursor-pointer border-b-2 border-l-2 border-t-2 border-purple-200 rounded-lg px-2 h-9 w-8 text-center text-2xl bg-purple-50" @click="store.increaseCount(product.id)">+</span>
    <span>{{ product.count }}</span>
    <span class="cursor-pointer border-b-2 border-r-2 border-t-2 border-purple-200 rounded-lg px-2 h-9 w-8 text-center text-2xl bg-purple-50" @click="store.decreaseCount(product.id)">-</span>
</div>

<!-- delete -->
 <div>
  
 </div>
    </div>
  </div>
</template>
