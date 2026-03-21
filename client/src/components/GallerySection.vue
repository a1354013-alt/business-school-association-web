<template>
  <section id="gallery" class="py-20 bg-slate-50">
    <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <div class="mb-12 text-center reveal">
        <h2 class="section-title text-3xl sm:text-4xl font-extrabold text-slate-900">活動花絮</h2>
      </div>

      <div class="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        <div v-for="(photo, idx) in photos" :key="idx" class="card reveal overflow-hidden">
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
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { useReveal } from '@/composables/useReveal'

interface Photo {
  src: string
  title: string
  description: string
}

const photos = ref<Photo[]>([
  { src: '/DSC00001.jpg', title: '103年06月08日第四次面授', description: '舉辦 103 學年學生代表選舉。' },
  { src: '/DSC00002.jpg', title: '103年05月04日第三次面授', description: '舉辦會員大會，延續社團運作與交流。' },
  { src: '/DSC00003.jpg', title: '103年04月27日文化之旅', description: '達觀風情泰雅文化之旅，深化校外聯誼。' },
  { src: '/DSC00004.jpg', title: '103年03月23日第二次面授', description: '中庭義賣咖啡、社團幹部會議與會員互動。' },
  { src: '/DSC00001.jpg', title: '102年12月22日理財講座', description: '活動與學習並進，延續商學系實務導向精神。' },
  { src: '/DSC00006.jpg', title: '1月13日古典詩詞吟唱', description: '保留舊站活動記錄，重新以卡片式方式呈現。' }
])

const handleImageError = (event: Event) => {
  const img = event.target as HTMLImageElement
  img.outerHTML = '<div class="w-full h-48 bg-blue-100 flex items-center justify-center text-blue-600"><i class="fas fa-image text-3xl"></i></div>'
}

// Use reveal animation composable
useReveal('.reveal')
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
</style>
