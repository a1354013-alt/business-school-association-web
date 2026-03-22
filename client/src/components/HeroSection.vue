<template>
  <section class="hero-bg relative overflow-hidden py-16 sm:py-20 lg:py-28 text-white">
    
    <div class="mx-auto max-w-6xl px-16">
      <div class="grid gap-12 lg:grid-cols-5 lg:gap-8 items-center">
        <!-- Left Content -->
        <div class="lg:col-span-2">
          <!-- Main Title -->
          <h1 class="text-5xl lg:text-6xl font-extrabold leading-tight mb-5">
            國立空中大學<br />商學系系學會
          </h1>
          
          <!-- Description -->
          <p class="max-w-lg text-base leading-relaxed text-blue-50 mb-8">
            國立空中大學商學系系學會致力於整合學系資訊、提供學生服務、舉辦系級活動，並推動商學領域的學術交流與實踐。我們提供完整的課程資訊、師資介紹、活動訊息與入會服務，歡迎加入我們的學習社群。
          </p>
          
          <!-- Buttons -->
          <div class="flex flex-col sm:flex-row gap-3">
            <a href="#join" class="inline-flex items-center justify-center gap-2 px-7 py-2.5 bg-white text-blue-700 font-bold rounded-2xl hover:bg-blue-50 transition shadow-lg hover:shadow-xl text-sm">
              <span>加入系學會</span>
              <i class="fas fa-arrow-right text-sm" aria-hidden="true"></i>
            </a>
            <a href="#gallery" class="inline-flex items-center justify-center gap-2 px-7 py-2.5 border-2 border-white border-opacity-40 text-white font-semibold rounded-2xl hover:border-opacity-100 hover:bg-white hover:bg-opacity-10 transition text-sm">
              <span>瀏覽最新活動</span>
              <i class="fas fa-chevron-right text-xs" aria-hidden="true"></i>
            </a>
          </div>
        </div>

        <!-- Right Image -->
        <div class="reveal lg:col-span-3">
          <div class="relative group scale-110 origin-center">
            <div class="absolute inset-0 rounded-3xl bg-gradient-to-br from-white to-blue-100 opacity-0 group-hover:opacity-5 transition duration-300"></div>
            <div class="relative rounded-3xl overflow-hidden border border-white border-opacity-20 shadow-2xl">
              <img 
                src="/hero-team.jpg" 
                alt="商學系系學會團隊合照" 
                class="w-full h-auto object-cover"
                loading="lazy" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { useReveal } from '@/composables/useReveal'

useReveal('.reveal')
</script>

<style scoped>
.hero-bg {
  background:
    radial-gradient(circle at 20% 80%, rgba(255, 255, 255, 0.08), transparent 60%),
    radial-gradient(circle at 85% 20%, rgba(255, 255, 255, 0.06), transparent 60%),
    linear-gradient(135deg, #0f2fae 0%, #1f3fd6 45%, #315ff4 100%);
  position: relative;
}

.reveal {
  opacity: 0;
  transform: translateY(20px);
  transition: all 0.6s ease;
}

.reveal.show {
  opacity: 1;
  transform: translateY(0);
}
</style>
