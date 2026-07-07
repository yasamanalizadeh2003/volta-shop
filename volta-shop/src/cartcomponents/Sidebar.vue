<script setup>
import { useProductStore } from '@/stores/products'

const store = useProductStore()

const formatPrice = (price) => {
  return `${Number(price).toLocaleString('fa-IR')} تومان`
}
</script>
<template>
  <div>
    <div
      class="bg-white rounded-2xl mx-3 sm:mr-6 px-3 py-6 sm:px-5 
        shadow-lg shadow-purple-200 flex flex-col gap-2 mb-4"
    >
      <h1 class="text-lg font-bold mb-3">خلاصه سفارش</h1>
      <div class="flex justify-between">
        <p class="text-gray-700">تعداد اقلام</p>
        <span>{{ store.cartCount }}</span>
      </div>
      <hr class="border-gray-200 mt-3 mb-3" />
      <div class="flex justify-between">
        <p class="text-gray-700">مبلغ کل</p>
        <span v-if="store.totalPrice == 0">0</span>
        <span class="text-gray-700" v-else>{{ formatPrice(store.totalPrice) }}</span>
      </div>
      <hr class="border-gray-200 mt-3 mb-3" />
      <div class="flex justify-between">
        <p class="text-gray-700">تخفیف</p>
        <span v-if="store.discount == 0">0</span>
        <span v-else class="text-red-600">{{ formatPrice(store.discount )}}</span>
      </div>
      <hr class="border-gray-200 mt-3 mb-3" />
      <div class="flex justify-between">
        <p class="text-gray-700">هزینه ارسال</p>
        <span v-if="store.shippingCost==0" class="text-green-800">رایگان</span>
        <span v-else class="text-gray-700">{{ formatPrice(store.shippingCost) }}</span>
      </div>
      <hr class="border-gray-200 mt-3 mb-3" />
      <div class="flex justify-between">
        <p class="text-gray-700">مبلغ نهایی</p>
        <span>{{ formatPrice(store.finalPrice) }}</span>
      </div>

       <RouterLink
          to=""
          class="text-center mt-8 w-full  sm:w-auto px-8 py-3 rounded-xl text-white bg-gradient-to-br from-purple-900 to-purple-700 hover:scale-105 transition"
        >
       پرداخت و ثبت سفارش
        </RouterLink>

         <RouterLink
          to=""
          class="text-center w-full  sm:w-auto px-8 py-3 rounded-xl text-purple-900 hover:scale-105 transition border-2 border-purple-300 shadow-sm shadow-purple-300"
        >
      اعمال کد تخفیف
        </RouterLink>
    </div>
  </div>
</template>
