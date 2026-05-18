<template>
  <section id="gallery" class="bg-slate-50 py-20">
    <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <div class="reveal mb-12 flex items-center justify-between">
        <h2
          class="section-title text-3xl font-extrabold text-slate-900 sm:text-4xl"
        >
          活動花絮
        </h2>
        <div class="hidden gap-2 sm:flex">
          <button
            type="button"
            class="focus-ring inline-flex h-11 w-11 items-center justify-center rounded-full bg-blue-600 text-white transition hover:bg-blue-700"
            aria-label="上一組照片"
            @click="prevSlide"
          >
            <i class="fas fa-chevron-left" aria-hidden="true"></i>
          </button>
          <button
            type="button"
            class="focus-ring inline-flex h-11 w-11 items-center justify-center rounded-full bg-blue-600 text-white transition hover:bg-blue-700"
            aria-label="下一組照片"
            @click="nextSlide"
          >
            <i class="fas fa-chevron-right" aria-hidden="true"></i>
          </button>
        </div>
      </div>

      <div
        class="touch-pan-y overflow-hidden rounded-3xl bg-white p-6"
        @touchend="handleTouchEnd"
        @touchstart="handleTouchStart"
      >
        <div
          class="gallery-track"
          :style="{ transform: `translateX(-${currentSlide * 100}%)` }"
        >
          <div
            v-for="(slide, idx) in pagedPhotos"
            :key="idx"
            class="gallery-slide"
            :style="{ gridTemplateColumns: `repeat(${cardsPerPage}, 1fr)` }"
          >
            <article
              v-for="(photo, photoIdx) in slide"
              :key="`${photo.src}-${photoIdx}`"
              class="card reveal overflow-hidden"
            >
              <img
                v-if="!failedImages.has(photo.src)"
                :src="photo.src"
                :alt="photo.title"
                class="h-48 w-full object-cover"
                loading="lazy"
                @error="handleImageError(photo.src)"
              />
              <div
                v-else
                class="flex h-48 w-full items-center justify-center bg-blue-100 text-blue-600"
                aria-hidden="true"
              >
                <i class="fas fa-image text-3xl"></i>
              </div>
              <div class="p-4">
                <h4 class="font-bold text-slate-900">{{ photo.title }}</h4>
                <p class="mt-2 text-sm text-slate-600">
                  {{ photo.description }}
                </p>
              </div>
            </article>
          </div>
        </div>
      </div>

      <div class="mt-5 flex items-center justify-center gap-3">
        <button
          v-for="(_, idx) in pagedPhotos"
          :key="idx"
          type="button"
          class="dot"
          :class="{ active: idx === currentSlide }"
          :aria-label="`切換到第 ${idx + 1} 組照片`"
          @click="goToSlide(idx)"
        ></button>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { computed, onMounted, onUnmounted, ref } from "vue";
import { useReveal } from "@/composables/useReveal";
import { publicPath } from "@/utils/publicPath";

interface Photo {
  src: string;
  title: string;
  description: string;
}

const photos = ref<Photo[]>([
  {
    src: publicPath("DSC00001.jpg"),
    title: "103年06月08日第四次面授",
    description: "面授課程進行，師生互動交流，深化學習成效。",
  },
  {
    src: publicPath("DSC00002.jpg"),
    title: "103年05月04日第三次面授",
    description: "舉辦 103 學年學生代表選舉。",
  },
  {
    src: publicPath("DSC00003.jpg"),
    title: "中庭義賣咖啡",
    description: "義賣咖啡活動，師生齊心協力，溫暖校園。",
  },
  {
    src: publicPath("DSC00004.jpg"),
    title: "社服活動關懷獨居老人",
    description: "社服關懷獨居老人，師生共同傳遞溫暖與關愛。",
  },
  {
    src: publicPath("DSC00009.jpg"),
    title: "文學創意演講",
    description: "文學創意演講，激發學生創意思維與文化涵養。",
  },
  {
    src: publicPath("DSC00006.jpg"),
    title: "1月13日古典詩詞吟唱",
    description: "保留舊站活動記錄，重新以卡片式方式呈現。",
  },
  {
    src: publicPath("DSC00007.jpg"),
    title: "開學典禮與社團幹部團聚照",
    description: "新學年開始，社團幹部齊聚一堂，共同為系學會的發展努力。",
  },
  {
    src: publicPath("DSC00008.jpg"),
    title: "達觀風情泰雅文化之旅",
    description: "山林探訪泰雅文化，師生互動深化校園情誼。",
  },
]);

const currentSlide = ref(0);
const autoPlayTimer = ref<number | null>(null);
const cardsPerPage = ref(3);
const failedImages = ref(new Set<string>());

const prefersReducedMotion = () =>
  typeof window !== "undefined" &&
  window.matchMedia?.("(prefers-reduced-motion: reduce)").matches;

const calculateCardsPerPage = () => {
  if (typeof window === "undefined") {
    return 3;
  }

  const width = window.innerWidth;
  if (width < 640) {
    return 1;
  }
  if (width < 1024) {
    return 2;
  }
  return 3;
};

const pageCount = computed(() => {
  if (photos.value.length === 0) {
    return 1;
  }

  return Math.ceil(photos.value.length / cardsPerPage.value);
});

const pagedPhotos = computed(() => {
  if (photos.value.length === 0) {
    return [[]];
  }

  return Array.from({ length: pageCount.value }, (_, pageIndex) => {
    const startIndex = pageIndex * cardsPerPage.value;

    return Array.from({ length: cardsPerPage.value }, (_, cardIndex) => {
      const photoIndex = (startIndex + cardIndex) % photos.value.length;
      return photos.value[photoIndex];
    });
  });
});

const clampCurrentSlide = () => {
  const maxSlideIndex = Math.max(pageCount.value - 1, 0);
  if (currentSlide.value > maxSlideIndex) {
    currentSlide.value = maxSlideIndex;
  }
};

const updateCardsPerPage = () => {
  const nextCardsPerPage = calculateCardsPerPage();

  if (nextCardsPerPage === cardsPerPage.value) {
    clampCurrentSlide();
    return;
  }

  cardsPerPage.value = nextCardsPerPage;
  clampCurrentSlide();
  startAutoPlay();
};

const prevSlide = () => {
  currentSlide.value =
    (currentSlide.value - 1 + pageCount.value) % pageCount.value;
  restartAutoPlay();
};

const nextSlide = () => {
  currentSlide.value = (currentSlide.value + 1) % pageCount.value;
  restartAutoPlay();
};

const goToSlide = (idx: number) => {
  currentSlide.value = idx;
  restartAutoPlay();
};

const handleImageError = (src: string) => {
  failedImages.value = new Set(failedImages.value).add(src);
};

let touchStartX = 0;
let touchEndX = 0;

const handleTouchStart = (event: TouchEvent) => {
  touchStartX = event.changedTouches[0].screenX;
};

const handleTouchEnd = (event: TouchEvent) => {
  touchEndX = event.changedTouches[0].screenX;
  const swipeThreshold = 50;
  const diff = touchStartX - touchEndX;

  if (Math.abs(diff) <= swipeThreshold) {
    return;
  }

  if (diff > 0) {
    nextSlide();
  } else {
    prevSlide();
  }
};

const stopAutoPlay = () => {
  if (autoPlayTimer.value !== null) {
    window.clearInterval(autoPlayTimer.value);
    autoPlayTimer.value = null;
  }
};

const startAutoPlay = () => {
  stopAutoPlay();

  if (prefersReducedMotion() || pageCount.value <= 1) {
    return;
  }

  autoPlayTimer.value = window.setInterval(() => {
    currentSlide.value = (currentSlide.value + 1) % pageCount.value;
  }, 5000);
};

const restartAutoPlay = () => {
  startAutoPlay();
};

onMounted(() => {
  cardsPerPage.value = calculateCardsPerPage();
  startAutoPlay();
  window.addEventListener("resize", updateCardsPerPage);
});

onUnmounted(() => {
  stopAutoPlay();
  window.removeEventListener("resize", updateCardsPerPage);
});

useReveal(".reveal");
</script>

<style scoped>
.section-title {
  position: relative;
  display: inline-block;
  padding-bottom: 0.7rem;
  font-weight: 800;
}

.section-title::after {
  content: "";
  position: absolute;
  left: 0;
  bottom: 0;
  width: 100%;
  height: 4px;
  border-radius: 999px;
  background: linear-gradient(90deg, #1d4ed8, #60a5fa);
}

.gallery-track {
  display: flex;
  transition: transform 0.5s ease-in-out;
}

.gallery-slide {
  min-width: 100%;
  display: grid;
  gap: 2rem;
  padding: 0 0.5rem;
  flex-shrink: 0;
}

@media (min-width: 640px) {
  .gallery-slide {
    padding: 0 0.75rem;
  }
}

@media (min-width: 1024px) {
  .gallery-slide {
    padding: 0 1rem;
  }
}

.card {
  background: #fff;
  border: 1px solid #e2e8f0;
  border-radius: 1.25rem;
  box-shadow: 0 10px 28px rgba(15, 23, 42, 0.07);
  opacity: 0;
  transform: translateY(20px);
  transition:
    transform 0.25s ease,
    box-shadow 0.25s ease,
    opacity 0.25s ease;
}

.card.show {
  opacity: 1;
  transform: translateY(0);
}

.card:hover {
  transform: translateY(-4px);
  box-shadow: 0 18px 38px rgba(15, 23, 42, 0.11);
}

.dot {
  width: 12px;
  height: 12px;
  border-radius: 50%;
  background: #cbd5e1;
  border: none;
  cursor: pointer;
  transition: background 0.3s ease;
}

.dot.active {
  background: #1d4ed8;
}

.dot:hover {
  background: #64748b;
}

.reveal {
  opacity: 0;
  transform: translateY(20px);
  animation: revealIn 0.6s ease forwards;
}

@keyframes revealIn {
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
</style>
