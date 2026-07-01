<script setup></script>

<template>
  <div>
    <div class="p-3">
      <div
        class="bg-[#ece9d2] rounded-2xl overflow-hidden flex flex-row items-center justify-between mx-3 sm:mx-5 lg:mx-7"
      >
        <!-- Image -->
        <div class="w-1/2 flex items-end">
          <img
            src="../assets/images/longSofa.png"
            alt="ولتا"
            class="w-44 sm:w-40 md:w-56 lg:w-[450px] xl:w-[550px] h-auto object-contain"
          />
        </div>
        <!-- Content -->
        <div
          class="w-1/2 px-3 py-4 sm:px-6 sm:py-8 lg:px-8 lg:py-12 flex flex-col items-center text-center lg:text-right"
        >
          <p class="text-gray-700 text-[12px] sm:text-sm lg:text-lg leading-5 sm:leading-7">
            تخفیف‌های ویژه تابستانه
          </p>

          <p class="mt-2 sm:text-xl lg:text-3xl font-bold">تا 30% تخفیف</p>

          <RouterLink
            to="/"
            class="mt-3 lg:mt-8 px-3 py-2 sm:px-5 sm:py-2.5 lg:px-8 lg:py-3 text-[10px] sm:text-sm lg:text-base rounded-xl text-white bg-gradient-to-br from-purple-900 to-purple-700 hover:scale-105 transition"
          >
            همین حالا خرید کنید
          </RouterLink>
        </div>
      </div>
    </div>
    <!-- part2 -->
   <div class="flex flex-col sm:flex-row justify-between items-center px-4 py-2 sm:px-9 sm:py-3 lg:px-12 lg:py-4 gap-4 sm:gap-0
   border-2 border-purple-200 shadow-sm shadow-purple-300 rounded-2xl lg:mx-10 lg:my-6 sm:mx-8 sm:my-4 mx-4 my-2
   bg-purple-50">
  <h1 class="text-center sm:text-right text-base sm:text-lg md:text-xl lg:text-2xl font-bold text-gray-800">
    از جدیدترین تخفیف‌ها باخبر شوید!
  </h1>
  <a href="#"  
     class="inline-block
            w-full sm:w-auto
            px-6 sm:px-8 py-2.5 sm:py-3
            rounded-xl
            text-white text-center
            bg-gradient-to-br
            from-purple-900
            to-purple-700
            hover:scale-105
            transition
            duration-200
            shadow-md
            hover:shadow-lg
            text-sm sm:text-base">
    عضویت
  </a>
</div>
  </div>
</template>
