<script setup>
import { reactive } from 'vue'

import image1 from '../assets/images/ChatGPT_Image_Jun_28__2026__09_21_24_AM-removebg-preview.png'
import image2 from '../assets/images/ChatGPT_Image_Jun_28__2026__09_21_24_AM-removebg-preview (1).png'
import image3 from '../assets/images/ChatGPT_Image_Jun_28__2026__09_21_24_AM-removebg-preview (2).png'
import image4 from '../assets/images/ChatGPT_Image_Jun_28__2026__09_21_24_AM-removebg-preview (3).png'
import image5 from '../assets/images/ChatGPT_Image_Jun_28__2026__09_21_24_AM-removebg-preview (4).png'
import image6 from '../assets/images/ChatGPT_Image_Jun_28__2026__09_21_24_AM-removebg-preview (5).png'
import image7 from '../assets/images/ChatGPT_Image_Jun_28__2026__09_21_24_AM-removebg-preview (6).png'
import image8 from '../assets/images/ChatGPT_Image_Jun_28__2026__09_20_46_AM-removebg-preview.png'

const items = reactive([
  { name: 'باغ و فضای باز', url: image1 },
  { name: 'سبد و نظم دهنده', url: image2 },
  { name: 'راحتی', url: image3 },
  { name: 'سرویس خواب', url: image4 },
  { name: 'حمام و بهداشتی', url: image5 },
  { name: 'نور پردازی', url: image6 },
  { name: 'مبلمان', url: image7 },
  { name: 'دکوراسیون', url: image8 },
])
</script>

<template>
  <div class="px-4" data-aos="fade-up" data-aos-duration="1000">
    <h1 class="text-xl font-bold mb-3">دسته بندی های محبوب</h1>

    <!-- scroll container -->
    <div class="flex sm:gap-18 gap-4 overflow-x-auto scrollbar-hide pb-2">
      <div
        v-for="(item, index) in items"
        :key="index"
        class="flex flex-col items-center flex-shrink-0 w-24"
      >
        <img
          class="rounded-full bg-[#ece9d2] sm:w-24 sm:h-24 w-18 h-18 object-contain"
          :src="item.url"
          :alt="item.name"
        />

        <p class="text-gray-500 text-xs mt-1 text-center">
          {{ item.name }}
        </p>
      </div>
    </div>
  </div>
</template>
