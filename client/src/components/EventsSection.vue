<template>
  <section id="events" class="py-20 bg-white">
    <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <div class="mb-12 text-center reveal">
        <h2
          class="section-title text-3xl sm:text-4xl font-extrabold text-slate-900"
        >
          活動訊息
        </h2>
      </div>

      <div class="card reveal p-6 sm:p-8">
        <div class="space-y-6">
          <div
            v-for="(event, idx) in events"
            :key="idx"
            class="border-l-4 border-blue-600 pl-4"
          >
            <h4 class="font-bold text-slate-900">{{ event.title }}</h4>
            <p class="text-sm text-slate-600 mt-1">
              <i
                class="fas fa-calendar mr-2 text-blue-600"
                aria-hidden="true"
              ></i>
              時間：{{ event.time }}
            </p>
            <p v-if="event.location" class="text-sm text-slate-600">
              <i
                class="fas fa-map-marker-alt mr-2 text-blue-600"
                aria-hidden="true"
              ></i>
              地點：{{ event.location }}
            </p>
          </div>
        </div>
        <p class="mt-8 text-sm text-slate-600 italic">
          註：社團聯誼活動，歡迎踴躍報名參加。以上活動為暫定日期，若有變動以實際活動通知為準。
        </p>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { useReveal } from "@/composables/useReveal";

interface Event {
  title: string;
  time: string;
  location?: string;
}

const events = ref<Event[]>([
  {
    title: "105下網路選課繳費開始與截止日期（舊生）",
    time: "105/12/1 ~ 12/20（四、二）",
  },
  {
    title: "105下新生現場註冊日（新生）／商學會招募新會員",
    time: "105/12/10 ~ 12/11",
    location: "綜合教學大樓 12 樓",
  },
  {
    title: "商學系與合唱團戶外聯誼活動",
    time: "105/12/25",
    location: "屏東三川琉璃吊橋",
  },
  { title: "105下新生開學日", time: "106/03/05" },
  { title: "第一次面授與迎新會", time: "106/03/26" },
  { title: "第二次面授日", time: "106/04/09", location: "綜合大樓中庭" },
  { title: "期中考試", time: "106/04/22 ~ 04/23", location: "綜合教學大樓" },
  {
    title: "第三次面授日／會員大會／改選會長",
    time: "106/05/21",
    location: "203教室",
  },
  { title: "第四次面授／專題講座", time: "106/06/04", location: "203教室" },
  { title: "期末考", time: "106/06/24 ~ 06/25", location: "綜合教學大樓" },
]);

// Use reveal animation composable
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
  box-shadow: 0 18px 38px rgba(15, 23, 42, 0.11);
}
</style>
