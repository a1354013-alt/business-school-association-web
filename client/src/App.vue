<template>
  <div class="min-h-screen bg-slate-50 text-slate-900">
    <!-- Navigation -->
    <NavbarSection />

    <!-- Main Content -->
    <main>
      <!-- Hero Section -->
      <HeroSection />

      <!-- About Section -->
      <AboutSection />

      <!-- Teachers Section -->
      <TeachersSection @selectTeacher="handleSelectTeacher" />

      <!-- Team Section -->
      <TeamSection />

      <!-- Events Section -->
      <EventsSection />

      <!-- Gallery Section -->
      <GallerySection />

      <!-- Constitution Section -->
      <ConstitutionSection />

      <!-- Join Section -->
      <JoinSection />
    </main>

    <!-- Footer -->
    <SiteFooter />

    <!-- Teacher Modal -->
    <TeacherModal ref="teacherModalRef" />
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import NavbarSection from "./components/NavbarSection.vue";
import HeroSection from "./components/HeroSection.vue";
import AboutSection from "./components/AboutSection.vue";
import TeachersSection from "./components/TeachersSection.vue";
import TeamSection from "./components/TeamSection.vue";
import EventsSection from "./components/EventsSection.vue";
import GallerySection from "./components/GallerySection.vue";
import ConstitutionSection from "./components/ConstitutionSection.vue";
import JoinSection from "./components/JoinSection.vue";
import SiteFooter from "./components/SiteFooter.vue";
import TeacherModal from "./components/TeacherModal.vue";

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

const teacherModalRef = ref<InstanceType<typeof TeacherModal> | null>(null);

const handleSelectTeacher = (teacher: Teacher) => {
  if (teacherModalRef.value) {
    teacherModalRef.value.openModal(teacher);
  }
};
</script>

<style scoped>
/* Global styles are in index.css */
</style>

<style>
/* Ensure smooth scrolling for anchor links */
html {
  scroll-behavior: smooth;
}
</style>
