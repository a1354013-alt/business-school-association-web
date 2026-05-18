<template>
  <nav class="sticky top-0 z-50 border-b border-slate-200 bg-white shadow-sm">
    <div class="mx-auto max-w-7xl px-8">
      <div class="flex h-[72px] items-center justify-between">
        <a href="#" class="flex items-center gap-3">
          <img
            :src="logoSrc"
            alt="商學系系學會 LOGO"
            class="h-11 w-11 object-contain"
          />
          <span class="hidden text-base font-bold text-slate-900 sm:inline">
            商學系系學會
          </span>
        </a>

        <div class="hidden items-center gap-8 md:flex">
          <a
            href="#about"
            class="nav-link relative pb-2 text-sm font-medium text-slate-600 transition hover:text-slate-900"
          >
            系學會介紹
          </a>
          <a
            href="#faculty"
            class="nav-link relative pb-2 text-sm font-medium text-slate-600 transition hover:text-slate-900"
          >
            教師陣容
          </a>
          <a
            href="#team"
            class="nav-link relative pb-2 text-sm font-medium text-slate-600 transition hover:text-slate-900"
          >
            幹部團隊
          </a>
          <a
            href="#events"
            class="nav-link relative pb-2 text-sm font-medium text-slate-600 transition hover:text-slate-900"
          >
            近期活動
          </a>
          <a
            href="#gallery"
            class="nav-link relative pb-2 text-sm font-medium text-slate-600 transition hover:text-slate-900"
          >
            活動花絮
          </a>
          <a
            href="#constitution"
            class="nav-link relative pb-2 text-sm font-medium text-slate-600 transition hover:text-slate-900"
          >
            組織章程
          </a>
          <a
            href="#join"
            class="nav-link relative pb-2 text-sm font-medium text-slate-600 transition hover:text-slate-900"
          >
            加入系學會
          </a>
        </div>

        <button
          id="menuBtn"
          class="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-slate-100 text-slate-600 transition hover:bg-slate-200 md:hidden"
          :aria-expanded="mobileMenuOpen"
          aria-label="切換選單"
          @click="toggleMenu"
        >
          <i
            :class="mobileMenuOpen ? 'fas fa-xmark' : 'fas fa-bars'"
            aria-hidden="true"
          ></i>
        </button>
      </div>

      <div
        v-if="mobileMenuOpen"
        id="mobileMenu"
        class="space-y-2 border-t border-slate-200 py-4 md:hidden"
      >
        <a
          v-for="item in navItems"
          :key="item.href"
          :href="item.href"
          class="block rounded px-4 py-2 text-sm font-medium text-slate-600 hover:bg-slate-50"
          @click="closeMobileMenu"
        >
          {{ item.label }}
        </a>
      </div>
    </div>
  </nav>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { publicPath } from "@/utils/publicPath";

const logoSrc = publicPath("logo.svg");
const mobileMenuOpen = ref(false);
const navItems = [
  { href: "#about", label: "系學會介紹" },
  { href: "#faculty", label: "教師陣容" },
  { href: "#team", label: "幹部團隊" },
  { href: "#events", label: "近期活動" },
  { href: "#gallery", label: "活動花絮" },
  { href: "#constitution", label: "組織章程" },
  { href: "#join", label: "加入系學會" },
];

const toggleMenu = () => {
  mobileMenuOpen.value = !mobileMenuOpen.value;
};

const closeMobileMenu = () => {
  mobileMenuOpen.value = false;
};
</script>

<style scoped>
.nav-link::after {
  content: "";
  position: absolute;
  bottom: 0;
  left: 0;
  width: 0;
  height: 2px;
  background-color: #a3d5ff;
  transition: width 0.3s ease;
}

.nav-link:hover::after {
  width: 100%;
}
</style>
