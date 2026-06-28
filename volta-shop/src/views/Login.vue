<script setup> 
import { useUserStore } from '../stores/user'
import { Form, Field, ErrorMessage } from 'vee-validate'
import { useRouter } from 'vue-router'
import * as yup from 'yup'
const router = useRouter()

const store=useUserStore()


async function onLogin(values){
  const ok = await store.login(values)

  if (ok) {
  setTimeout(() => {
    router.push('/')
  }, 1000)
}
}

const schema = yup.object({
  email: yup
    .string()
    .email('ایمیل معتبر نیست')
    .required('ایمیل الزامی است'),

  password: yup
    .string()
    .required('رمز عبور الزامی است')
    .min(6, 'حداقل ۶ کاراکتر')
})

</script>

<template>
    <div>
          <!-- header -->
    <div class="flex justify-center mt-3 items-center">
      <div class="flex flex-col items-center gap-6">
        <h1 class="text-purple-700 font-semibold text-4xl">ولتا</h1>
        <div class="flex items-center flex-col gap-2">
          <h1 class="text-black font-semibold text-4xl">ورود به حساب کاربری</h1>
          <p class="text-gray-400">برای ادامه لطفا وارد حساب کاربری خود شوید.</p>
        </div>
      </div>
    </div>

     <!-- form -->
    <Form
      :validation-schema="schema"
      @submit="onLogin"
      class="flex flex-col gap-5 w-full sm:w-[80%] lg:w-[30%] mx-auto mt-6 mb-10 px-4 sm:px-0"
    >
    

      <!-- Email -->

      <div>
        <label for="email" class="block mb-2 text-sm lg:text-base text-purple-900">ایمیل</label>
        <Field
          name="email"
          as="input"
          type="email"
          placeholder="ایمیل"
          class="w-full border rounded-lg p-3 outline-none focus:border-purple-600
           bg-white border-purple-200 shadow-sm shadow-purple-300 placeholder:text-purple-400"
        />
        <ErrorMessage name="email" class="text-red-500 text-sm mt-2 block" />
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
          class="w-full border rounded-lg p-3 outline-none bg-white focus:border-purple-600 border-purple-200 shadow-sm shadow-purple-300 placeholder:text-purple-400"
        />
        <ErrorMessage name="password" class="text-red-500 text-sm mt-2 block" />
      </div>
      <p v-if="store.success" class="text-green-600 text-sm text-center">
        {{ store.success }}
      </p>
      <p v-if="store.apiError" class="text-red-500 text-sm text-center">
        {{ store.apiError }}
      </p>
      <button
        :disabled="store.isLoading"
        type="submit"
        class="bg-purple-700 text-white rounded-lg py-3 hover:bg-purple-800 transition disabled:opacity-50 disabled:cursor-not-allowed"
      >
        {{ store.isLoading ? 'در حال ورود ...' : 'ورود' }}
      </button>
    </Form>

    </div>
</template>