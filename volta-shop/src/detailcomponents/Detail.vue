<script setup>
import { computed } from 'vue'
import { useRoute } from 'vue-router'
import { useProductStore } from '@/stores/products'
import { Star } from 'lucide-vue-next'
import CartIcon from '@/shopcomponents/CartIcon.vue'
import Description from './Description.vue'

const route = useRoute()

const productId = route.params.id
const store = useProductStore()

const product = computed(() => store.products.find((p) => p.id === Number(route.params.id)))

const formatPrice = (price) => {
  return `${Number(price).toLocaleString('fa-IR')} تومان`
}
</script>

<template>
  <div>
    <div class="mt-32 grid grid-cols-2">
      <img class="sm:w-96 sm:h-96 rounded-lg sm:mr-18" :src="product.image" />
      <div class="flex flex-col gap-2">
        <h1 class="font-bold text-2xl">{{ product.title }}</h1>
        <div class="flex gap-2 mt-5">
          <p class="text-gray-700 self-start">({{ product.review }})نظر</p>
          <div class="mt-1">
            <div class="flex items-center gap-1 mb-3">
              <Star
                v-for="n in 5"
                :key="n"
                class="w-3 h-3 sm:w-4 sm:h-4"
                :class="n <= product.rate ? 'fill-yellow-400 text-yellow-400' : 'text-gray-300'"
              />
            </div>
          </div>
        </div>

        <p class="text-gray-800 text-xl">{{ formatPrice(product.price) }}</p>
        <CartIcon class="sm:w-[50%]" :product="product" />
      </div>
    </div>
    <Description :product="product"/>
  </div>
</template>
