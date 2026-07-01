<script setup>
import { RouterLink, RouterView } from 'vue-router'
import { useRoute } from 'vue-router'
import Header from './homecomponents/Header.vue'
import Footer from './homecomponents/Footer.vue'

const route = useRoute()
</script>

<template>
  <div>
    <Header v-if="!route.meta.hideHeader" />
    <div class="app-layer">
      <RouterView />
    </div>
    <Footer v-if="!route.meta.hideFooter" />
  </div>
</template>

<style>
.app-layer {
  position: relative;
  z-index: 10;
}
</style>
