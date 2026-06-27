<script setup>
import axios from 'axios'
import { Form, Field, ErrorMessage } from 'vee-validate'
import { ref } from 'vue'
import * as yup from 'yup'

const apiError = ref('')
const isLoading = ref(false)


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

async function onSubmit(values) {
  try {
    apiError.value = ''
    isLoading.value = true

    const res = await axios.post('https://reqres.in/api/register', {
      email: values.email,
      password: values.password,
    })
    const token = res.data.token
    localStorage.setItem('token', token)
  } catch (err) {
    apiError.value = err.response?.data?.error || 'خطا در ثبت نام'
  } finally {
    isLoading.value = false
  }
}
</script>

<template>
  <div>
    <!-- header -->
    <div class="flex justify-center mt-3 items-center">
      <div class="flex flex-col items-center gap-6">
        <h1 class="text-purple-700 font-semibold text-4xl">ولتا</h1>
        <div class="flex items-center flex-col gap-2">
          <h1 class="text-black font-semibold text-4xl">ثبت نام</h1>
          <p class="text-gray-400">برای ساخت حساب کاربری اطلاعات خود را وارد کنید</p>
        </div>
      </div>
    </div>

    <!-- form -->
    <Form
      :validation-schema="schema"
      @submit="onSubmit"
      class="flex flex-col gap-5 w-full sm:w-[80%] lg:w-[30%] mx-auto mt-6 mb-10 px-4 sm:px-0"
    >
      <!-- Full Name -->
      <div>
        <label for="fullName" class="block mb-2 text-sm lg:text-base text-purple-900">
          نام و نام خانوادگی
        </label>
        <Field
          name="fullName"
          as="input"
          type="text"
          placeholder="نام و نام خانوادگی"
          class="w-full border rounded-lg p-3 outline-none focus:border-purple-600 bg-white
           border-purple-200 shadow-sm shadow-purple-300 placeholder:text-purple-400"
        />
        <ErrorMessage name="fullName" class="text-red-500 text-sm mt-2 block" />
      </div>

      <!-- Email -->

      <div>
        <label for="email" class="block mb-2 text-sm lg:text-base text-purple-900">ایمیل</label>
        <Field
          name="email"
          as="input"
          type="email"
          placeholder="ایمیل"
          class="w-full border rounded-lg p-3 outline-none focus:border-purple-600 bg-white
            border-purple-200 shadow-sm shadow-purple-300 placeholder:text-purple-400"
        />
        <ErrorMessage name="email" class="text-red-500 text-sm mt-2 block" />
      </div>

      <!-- Phone -->
      <div>
        <label for="phone" class="block mb-2 text-sm lg:text-base text-purple-900"
          >شماره موبایل</label
        >
        <Field
          name="phone"
          as="input"
          type="tel"
          placeholder="شماره موبایل"
          class="w-full border rounded-lg p-3 bg-white
           outline-none focus:border-purple-600 placeholder:text-right border-purple-200 shadow-sm shadow-purple-300 placeholder:text-purple-400"
        />
        <ErrorMessage name="phone" class="text-red-500 text-sm mt-2 block" />
      </div>

      <!-- Password -->
      <div>
        <label for="password" class="block mb-2 text-sm lg:text-base text-purple-900"
          >رمز عبور</label
        >
        <Field
          name="password"
          as="input"
          type="password"
          placeholder="رمز عبور"
          class="w-full border rounded-lg p-3 outline-none
          bg-white  focus:border-purple-600 border-purple-200 shadow-sm shadow-purple-300 placeholder:text-purple-400"
        />
        <ErrorMessage name="password" class="text-red-500 text-sm mt-2 block" />
      </div>

      <!-- Confirm Password -->
      <div>
        <label for="confirmPassword" class="block mb-2 text-sm lg:text-base text-purple-900"
          >تکرار رمز عبور</label
        >
        <Field
          name="confirmPassword"
          as="input"
          type="password"
          placeholder="تکرار رمز عبور"
          class="w-full border rounded-lg p-3 outline-none bg-white
           focus:border-purple-600 border-purple-200 shadow-sm shadow-purple-300 placeholder:text-purple-400"
        />
        <ErrorMessage name="confirmPassword" class="text-red-500 text-sm mt-2 block" />
      </div>

      <p v-if="apiError" class="text-red-500 text-sm text-center">
        {{ apiError }}
      </p>
      <button
        type="submit"
        class="bg-purple-700 text-white rounded-lg py-3 hover:bg-purple-800 transition"
      >
        {{ isLoading ? 'در حال ثبت ...' : 'ثبت نام' }}
      </button>
    </Form>
  </div>
</template>


