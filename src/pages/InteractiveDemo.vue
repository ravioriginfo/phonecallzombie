<template>
  <div>
    <!-- Page Header -->
    <section class="section-container text-center bg-gradient-to-b from-primary-light/5 to-transparent dark:from-primary-dark/5">
      <h1 class="text-5xl md:text-6xl font-display font-bold mb-6 text-text-light dark:text-text-dark">
        Interactive Demo
      </h1>
      <p class="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
        See PhoneCallZombie in action with our interactive walkthrough.
      </p>
    </section>

    <!-- Demo Section -->
    <section class="section-container">
      <div class="grid md:grid-cols-2 gap-12 items-center">
        <!-- Phone Mockup -->
        <div class="flex justify-center">
          <div class="relative w-80 h-96">
            <!-- Phone Frame -->
            <div class="absolute inset-0 bg-black rounded-3xl shadow-2xl border-8 border-black overflow-hidden">
              <!-- Notch -->
              <div class="absolute top-0 left-1/2 transform -translate-x-1/2 w-40 h-6 bg-black rounded-b-2xl z-10"></div>

              <!-- Screen -->
              <div class="absolute inset-6 top-8 bottom-6 bg-gradient-to-b from-primary-light/10 to-transparent dark:from-primary-dark/10 rounded-2xl overflow-hidden flex flex-col">
                <!-- Status Bar -->
                <div class="bg-white dark:bg-opacity-10 px-4 py-2 text-xs font-semibold text-center flex items-center justify-between">
                  <span>9:41</span>
                  <div class="flex gap-1">
                    <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M1 9l2 2c4.97-4.97 13.03-4.97 18 0l2-2C16.93 2.93 7.08 2.93 1 9zm8 8l3 3 3-3c-1.65-1.66-4.34-1.66-6 0zm-4-4l2 2c2.76-2.76 7.24-2.76 10 0l2-2C15.14 9.14 8.87 9.14 5 13z"/></svg>
                    <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M1 9h2v2H1zm4 0h2v2H5zm4 0h2v2H9zm4 0h2v2h-2zm4 0h2v2h-2zM1 5h22v2H1z"/></svg>
                    <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M1 9h22v2H1z"/></svg>
                  </div>
                </div>

                <!-- Content Area -->
                <div class="flex-1 overflow-hidden flex flex-col">
                  <transition name="fade" mode="out-in">
                    <div v-if="currentStep === 0" key="contacts" class="flex-1 overflow-y-auto p-4 space-y-2">
                      <div class="font-semibold text-center text-primary-light dark:text-primary-dark mb-4">Contacts</div>
                      <div class="space-y-2">
                        <div class="bg-white dark:bg-opacity-20 p-3 rounded-lg text-sm">
                          <div class="font-semibold">John Doe</div>
                          <div class="text-xs opacity-70">+1 234 567 8900</div>
                        </div>
                        <div class="bg-white dark:bg-opacity-20 p-3 rounded-lg text-sm">
                          <div class="font-semibold">Jane Smith</div>
                          <div class="text-xs opacity-70">+1 234 567 8901</div>
                        </div>
                        <div class="bg-white dark:bg-opacity-20 p-3 rounded-lg text-sm">
                          <div class="font-semibold">Bob Johnson</div>
                          <div class="text-xs opacity-70">+1 234 567 8902</div>
                        </div>
                      </div>
                    </div>

                    <div v-else-if="currentStep === 1" key="recent" class="flex-1 overflow-y-auto p-4 space-y-2">
                      <div class="font-semibold text-center text-primary-light dark:text-primary-dark mb-4">Recent Searches</div>
                      <div class="space-y-2">
                        <div class="bg-white dark:bg-opacity-20 p-3 rounded-lg text-sm">
                          <div class="font-semibold">Pizza Restaurant</div>
                          <div class="text-xs opacity-70">Today at 2:30 PM</div>
                        </div>
                        <div class="bg-white dark:bg-opacity-20 p-3 rounded-lg text-sm">
                          <div class="font-semibold">Coffee Shop</div>
                          <div class="text-xs opacity-70">Yesterday at 9:15 AM</div>
                        </div>
                      </div>
                    </div>

                    <div v-else-if="currentStep === 2" key="recycle" class="flex-1 overflow-y-auto p-4 space-y-2">
                      <div class="font-semibold text-center text-primary-light dark:text-primary-dark mb-4">Recycle Bin</div>
                      <div class="bg-blue-50 dark:bg-blue-900 dark:bg-opacity-20 border border-blue-200 dark:border-blue-800 p-4 rounded-lg">
                        <div class="text-sm font-semibold text-blue-900 dark:text-blue-300 mb-2">Deleted Contacts (30 days)</div>
                        <div class="space-y-1 text-xs">
                          <div>• Old Contact - 5 days ago</div>
                          <div>• Previous Client - 10 days ago</div>
                        </div>
                      </div>
                    </div>

                    <div v-else key="settings" class="flex-1 overflow-y-auto p-4 space-y-3">
                      <div class="font-semibold text-center text-primary-light dark:text-primary-dark mb-4">Settings</div>
                      <div class="space-y-3 text-sm">
                        <label class="flex items-center gap-3 bg-white dark:bg-opacity-20 p-3 rounded-lg">
                          <input type="checkbox" checked class="w-4 h-4" />
                          <span>Search History</span>
                        </label>
                        <label class="flex items-center gap-3 bg-white dark:bg-opacity-20 p-3 rounded-lg">
                          <input type="checkbox" checked class="w-4 h-4" />
                          <span>Auto Replies</span>
                        </label>
                        <label class="flex items-center gap-3 bg-white dark:bg-opacity-20 p-3 rounded-lg">
                          <input type="checkbox" class="w-4 h-4" />
                          <span>Default Tab</span>
                        </label>
                      </div>
                    </div>
                  </transition>
                </div>

                <!-- Bottom Navigation -->
                <div class="bg-white dark:bg-opacity-10 grid grid-cols-4 gap-1 p-2 border-t border-white border-opacity-20">
                  <button
                    class="py-2 text-xs font-semibold transition-colors"
                    :class="currentStep === 0 ? 'text-primary-light dark:text-primary-dark' : 'text-gray-600 dark:text-gray-400'"
                    @click="currentStep = 0"
                  >
                    Contacts
                  </button>
                  <button
                    class="py-2 text-xs font-semibold transition-colors"
                    :class="currentStep === 1 ? 'text-primary-light dark:text-primary-dark' : 'text-gray-600 dark:text-gray-400'"
                    @click="currentStep = 1"
                  >
                    Recent
                  </button>
                  <button
                    class="py-2 text-xs font-semibold transition-colors"
                    :class="currentStep === 2 ? 'text-primary-light dark:text-primary-dark' : 'text-gray-600 dark:text-gray-400'"
                    @click="currentStep = 2"
                  >
                    Bin
                  </button>
                  <button
                    class="py-2 text-xs font-semibold transition-colors"
                    :class="currentStep === 3 ? 'text-primary-light dark:text-primary-dark' : 'text-gray-600 dark:text-gray-400'"
                    @click="currentStep = 3"
                  >
                    Settings
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Description -->
        <div class="space-y-8">
          <div class="card p-6">
            <h3 class="text-2xl font-display font-bold mb-3 text-text-light dark:text-text-dark">
              Explore Features
            </h3>
            <p class="text-gray-700 dark:text-gray-300 leading-relaxed">
              Tap on the different tabs in the phone mockup to see how each feature works. Navigate seamlessly between your contacts, recent searches, deleted items, and settings.
            </p>
          </div>

          <div class="space-y-4">
            <h4 class="font-display font-semibold text-text-light dark:text-text-dark">Current View:</h4>
            <div class="card p-6">
              <div v-if="currentStep === 0">
                <h5 class="font-bold mb-2 text-primary-light dark:text-primary-dark">Contacts Manager</h5>
                <p class="text-sm text-gray-700 dark:text-gray-300">All your contacts in one place. Easily find, call, or manage your entire contact list.</p>
              </div>
              <div v-else-if="currentStep === 1">
                <h5 class="font-bold mb-2 text-primary-light dark:text-primary-dark">Recent Searches</h5>
                <p class="text-sm text-gray-700 dark:text-gray-300">Quick access to your recently searched contacts and numbers. Toggle history on/off for privacy.</p>
              </div>
              <div v-else-if="currentStep === 2">
                <h5 class="font-bold mb-2 text-primary-light dark:text-primary-dark">Recycle Bin</h5>
                <p class="text-sm text-gray-700 dark:text-gray-300">Recover deleted contacts within 30 days. Your data is always safe and recoverable.</p>
              </div>
              <div v-else>
                <h5 class="font-bold mb-2 text-primary-light dark:text-primary-dark">Settings</h5>
                <p class="text-sm text-gray-700 dark:text-gray-300">Customize your app experience with various options like search history, auto-replies, and more.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- CTA Section -->
    <section class="section-container bg-gradient-to-r from-primary-light/10 to-primary-dark/10 dark:from-primary-light/5 dark:to-primary-dark/5 rounded-2xl text-center">
      <h2 class="text-4xl font-display font-bold mb-6 text-text-light dark:text-text-dark">
        Ready to Get Started?
      </h2>
      <a
        href="https://play.google.com/store/apps/details?id=com.phonecall.phone.contact.callerdialer"
        target="_blank"
        rel="noopener noreferrer"
        class="btn-primary text-lg inline-block"
      >
        Download Now
      </a>
    </section>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const currentStep = ref(0)
</script>

<style scoped>
.fade-enter-active, .fade-leave-active {
  transition: opacity 0.3s ease;
}

.fade-enter-from, .fade-leave-to {
  opacity: 0;
}
</style>
