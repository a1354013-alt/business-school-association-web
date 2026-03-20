<template>
  <section id="constitution" class="py-20 bg-white">
    <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <div class="mb-12 text-center reveal">
        <h2 class="section-title text-3xl sm:text-4xl font-extrabold text-slate-900">商學系學會組織章程</h2>
      </div>

      <div class="grid gap-6 lg:grid-cols-2">
        <div class="card reveal p-6 sm:p-8">
          <h3 class="text-xl font-extrabold text-slate-900 mb-4">第一章～第四章</h3>
          <ul class="space-y-3 text-slate-600 text-sm">
            <li class="flex gap-3">
              <i class="fas fa-check text-blue-600 mt-1 flex-shrink-0" aria-hidden="true"></i>
              <span>本章程依據國立空中大學學生社團組織暨活動實施要點相關規定訂定。</span>
            </li>
            <li class="flex gap-3">
              <i class="fas fa-check text-blue-600 mt-1 flex-shrink-0" aria-hidden="true"></i>
              <span>本會定名為國立空中大學台中學習指導中心商學系學會，隸屬於國立空中大學台中學習指導中心。</span>
            </li>
            <li class="flex gap-3">
              <i class="fas fa-check text-blue-600 mt-1 flex-shrink-0" aria-hidden="true"></i>
              <span>成立宗旨包括促進同學情誼、提供共同學習環境、協助處理課業學習問題。</span>
            </li>
            <li class="flex gap-3">
              <i class="fas fa-check text-blue-600 mt-1 flex-shrink-0" aria-hidden="true"></i>
              <span>最高決議機構為會員大會，設會長、副會長及幹部群推動會務。</span>
            </li>
            <li class="flex gap-3">
              <i class="fas fa-check text-blue-600 mt-1 flex-shrink-0" aria-hidden="true"></i>
              <span>經費來源包括會員入會費、常年費、捐助款與活動結餘款等。</span>
            </li>
          </ul>
        </div>

        <div class="card reveal p-6 sm:p-8">
          <h3 class="text-xl font-extrabold text-slate-900 mb-4">第五章～第八章</h3>
          <ul class="space-y-3 text-slate-600 text-sm">
            <li class="flex gap-3">
              <i class="fas fa-check text-blue-600 mt-1 flex-shrink-0" aria-hidden="true"></i>
              <span>會員具有選舉權、發言權、參加活動權，也有遵守會規與維護本會名譽之義務。</span>
            </li>
            <li class="flex gap-3">
              <i class="fas fa-check text-blue-600 mt-1 flex-shrink-0" aria-hidden="true"></i>
              <span>本會得出版刊物、舉辦活動，並得依實際需求聘請指導老師協助。</span>
            </li>
            <li class="flex gap-3">
              <i class="fas fa-check text-blue-600 mt-1 flex-shrink-0" aria-hidden="true"></i>
              <span>如有優良表現可提報獎勵，違反規定則得依章程懲處。</span>
            </li>
            <li class="flex gap-3">
              <i class="fas fa-check text-blue-600 mt-1 flex-shrink-0" aria-hidden="true"></i>
              <span>本會成立於中華民國七十八年六月四日，解散與修訂需依章程及會員決議辦理。</span>
            </li>
            <li class="flex gap-3">
              <i class="fas fa-check text-blue-600 mt-1 flex-shrink-0" aria-hidden="true"></i>
              <span>章程經歷多次修訂，反映社團持續運作與制度演進。</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { useReveal } from '@/composables/useReveal'

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
