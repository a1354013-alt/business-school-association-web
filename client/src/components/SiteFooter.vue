<template>
  <footer class="bg-slate-900 text-white py-12">
    <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <div class="grid gap-8 md:grid-cols-3 mb-8">
        <!-- Brand -->
        <div>
          <div class="flex items-center gap-2 mb-4">
            <img src="/logo.svg" alt="商學系系學會 LOGO" class="h-12 w-12 object-contain" />
            <span class="font-bold">商學系系學會</span>
          </div>
          <p class="text-sm text-slate-400">
            國立空中大學台中學習指導中心商學系學會
          </p>
        </div>

        <!-- Quick Links -->
        <div>
          <h4 class="font-bold mb-4">快速連結</h4>
          <ul class="space-y-2 text-sm">
            <li><a href="#about" class="text-slate-400 hover:text-white transition">本會簡介</a></li>
            <li><a href="#faculty" class="text-slate-400 hover:text-white transition">師資陣容</a></li>
            <li><a href="#events" class="text-slate-400 hover:text-white transition">活動訊息</a></li>
            <li><a href="#join" class="text-slate-400 hover:text-white transition">加入商學會</a></li>
          </ul>
        </div>

        <!-- Contact -->
        <div>
          <h4 class="font-bold mb-4">聯絡資訊</h4>
          <p class="text-sm text-slate-400 mb-2">
            <i class="fas fa-map-marker-alt mr-2" aria-hidden="true"></i>
            台中市西屯區
          </p>
          <p class="text-sm text-slate-400">
            <i class="fas fa-phone mr-2" aria-hidden="true"></i>
            聯絡商學會會長
          </p>
        </div>
      </div>

      <div class="border-t border-slate-700 pt-8 text-center text-sm text-slate-400">
        <p>&copy; {{ currentYear }} 國立空中大學商學系系學會。版權所有。</p>
        <p class="mt-2">台中學習指導中心</p>
      </div>
    </div>
  </footer>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const currentYear = ref(new Date().getFullYear())
</script>

<style scoped>
footer {
  background-color: #0f172a;
}
</style>
