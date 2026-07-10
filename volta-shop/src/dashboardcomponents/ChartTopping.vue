<script setup>
import { computed } from 'vue'
import { useProductStore } from '@/stores/products'

const store = useProductStore()

const products = computed(() => store.products.filter((item) => item.topping))

const formatPrice = (price) => {
  return `${Number(price).toLocaleString('fa-IR')} تومان`
}
</script>

<template>
  <div class="bg-white rounded-2xl shadow-lg p-4">
    <h2 class="font-bold text-lg mb-4">
      پرفروش‌ترین محصولات
    </h2>

    <div
      v-for="product in products"
      :key="product.id"
      class="flex items-center justify-between py-3 border-b last:border-b-0"
    >
      <div class="flex items-center gap-3">
        <img
          :src="product.image"
          :alt="product.title"
          class="w-14 h-14 rounded-lg object-cover"
        />

        <div>
          <h3 class="font-medium">{{ product.title }}</h3>
          <p class="text-sm text-purple-600">
            {{ formatPrice(product.price) }}
          </p>
        </div>
      </div>
    </div>
  </div>
</template>
