<script setup>
import { ref } from 'vue'

const show = ref(false)
const message = ref('')

let timer = null

function showToast(msg) {
  message.value = msg
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
      class="fixed top-4 left-1/2 -translate-x-1/2 z-[9999]
      bg-green-600 text-white px-5 py-3 rounded-xl shadow-lg"
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