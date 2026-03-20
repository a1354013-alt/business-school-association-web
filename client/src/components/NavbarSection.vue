<template>
  <nav class="sticky top-0 z-50 bg-white border-b border-slate-200 shadow-sm">
    <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <div class="flex h-16 items-center justify-between">
        <!-- Logo -->
        <a href="#" class="flex items-center gap-2 font-extrabold text-slate-900">
          <img src="/logo.svg" alt="商學系系學會 LOGO" class="h-10 w-10 object-contain" />
          <span class="hidden sm:inline text-sm">商學系系學會</span>
        </a>

        <!-- Desktop Navigation -->
        <div class="hidden md:flex items-center gap-8">
          <a href="#about" class="nav-link text-sm font-medium text-slate-600 hover:text-blue-600 transition">本會簡介</a>
          <a href="#faculty" class="nav-link text-sm font-medium text-slate-600 hover:text-blue-600 transition">師資陣容</a>
          <a href="#team" class="nav-link text-sm font-medium text-slate-600 hover:text-blue-600 transition">服務團隊</a>
          <a href="#events" class="nav-link text-sm font-medium text-slate-600 hover:text-blue-600 transition">活動訊息</a>
          <a href="#gallery" class="nav-link text-sm font-medium text-slate-600 hover:text-blue-600 transition">活動花絮</a>
          <a href="#constitution" class="nav-link text-sm font-medium text-slate-600 hover:text-blue-600 transition">組織章程</a>
          <a href="#join" class="nav-link text-sm font-medium text-slate-600 hover:text-blue-600 transition">加入商學會</a>
        </div>

        <!-- Mobile Menu Button -->
        <button
          id="menuBtn"
          @click="toggleMenu"
          class="md:hidden inline-flex h-10 w-10 items-center justify-center rounded-lg bg-slate-100 text-slate-600 hover:bg-slate-200 transition"
          :aria-expanded="mobileMenuOpen"
          aria-label="切換選單">
          <i :class="mobileMenuOpen ? 'fas fa-xmark' : 'fas fa-bars'" aria-hidden="true"></i>
        </button>
      </div>

      <!-- Mobile Navigation -->
      <div v-if="mobileMenuOpen" id="mobileMenu" class="md:hidden border-t border-slate-200 py-4 space-y-2">
        <a href="#about" @click="closeMobileMenu" class="block px-4 py-2 text-sm font-medium text-slate-600 hover:bg-slate-50 rounded">本會簡介</a>
        <a href="#faculty" @click="closeMobileMenu" class="block px-4 py-2 text-sm font-medium text-slate-600 hover:bg-slate-50 rounded">師資陣容</a>
        <a href="#team" @click="closeMobileMenu" class="block px-4 py-2 text-sm font-medium text-slate-600 hover:bg-slate-50 rounded">服務團隊</a>
        <a href="#events" @click="closeMobileMenu" class="block px-4 py-2 text-sm font-medium text-slate-600 hover:bg-slate-50 rounded">活動訊息</a>
        <a href="#gallery" @click="closeMobileMenu" class="block px-4 py-2 text-sm font-medium text-slate-600 hover:bg-slate-50 rounded">活動花絮</a>
        <a href="#constitution" @click="closeMobileMenu" class="block px-4 py-2 text-sm font-medium text-slate-600 hover:bg-slate-50 rounded">組織章程</a>
        <a href="#join" @click="closeMobileMenu" class="block px-4 py-2 text-sm font-medium text-slate-600 hover:bg-slate-50 rounded">加入商學會</a>
      </div>
    </div>
  </nav>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const mobileMenuOpen = ref(false)

const toggleMenu = () => {
  mobileMenuOpen.value = !mobileMenuOpen.value
}

const closeMobileMenu = () => {
  mobileMenuOpen.value = false
}
</script>

<style scoped>
/* No additional styles needed - using Tailwind utilities */
</style>
