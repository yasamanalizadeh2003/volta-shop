<script setup>
import { reactive, ref } from 'vue'

defineProps({
  product: {
    type: Object,
    required: true,
  },
})

const tabs = reactive(['توضیحات', 'مشخصات', 'نظرات'])
const activeTab = ref('توضیحات')

function active(index) {
  activeTab.value = tabs[index]
}
</script>

<template>
  <div class="border-2 border-gray-200 rounded-xl mx-2 mt-6 sm:m-14 bg-white"
  data-aos="fade-up" data-aos-duration="1000">
    <!-- Tabs -->
    <div
      class="flex items-center justify-between border-b border-gray-200 px-4 sm:px-10"
    >
      <div class="flex gap-8">
        <div
          v-for="(tab, index) in tabs"
          :key="index"
          @click="active(index)"
          class="relative cursor-pointer py-5 transition-all duration-300"
        >
          <span
            :class="
              activeTab === tab
                ? 'text-purple-700 font-bold'
                : 'text-gray-500 hover:text-purple-700'
            "
          >
            {{ tab }}
          </span>

          <!-- Active Border -->
          <div
            v-if="activeTab === tab"
            class="absolute bottom-0 left-0 w-full h-1 rounded-full bg-gradient-to-r from-purple-900 to-purple-500"
          ></div>
        </div>
      </div>

      <span class="hidden sm:block text-gray-700 text-sm">
        {{ activeTab }}
      </span>
    </div>

    <!-- Content -->
    <div class="p-6 sm:p-8">
      <!-- Description -->
      <div data-aos="fade-up" data-aos-duration="800"
        v-if="activeTab === 'توضیحات'"
        class="leading-9 text-gray-700"
      >
        {{ product.description }}
      </div>

      <!-- Specifications -->
      <div  v-if="activeTab === 'مشخصات'" class="space-y-3" data-aos="fade-up" data-aos-duration="800">
        <div
          v-for="(value, key) in product.specifications"
          :key="key"
          class="flex justify-between items-center border-b border-gray-200 py-3"
        >
          <span class="font-semibold text-gray-700">
            {{ key }}
          </span>

          <span class="text-gray-500">
            {{ value }}
          </span>
        </div>
      </div>

      <!-- Reviews -->
      <div data-aos="fade-up" data-aos-duration="800"
        v-if="activeTab === 'نظرات'"
        class="space-y-4"
      >
        <div
          v-for="review in product.reviews"
          :key="review.id"
          class="border border-gray-200 rounded-xl p-5 shadow-sm"
        >
          <div class="flex justify-between items-center">
            <h3 class="font-bold text-lg">
              {{ review.user }}
            </h3>

            <span class="text-yellow-500 font-semibold">
              ⭐ {{ review.rate }}/5
            </span>
          </div>

          <p class="text-gray-600 mt-3 leading-8">
            {{ review.comment }}
          </p>

          <span class="text-sm text-gray-400 mt-4 block">
            {{ review.date }}
          </span>
        </div>
      </div>
    </div>
  </div>
</template>