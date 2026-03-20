<template>
  <section id="join" class="py-20 bg-slate-50">
    <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <div class="mb-12 text-center reveal">
        <h2 class="section-title text-3xl sm:text-4xl font-extrabold text-slate-900">加入商學會</h2>
      </div>

      <div class="grid gap-6 lg:grid-cols-2">
        <div class="card reveal p-6 sm:p-8">
          <h3 class="text-xl font-extrabold text-slate-900 mb-4">會員服務與活動項目</h3>
          <p class="text-slate-600 mb-4">
            以商業經營方式，用心真誠對待的服務法則，針對會員需求提供諮詢與服務、課業研討、考前重點整理，舉辦迎新會讓會員更快適應學習生涯，並找到志同道合的好友，讓學習路上不寂寞。
          </p>
          <ul class="space-y-2 text-sm text-slate-600">
            <li class="flex gap-2">
              <i class="fas fa-star text-yellow-500 mt-1 flex-shrink-0" aria-hidden="true"></i>
              <span>商學系會員享有訂購空大教科書八二折優惠。</span>
            </li>
            <li class="flex gap-2">
              <i class="fas fa-star text-yellow-500 mt-1 flex-shrink-0" aria-hidden="true"></i>
              <span>每學期面授日可協助會員代訂中午便當。</span>
            </li>
            <li class="flex gap-2">
              <i class="fas fa-star text-yellow-500 mt-1 flex-shrink-0" aria-hidden="true"></i>
              <span>每學期第一次面授日舉辦迎新會，預約參加可免費享有午餐一份。</span>
            </li>
            <li class="flex gap-2">
              <i class="fas fa-star text-yellow-500 mt-1 flex-shrink-0" aria-hidden="true"></i>
              <span>每學期至少一次戶外聯誼活動，並可能與其他社團合辦。</span>
            </li>
            <li class="flex gap-2">
              <i class="fas fa-star text-yellow-500 mt-1 flex-shrink-0" aria-hidden="true"></i>
              <span>提供新生會員課業與考試相關輔導服務，以及二手書買賣資訊。</span>
            </li>
          </ul>
        </div>

        <div class="card reveal p-6 sm:p-8">
          <h3 class="text-xl font-extrabold text-slate-900 mb-4">入社辦法</h3>
          <div class="space-y-4">
            <div class="bg-blue-50 border-l-4 border-blue-600 p-4 rounded">
              <p class="font-bold text-slate-900">新會員入會費</p>
              <p class="text-slate-600 mt-1">1年 300 元</p>
            </div>
            <div class="bg-blue-50 border-l-4 border-blue-600 p-4 rounded">
              <p class="font-bold text-slate-900">續會費</p>
              <p class="text-slate-600 mt-1">每年 200 元</p>
            </div>
            <div class="bg-blue-50 border-l-4 border-blue-600 p-4 rounded">
              <p class="font-bold text-slate-900">三年方案</p>
              <p class="text-slate-600 mt-1">新會員加入 3 年 600 元</p>
              <p class="text-xs text-slate-500 mt-2">（新入會即繳三年，則不必另收 300 元入會費）</p>
            </div>
          </div>
          <p class="mt-6 text-sm text-slate-600">
            <i class="fas fa-info-circle text-blue-600 mr-2" aria-hidden="true"></i>
            聯絡方式：入社申請請聯絡商學會會長
          </p>
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
