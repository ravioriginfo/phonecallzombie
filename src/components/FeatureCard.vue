<template>
  <div
    class="card p-6 cursor-pointer group"
    @click="expanded = !expanded"
  >
    <!-- Header -->
    <div class="flex items-start justify-between mb-4">
      <div class="flex-1">
        <h3 class="font-display font-bold text-xl mb-2 group-hover:text-primary-light dark:group-hover:text-primary-dark transition-colors">
          {{ title }}
        </h3>
        <p class="text-sm text-gray-600 dark:text-gray-400">
          {{ shortDescription }}
        </p>
      </div>
      <div class="flex-shrink-0 w-12 h-12 bg-primary-light/10 dark:bg-primary-dark/20 rounded-lg flex items-center justify-center ml-4 group-hover:bg-primary-light/20 dark:group-hover:bg-primary-dark/30 transition-colors">
        <svg
          class="w-6 h-6 text-primary-light dark:text-primary-dark transform transition-transform"
          :class="{ 'rotate-180': expanded }"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </div>
    </div>

    <!-- Expanded Content -->
    <transition name="expand">
      <div v-if="expanded" class="mt-6 pt-6 border-t border-gray-200 dark:border-white dark:border-opacity-10 space-y-4">
        <div>
          <h4 class="font-semibold mb-2 text-text-light dark:text-text-dark">Full Description</h4>
          <p class="text-gray-700 dark:text-gray-300 leading-relaxed">{{ description }}</p>
        </div>

        <div v-if="useCase">
          <h4 class="font-semibold mb-2 text-text-light dark:text-text-dark">Use Case</h4>
          <p class="text-gray-700 dark:text-gray-300 leading-relaxed">{{ useCase }}</p>
        </div>

        <div v-if="image">
          <h4 class="font-semibold mb-2 text-text-light dark:text-text-dark">Screenshot</h4>
          <img :src="image" :alt="title" class="w-full rounded-lg mt-2 border border-gray-200 dark:border-white dark:border-opacity-10">
        </div>
      </div>
    </transition>
  </div>
</template>

<script setup>
import { ref } from 'vue'

defineProps({
  title: String,
  shortDescription: String,
  description: String,
  useCase: String,
  image: String,
})

const expanded = ref(false)
</script>

<style scoped>
.expand-enter-active, .expand-leave-active {
  transition: all 0.3s ease;
}

.expand-enter-from {
  opacity: 0;
  transform: translateY(-10px);
}

.expand-leave-to {
  opacity: 0;
  transform: translateY(-10px);
}
</style>
