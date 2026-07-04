<script setup>
import ProductCard from './ProductCard.vue'
import { useProductStore } from '@/stores/products'

const store = useProductStore()
</script>

<template>
  <div class="px-4" data-aos="fade-up" data-aos-duration="1000">

    <h1 class="text-xl font-bold mb-3 mt-7">
      محصولات پرفروش
    </h1>

    <div
      class="flex gap-4 overflow-x-auto pb-2 snap-x snap-mandatory md:grid md:grid-cols-3 lg:grid-cols-4 md:overflow-visible"
    >

      <ProductCard 
        v-for="product in store.toppingProducts"
        :key="product.id"
        :product="product"
        class="flex-shrink-0 w-40 sm:w-48 md:w-full snap-start"
      />

    </div>

  </div>
</template>