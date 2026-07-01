import './style.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import AOS from 'aos'
import 'aos/dist/aos.css'

import App from './App.vue'
import router from './router'

const app = createApp(App)

app.use(createPinia())
app.use(router)

app.mount('#app')
AOS.init({
  duration: 800, // مدت زمان انیمیشن
  once: true, // فقط یکبار اجرا شود
  offset: 100, // فاصله از پایین صفحه برای فعال‌سازی
})
