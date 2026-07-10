<script setup>
import VueApexCharts from 'vue3-apexcharts'

const series = [
  {
    name: 'فروش',
    data: [20, 45, 60, 48, 38, 55, 80]
  }
]

const options = {
  chart: {
    toolbar: {
      show: false
    }
  },
  stroke: {
    curve: 'smooth',
    width: 4
  },
  markers: {
    size: 6
  },
  xaxis: {
    categories: [
      'فروردین',
      'اردیبهشت',
      'خرداد',
      'تیر',
      'مرداد',
      'شهریور',
      'مهر'
    ]
  }
}
</script>

<template>
  <div class="bg-white rounded-2xl p-6 shadow-md">
    <h2 class="text-lg font-bold mb-4">
      نمودار فروش
    </h2>

    <VueApexCharts
      type="line"
      height="350"
      :options="options"
      :series="series"
    />
  </div>
</template>