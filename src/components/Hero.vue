<template>
  <section class="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-background-light to-gray-50 dark:from-background-dark dark:to-gray-900">
    <!-- Animated background elements -->
    <div class="absolute inset-0 overflow-hidden">
      <div class="absolute -top-1/2 -right-1/2 w-full h-full bg-gradient-to-br from-primary-light/10 to-transparent rounded-full blur-3xl animate-pulse"></div>
      <div class="absolute -bottom-1/2 -left-1/2 w-full h-full bg-gradient-to-tr from-primary-dark/10 to-transparent rounded-full blur-3xl animate-pulse" style="animation-delay: 1s"></div>
    </div>

    <div class="relative container mx-auto px-4 py-20 text-center z-10">
      <div class="animate-fade-in-up">
        <!-- Badge -->
        <div class="inline-block mb-6 px-4 py-2 bg-primary-light/10 dark:bg-primary-dark/20 border border-primary-light/20 dark:border-primary-dark/40 rounded-full">
          <span class="text-sm font-semibold text-primary-light dark:text-primary-dark">🚀 Available on Google Play</span>
        </div>

        <!-- Headline -->
        <h1 class="text-5xl md:text-7xl font-display font-bold mb-6 leading-tight">
          <span class="block text-text-light dark:text-text-dark">Call. Contact. Control.</span>
          <span class="gradient-text">Everything in One Dialer</span>
        </h1>

        <!-- Subheadline -->
        <p class="text-lg md:text-xl text-gray-700 dark:text-gray-300 max-w-2xl mx-auto mb-8 leading-relaxed">
          Experience the future of calling with intelligent features that understand how you want to manage your contacts and calls.
        </p>

        <!-- CTA Buttons -->
        <div class="flex flex-col sm:flex-row gap-4 justify-center mb-12">
          <a
            href="https://play.google.com/store/apps/details?id=com.phonecall.phone.contact.callerdialer"
            target="_blank"
            rel="noopener noreferrer"
            class="btn-primary text-lg py-4"
          >
            Download Now
          </a>
          <router-link to="/features" class="btn-secondary text-lg py-4">
            Explore Features
          </router-link>
        </div>

        <!-- Stats -->
        <div class="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-2xl mx-auto">
          <div class="card p-6">
            <div class="text-3xl font-display font-bold gradient-text mb-2">6+</div>
            <p class="text-sm text-gray-600 dark:text-gray-400">Premium Features</p>
          </div>
          <div class="card p-6">
            <div class="text-3xl font-display font-bold gradient-text mb-2">100%</div>
            <p class="text-sm text-gray-600 dark:text-gray-400">Free & Open</p>
          </div>
          <div class="card p-6">
            <div class="text-3xl font-display font-bold gradient-text mb-2">Fast</div>
            <p class="text-sm text-gray-600 dark:text-gray-400">Lightning Quick</p>
          </div>
          <div class="card p-6">
            <div class="text-3xl font-display font-bold gradient-text mb-2">Safe</div>
            <p class="text-sm text-gray-600 dark:text-gray-400">Privacy First</p>
          </div>
        </div>
      </div>
    </div>

    <!-- Scroll Indicator -->
    <div class="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10">
      <div class="animate-bounce">
        <svg class="w-6 h-6 text-primary-light dark:text-primary-dark" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </div>
    </div>
  </section>
</template>

<script setup>
</script>

<style scoped>
@keyframes fade-in-up {
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.animate-fade-in-up {
  animation: fade-in-up 0.8s ease-out;
}
</style>
