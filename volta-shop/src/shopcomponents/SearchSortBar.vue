<!-- SearchSortBar.vue -->
<script setup>
import { defineProps, defineEmits } from 'vue'
import SortDropdown from './SortDropdown.vue';

const props = defineProps({
  search: { type: String, default: '' },
  sort: { type: String, default: 'newest' }
})

const emit = defineEmits(['update:search', 'update:sort'])
</script>

<template>
  <div class="flex flex-col sm:flex-row gap-4 w-full max-w-md">
    <div class="relative flex-1">
      <input
        :value="search"
        @input="emit('update:search', $event.target.value)"
        type="text"
        placeholder="جستجوی محصول..."
        class="w-full pl-11 pr-4 py-3 hover:border-violet-400 border border-purple-100 shadow-sm shadow-purple-100  rounded-2xl focus:outline-none focus:border-violet-500"
      />
      <span class="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400">🔍</span>
    </div>


    <SortDropdown 
      :model-value="sort" 
      @update:model-value="emit('update:sort', $event)"
    />
  </div>
</template>