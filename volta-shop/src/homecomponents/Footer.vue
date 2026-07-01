<template>
  <footer class="bg-[#210421] text-white mt-12">
    <div class="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8 py-4 sm:py-6 lg:py-12">
      
      <!-- Grid اصلی -->
      <div class="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-6 lg:gap-10">
        
        <!-- بخش اول: لوگو و توضیحات (در موبایل کل عرض را بگیرد) -->
        <div class="col-span-2 sm:col-span-1 text-center sm:text-right">
          <h1 class="text-xl sm:text-2xl lg:text-4xl font-bold text-purple-500 mb-1 sm:mb-3 lg:mb-4">
            ولتا
          </h1>
          <p class="text-gray-400 text-[10px] xs:text-xs sm:text-sm leading-relaxed max-w-xs mx-auto sm:mx-0">
            بهترین قیمت‌ها و باکیفیت‌ترین محصولات را در فروشگاه ما پیدا کنید.
          </p>
          <!-- آیکون‌های شبکه‌های اجتماعی -->
          <div class="flex justify-center sm:justify-start gap-2 sm:gap-3 mt-2 sm:mt-4">
            <a href="#" class="text-gray-400 hover:text-purple-400 transition text-base sm:text-xl">📱</a>
            <a href="#" class="text-gray-400 hover:text-purple-400 transition text-base sm:text-xl">💬</a>
            <a href="#" class="text-gray-400 hover:text-purple-400 transition text-base sm:text-xl">📺</a>
          </div>
        </div>

        <!-- در موبایل مخفی میشود بخش دوم: لینک‌های سریع -->
        <div class="hidden sm:block text-center sm:text-right">
          <h4 class="text-xs sm:text-base lg:text-lg font-semibold mb-1 sm:mb-3 lg:mb-4 text-purple-300">
            لینک‌های سریع
          </h4>
          <ul class="space-y-1 sm:space-y-2 text-gray-400 text-[10px] xs:text-xs sm:text-sm">
            <li>
              <a href="#" class="hover:text-purple-400 transition inline-block">
                صفحه اصلی
              </a>
            </li>
            <li>
              <a href="#" class="hover:text-purple-400 transition inline-block">
                محصولات
              </a>
            </li>
            <li>
              <a href="#" class="hover:text-purple-400 transition inline-block">
                درباره ما
              </a>
            </li>
            <li>
              <a href="#" class="hover:text-purple-400 transition inline-block">
                تماس با ما
              </a>
            </li>
          </ul>
        </div>

        <!-- بخش سوم: اطلاعات تماس -->
        <div class="text-center sm:text-right">
          <h4 class="text-xs sm:text-base lg:text-lg font-semibold mb-1 sm:mb-3 lg:mb-4 text-purple-300">
            تماس با ما
          </h4>
          <ul class="space-y-1.5 sm:space-y-3 text-gray-400 text-[10px] xs:text-xs sm:text-sm">
            <li class="flex items-center justify-center sm:justify-start gap-1.5 sm:gap-3">
              <span class="text-purple-400 text-sm sm:text-lg">📍</span>
              <span class="text-[10px] xs:text-xs">تهران، آزادی، پلاک ۱۲۳</span>
            </li>
            <li class="flex items-center justify-center sm:justify-start gap-1.5 sm:gap-3">
              <span class="text-purple-400 text-sm sm:text-lg">📞</span>
              <span class="text-[10px] xs:text-xs">۰۲۱-۱۲۳۴۵۶۷۸</span>
            </li>
            <li class="flex items-center justify-center sm:justify-start gap-1.5 sm:gap-3">
              <span class="text-purple-400 text-sm sm:text-lg">✉️</span>
              <span class="text-[10px] xs:text-xs">info@shop.com</span>
            </li>
          </ul>
        </div>

        <!-- ساعت کاری -->
        <div class=" text-center sm:text-right">
          <h4 class="text-base sm:text-lg font-semibold mb-3 sm:mb-4 text-purple-300">
            ساعات کاری
          </h4>
          <ul class="space-y-2 text-gray-400 text-xs sm:text-sm">
            <li class="flex items-center justify-center sm:justify-start gap-3">
              
              <span>شنبه تا پنجشنبه: ۹ الی ۱۸</span>
            </li>
            <li class="flex items-center justify-center sm:justify-start gap-3">
              
              <span>جمعه: تعطیل</span>
            </li>
          </ul>
        </div>
      </div>

      <!-- خط جداکننده و کپی‌رایت -->
      <div class="border-t border-purple-900/30 mt-4 sm:mt-6 lg:mt-10 pt-3 sm:pt-4 lg:pt-6">
        <div class="flex flex-col sm:flex-row justify-between items-center gap-2 sm:gap-3">
          <p class="text-gray-500 text-[9px] xs:text-xs sm:text-sm text-center">
            © ۱۴۰۴ تمامی حقوق محفوظ است.
          </p>
          <div class="flex gap-3 sm:gap-4 text-gray-500 text-[9px] xs:text-xs sm:text-sm">
            <a href="#" class="hover:text-purple-400 transition">قوانین</a>
            <a href="#" class="hover:text-purple-400 transition">حریم خصوصی</a>
            <a href="#" class="hover:text-purple-400 transition">پشتیبانی</a>
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>