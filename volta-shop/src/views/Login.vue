<script setup>
import { useUserStore } from '../stores/user'
import { Form, Field, ErrorMessage } from 'vee-validate'
import { useRouter } from 'vue-router'
import * as yup from 'yup'
const router = useRouter()

const store = useUserStore()

async function onLogin(values) {
  const ok = await store.login(values)

  if (ok) {
    setTimeout(() => {
      router.push('/')
    }, 1000)
  }
}

const schema = yup.object({
  email: yup.string().email('ایمیل معتبر نیست').required('ایمیل الزامی است'),

  password: yup.string().required('رمز عبور الزامی است').min(6, 'حداقل ۶ کاراکتر'),
})
</script>

<template>
  <div
    class="min-h-screen flex flex-col justify-center py-8 px-5"
  >
    <!-- Header -->
    <div class="text-center mb-8">
      <h1 class="text-3xl sm:text-4xl font-bold text-purple-700">
        ولتا
      </h1>

      <div class="mt-5 space-y-2">
        <h2 class="text-2xl sm:text-3xl font-semibold">
          ورود به حساب کاربری
        </h2>

        <p class="text-sm sm:text-base text-gray-500">
          برای ادامه لطفا وارد حساب کاربری خود شوید.
        </p>
      </div>
    </div>

    <!-- Form -->
    <Form
      :validation-schema="schema"
      @submit="onLogin"
      class="w-full max-w-md mx-auto bg-white rounded-2xl shadow-lg p-6 sm:p-8 flex flex-col gap-5 shadow-purple-300"
    >
      <!-- Email -->
      <div>
        <label
          for="email"
          class="block mb-2 text-sm sm:text-base text-purple-900"
        >
          ایمیل
        </label>

        <Field
          name="email"
          as="input"
          type="email"
          placeholder="ایمیل"
          class="w-full rounded-lg border border-purple-200 p-3 outline-none focus:border-purple-600 shadow-sm shadow-purple-200 placeholder:text-purple-400"
        />

        <ErrorMessage
          name="email"
          class="text-red-500 text-sm mt-2 block"
        />
      </div>

      <!-- Password -->
      <div>
        <label
          for="password"
          class="block mb-2 text-sm sm:text-base text-purple-900"
        >
          رمز عبور
        </label>

        <Field
          name="password"
          as="input"
          type="password"
          placeholder="رمز عبور"
          class="w-full rounded-lg border border-purple-200 p-3 outline-none focus:border-purple-600 shadow-sm shadow-purple-200 placeholder:text-purple-400"
        />

        <ErrorMessage
          name="password"
          class="text-red-500 text-sm mt-2 block"
        />
      </div>

      <!-- Remember -->
      <div
        class="flex flex-col sm:flex-row sm:justify-between gap-4 text-sm"
      >
        <RouterLink
          class="text-purple-800 hover:text-purple-900 transition"
        >
          فراموشی رمز عبور؟
        </RouterLink>

        <label class="flex items-center gap-2 cursor-pointer">
          <span class="text-purple-900">
            مرا به خاطر بسپار
          </span>
          <input
            type="checkbox"
            class="w-5 h-5 accent-purple-700"
          />
          
        </label>
      </div>

      <!-- Messages -->
      <p
        v-if="store.success"
        class="text-green-600 text-sm text-center"
      >
        {{ store.success }}
      </p>

      <p
        v-if="store.apiError"
        class="text-red-500 text-sm text-center"
      >
        {{ store.apiError }}
      </p>

      <!-- Button -->
      <button
        :disabled="store.isLoading"
        type="submit"
        class="w-full bg-purple-700 text-white py-3 rounded-lg hover:bg-purple-800 transition disabled:opacity-50 disabled:cursor-not-allowed"
      >
        {{ store.isLoading ? 'در حال ورود...' : 'ورود' }}
      </button>
    </Form>

    <!-- Signup -->
    <div
      class="flex flex-col sm:flex-row justify-center items-center gap-2 mt-6 text-sm sm:text-base"
    >
      <p class="text-gray-500">
        حساب کاربری ندارید؟
      </p>

      <RouterLink
        to="/signup"
        class="text-purple-700 hover:text-purple-900 transition"
      >
        ثبت نام کنید
      </RouterLink>
    </div>
  </div>
</template>