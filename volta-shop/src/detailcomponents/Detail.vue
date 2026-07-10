<script setup>
import { computed, ref } from 'vue'
import { useRoute } from 'vue-router'
import { useProductStore } from '@/stores/products'
import { Star } from 'lucide-vue-next'
import CartIcon from '@/shopcomponents/CartIcon.vue'
import Description from './Description.vue'
import { useUserStore } from '@/stores/user.js'

const route = useRoute()

const save = ref()
const review = ref('')
const userRate = ref(0)
const hoverRate = ref(0)

const store = useProductStore()
const store2 = useUserStore()

const product = computed(() => store.products.find((p) => p.id === Number(route.params.id)))

const formatPrice = (price) => {
  return `${Number(price).toLocaleString('fa-IR')} تومان`
}

const saveHandler = () => {
  save.value = store2.isAuthenticated ? true : false
  if (save.value === false) {
    setTimeout(() => {
      save.value = undefined
    }, 1000)
  }
}

const saveReview = () => {
  if (!review.value.trim() || userRate.value === 0) return

  product.value.reviews.unshift({
    id: product.value.reviews.length + 1,
    user: store2.user?.name || 'کاربر مهمان',
    rate: userRate.value,
    date: new Date().toLocaleDateString('fa-IR'),
    comment: review.value,
  })

  review.value = ''
  userRate.value = 0
  save.value = undefined
}
</script>

<template>
  <div data-aos="fade-up" data-aos-duration="1000">
    <div class="mt-32 grid grid-cols-2">
      <img class="sm:w-96 sm:h-96 rounded-lg sm:mr-18 w-36 h-36 mr-3" :src="product.image" />
      <div class="flex flex-col gap-2">
        <h1 class="font-bold text-2xl">{{ product.title }}</h1>
        <div class="flex gap-2 mt-5">
          <p class="text-gray-700 self-start">({{ product.reviews.length }})نظر</p>
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
            <!-- بخش ثبت نظر -->
    <div class=" sm:pt-6 pt-3">
      <div
        @click="saveHandler"
        class="cursor-pointer inline-block bg-gray-800 hover:bg-gray-900 transition-colors text-white px-5 py-2 rounded-lg text-sm"
      >
        ثبت نظر
      </div>

      <Transition name="fade-slide">
        <p v-if="save === false" class="text-red-700 mt-3 text-sm">ابتدا وارد سایت شوید</p>
      </Transition>

      <Transition name="fade-slide">
        <div v-if="save" class="mt-4 flex flex-col gap-3 bg-gray-50 p-4 rounded-xl max-w-md ">
          <!-- انتخاب ستاره -->
          <div class="flex items-center gap-1">
            <Star
              v-for="n in 5"
              :key="n"
              class="w-6 h-6 cursor-pointer transition-colors"
              :class="
                n <= (hoverRate || userRate) ? 'fill-yellow-400 text-yellow-400' : 'text-gray-300'
              "
              @click="userRate = n"
              @mouseenter="hoverRate = n"
              @mouseleave="hoverRate = 0"
            />
          </div>

          <input
            v-model="review"
            type="text"
            placeholder="نظر خود را وارد کنید"
            class="border border-gray-300 rounded-lg px-3 py-2 text-sm outline-none focus:border-gray-500"
          />

          <button
            type="button"
            @click="saveReview"
            :disabled="!review.trim() || userRate === 0"
            class="bg-blue-600 hover:bg-blue-700 disabled:bg-gray-300 disabled:cursor-not-allowed text-white rounded-lg py-2 text-sm transition-colors"
          >
            ثبت نظر
          </button>
        </div>
      </Transition>
    </div>
      </div>
    </div>


    <Description :product="product" />
  </div>
</template>

<style scoped>
.fade-slide-enter-active,
.fade-slide-leave-active {
  transition: all 0.3s ease;
}

.fade-slide-enter-from,
.fade-slide-leave-to {
  opacity: 0;
  transform: translateY(-5px);
}

.fade-slide-enter-to,
.fade-slide-leave-from {
  opacity: 1;
  transform: translateY(0);
}
</style>
