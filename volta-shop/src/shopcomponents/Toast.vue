
<script setup>
import { ref } from 'vue'

const show = ref(false)
const message = ref('')
const type = ref('success') // 'success' | 'error'

let timer = null

function showToast(msg, toastType = 'success') {
  message.value = msg
  type.value = toastType
  show.value = true

  clearTimeout(timer)
  timer = setTimeout(() => {
    show.value = false
  }, 2000)
}

defineExpose({ showToast })
</script>

<template>
  <Transition name="toast">
    <div
      v-if="show"
      :class="[
        'fixed top-4 left-1/2 -translate-x-1/2 z-[9999] px-5 py-3 rounded-xl shadow-lg text-white',
        type === 'success' ? 'bg-green-600' : 'bg-red-600'
      ]"
    >
      {{ message }}
    </div>
  </Transition>
</template>
<style scoped>
.toast-enter-active,
.toast-leave-active {
  transition: all 0.25s ease;
}

.toast-enter-from,
.toast-leave-to {
  opacity: 0;
  transform: translate(-50%, -20px);
}
</style>
