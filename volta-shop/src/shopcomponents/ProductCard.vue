<!-- ProductCard.vue -->
<script setup>
import { ref } from 'vue'
import { Heart } from 'lucide-vue-next'

const props = defineProps({
  product: {
    type: Object,
    required: true,
  },
})

const showMessage = ref(false)
const success = ref('')
let timer = null

const addToCart = () => {
  success.value = `${props.product.name} به سبد خرید اضافه شد`
  showMessage.value = true

  clearTimeout(timer)

  timer = setTimeout(() => {
    showMessage.value = false
  }, 2000)
}
</script>

<template>
  <div>
    <!-- Toast -->
    <Transition name="toast">
      <div
        v-if="showMessage"
        class="fixed top-18 sm:top-18 left-1/2 -translate-x-1/2 z-50 w-[calc(100%-2rem)] sm:w-auto max-w-md bg-green-600 text-white px-4 sm:px-6 py-3 rounded-xl shadow-2xl text-center text-sm sm:text-base break-words"
      >
        {{ success }}
      </div>
    </Transition>

    <!-- Product Card -->
    <div
      class="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 group"
    >
      <!-- Image -->
      <div class="relative">
        <img
          :src="props.product.image"
          :alt="props.product.name"
          class="w-full h-56 sm:h-64 object-cover group-hover:scale-105 transition-transform duration-500"
        />

        <button
          class="absolute top-3 left-3 z-10 w-9 h-9 rounded-full bg-white/90 hover:bg-white shadow flex items-center justify-center transition"
        >
          <Heart class="w-5 h-5 text-gray-500 hover:text-red-500 transition-colors" />
        </button>
      </div>

      <!-- Content -->
      <div class="p-4 sm:p-5">
        <h4
          class="font-medium text-gray-800 text-sm sm:text-base line-clamp-2 min-h-[48px] sm:min-h-[56px]"
        >
          {{ props.product.name }}
        </h4>

        <div class="mt-4 flex items-center justify-between">
          <span class="text-lg sm:text-xl font-bold text-gray-900">
            {{ props.product.price.toLocaleString('fa-IR') }}
            <span class="text-xs sm:text-sm font-normal text-gray-500"> تومان </span>
          </span>
        </div>

        <button
          @click="addToCart"
          class="mt-5 w-full bg-violet-600 hover:bg-violet-700 active:scale-[0.98] transition text-white font-medium py-3 sm:py-3.5 rounded-xl text-sm sm:text-base"
        >
          افزودن به سبد خرید
        </button>
      </div>
    </div>
  </div>
</template>

<<style scoped>
.toast-enter-active,
.toast-leave-active {
  transition: all 0.3s ease;
}
.toast-enter-from,
.toast-leave-to {
  opacity: 0;
  transform: translate(-50%, -20px);
}
</style>