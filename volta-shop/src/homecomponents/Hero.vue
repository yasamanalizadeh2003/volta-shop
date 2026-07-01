<script setup></script>

<template>
  <div class="p-3" data-aos="fade-up" data-aos-duration="1000">
    <div
      class="bg-[#ece9d2] rounded-2xl overflow-hidden flex flex-col-reverse lg:flex-row items-center justify-between"
    >
      <!-- Content -->
      <div
        class="w-full lg:w-1/2 px-6 py-8 sm:px-10 sm:py-10 lg:px-16 lg:py-12 text-center lg:text-right"
      >
        <h1 class="text-3xl sm:text-4xl lg:text-5xl font-bold leading-relaxed">
          سبک زندگی <br />
          مدرن با
          <span class="text-purple-700">ولتا</span>
        </h1>

        <p class="text-gray-700 mt-5 text-sm sm:text-base lg:text-lg leading-8">
          جدیدترین محصولات دکوراسیون و لوازم خانگی
          <br class="hidden sm:block" />
          با طراحی مدرن و کیفیت بالا
        </p>

        <RouterLink
          to="/"
          class="inline-block mt-8 w-full sm:w-auto px-8 py-3 rounded-xl text-white bg-gradient-to-br from-purple-900 to-purple-700 hover:scale-105 transition"
        >
          مشاهده محصولات
        </RouterLink>
      </div>

      <!-- Image -->
      <div class="w-full lg:w-1/2 flex justify-center">
        <img
          src="@/assets/images/ChatGPT_Image_Jun_28__2026__09_21_14_AM-removebg-preview.png"
          alt="ولتا"
          class="w-64 sm:w-80 md:w-96 lg:w-[500px] xl:w-[600px] h-auto object-contain"
        />
      </div>
    </div>
  </div>
</template>
