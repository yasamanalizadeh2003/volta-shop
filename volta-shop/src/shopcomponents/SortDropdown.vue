<!-- SortDropdown.vue -->
<script setup>
import { ref, computed, onMounted, onUnmounted } from 'vue'

const props = defineProps({
  modelValue: { type: String, default: 'newest' }
})

const emit = defineEmits(['update:modelValue'])

const isOpen = ref(false)

const options = [
  { value: 'newest', label: 'جدیدترین' },
  { value: 'price-low', label: 'ارزان‌ترین' },
  { value: 'price-high', label: 'گران‌ترین' }
]

const selectedOption = computed(() => 
  options.find(opt => opt.value === props.modelValue) || options[0]
)

const selectOption = (value) => {
  emit('update:modelValue', value)
  isOpen.value = false
}

// بستن با کلیک خارج از دراپ‌داون
const closeDropdown = (e) => {
  if (!e.target.closest('.sort-dropdown-wrapper')) {
    isOpen.value = false
  }
}

onMounted(() => {
  document.addEventListener('click', closeDropdown)
})

onUnmounted(() => {
  document.removeEventListener('click', closeDropdown)
})
</script>

<template>
  <div class="relative w-full sm:w-52 sort-dropdown-wrapper">
    <!-- دکمه اصلی -->
    <button
      @click.stop="isOpen = !isOpen"
      class="w-full px-5 py-2.5 bg-white border border-gray-200 rounded-2xl flex items-center justify-between hover:border-violet-400 focus:outline-none focus:border-violet-500 transition-all shadow-sm"
    >
      <span class="text-gray-500 font-medium">{{ selectedOption.label }}</span>
      <span class="text-xl text-gray-500 transition-transform" :class="{ 'rotate-180': isOpen }">▼</span>
    </button>

    <!-- لیست دراپ‌داون -->
    <div
      v-if="isOpen"
      class="absolute mt-2 w-full bg-white border border-gray-200 rounded-2xl shadow-xl py-2 z-50 overflow-hidden"
    >
      <button
        v-for="option in options"
        :key="option.value"
        @click="selectOption(option.value)"
        class="w-full px-5 py-3 text-right hover:bg-violet-50 flex items-center gap-2 text-gray-700 hover:text-violet-700 transition-colors"
        :class="{ 'bg-violet-50 text-violet-700 font-medium': modelValue === option.value }"
      >
        {{ option.label }}
      </button>
    </div>
  </div>
</template>