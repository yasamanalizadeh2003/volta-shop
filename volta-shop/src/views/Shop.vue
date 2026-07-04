<!-- ShopPage.vue -->
<script setup>
import { ref, reactive, computed, onMounted, watch } from 'vue'
import FiltersSidebar from '@/shopcomponents/FiltersSidebar.vue'
import SearchSortBar from '@/shopcomponents/SearchSortBar.vue'
import ProductGrid from '@/shopcomponents/ProductGrid.vue'
import { useProductStore } from '@/stores/products'


const store=useProductStore()

const filters = reactive({
  search: '',
  category: null,
  minPrice: 0,
  maxPrice: 50000000,
  materials: [],
})

const sortBy = ref('newest')
const currentPage = ref(1)




// فیلتر محصولات
const filteredProducts = computed(() => {
  let result = [...store.products]

  if (filters.search) {
    const term = filters.search.toLowerCase()
    result = result.filter((p) => p.title.toLowerCase().includes(term))
  }

  if (filters.category) result = result.filter((p) => p.category === filters.category)

  result = result.filter((p) => p.price >= filters.minPrice && p.price <= filters.maxPrice)


  if (sortBy.value === 'price-low') result.sort((a, b) => a.price - b.price)
  if (sortBy.value === 'price-high') result.sort((a, b) => b.price - a.price)

  return result
})

// صفحه‌بندی
const itemsPerPage = computed(() => (window.innerWidth < 768 ? 4 : 6))

const paginatedProducts = computed(() => {
  const start = (currentPage.value - 1) * itemsPerPage.value
  const end = start + itemsPerPage.value
  return filteredProducts.value.slice(start, end)
})

const totalPages = computed(() => Math.ceil(filteredProducts.value.length / itemsPerPage.value))

const goToPage = (page) => {
  if (page < 1 || page > totalPages.value) return
  currentPage.value = page
  window.scrollTo({ top: 0, behavior: 'smooth' })
}

// ریست به صفحه اول هنگام تغییر فیلتر
watch([filters, sortBy], () => {
  currentPage.value = 1
})
</script>

<template>
  <div class="max-w-7xl mx-auto px-4 py-8">
    <!-- هدر -->
    <div class="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-4 mb-8">
      <h1 class="text-3xl font-bold text-gray-800">فروشگاه</h1>
      <SearchSortBar 
        :search="filters.search"
        @update:search="filters.search = $event"
        :sort="sortBy"
        @update:sort="sortBy = $event"
      />
    </div>

    <!-- محتوای اصلی -->
    <div class="grid grid-cols-1 lg:grid-cols-12 gap-8">
      
      <!-- فیلترها (بالا در موبایل - چپ در دسکتاپ) -->
      <div class="lg:col-span-3">
        <FiltersSidebar 
          :filters="filters" 
          @update:filters="Object.assign(filters, $event)"
        />
      </div>

      <!-- محصولات -->
      <div class="lg:col-span-9">
        <ProductGrid :products="paginatedProducts" />

        <!-- Pagination -->
        <div v-if="totalPages > 1" class="flex justify-center items-center gap-3 mt-12">
          <button
            @click="goToPage(currentPage - 1)"
            :disabled="currentPage === 1"
            class="px-5 py-2.5 rounded-xl border border-gray-300 hover:bg-gray-50 disabled:opacity-50 transition"
          >
            قبلی
          </button>

          <div class="flex gap-2">
            <button
              v-for="page in totalPages"
              :key="page"
              @click="goToPage(page)"
              :class="{
                'bg-violet-600 text-white': currentPage === page,
                'border border-gray-300 hover:bg-gray-50': currentPage !== page,
              }"
              class="w-9 h-9 rounded-xl flex items-center justify-center text-sm font-medium"
            >
              {{ page }}
            </button>
          </div>

          <button
            @click="goToPage(currentPage + 1)"
            :disabled="currentPage === totalPages"
            class="px-5 py-2.5 rounded-xl border border-gray-300 hover:bg-gray-50 disabled:opacity-50 transition"
          >
            بعدی
          </button>
        </div>
      </div>
    </div>
  </div>
</template>