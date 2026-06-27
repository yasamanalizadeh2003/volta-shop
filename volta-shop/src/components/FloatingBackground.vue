<script setup>
import { ShoppingCart, DollarSign } from 'lucide-vue-next'
</script>

<template>
  <div class="bg">
    <div class="icon icon1"><ShoppingCart :size="18" /></div>
    <div class="icon icon2"><DollarSign :size="15" /></div>
    <div class="icon icon3"><ShoppingCart :size="20" /></div>
    <div class="icon icon4"><DollarSign :size="18" /></div>
    <div class="icon icon5"><ShoppingCart :size="16" /></div>

    <div class="icon icon6"><DollarSign :size="22" /></div>
    <div class="icon icon7"><ShoppingCart :size="28" /></div>
  </div>
</template>

<style scoped>
.bg {
  position: fixed;
  inset: 0;
  overflow: hidden;
  pointer-events: none;
  z-index: 0;
}

.icon {
  position: absolute;
  opacity: 0.18;
  animation: float 12s ease-in-out infinite;
}

/* پخش کنترل‌شده (دور از مرکز) */
.icon1 {
  top: 5%;
  left: 5%;
}
.icon2 {
  top: 8%;
  right: 10%;
}
.icon3 {
  bottom: 10%;
  left: 8%;
}
.icon4 {
  bottom: 12%;
  right: 25%;
}
.icon5 {
  top: 15%;
  left: 70%;
}

.icon6 {
  top: 25%;
  left: 10%;
}
.icon7 {
  top: 30%;
  right: 15%;
}
.icon8 {
  top: 40%;
  left: 65%;
}

/* حرکت نرم */
@keyframes float {
  0% {
    transform: translateY(0px);
  }
  50% {
    transform: translateY(-18px);
  }
  100% {
    transform: translateY(0px);
  }
}
</style>
