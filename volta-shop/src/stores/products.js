import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

import image1 from '../assets/images/rahati.png'
import image2 from '../assets/images/goldan.png'
import image3 from '../assets/images/asali.png'
import image4 from '../assets/images/cheragh.png'
import image5 from '../assets/images/goldan3.png'
import image6 from '../assets/images/modernLight.png'
import image7 from '../assets/images/minimalTable.png'
import image8 from '../assets/images/library.png'
import image9 from '../assets/images/goldan2.png'


export const useProductStore = defineStore('products', () => {
  const products = ref([
    {
      id: 1,
      title: 'گلدان سرامیکی',
      price: 12500000,
      image:image5,
      category: 'decoration',
      rate: 4,
      review: 38,
      count: 0,
      topping: false,
    },
    {
      id: 2,
      title: 'چراغ آویز مدرن',
      price: 18900000,
      image: image6,
      category: 'light',
      rate: 4,
      review: 38,
      count: 0,
      topping: false,
    },
    {
      id: 3,
      title: 'میز کنسول مینیمال',
      price: 27900000,
      image: image7,
      category: 'table',
      rate: 4,
      review: 38,
      count: 0,
      topping: false,
    },
    
    {
      id: 4,
      title: 'کتابخانه مدرن',
      price: 32500000,
      image: image8,
      category: 'furniture',
      rate: 4,
      review: 38,
      count: 0,
      topping: false,
    },
    {
      id: 5,
      title: 'گلدان',
      price: 7500000,
      image: image9,
      category: 'decoration',
      rate: 4,
      review: 38,
      count: 0,
      topping: false,
    },
    {
      id: 6,
      title: 'صندلی راحتی نژاد',
      image: image1,
      price: 29900000,
      category: 'chair',
      rate: 4,
      review: 38,
      count: 0,
      topping: true,
    },
    {
      id: 7,
      title: 'گلدان سرامیکی',
      image: image2,
      price: 8500000,
      category: 'decoration',
      rate: 5,
      review: 26,
      count: 0,
      topping: true,
    },
    {
      id: 8,
      title: 'میز عسلی چوبی',
      image: image3,
      price: 2350000,
      category: 'table',
      rate: 3,
      review: 26,
      count: 0,
      topping: true,
    },
    {
      id: 9,
      title: 'چراغ مدرن',
      image: image4,
      price: 1530000,
      category: 'light',
      rate: 5,
      review: 26,
      count: 0,
      topping: true,
    },
  ])

  

  const toppingProducts = computed(() => products.value.filter((product) => product.topping))

  // محصولات موجود در سبد خرید
  const cart = computed(() => {
    return products.value.filter((product) => product.count > 0)
  })

  // تعداد کل کالاها
  const cartCount = computed(() => {
    return cart.value.reduce((sum, item) => sum + item.count, 0)
  })

  // مبلغ کل قبل از تخفیف
  const totalPrice = computed(() => {
    return cart.value.reduce((sum, item) => {
      return sum + item.price * item.count
    }, 0)
  })

  // تخفیف
  const discount = computed(() => {
    // اگر خرید بالای 30 میلیون باشد 4 درصد تخفیف
    if (totalPrice.value >= 30000000) {
      return Math.floor(totalPrice.value * 0.04)
    }

    return 0
  })

  // هزینه ارسال
  const shippingCost = computed(() => {
    // ارسال رایگان برای خریدهای بالای یک میلیون
    return totalPrice.value >= 1000000 ? 0 : 150000
  })

  // مبلغ نهایی
  const finalPrice = computed(() => {
    return totalPrice.value - discount.value + shippingCost.value
  })

  function addToCart(id) {
    const product = products.value.find((item) => item.id === id)

    if (product) {
      product.count = 1
    }
  }

  function increaseCount(id) {
    const product = products.value.find((item) => item.id === id)

    if (product) {
      product.count++
    }
  }

  function decreaseCount(id) {
    const product = products.value.find((item) => item.id === id)

    if (product && product.count > 0) {
      product.count--
    }
  }

  function removeFromCart(id) {
    const product = products.value.find((item) => item.id === id)

    if (product) {
      product.count = 0
    }
  }

  return {
    products,
    cart,
    cartCount,
    totalPrice,
    addToCart,
    increaseCount,
    decreaseCount,
    removeFromCart,
    toppingProducts,
    discount,
    shippingCost,
    finalPrice,
  }
})
