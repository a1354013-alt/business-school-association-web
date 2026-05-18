<template>
  <footer class="bg-slate-900 py-12 text-white">
    <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <div class="mb-8 grid gap-8 md:grid-cols-3">
        <div>
          <div class="mb-4 flex items-center gap-2">
            <img
              :src="logoSrc"
              alt="商學系系學會 LOGO"
              class="h-12 w-12 object-contain"
            />
            <span class="font-bold">商學系系學會</span>
          </div>
          <p class="text-sm text-slate-400">
            以學生自治、交流合作與活動推廣為主軸，整理商學系系學會的重要資訊。
          </p>
        </div>

        <div>
          <h4 class="mb-4 font-bold">快速連結</h4>
          <ul class="space-y-2 text-sm">
            <li>
              <a
                href="#about"
                class="text-slate-400 transition hover:text-white"
                >系學會介紹</a
              >
            </li>
            <li>
              <a
                href="#faculty"
                class="text-slate-400 transition hover:text-white"
                >教師陣容</a
              >
            </li>
            <li>
              <a
                href="#events"
                class="text-slate-400 transition hover:text-white"
                >近期活動</a
              >
            </li>
            <li>
              <a href="#join" class="text-slate-400 transition hover:text-white"
                >加入系學會</a
              >
            </li>
          </ul>
        </div>

        <div>
          <h4 class="mb-4 font-bold">聯絡資訊</h4>
          <p class="mb-2 text-sm text-slate-400">
            <i class="fas fa-map-marker-alt mr-2" aria-hidden="true"></i>
            國立空中大學商學系
          </p>
          <p class="text-sm text-slate-400">
            <i class="fas fa-phone mr-2" aria-hidden="true"></i>
            詳情請洽系辦公室
          </p>
        </div>
      </div>

      <div
        class="border-t border-slate-700 pt-8 text-center text-sm text-slate-400"
      >
        <p>&copy; {{ currentYear }} 國立空中大學商學系系學會。保留所有權利。</p>
        <p class="mt-2">本站整理系學會與教師相關資訊。</p>
      </div>
    </div>
  </footer>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { publicPath } from "@/utils/publicPath";

const currentYear = ref(new Date().getFullYear());
const logoSrc = publicPath("logo.svg");
</script>

<style scoped>
footer {
  background-color: #0f172a;
}
</style>
