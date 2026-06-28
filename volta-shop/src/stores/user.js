import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
import axios from 'axios'

export const useUserStore = defineStore('user', () => {
  // State
  const token = ref(localStorage.getItem('token') || '')
  const isLoading = ref(false)
  const apiError = ref('')
  const success = ref('')

  // Getter
  const isAuthenticated = computed(() => !!token.value)

  // Register
  async function register(values) {
    try {
      isLoading.value = true
      apiError.value = ''
      success.value = ''

      const res = await axios.post(
        'https://reqres.in/api/register',
        {
          email: values.email,
          password: values.password,
        }
      )

      token.value = res.data.token
      localStorage.setItem('token', token.value)

      success.value = 'ثبت نام با موفقیت انجام شد'

      return true
    } catch (err) {
      apiError.value =
        err.response?.data?.error || 'خطا در ثبت نام'

      return false
    } finally {
      isLoading.value = false
    }
  }

  // Login
  async function login(values) {
    try {
      isLoading.value = true
      apiError.value = ''
      success.value = ''

      const res = await axios.post(
        'https://reqres.in/api/login',
        {
          email: values.email,
          password: values.password,
        }
      )

      token.value = res.data.token
      localStorage.setItem('token', token.value)

      success.value = 'ورود با موفقیت انجام شد'

      return true
    } catch (err) {
      apiError.value =
        err.response?.data?.error || 'خطا در ورود'

      return false
    } finally {
      isLoading.value = false
    }
  }

  // Logout
  function logout() {
    token.value = ''
    apiError.value = ''
    success.value = ''

    localStorage.removeItem('token')
  }

  return {
    token,
    isLoading,
    apiError,
    success,
    isAuthenticated,
    register,
    login,
    logout,
  }
})