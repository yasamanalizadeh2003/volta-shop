<script setup>
import { useUserStore } from '../stores/user'
import { Form, Field, ErrorMessage } from 'vee-validate'
import { useRouter } from 'vue-router'
import * as yup from 'yup'
import { RouterLink } from 'vue-router'
import FloatingBackground from '@/components/FloatingBackground.vue'
const router = useRouter()

const store = useUserStore()

async function onSubmit(values) {
  const ok = await store.register(values)

  if (ok) {
    setTimeout(() => {
      router.push('/')
    }, 1000)
  }
}

const schema = yup.object({
  fullName: yup
    .string()
    .required('نام و نام خانوادگی الزامی است')
    .min(3, 'حداقل ۳ کاراکتر وارد کنید'),

  email: yup.string().required('ایمیل الزامی است').email('ایمیل معتبر نیست'),

  phone: yup
    .string()
    .required('شماره موبایل الزامی است')
    .matches(/^09\d{9}$/, 'شماره موبایل معتبر نیست'),

  password: yup
    .string()
    .required('رمز عبور الزامی است')
    .min(8, 'رمز عبور باید حداقل ۸ کاراکتر باشد'),

  confirmPassword: yup
    .string()
    .required('تکرار رمز عبور الزامی است')
    .oneOf([yup.ref('password')], 'رمز عبور مطابقت ندارد'),
})
</script>

<template>
  <Transition
    appear
    enter-active-class="transition-all duration-1500 ease-out"
    enter-from-class="opacity-0 translate-y-6"
    enter-to-class="opacity-100 translate-y-0"
  >
    <div class="min-h-screen flex flex-col justify-center py-8 px-5">
      <FloatingBackground />
      <!-- Header -->
      <div class="text-center mb-8">
        <div class="space-y-1">
          <h2 class="text-2xl sm:text-3xl font-semibold">ثبت نام</h2>

          <p class="text-sm sm:text-base text-gray-500">
            برای ساخت حساب کاربری اطلاعات خود را وارد کنید.
          </p>
        </div>
      </div>

      <!-- Form -->
      <Form
        :validation-schema="schema"
        @submit="onSubmit"
        class="w-full max-w-md mx-auto bg-white rounded-2xl shadow-lg p-6 flex flex-col gap-2 shadow-purple-300"
      >
        <!-- Full Name -->
        <div>
          <label for="fullName" class="block mb-2 text-sm sm:text-base text-purple-900">
            نام و نام خانوادگی
          </label>

          <Field
            name="fullName"
            as="input"
            type="text"
            placeholder="نام و نام خانوادگی"
            class="w-full p-3 rounded-lg border border-purple-200 shadow-sm shadow-purple-200 outline-none focus:border-purple-600 placeholder:text-purple-400"
          />

          <ErrorMessage name="fullName" class="text-red-500 text-sm mt-2 block" />
        </div>

        <!-- Email -->
        <div>
          <label for="email" class="block mb-2 text-sm sm:text-base text-purple-900"> ایمیل </label>

          <Field
            name="email"
            as="input"
            type="email"
            placeholder="ایمیل"
            class="w-full p-3 rounded-lg border border-purple-200 shadow-sm shadow-purple-200 outline-none focus:border-purple-600 placeholder:text-purple-400"
          />

          <ErrorMessage name="email" class="text-red-500 text-sm mt-2 block" />
        </div>

        <!-- Phone -->
        <div>
          <label for="phone" class="block mb-2 text-sm sm:text-base text-purple-900">
            شماره موبایل
          </label>

          <Field
            name="phone"
            as="input"
            type="tel"
            placeholder="شماره موبایل"
            class="w-full p-3 rounded-lg border border-purple-200 shadow-sm shadow-purple-200 outline-none focus:border-purple-600 text-right placeholder:text-purple-400"
          />

          <ErrorMessage name="phone" class="text-red-500 text-sm mt-2 block" />
        </div>

        <!-- Password -->
        <div>
          <label for="password" class="block mb-2 text-sm sm:text-base text-purple-900">
            رمز عبور
          </label>

          <Field
            name="password"
            as="input"
            type="password"
            placeholder="رمز عبور"
            class="w-full p-3 rounded-lg border border-purple-200 shadow-sm shadow-purple-200 outline-none focus:border-purple-600 placeholder:text-purple-400"
          />

          <ErrorMessage name="password" class="text-red-500 text-sm mt-2 block" />
        </div>

        <!-- Confirm Password -->
        <div>
          <label for="confirmPassword" class="block mb-2 text-sm sm:text-base text-purple-900">
            تکرار رمز عبور
          </label>

          <Field
            name="confirmPassword"
            as="input"
            type="password"
            placeholder="تکرار رمز عبور"
            class="w-full p-3 rounded-lg border border-purple-200 shadow-sm shadow-purple-200 outline-none focus:border-purple-600 placeholder:text-purple-400"
          />

          <ErrorMessage name="confirmPassword" class="text-red-500 text-sm mt-2 block" />
        </div>

        <!-- Messages -->
        <p v-if="store.success" class="text-green-600 text-sm text-center">
          {{ store.success }}
        </p>

        <p v-if="store.apiError" class="text-red-500 text-sm text-center">
          {{ store.apiError }}
        </p>

        <!-- Button -->
        <button
          :disabled="store.isLoading"
          type="submit"
          class="w-full py-3 rounded-lg bg-purple-700 text-white hover:bg-purple-800 transition disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {{ store.isLoading ? 'در حال ثبت...' : 'ثبت نام' }}
        </button>
      </Form>

      <!-- Login -->
      <div
        class="flex flex-col sm:flex-row justify-center items-center gap-2 mt-6 text-sm sm:text-base"
      >
        <p class="text-gray-500">حساب کاربری دارید؟</p>

        <RouterLink to="/login" class="text-purple-700 hover:text-purple-900 transition">
          وارد شوید
        </RouterLink>
      </div>
    </div>
  </Transition>
</template>
