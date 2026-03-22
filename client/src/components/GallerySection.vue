<template>
  <section id="gallery" class="py-20 bg-slate-50">
    <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <div class="mb-12 flex items-center justify-between reveal">
        <h2 class="section-title text-3xl sm:text-4xl font-extrabold text-slate-900">活動花絮</h2>
        <div class="hidden gap-2 sm:flex">
          <button
            @click="prevSlide"
            type="button"
            class="focus-ring inline-flex h-11 w-11 items-center justify-center rounded-full bg-blue-600 text-white hover:bg-blue-700 transition"
            aria-label="上一頁活動照片">
            <i class="fas fa-chevron-left" aria-hidden="true"></i>
          </button>
          <button
            @click="nextSlide"
            type="button"
            class="focus-ring inline-flex h-11 w-11 items-center justify-center rounded-full bg-blue-600 text-white hover:bg-blue-700 transition"
            aria-label="下一頁活動照片">
            <i class="fas fa-chevron-right" aria-hidden="true"></i>
          </button>
        </div>
      </div>

      <!-- Gallery Carousel -->
      <div class="overflow-hidden rounded-3xl bg-white p-4">
        <div class="gallery-track" :style="{ transform: `translateX(-${currentSlide * 100}%)` }">
          <div v-for="(slide, idx) in slides" :key="idx" class="gallery-slide">
            <article
              v-for="(photo, photoIdx) in slide"
              :key="photoIdx"
              class="card reveal overflow-hidden">
              <img
                :src="photo.src"
                :alt="photo.title"
                class="w-full h-48 object-cover"
                loading="lazy"
                @error="handleImageError" />
              <div class="p-4">
                <h4 class="font-bold text-slate-900">{{ photo.title }}</h4>
                <p class="text-sm text-slate-600 mt-2">{{ photo.description }}</p>
              </div>
            </article>
          </div>
        </div>
      </div>

      <!-- Dots -->
      <div class="mt-5 flex items-center justify-center gap-3">
        <button
          v-for="(_, idx) in slides"
          :key="idx"
          type="button"
          class="dot"
          :class="{ active: idx === currentSlide }"
          :aria-label="`切換到第 ${idx + 1} 頁`"
          @click="goToSlide(idx)"></button>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref, computed, onMounted, onUnmounted } from 'vue'
import { useReveal } from '@/composables/useReveal'

interface Photo {
  src: string
  title: string
  description: string
}

const photos = ref<Photo[]>([
  { src: '/DSC00001.jpg', title: '103年06月08日第四次面授', description: '面授課程進行，師生互動交流，深化學習成效。' },
  { src: '/DSC00002.jpg', title: '103年05月04日第三次面授', description: '舉辦 103 學年學生代表選舉。' },
  { src: '/DSC00003.jpg', title: '103年04月27日文化之旅', description: '達觀風情泰雅文化之旅，深化校外聯誼。' },
  { src: '/DSC00004.jpg', title: '103年03月23日第二次面授', description: '中庭義賣咖啡、社團幹部會議與會員互動。' },
  { src: '/DSC00001.jpg', title: '102年12月22日理財講座', description: '活動與學習並進，延續商學系實務導向精神。' },
  { src: '/DSC00006.jpg', title: '1月13日古典詩詞吟唱', description: '保留舊站活動記錄，重新以卡片式方式呈現。' },
  { src: '/DSC00007.jpg', title: '開學典禮與社團幹部團聚照', description: '新學年開始，社團幹部齊聚一堂，共同為系學會的發展努力。' },
  { src: '/DSC00008.jpg', title: '達觀風情泰雅文化之旅', description: '山林探訪泰雅文化，師生互動深化校園情誼。' }
])

const currentSlide = ref(0)
const autoPlayTimer = ref<number | null>(null)
const cardsPerPage = ref(3)
const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches

// 根據視窗寬度動態計算 cardsPerPage
const calculateCardsPerPage = () => {
  const width = window.innerWidth
  if (width < 640) {
    // 手機 (< 640px)
    return 1
  } else if (width < 1024) {
    // 平板 (640px - 1024px)
    return 2
  } else {
    // 桌面 (> 1024px)
    return 3
  }
}

const updateCardsPerPage = () => {
  cardsPerPage.value = calculateCardsPerPage()
  // 重置到第一頁，避免超出範圍
  currentSlide.value = 0
}

// 動態分頁邏輯
const slides = computed(() => {
  const result: Photo[][] = []
  for (let i = 0; i < photos.value.length; i += cardsPerPage.value) {
    result.push(photos.value.slice(i, i + cardsPerPage.value))
  }
  return result.length > 0 ? result : [[]]
})

const prevSlide = () => {
  currentSlide.value = (currentSlide.value - 1 + slides.value.length) % slides.value.length
  restartAutoPlay()
}

const nextSlide = () => {
  currentSlide.value = (currentSlide.value + 1) % slides.value.length
  restartAutoPlay()
}

const goToSlide = (idx: number) => {
  currentSlide.value = idx
  restartAutoPlay()
}

const handleImageError = (event: Event) => {
  const img = event.target as HTMLImageElement
  img.outerHTML = '<div class="w-full h-48 bg-blue-100 flex items-center justify-center text-blue-600"><i class="fas fa-image text-3xl"></i></div>'
}

const startAutoPlay = () => {
  if (reduceMotion || slides.value.length <= 1) return
  autoPlayTimer.value = window.setInterval(() => {
    currentSlide.value = (currentSlide.value + 1) % slides.value.length
  }, 5000)
}

const restartAutoPlay = () => {
  if (autoPlayTimer.value) clearInterval(autoPlayTimer.value)
  startAutoPlay()
}

onMounted(() => {
  // 初始化 cardsPerPage
  cardsPerPage.value = calculateCardsPerPage()
  startAutoPlay()
  
  // 監聽視窗大小變化
  window.addEventListener('resize', updateCardsPerPage)
  
  // Use reveal animation composable
  useReveal('.reveal')
})

onUnmounted(() => {
  if (autoPlayTimer.value) clearInterval(autoPlayTimer.value)
  // 移除事件監聽
  window.removeEventListener('resize', updateCardsPerPage)
})
</script>

<style scoped>
.section-title {
  position: relative;
  display: inline-block;
  padding-bottom: 0.7rem;
  font-weight: 800;
}

.section-title::after {
  content: '';
  position: absolute;
  left: 0;
  bottom: 0;
  width: 100%;
  height: 4px;
  border-radius: 999px;
  background: linear-gradient(90deg, #1d4ed8, #60a5fa);
}

.gallery-track {
  display: flex;
  transition: transform 0.5s ease-in-out;
}

.gallery-slide {
  min-width: 100%;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 1.5rem;
  padding: 0;
}

.card {
  background: #fff;
  border: 1px solid #e2e8f0;
  border-radius: 1.25rem;
  box-shadow: 0 10px 28px rgba(15, 23, 42, 0.07);
  opacity: 0;
  transform: translateY(20px);
  transition: transform .25s ease, box-shadow .25s ease, opacity .25s ease;
}

.card.show {
  opacity: 1;
  transform: translateY(0);
}

.card:hover {
  transform: translateY(-4px);
  box-shadow: 0 18px 38px rgba(15, 23, 42, 0.11);
}

.dot {
  width: 12px;
  height: 12px;
  border-radius: 50%;
  background: #cbd5e1;
  border: none;
  cursor: pointer;
  transition: background 0.3s ease;
}

.dot.active {
  background: #1d4ed8;
}

.dot:hover {
  background: #64748b;
}

.reveal {
  opacity: 0;
  transform: translateY(20px);
  animation: revealIn 0.6s ease forwards;
}

@keyframes revealIn {
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
</style>
