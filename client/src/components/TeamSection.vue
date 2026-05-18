<template>
  <section id="team" class="py-20 bg-slate-50">
    <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <div class="mb-12 text-center reveal">
        <h2
          class="section-title text-3xl sm:text-4xl font-extrabold text-slate-900"
        >
          服務團隊
        </h2>
      </div>

      <div class="card reveal p-6 sm:p-8 overflow-x-auto">
        <table class="w-full text-sm">
          <thead>
            <tr class="border-b-2 border-slate-200">
              <th class="text-left py-3 px-4 font-bold text-slate-900">職稱</th>
              <th class="text-left py-3 px-4 font-bold text-slate-900">姓名</th>
              <th class="text-left py-3 px-4 font-bold text-slate-900">
                負責業務
              </th>
              <th class="text-left py-3 px-4 font-bold text-slate-900">
                聯絡資訊
              </th>
            </tr>
          </thead>
          <tbody>
            <tr
              v-for="(member, idx) in teamMembers"
              :key="idx"
              class="border-b border-slate-100 hover:bg-slate-50 transition"
            >
              <td class="py-3 px-4 text-slate-600">{{ member.position }}</td>
              <td class="py-3 px-4 font-semibold text-slate-900">
                {{ member.name }}
              </td>
              <td class="py-3 px-4 text-slate-600">{{ member.duty }}</td>
              <td class="py-3 px-4 text-slate-600">{{ member.contact }}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { useReveal } from "@/composables/useReveal";

interface TeamMember {
  position: string;
  name: string;
  duty: string;
  contact: string;
}

const teamMembers = ref<TeamMember[]>([
  {
    position: "指導老師",
    name: "黎永松",
    duty: "會務推動",
    contact: "0918-***-***",
  },
  {
    position: "會長",
    name: "李國豪",
    duty: "會務推動",
    contact: "0921-***-***",
  },
  { position: "副會長", name: "陳芬櫻", duty: "資訊", contact: "0952-***-***" },
  { position: "副會長", name: "徐凱玲", duty: "財務", contact: "0937-***-***" },
  { position: "副會長", name: "鄭如媚", duty: "財務", contact: "0934-***-***" },
  { position: "副會長", name: "詹幸玲", duty: "課研", contact: "0915-***-***" },
  { position: "副會長", name: "陳幸文", duty: "活動", contact: "0935-***-***" },
  { position: "副會長", name: "洪苡瑄", duty: "活動", contact: "0934-***-***" },
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
