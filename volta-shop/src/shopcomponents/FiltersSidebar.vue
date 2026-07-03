<!-- FiltersSidebar.vue -->
<script setup>
import { defineProps, defineEmits } from 'vue'
import PriceRangeSlider from './PriceRangeSlider.vue'

const props = defineProps({
  filters: { type: Object, required: true },
})

const emit = defineEmits(['update:filters'])

const categories = [
  { id: 'chair', name: 'صندلی' },
  { id: 'light', name: 'چراغ' },
  { id: 'table', name: 'میز' },
  { id: 'decoration', name: 'دکوری' },
]

const updateFilters = (newData) => {
  emit('update:filters', { ...props.filters, ...newData })
}
</script>

<template >
  <div data-aos="fade-left" data-aos-duration="1000"
    class="bg-white border border-purple-100 shadow-sm shadow-purple-200 rounded-2xl p-2 lg:p-5 sm:p-5 sticky top-2"
  >
    <h3 class="font-semibold text-lg mb-4">دسته‌بندی‌ها</h3>
    <div class="space-y-3 mb-8">
      <label v-for="cat in categories" :key="cat.id" class="flex items-center gap-2 cursor-pointer">
        <input
          type="radio"
          :checked="filters.category === cat.id"
          @change="updateFilters({ category: cat.id })"
          class="w-4 h-4 accent-violet-600"
        />
        <span>{{ cat.name }}</span>
      </label>
    </div>

    <h3 class="font-semibold text-lg mb-4">محدوده قیمت</h3>
    <PriceRangeSlider
      :min="filters.minPrice"
      :max="filters.maxPrice"
      @update:min="(val) => (filters.minPrice = val)"
      @update:max="(val) => (filters.maxPrice = val)"
    />
  </div>
</template>
