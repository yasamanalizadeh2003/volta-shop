<script setup>
import { ShieldCheck, Headset, RotateCcw, Truck } from 'lucide-vue-next'
</script>

<template>
  <section class="py-8" data-aos="fade-up" data-aos-duration="1000">
    <div class="grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6 px-4 sm:px-8 lg:px-12">
      <!-- پرداخت امن -->
      <div class="flex items-center gap-2 lg:gap-3 min-h-[70px]">
        <ShieldCheck class="w-5 h-5 lg:w-7 lg:h-7 text-purple-700 flex-shrink-0" />
        <div>
          <h3 class="text-sm lg:text-base font-semibold">پرداخت امن</h3>
          <p class="text-[11px] lg:text-sm text-gray-600">پرداخت آنلاین با کارت</p>
        </div>
      </div>

      <!-- پشتیبانی -->
      <div class="flex items-center gap-2 lg:gap-3 min-h-[70px]">
        <Headset class="w-5 h-5 lg:w-7 lg:h-7 text-purple-700 flex-shrink-0" />
        <div>
          <h3 class="text-sm lg:text-base font-semibold">پشتیبانی ۲۴ ساعته</h3>
          <p class="text-[11px] lg:text-sm text-gray-600">پاسخگویی در تمام روزهای هفته</p>
        </div>
      </div>

      <!-- ضمانت بازگشت -->
      <div class="flex items-center gap-2 lg:gap-3 min-h-[70px]">
        <RotateCcw class="w-5 h-5 lg:w-7 lg:h-7 text-purple-700 flex-shrink-0" />
        <div>
          <h3 class="text-sm lg:text-base font-semibold">ضمانت بازگشت</h3>
          <p class="text-[11px] lg:text-sm text-gray-600">بازگشت کالا تا ۷ روز</p>
        </div>
      </div>

      <!-- ارسال رایگان -->
      <div class="flex items-center gap-2 lg:gap-3 min-h-[70px]">
        <Truck class="w-5 h-5 lg:w-7 lg:h-7 text-purple-700 flex-shrink-0" />
        <div>
          <h3 class="text-sm lg:text-base font-semibold">ارسال رایگان</h3>
          <p class="text-[11px] lg:text-sm text-gray-600">برای سفارشات بالای 2 میلیون تومان</p>
        </div>
      </div>
    </div>
  </section>
</template>
