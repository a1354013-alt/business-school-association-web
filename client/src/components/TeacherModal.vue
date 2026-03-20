<template>
  <div v-if="selectedTeacher" class="teacher-modal" :class="{ show: isOpen }" @click.self="closeModal">
    <div class="modal-content">
      <button
        type="button"
        class="modal-close"
        @click="closeModal"
        aria-label="關閉">
        <i class="fas fa-xmark" aria-hidden="true"></i>
      </button>

      <div class="modal-teacher-info text-center">
        <div class="modal-teacher-photo">
          <img
            :src="selectedTeacher.photo"
            :alt="`${selectedTeacher.name}老師照片`"
            class="w-32 h-32 rounded-full mx-auto object-cover"
            @error="handleImageError" />
        </div>
        <h3 class="mt-6 text-2xl font-extrabold text-slate-900">{{ selectedTeacher.name }}</h3>
        <p class="font-semibold text-blue-700 mt-2">{{ selectedTeacher.title }}</p>
        <p class="mt-4 text-slate-600">
          <i class="fas fa-envelope mr-2" aria-hidden="true"></i>
          {{ selectedTeacher.email }}
        </p>
        <p class="text-slate-600">
          <i class="fas fa-phone mr-2" aria-hidden="true"></i>
          {{ selectedTeacher.phone }}
        </p>

        <div class="modal-expertise mt-6">
          <h4 class="font-bold text-slate-900 mb-3">研究專長</h4>
          <div class="expertise-tags flex flex-wrap justify-center gap-2">
            <span
              v-for="(exp, idx) in selectedTeacher.expertise"
              :key="idx"
              class="expertise-tag px-3 py-1 bg-blue-100 text-blue-700 text-sm rounded-full">
              {{ exp }}
            </span>
          </div>
        </div>

        <p class="mt-6 text-slate-600 leading-relaxed text-left">{{ selectedTeacher.bio }}</p>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'

interface Teacher {
  id: number
  name: string
  title: string
  photo: string
  email: string
  phone: string
  expertise: string[]
  bio: string
}

const selectedTeacher = ref<Teacher | null>(null)
const isOpen = ref(false)

const openModal = (teacher: Teacher) => {
  selectedTeacher.value = teacher
  isOpen.value = true
  document.body.style.overflow = 'hidden'
}

const closeModal = () => {
  isOpen.value = false
  // Clear data after transition completes
  const handleTransitionEnd = () => {
    selectedTeacher.value = null
    document.body.style.overflow = 'auto'
    const modal = document.querySelector('.teacher-modal')
    if (modal) {
      modal.removeEventListener('transitionend', handleTransitionEnd)
    }
  }
  const modal = document.querySelector('.teacher-modal')
  if (modal) {
    modal.addEventListener('transitionend', handleTransitionEnd)
  }
}

const handleEscKey = (event: KeyboardEvent) => {
  if (event.key === 'Escape' && isOpen.value) {
    closeModal()
  }
}

onMounted(() => {
  document.addEventListener('keydown', handleEscKey)
})

onUnmounted(() => {
  document.removeEventListener('keydown', handleEscKey)
  // Ensure body overflow is restored
  if (isOpen.value) {
    document.body.style.overflow = 'auto'
  }
})

const handleImageError = (event: Event) => {
  const img = event.target as HTMLImageElement
  img.outerHTML = '<div class="w-32 h-32 rounded-full mx-auto bg-blue-100 flex items-center justify-center text-blue-600"><i class="fas fa-user-tie text-4xl"></i></div>'
}

defineExpose({
  openModal,
  closeModal
})
</script>

<style scoped>
.teacher-modal {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
  opacity: 0;
  pointer-events: none;
  transition: opacity 0.3s ease;
}

.teacher-modal.show {
  opacity: 1;
  pointer-events: auto;
}

.modal-content {
  background: white;
  border-radius: 1.5rem;
  padding: 2rem;
  max-width: 500px;
  width: 90%;
  max-height: 90vh;
  overflow-y: auto;
  position: relative;
  box-shadow: 0 25px 50px rgba(0, 0, 0, 0.15);
  animation: slideUp 0.3s ease;
}

@keyframes slideUp {
  from {
    transform: translateY(20px);
    opacity: 0;
  }
  to {
    transform: translateY(0);
    opacity: 1;
  }
}

.modal-close {
  position: absolute;
  top: 1rem;
  right: 1rem;
  width: 2.5rem;
  height: 2.5rem;
  border: none;
  background: #f1f5f9;
  border-radius: 50%;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #64748b;
  transition: background 0.2s ease;
}

.modal-close:hover {
  background: #e2e8f0;
}

.modal-teacher-photo {
  margin-top: 1rem;
}

.modal-expertise {
  text-align: center;
}

.expertise-tag {
  display: inline-block;
}
</style>
