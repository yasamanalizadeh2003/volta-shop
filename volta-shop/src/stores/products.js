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
      image: image5,
      category: 'decoration',
      rate: 4,
      review: 38,
      count: 0,
      topping: false,

      description:
        'این گلدان سرامیکی با طراحی مینیمال و لعاب مات، جلوه‌ای خاص به فضای منزل یا محل کار شما می‌بخشد. کیفیت ساخت بالا و طراحی مدرن، آن را به انتخابی مناسب برای انواع دکوراسیون تبدیل کرده است.',

      specifications: {
        جنس: 'سرامیک درجه یک',
        رنگ: 'سفید مات',
        ارتفاع: '35 سانتی‌متر',
        وزن: '1.8 کیلوگرم',
        ساخت: 'ایران',
      },

      reviews: [
        {
          id: 1,
          user: 'علی رضایی',
          rate: 5,
          date: '1405/02/15',
          comment: 'کیفیت فوق‌العاده‌ای داشت.'
        },
        {
          id: 2,
          user: 'مریم احمدی',
          rate: 4,
          date: '1405/03/01',
          comment: 'کاملاً مشابه تصاویر بود.'
        }
      ]
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

      description:
        'چراغ آویز مدرن با طراحی مینیمال و نوردهی یکنواخت، مناسب آشپزخانه، پذیرایی و محیط‌های اداری.',

      specifications: {
        جنس: 'آلومینیوم',
        رنگ: 'مشکی',
        توان: '40 وات',
        نوع: 'LED',
        ارتفاع: '120 سانتی‌متر',
      },

      reviews: [
        {
          id: 1,
          user: 'سارا',
          rate: 5,
          date: '1405/02/20',
          comment: 'نور بسیار خوبی دارد.'
        },
        {
          id: 2,
          user: 'امیر',
          rate: 4,
          date: '1405/03/10',
          comment: 'ظاهر بسیار زیبایی دارد.'
        }
      ]
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

      description:
        'میز کنسول چوبی با طراحی مینیمال، مناسب دکوراسیون مدرن و کلاسیک و قابل استفاده در ورودی منزل.',

      specifications: {
        جنس: 'چوب راش',
        رنگ: 'قهوه‌ای روشن',
        طول: '120 سانتی‌متر',
        عرض: '40 سانتی‌متر',
        ارتفاع: '80 سانتی‌متر',
      },

      reviews: [
        {
          id: 1,
          user: 'حسن',
          rate: 5,
          date: '1405/01/22',
          comment: 'کیفیت چوب بسیار خوب است.'
        },
        {
          id: 2,
          user: 'ندا',
          rate: 4,
          date: '1405/02/17',
          comment: 'مونتاژ راحتی داشت.'
        }
      ]
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

      description:
        'کتابخانه مدرن با قفسه‌های جادار و طراحی ساده، مناسب اتاق مطالعه و دفتر کار.',

      specifications: {
        جنس: 'MDF ضد خش',
        رنگ: 'سفید',
         طبقات: '5',
        ارتفاع: '180 سانتی‌متر',
        عرض: '80 سانتی‌متر',
      },

      reviews: [
        {
          id: 1,
          user: 'محمد',
          rate: 5,
          date: '1405/02/05',
          comment: 'خیلی جادار و باکیفیت است.'
        },
        {
          id: 2,
          user: 'الهام',
          rate: 4,
          date: '1405/02/28',
          comment: 'از خریدم راضی هستم.'
        }
      ]
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

      description:
        'گلدان سرامیکی مناسب برای گل‌های طبیعی و مصنوعی با طراحی مدرن و رنگ خنثی.',

      specifications: {
        جنس: 'سرامیک',
        رنگ: 'طوسی',
        ارتفاع: '28 سانتی‌متر',
        وزن: '1.2 کیلوگرم',
      },

      reviews: [
        {
          id: 1,
          user: 'مینا',
          rate: 5,
          date: '1405/03/02',
          comment: 'بسیار شیک و زیباست.'
        },
        {
          id: 2,
          user: 'رضا',
          rate: 4,
          date: '1405/03/15',
          comment: 'اندازه مناسبی دارد.'
        }
      ]
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

      description:
        'صندلی راحتی با پارچه مخمل و فریم چوبی مقاوم، مناسب استراحت و مطالعه.',

      specifications: {
        جنس: 'چوب راش و پارچه مخمل',
        رنگ: 'کرم',
        ارتفاع: '95 سانتی‌متر',
      },

      reviews: [
        {
          id: 1,
          user: 'فاطمه',
          rate: 5,
          date: '1405/01/10',
          comment: 'بسیار راحت است.'
        },
        {
          id: 2,
          user: 'سعید',
          rate: 5,
          date: '1405/02/09',
          comment: 'کیفیت عالی دارد.'
        }
      ]
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

      description:
        'گلدان سرامیکی دست‌ساز با طراحی خاص، مناسب دکوراسیون مدرن.',

      specifications: {
        جنس: 'سرامیک',
        رنگ: 'سفید',
        ارتفاع: '30 سانتی‌متر',
        ساخت: 'دست‌ساز',
      },

      reviews: [
        {
          id: 1,
          user: 'آرزو',
          rate: 5,
          date: '1405/03/11',
          comment: 'واقعاً زیباست.'
        },
        {
          id: 2,
          user: 'ندا',
          rate: 4,
          date: '1405/03/16',
          comment: 'کیفیت لعاب عالی است.'
        }
      ]
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

      description:
        'میز عسلی چوبی با طراحی ساده و مقاوم، مناسب کنار مبلمان و اتاق پذیرایی.',

      specifications: {
        جنس: 'چوب بلوط',
        قطر: '50 سانتی‌متر',
        ارتفاع: '45 سانتی‌متر',
        رنگ: 'قهوه‌ای',
      },

      reviews: [
        {
          id: 1,
          user: 'بهروز',
          rate: 4,
          date: '1405/02/04',
          comment: 'جمع‌وجور و کاربردی است.'
        },
        {
          id: 2,
          user: 'الهه',
          rate: 5,
          date: '1405/02/18',
          comment: 'کاملاً مطابق تصاویر بود.'
        }
      ]
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

      description:
        'چراغ رومیزی مدرن با نور ملایم و طراحی مینیمال، مناسب مطالعه و میز کار.',

      specifications: {
        جنس: 'فلز',
        رنگ: 'مشکی',
        توان: '15 وات',
        نوع: 'LED',
        ارتفاع: '42 سانتی‌متر',
      },

      reviews: [
        {
          id: 1,
          user: 'پارسا',
          rate: 5,
          date: '1405/01/25',
          comment: 'نور بسیار مناسبی دارد.'
        },
        {
          id: 2,
          user: 'شبنم',
          rate: 4,
          date: '1405/02/12',
          comment: 'طراحی بسیار زیبایی دارد.'
        }
      ]
    }
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
