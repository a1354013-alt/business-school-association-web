<template>
  <section
    class="hero-bg relative overflow-hidden py-16 text-white sm:py-20 lg:py-28"
  >
    <div class="mx-auto max-w-6xl px-16">
      <div class="grid items-center gap-12 lg:grid-cols-5 lg:gap-8">
        <div class="lg:col-span-2">
          <h1 class="mb-5 text-5xl font-extrabold leading-tight lg:text-6xl">
            國立空中大學<br />
            商學系系學會
          </h1>

          <p class="mb-8 max-w-lg text-base leading-relaxed text-blue-50">
            以學習交流、活動參與與系友連結為核心，打造能夠陪伴學生共同
            成長的系學會平台。
          </p>

          <div class="flex flex-col gap-3 sm:flex-row">
            <a
              href="#join"
              class="inline-flex items-center justify-center gap-2 rounded-2xl bg-white px-7 py-2.5 text-sm font-bold text-blue-700 shadow-lg transition hover:bg-blue-50 hover:shadow-xl"
            >
              <span>加入系學會</span>
              <i class="fas fa-arrow-right text-sm" aria-hidden="true"></i>
            </a>
            <a
              href="#gallery"
              class="inline-flex items-center justify-center gap-2 rounded-2xl border-2 border-white border-opacity-40 px-7 py-2.5 text-sm font-semibold text-white transition hover:border-opacity-100 hover:bg-white hover:bg-opacity-10"
            >
              <span>活動花絮</span>
              <i class="fas fa-chevron-right text-xs" aria-hidden="true"></i>
            </a>
          </div>
        </div>

        <div class="reveal lg:col-span-3">
          <div class="group relative origin-center scale-110">
            <div
              class="absolute inset-0 rounded-3xl bg-gradient-to-br from-white to-blue-100 opacity-0 transition duration-300 group-hover:opacity-5"
            ></div>
            <div
              class="relative overflow-hidden rounded-3xl border border-white border-opacity-20 shadow-2xl"
            >
              <img
                :src="heroImage"
                alt="商學系系學會活動合影"
                class="h-auto w-full object-cover"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { useReveal } from "@/composables/useReveal";
import { publicPath } from "@/utils/publicPath";

const heroImage = publicPath("hero-team.jpg");

useReveal(".reveal");
</script>

<style scoped>
.hero-bg {
  background:
    radial-gradient(
      circle at 20% 80%,
      rgba(255, 255, 255, 0.08),
      transparent 60%
    ),
    radial-gradient(
      circle at 85% 20%,
      rgba(255, 255, 255, 0.06),
      transparent 60%
    ),
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
