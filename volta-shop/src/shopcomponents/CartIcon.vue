<script setup>
import { useProductStore } from '@/stores/products'
import { useUserStore } from '@/stores/user'

const props = defineProps({
  product: {
    type: Object,
    required: true
  }
})

const store = useProductStore()
const store2 = useUserStore()


const addToCart = () => {
  if (store2.isAuthenticated) {
    window.$toast(`${props.product.title} به سبد خرید اضافه شد`, 'success')
    store.addToCart(props.product.id)
  } else {
    window.$toast("ابتدا وارد سایت شوید", 'error')
  }
}

const increase = () => {
  store.increaseCount(props.product.id)
}

const decrease = () => {
  store.decreaseCount(props.product.id)
}
</script>

<template>
  <div>

    <button
      v-if="product.count === 0"
      @click="addToCart"
      class="mt-5 w-full px-8 text-white bg-gradient-to-br from-purple-900 to-purple-700 hover:scale-105 transition py-3 rounded-xl"
    >
      افزودن به سبد خرید
    </button>

    <div
      v-else
      class="flex justify-center items-center gap-5 mt-3 sm:mt-7"
    >

      <span
        @click="increase"
        class="text-4xl text-purple-900 cursor-pointer"
      >
        +
      </span>

      <span
        class="text-2xl bg-purple-50 px-4 py-1 rounded-full"
      >
        {{ product.count }}
      </span>

      <span
        @click="decrease"
        class="text-4xl text-purple-900 cursor-pointer"
      >
        -
      </span>

    </div>

  </div>
</template>