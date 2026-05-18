<template>
  <section id="faculty" class="bg-white py-20">
    <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <div class="card reveal p-6 sm:p-8">
        <div class="mb-5 flex items-center justify-between gap-4">
          <div>
            <p
              class="text-sm font-bold uppercase tracking-[0.18em] text-blue-700"
            >
              Faculty Carousel
            </p>
            <h3 class="mt-2 text-2xl font-extrabold text-slate-900">
              教師陣容
            </h3>
          </div>
          <div class="hidden gap-2 sm:flex">
            <button
              type="button"
              class="focus-ring inline-flex h-11 w-11 items-center justify-center rounded-full bg-blue-600 text-white transition hover:bg-blue-700"
              aria-label="上一組教師"
              @click="prevSlide"
            >
              <i class="fas fa-chevron-left" aria-hidden="true"></i>
            </button>
            <button
              type="button"
              class="focus-ring inline-flex h-11 w-11 items-center justify-center rounded-full bg-blue-600 text-white transition hover:bg-blue-700"
              aria-label="下一組教師"
              @click="nextSlide"
            >
              <i class="fas fa-chevron-right" aria-hidden="true"></i>
            </button>
          </div>
        </div>

        <div class="overflow-hidden rounded-3xl bg-slate-50 p-4">
          <div
            class="teacher-track"
            :style="{ transform: `translateX(-${currentSlide * 100}%)` }"
          >
            <div
              v-for="(slide, idx) in slides"
              :key="idx"
              class="teacher-slide"
            >
              <article
                v-for="teacher in slide"
                :key="teacher.id"
                class="card teacher-card cursor-pointer p-6 text-center"
                @click="selectTeacher(teacher)"
              >
                <div class="teacher-photo">
                  <img
                    v-if="!failedImages.has(teacher.id)"
                    :src="teacher.photo"
                    :alt="`${teacher.name} 教師照片`"
                    class="mx-auto h-24 w-24 rounded-full object-cover"
                    loading="lazy"
                    @error="handleImageError(teacher.id)"
                  />
                  <div
                    v-else
                    class="mx-auto flex h-24 w-24 items-center justify-center rounded-full bg-blue-100 text-blue-600"
                    aria-hidden="true"
                  >
                    <i class="fas fa-user-tie text-2xl"></i>
                  </div>
                </div>
                <h4 class="mt-4 font-extrabold text-slate-900">
                  {{ teacher.name }}
                </h4>
                <p class="mt-1 text-sm text-slate-500">{{ teacher.title }}</p>
              </article>
            </div>
          </div>
        </div>

        <div class="mt-5 flex items-center justify-center gap-3">
          <button
            v-for="(_, idx) in slides"
            :key="idx"
            type="button"
            class="dot"
            :class="{ active: idx === currentSlide }"
            :aria-label="`切換到第 ${idx + 1} 組教師`"
            @click="goToSlide(idx)"
          ></button>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { computed, onMounted, onUnmounted, ref } from "vue";
import { publicPath } from "@/utils/publicPath";

interface Teacher {
  id: number;
  name: string;
  title: string;
  photo: string;
  email: string;
  phone: string;
  expertise: string[];
  bio: string;
}

const emit = defineEmits<{
  selectTeacher: [teacher: Teacher];
}>();

const teachers = ref<Teacher[]>([]);
const currentSlide = ref(0);
const autoPlayTimer = ref<number | null>(null);
const pageSize = ref(4);
const failedImages = ref(new Set<number>());

const prefersReducedMotion = () =>
  typeof window !== "undefined" &&
  window.matchMedia?.("(prefers-reduced-motion: reduce)").matches;

const calculatePageSize = () => {
  if (typeof window === "undefined") {
    return 4;
  }

  const width = window.innerWidth;
  if (width < 640) {
    return 1;
  }
  if (width < 1024) {
    return 2;
  }
  return 4;
};

const slides = computed(() => {
  const result: Teacher[][] = [];
  for (let index = 0; index < teachers.value.length; index += pageSize.value) {
    result.push(teachers.value.slice(index, index + pageSize.value));
  }
  return result.length > 0 ? result : [[]];
});

const clampCurrentSlide = () => {
  const maxSlideIndex = Math.max(slides.value.length - 1, 0);
  if (currentSlide.value > maxSlideIndex) {
    currentSlide.value = maxSlideIndex;
  }
};

const updatePageSize = () => {
  pageSize.value = calculatePageSize();
  clampCurrentSlide();
};

const loadTeachers = async () => {
  const response = await fetch(publicPath("teachers.json"));

  if (!response.ok) {
    throw new Error(
      `Failed to load teachers: ${response.status} ${response.statusText}`
    );
  }

  const data = (await response.json()) as Teacher[];
  teachers.value = data.map(teacher => ({
    ...teacher,
    photo: publicPath(teacher.photo),
  }));
  clampCurrentSlide();
};

const prevSlide = () => {
  currentSlide.value =
    (currentSlide.value - 1 + slides.value.length) % slides.value.length;
  restartAutoPlay();
};

const nextSlide = () => {
  currentSlide.value = (currentSlide.value + 1) % slides.value.length;
  restartAutoPlay();
};

const goToSlide = (idx: number) => {
  currentSlide.value = idx;
  restartAutoPlay();
};

const selectTeacher = (teacher: Teacher) => {
  emit("selectTeacher", teacher);
};

const handleImageError = (teacherId: number) => {
  failedImages.value = new Set(failedImages.value).add(teacherId);
};

const stopAutoPlay = () => {
  if (autoPlayTimer.value !== null) {
    window.clearInterval(autoPlayTimer.value);
    autoPlayTimer.value = null;
  }
};

const startAutoPlay = () => {
  stopAutoPlay();

  if (prefersReducedMotion() || slides.value.length <= 1) {
    return;
  }

  autoPlayTimer.value = window.setInterval(() => {
    currentSlide.value = (currentSlide.value + 1) % slides.value.length;
  }, 4500);
};

const restartAutoPlay = () => {
  startAutoPlay();
};

onMounted(async () => {
  pageSize.value = calculatePageSize();
  await loadTeachers();
  startAutoPlay();
  window.addEventListener("resize", updatePageSize);
});

onUnmounted(() => {
  stopAutoPlay();
  window.removeEventListener("resize", updatePageSize);
});
</script>

<style scoped>
.card {
  background: #fff;
  border: 1px solid #e2e8f0;
  border-radius: 1.25rem;
  box-shadow: 0 10px 28px rgba(15, 23, 42, 0.07);
  transition:
    transform 0.25s ease,
    box-shadow 0.25s ease;
}

.card:hover {
  transform: translateY(-4px);
  box-shadow: 0 18px 38px rgba(15, 23, 42, 0.11);
}

.teacher-track {
  display: flex;
  transition: transform 0.5s ease-in-out;
}

.teacher-slide {
  min-width: 100%;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 1rem;
  padding: 0;
}

.teacher-card {
  cursor: pointer;
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
