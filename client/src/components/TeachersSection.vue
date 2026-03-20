<template>
  <section id="faculty" class="py-20 bg-white">
    <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <div class="card reveal p-6 sm:p-8">
        <div class="mb-5 flex items-center justify-between gap-4">
          <div>
            <p class="text-sm font-bold uppercase tracking-[0.18em] text-blue-700">Faculty Carousel</p>
            <h3 class="mt-2 text-2xl font-extrabold text-slate-900">教師與學術領域展示</h3>
          </div>
          <div class="hidden gap-2 sm:flex">
            <button
              @click="prevSlide"
              type="button"
              class="focus-ring inline-flex h-11 w-11 items-center justify-center rounded-full bg-blue-600 text-white hover:bg-blue-700 transition"
              aria-label="上一頁教師資料">
              <i class="fas fa-chevron-left" aria-hidden="true"></i>
            </button>
            <button
              @click="nextSlide"
              type="button"
              class="focus-ring inline-flex h-11 w-11 items-center justify-center rounded-full bg-blue-600 text-white hover:bg-blue-700 transition"
              aria-label="下一頁教師資料">
              <i class="fas fa-chevron-right" aria-hidden="true"></i>
            </button>
          </div>
        </div>

        <!-- Carousel -->
        <div class="overflow-hidden rounded-3xl bg-slate-50 p-4">
          <div class="teacher-track" :style="{ transform: `translateX(-${currentSlide * 100}%)` }">
            <div v-for="(slide, idx) in slides" :key="idx" class="teacher-slide">
              <article
                v-for="teacher in slide"
                :key="teacher.id"
                class="card teacher-card p-6 text-center cursor-pointer"
                @click="selectTeacher(teacher)">
                <div class="teacher-photo">
                  <img
                    :src="teacher.photo"
                    :alt="`${teacher.name}老師照片`"
                    class="w-24 h-24 rounded-full mx-auto object-cover"
                    loading="lazy"
                    @error="handleImageError" />
                </div>
                <h4 class="font-extrabold text-slate-900 mt-4">{{ teacher.name }}</h4>
                <p class="mt-1 text-sm text-slate-500">{{ teacher.title.split('兼')[0] }}</p>
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
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref, computed, onMounted, onUnmounted } from 'vue'

interface Teacher {
  id: number
  name: string
  title: string
  photo: string
  email: string
  phone: string
  expertise: string[]
  bio: string
}

const teachers = ref<Teacher[]>([])
const currentSlide = ref(0)
const autoPlayTimer = ref<number | null>(null)
const pageSize = 4
const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches

const emit = defineEmits<{
  selectTeacher: [teacher: Teacher]
}>()

// 動態分頁邏輯
const slides = computed(() => {
  const result: Teacher[][] = []
  for (let i = 0; i < teachers.value.length; i += pageSize) {
    result.push(teachers.value.slice(i, i + pageSize))
  }
  return result.length > 0 ? result : [[]]
})

const loadTeachers = async () => {
  try {
    const response = await fetch('/teachers.json')
    
    if (!response.ok) {
      throw new Error(`Failed to load teachers: ${response.status} ${response.statusText}`)
    }
    
    const text = await response.text()
    const data = JSON.parse(text)
    teachers.value = data
  } catch (error) {
    if (import.meta.env.DEV) {
      console.error('[TeachersSection] Error loading teachers:', error)
    }
  }
}

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

const selectTeacher = (teacher: Teacher) => {
  emit('selectTeacher', teacher)
}

const handleImageError = (event: Event) => {
  const img = event.target as HTMLImageElement
  img.outerHTML = '<div class="w-24 h-24 rounded-full mx-auto bg-blue-100 flex items-center justify-center text-blue-600"><i class="fas fa-user-tie text-2xl"></i></div>'
}

const startAutoPlay = () => {
  if (reduceMotion || slides.value.length <= 1) return
  autoPlayTimer.value = window.setInterval(() => {
    currentSlide.value = (currentSlide.value + 1) % slides.value.length
  }, 4500)
}

const restartAutoPlay = () => {
  if (autoPlayTimer.value) clearInterval(autoPlayTimer.value)
  startAutoPlay()
}

onMounted(async () => {
  await loadTeachers()
  startAutoPlay()
})

onUnmounted(() => {
  if (autoPlayTimer.value) clearInterval(autoPlayTimer.value)
})
</script>

<style scoped>
.card {
  background: #fff;
  border: 1px solid #e2e8f0;
  border-radius: 1.25rem;
  box-shadow: 0 10px 28px rgba(15, 23, 42, 0.07);
  transition: transform .25s ease, box-shadow .25s ease;
}

.card:hover {
  transform: translateY(-4px);
  box-shadow: 0 18px 38px rgba(15, 23, 42, 0.11);
}

.teacher-track {
  display: flex;
  transition: transform 0.5s ease-in-out;
}

.teacher-slide {
  min-width: 100%;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 1rem;
  padding: 0;
}

.teacher-card {
  cursor: pointer;
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
