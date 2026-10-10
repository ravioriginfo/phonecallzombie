<template>
  <nav class="sticky top-0 z-50 bg-white dark:bg-background-dark bg-opacity-95 dark:bg-opacity-95 backdrop-blur-md border-b border-gray-200 dark:border-white dark:border-opacity-10">
    <div class="container mx-auto px-4 py-4 flex items-center justify-between">
      <!-- Logo -->
      <router-link to="/" class="flex items-center gap-2 font-display font-bold text-2xl text-text-light dark:text-text-dark hover:text-primary-light dark:hover:text-primary-dark transition-colors">
        <div class="w-10 h-10 bg-gradient-to-br from-primary-light to-primary-dark rounded-lg flex items-center justify-center text-white font-display font-bold">
          Z
        </div>
        <span class="hidden sm:inline">PhoneCallZombie</span>
      </router-link>

      <!-- Desktop Navigation -->
      <div class="hidden md:flex items-center gap-8">
        <router-link
          to="/"
          class="nav-link"
          :class="{ active: $route.path === '/' }"
        >
          Home
        </router-link>
        <router-link
          to="/features"
          class="nav-link"
          :class="{ active: $route.path === '/features' }"
        >
          Features
        </router-link>
        <router-link
          to="/demo"
          class="nav-link"
          :class="{ active: $route.path === '/demo' }"
        >
          Demo
        </router-link>
        <router-link
          to="/how-to"
          class="nav-link"
          :class="{ active: $route.path === '/how-to' }"
        >
          How-To
        </router-link>
        <a
          href="https://play.google.com/store/apps/details?id=com.phonecall.phone.contact.callerdialer"
          target="_blank"
          rel="noopener noreferrer"
          class="btn-primary text-sm py-2 px-4"
        >
          Download
        </a>
      </div>

      <!-- Mobile Menu Button -->
      <button
        class="md:hidden p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-white dark:hover:bg-opacity-10 transition-colors"
        @click="mobileMenuOpen = !mobileMenuOpen"
        aria-label="Toggle menu"
      >
        <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
        </svg>
      </button>
    </div>

    <!-- Mobile Menu -->
    <transition name="slide">
      <div v-if="mobileMenuOpen" class="md:hidden border-t border-gray-200 dark:border-white dark:border-opacity-10 bg-white dark:bg-background-dark">
        <div class="container mx-auto px-4 py-4 flex flex-col gap-4">
          <router-link
            to="/"
            class="mobile-nav-link"
            @click="mobileMenuOpen = false"
          >
            Home
          </router-link>
          <router-link
            to="/features"
            class="mobile-nav-link"
            @click="mobileMenuOpen = false"
          >
            Features
          </router-link>
          <router-link
            to="/demo"
            class="mobile-nav-link"
            @click="mobileMenuOpen = false"
          >
            Demo
          </router-link>
          <router-link
            to="/how-to"
            class="mobile-nav-link"
            @click="mobileMenuOpen = false"
          >
            How-To
          </router-link>
          <a
            href="https://play.google.com/store/apps/details?id=com.phonecall.phone.contact.callerdialer"
            target="_blank"
            rel="noopener noreferrer"
            class="btn-primary text-center"
            @click="mobileMenuOpen = false"
          >
            Download Now
          </a>
        </div>
      </div>
    </transition>
  </nav>
</template>

<script setup>
import { ref } from 'vue'

const mobileMenuOpen = ref(false)
</script>

<style scoped>
.nav-link {
  font-weight: 500;
  color: inherit;
  transition: color 0.3s ease;
  position: relative;
}

.nav-link:hover {
  color: #0A9654;
}

.nav-link.active {
  color: #0A9654;
}

.nav-link.active::after {
  content: '';
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  height: 2px;
  background: linear-gradient(to right, #0A9654, #2CCB7B);
}

.mobile-nav-link {
  font-weight: 500;
  transition: color 0.3s ease;
  padding: 0.5rem 0;
}

.mobile-nav-link:hover {
  color: #0A9654;
}

.slide-enter-active, .slide-leave-active {
  transition: all 0.3s ease;
}

.slide-enter-from {
  transform: translateY(-10px);
  opacity: 0;
}

.slide-leave-to {
  transform: translateY(-10px);
  opacity: 0;
}
</style>
