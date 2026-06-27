<script setup>
import { RouterLink, RouterView } from 'vue-router'
import FloatingBackground from './components/FloatingBackground.vue'
</script>

<template>
  <div>
    <FloatingBackground />

    <div class="app-layer">
      <RouterView />
    </div>
  </div>
</template>

<style>
.app-layer {
  position: relative;
  z-index: 10;
}
</style>
