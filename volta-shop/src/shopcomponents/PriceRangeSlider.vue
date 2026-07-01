<!-- PriceRangeSlider.vue -->
<script setup>
import { ref, watch } from 'vue'

const props = defineProps({
  min: { type: Number, default: 0 },
  max: { type: Number, default: 50000000 }
})

const emit = defineEmits(['update:min', 'update:max'])

const localMin = ref(props.min)
const localMax = ref(props.max)

// فقط وقتی والد تغییر می‌کند، آپدیت کن
watch(() => props.min, (newVal) => {
  if (newVal !== localMin.value) {
    localMin.value = newVal
  }
})

watch(() => props.max, (newVal) => {
  if (newVal !== localMax.value) {
    localMax.value = newVal
  }
})

const onMinChange = (event) => {
  const value = Number(event.target.value)
  // مطمئن شو که از max بیشتر نشه
  const finalValue = Math.min(value, localMax.value)
  localMin.value = finalValue
  emit('update:min', finalValue)
}

const onMaxChange = (event) => {
  const value = Number(event.target.value)
  // مطمئن شو که از min کمتر نشه
  const finalValue = Math.max(value, localMin.value)
  localMax.value = finalValue
  emit('update:max', finalValue)
}

// نمایش با کاما
const formatPrice = (price) => {
  return price.toLocaleString('fa-IR')
}
</script>

<template>
  <div class="mb-8">
    <div class="flex justify-between items-center text-sm font-medium text-gray-700 mb-4">
      <span>{{ formatPrice(localMin) }} <span class="text-xs">تومان</span></span>
      <span class="text-gray-800">تا</span>
      <span>{{ formatPrice(localMax) }} <span class="text-xs">تومان</span></span>
    </div>

    <div class="space-y-4">
      <!-- اسلایدر حداقل قیمت -->
      <input 
        type="range"
        :value="localMin"
        @input="onMinChange"
        :min="0"
        :max="localMax"
        class="w-full accent-violet-600 cursor-pointer"
      />
      
      <!-- اسلایدر حداکثر قیمت -->
      <input 
        type="range"
        :value="localMax"
        @input="onMaxChange"
        :min="localMin"
        :max="50000000"
        class="w-full accent-violet-600 cursor-pointer"
      />
    </div>
  </div>
</template>