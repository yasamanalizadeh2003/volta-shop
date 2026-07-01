<script setup>
import ProductCard from './ProductCard.vue'
import image1 from '../assets/images/rahati.png'
import image2 from '../assets/images/goldan.png'
import image3 from '../assets/images/asali.png'
import image4 from '../assets/images/cheragh.png'

const products = [
  {
    id: 1,
    title: 'صندلی راحتی نژاد',
    image: image1,
    price: 29900000,
    rate: 4,
    review: 38,
  },
  {
    id: 2,
    title: 'گلدان سرامیکی',
    image: image2,
    price: 8500000,
    rate: 5,
    review: 26,
  },
  {
    id: 3,
    title: 'میز عسلی چوبی',
    image: image3,
    price: 2350000,
    rate: 3,
    review: 26,
  },
  {
    id: 4,
    title: 'چراغ مدرن',
    image: image4,
    price: 1530000,
    rate: 5,
    review: 26,
  },
]
</script>

<template>
  <div class="px-4" data-aos="fade-up" data-aos-duration="1000">
    <h1 class="text-xl font-bold mb-3 mt-7">محصولات پرفروش</h1>
    <div
      class="flex gap-4 overflow-x-auto pb-2 snap-x snap-mandatory md:grid md:grid-cols-3 lg:grid-cols-4 md:overflow-visible"
    >
      <ProductCard
        v-for="product in products"
        :key="product.id"
        :product="product"
        class="flex-shrink-0 w-40 sm:w-48 md:w-full snap-start"
      />
    </div>
  </div>
</template>
