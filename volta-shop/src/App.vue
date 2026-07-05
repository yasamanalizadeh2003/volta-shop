<script setup>
import { ref, onMounted } from 'vue'

import Header from './homecomponents/Header.vue'
import Footer from './homecomponents/Footer.vue'
import Toast from './shopcomponents/Toast.vue'

import { useRoute } from 'vue-router'
const route = useRoute()

const toastRef = ref(null)

onMounted(() => {
  window.$toast = (msg, type) => {
    toastRef.value?.showToast(msg, type)
  }
})
</script>

<template>
  <div class="overflow-x-hidden">

    <Toast ref="toastRef" />

    <Header  v-if="!route.meta.hideHeader" />

    <div class="app-layer">
      <RouterView />
    </div>

    <Footer v-if="!route.meta.hideFooter" />

  </div>
</template>