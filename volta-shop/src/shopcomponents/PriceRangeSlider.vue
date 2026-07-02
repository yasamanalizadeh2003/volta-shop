<!-- PriceRangeSlider.vue -->
<script setup>
import { ref, watch, computed } from 'vue'

const props = defineProps({
  min: { type: Number, default: 0 },
  max: { type: Number, default: 50000000 }
})

const emit = defineEmits(['update:min', 'update:max'])

const localMin = ref(props.min)
const localMax = ref(props.max)

// نمایش با کاما
const formattedMin = computed(() => localMin.value.toLocaleString('fa-IR'))
const formattedMax = computed(() => localMax.value.toLocaleString('fa-IR'))

const updateMin = (e) => {
  let value = Number(e.target.value)
  if (value > localMax.value) value = localMax.value
  localMin.value = value
  emit('update:min', value)
}

const updateMax = (e) => {
  let value = Number(e.target.value)
  if (value < localMin.value) value = localMin.value
  localMax.value = value
  emit('update:max', value)
}

// سینک کردن props از والد
watch(() => props.min, (newVal) => {
  localMin.value = newVal
})

watch(() => props.max, (newVal) => {
  localMax.value = newVal
})
</script>

<template>
  <div class="mb-8">
    <!-- نمایش قیمت -->
    <div class="flex justify-between  mb-6 text-sm font-medium text-gray-800">
      <span>{{ formattedMin }} تومان</span>
      <span class="text-violet-700">تا</span>
      <span>{{ formattedMax }} تومان</span>
    </div>

    <!-- اسلایدرها -->
    <div class="relative space-y-6">
      <!-- اسلایدر حداقل -->
      <div>
        <label class="text-xs text-gray-500 block mb-1">حداقل قیمت</label>
        <input
          type="range"
          :value="localMin"
          @input="updateMin"
          :min="0"
          :max="50000000"
          class="w-full accent-violet-600 cursor-pointer"
        />
      </div>

      <!-- اسلایدر حداکثر -->
      <div>
        <label class="text-xs text-gray-500 block mb-1">حداکثر قیمت</label>
        <input
          type="range"
          :value="localMax"
          @input="updateMax"
          :min="0"
          :max="50000000"
          class="w-full accent-violet-600 cursor-pointer"
        />
      </div>
    </div>
  </div>
</template>