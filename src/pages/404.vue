<template>
  <div class="min-h-screen flex items-center justify-center">
    <div class="section-container text-center">
      <div class="mb-8">
        <div class="text-8xl font-display font-bold text-primary-light dark:text-primary-dark mb-4">
          404
        </div>
        <h1 class="text-4xl font-display font-bold text-text-light dark:text-text-dark mb-4">
          Page Not Found
        </h1>
        <p class="text-lg text-gray-600 dark:text-gray-400 mb-8 max-w-2xl mx-auto">
          Oops! The page you're looking for doesn't exist. But don't worry, you can explore PhoneCallZombie below.
        </p>
      </div>

      <div class="flex flex-col sm:flex-row gap-4 justify-center">
        <router-link to="/" class="btn-primary text-lg inline-block">
          Go to Home
        </router-link>
        <router-link to="/features" class="btn-secondary text-lg inline-block">
          Explore Features
        </router-link>
      </div>
    </div>
  </div>
</template>

<script setup>
</script>

<style scoped>
</style>
