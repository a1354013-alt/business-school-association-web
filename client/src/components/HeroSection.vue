<template>
  <section class="hero-bg py-20 sm:py-32 text-white">
    <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <div class="grid gap-12 lg:grid-cols-2 lg:gap-8 items-center">
        <!-- Left Content -->
        <div>
          <p class="text-sm font-bold uppercase tracking-[0.18em] text-blue-200 mb-4">商學系系學會</p>
          <h1 class="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight mb-6">
            國立空中大學<br />商學系系學會
          </h1>
          <p class="text-lg text-blue-100 mb-8 leading-relaxed">
            國立空中大學商學系系學會致力於整合學系資訊、提供學生服務、舉辦系級活動，並推動商學領域的學術交流與實踐。我們提供完整的課程資訊、師資介紹、活動訊息與入會服務，歡迎加入我們的學習社群。
          </p>
          <a href="#join" class="inline-flex items-center gap-2 px-6 py-3 bg-white text-blue-700 font-bold rounded-lg hover:bg-blue-50 transition shadow-lg hover:shadow-xl">
            <span>加入系學會</span>
            <i class="fas fa-arrow-right text-sm" aria-hidden="true"></i>
          </a>
        </div>

        <!-- Right Image -->
        <div class="reveal rounded-3xl overflow-hidden shadow-2xl">
          <img 
            src="/hero-team.jpg" 
            alt="商學系系學會團隊合照" 
            class="w-full h-full object-cover"
            loading="lazy" />
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
  background: linear-gradient(135deg, #1d4ed8 0%, #1e40af 50%, #1e3a8a 100%);
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
