<script setup>
import Description from '@/detailcomponents/Description.vue';
import Detail from '@/detailcomponents/Detail.vue';
import { useRoute } from 'vue-router'

const route = useRoute()

const productId = route.params.id

defineProps({
  product: {
    type: Object,
    required: true
  }
})


</script>

<template>
<div>
    <Detail/>
   
</div>
</template>