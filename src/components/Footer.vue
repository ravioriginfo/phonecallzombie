<template>
  <footer class="border-t border-gray-200 dark:border-white dark:border-opacity-10 bg-white dark:bg-opacity-5">
    <div class="section-container">
      <div class="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
        <!-- Brand -->
        <div>
          <div class="flex items-center gap-2 mb-4">
            <div class="w-10 h-10 bg-gradient-to-br from-primary-light to-primary-dark rounded-lg flex items-center justify-center text-white font-display font-bold">
              Z
            </div>
            <h3 class="font-display font-bold text-lg">PhoneCallZombie</h3>
          </div>
          <p class="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
            Experience the future of calling with advanced dialer features.
          </p>
        </div>

        <!-- Product -->
        <div>
          <h4 class="font-display font-semibold mb-4 text-text-light dark:text-text-dark">Product</h4>
          <ul class="space-y-2 text-sm">
            <li><router-link to="/features" class="hover:text-primary-light dark:hover:text-primary-dark transition-colors">Features</router-link></li>
            <li><router-link to="/demo" class="hover:text-primary-light dark:hover:text-primary-dark transition-colors">Demo</router-link></li>
            <li><router-link to="/how-to" class="hover:text-primary-light dark:hover:text-primary-dark transition-colors">How-To Guides</router-link></li>
          </ul>
        </div>

        <!-- Download -->
        <div>
          <h4 class="font-display font-semibold mb-4 text-text-light dark:text-text-dark">Download</h4>
          <ul class="space-y-2 text-sm">
            <li>
              <a
                href="https://play.google.com/store/apps/details?id=com.phonecall.phone.contact.callerdialer"
                target="_blank"
                rel="noopener noreferrer"
                class="hover:text-primary-light dark:hover:text-primary-dark transition-colors"
              >
                Google Play Store
              </a>
            </li>
            <li><a href="#" class="hover:text-primary-light dark:hover:text-primary-dark transition-colors">APK Direct</a></li>
          </ul>
        </div>

        <!-- Company -->
        <div>
          <h4 class="font-display font-semibold mb-4 text-text-light dark:text-text-dark">Company</h4>
          <ul class="space-y-2 text-sm">
            <li><a href="#" class="hover:text-primary-light dark:hover:text-primary-dark transition-colors">About</a></li>
            <li><a href="#" class="hover:text-primary-light dark:hover:text-primary-dark transition-colors">Privacy Policy</a></li>
            <li><a href="#" class="hover:text-primary-light dark:hover:text-primary-dark transition-colors">Terms of Service</a></li>
          </ul>
        </div>
      </div>

      <!-- Divider -->
      <div class="border-t border-gray-200 dark:border-white dark:border-opacity-10 pt-8">
        <div class="flex flex-col sm:flex-row justify-between items-center gap-4 text-sm text-gray-600 dark:text-gray-400">
          <p>&copy; 2024 PhoneCallZombie. All rights reserved. Built with ❤️ by Origin Infotech</p>
          <div class="flex gap-4">
            <a href="#" class="hover:text-primary-light dark:hover:text-primary-dark transition-colors">Twitter</a>
            <a href="#" class="hover:text-primary-light dark:hover:text-primary-dark transition-colors">GitHub</a>
            <a href="#" class="hover:text-primary-light dark:hover:text-primary-dark transition-colors">LinkedIn</a>
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>

<script setup>
</script>

<style scoped>
</style>
