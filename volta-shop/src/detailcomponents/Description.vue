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
  console.log(activeTab.value)
}
</script>

<template>
  <div>
    <div>
      <div class="flex gap-3 flex-row">
        <div @click="active(index)" v-for="(tab, index) in tabs" :key="index">
          {{ tab }}
        </div>
      </div>
      <div v-if="activeTab === 'توضیحات'">
        {{ product.description }}
      </div>
      <div v-if="activeTab === 'مشخصات'">
        <div
          v-for="(value, key) in product.specifications"
          :key="key"
          class="flex justify-between border-b py-3"
        >
          <span class="font-medium">{{ key }}</span>
          <span>{{ value }}</span>
        </div>
      </div>
      <div v-if="activeTab === 'نظرات'">
        <div v-for="review in product.reviews" :key="review.id" class="border rounded-xl p-4 mb-3">
          <div class="flex justify-between">
            <h3 class="font-bold">{{ review.user }}</h3>
            <span>{{ review.rate }} ⭐</span>
          </div>

          <p class="text-gray-600 text-sm mt-2">
            {{ review.comment }}
          </p>

          <span class="text-xs text-gray-400">
            {{ review.date }}
          </span>
        </div>
      </div>
    </div>
  </div>
</template>
