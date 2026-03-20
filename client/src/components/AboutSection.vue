<template>
  <section id="about" class="py-20 bg-white">
    <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <div class="mb-12 text-center reveal">
        <h2 class="section-title text-3xl sm:text-4xl font-extrabold text-slate-900">本會簡介</h2>
        <p class="mt-4 text-slate-600">商學系簡介</p>
      </div>

      <div class="grid gap-12 lg:grid-cols-2">
        <!-- Left Column -->
        <div class="card reveal p-6 sm:p-8">
          <h3 class="text-xl font-extrabold text-slate-900 mb-4">商學系的教育目標</h3>
          <ul class="space-y-3 text-slate-600">
            <li class="flex gap-3">
              <span class="text-blue-600 font-bold">1.</span>
              <span>增進學生瞭解現代商業經營者和從業者所需之商學的一般和專業知識。</span>
            </li>
            <li class="flex gap-3">
              <span class="text-blue-600 font-bold">2.</span>
              <span>提升學生的商業倫理和職場倫理素養。</span>
            </li>
            <li class="flex gap-3">
              <span class="text-blue-600 font-bold">3.</span>
              <span>使學生能夠運用現代科技，處理商學相關資訊。</span>
            </li>
            <li class="flex gap-3">
              <span class="text-blue-600 font-bold">4.</span>
              <span>使學生能夠將所學之商學理論和實務知識應用於職場生活和個人生活上。</span>
            </li>
          </ul>
        </div>

        <!-- Right Column -->
        <div class="card reveal p-6 sm:p-8">
          <h3 class="text-xl font-extrabold text-slate-900 mb-4">課程規劃特色</h3>
          <p class="text-slate-600 mb-4">
            商學系課程所涵蓋之學術領域計有：會統、經濟、行銷、財金及職場經營等五大領域。為考量本校特性，使課程能與實際生活結合，力求理論與實務並重，每一學類並分基礎、進階、實用三階段規劃。
          </p>
          <h4 class="font-bold text-slate-900 mb-3">未來系務發展重點</h4>
          <ul class="space-y-2 text-sm text-slate-600">
            <li class="flex gap-2">
              <i class="fas fa-check text-blue-600 mt-1" aria-hidden="true"></i>
              <span>二階段申設商學研究所，先試辦碩士課程，再申請設立研究所。</span>
            </li>
            <li class="flex gap-2">
              <i class="fas fa-check text-blue-600 mt-1" aria-hidden="true"></i>
              <span>商學系面授教師資料之整建與聯繫。</span>
            </li>
            <li class="flex gap-2">
              <i class="fas fa-check text-blue-600 mt-1" aria-hidden="true"></i>
              <span>商學系畢業校友名冊之建立與聯繫。</span>
            </li>
          </ul>
        </div>
      </div>

      <!-- History -->
      <div class="mt-12 card reveal p-6 sm:p-8">
        <h3 class="text-xl font-extrabold text-slate-900 mb-6">歷任系主任</h3>
        <div class="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          <div v-for="(principal, idx) in principals" :key="idx" class="text-sm">
            <p class="font-bold text-slate-900">{{ principal.term }}</p>
            <p class="text-slate-600">{{ principal.name }} {{ principal.title }}</p>
            <p class="text-xs text-slate-500">{{ principal.period }}</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { useReveal } from '@/composables/useReveal'

const principals = ref([
  { term: '首任', name: '鄧善章', title: '教授', period: '75年8月 至 77年7月' },
  { term: '第二任', name: '吳永猛', title: '教授', period: '77年8月 至 80年7月' },
  { term: '第三任', name: '吳永猛', title: '教授', period: '80年8月 至 83年7月' },
  { term: '第四任', name: '黃深勳', title: '教授', period: '83年8月 至 86年7月' },
  { term: '第五任', name: '黃深勳', title: '教授', period: '86年8月 至 88年7月' },
  { term: '第六任', name: '楊義隆', title: '副教授', period: '88年8月 至 91年7月' },
  { term: '第七任', name: '袁金和', title: '副教授', period: '91年8月 至 94年7月' },
  { term: '第八任', name: '謝明瑞', title: '副教授', period: '94年8月 至 97年7月' },
  { term: '第九任', name: '蘇國樑', title: '副教授', period: '97年8月 至 100年7月' },
  { term: '第十任', name: '王瀅婷', title: '副教授', period: '100年8月 迄今' }
])

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
  transition: transform .25s ease, box-shadow .25s ease;
  opacity: 0;
  transform: translateY(20px);
}

.card:hover {
  transform: translateY(-4px);
  box-shadow: 0 18px 38px rgba(15, 23, 42, 0.11);
}

.card.show {
  opacity: 1;
  transform: translateY(0);
}
</style>
