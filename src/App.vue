<template>
  <div class="min-h-screen bg-background-light dark:bg-background-dark text-text-light dark:text-text-dark">
    <Navigation />
    <main>
      <router-view />
    </main>
    <Footer />
  </div>
</template>

<script setup>
import { onMounted } from 'vue'
import Navigation from './components/Navigation.vue'
import Footer from './components/Footer.vue'

onMounted(() => {
  // Initialize dark mode based on saved preference or system preference
  const savedTheme = localStorage.getItem('theme')
  const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches

  if (savedTheme === 'dark' || (!savedTheme && prefersDark)) {
    document.documentElement.classList.add('dark')
  } else {
    document.documentElement.classList.remove('dark')
  }
})
</script>

<style scoped>
:deep(html) {
  scroll-behavior: smooth;
}
</style>
