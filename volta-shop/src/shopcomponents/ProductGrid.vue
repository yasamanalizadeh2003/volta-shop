<!-- ProductGrid.vue -->
<script setup>
import ProductCard from './ProductCard.vue'
defineProps({
  products: {
    type: Array,
    default: () => [],
  },
})
</script>

<template>
  <div
    v-if="!products || products.length === 0"
    data-aos="fade-right"
    data-aos-duration="1000"
    class="col-span-9 text-center py-20 text-purple-950 text-lg"
  >
    هیچ محصولی یافت نشد
  </div>

  <div
    v-else
    class="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6"
    data-aos="fade-right"
    data-aos-duration="1000"
  >
    <ProductCard v-for="product in products" :key="product.id" :product="product" />
  </div>
</template>
