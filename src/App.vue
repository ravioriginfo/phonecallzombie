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
import Navigation from './components/Navigation.vue'
import Footer from './components/Footer.vue'
</script>

<style scoped>
:deep(html) {
  scroll-behavior: smooth;
}
</style>
