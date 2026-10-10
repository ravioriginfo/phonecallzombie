<template>
  <div>
    <!-- Page Header -->
    <section class="section-container text-center bg-gradient-to-b from-primary-light/5 to-transparent dark:from-primary-dark/5">
      <h1 class="text-5xl md:text-6xl font-display font-bold mb-6 text-text-light dark:text-text-dark">
        Powerful Features
      </h1>
      <p class="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
        Discover everything PhoneCallZombie can do to transform your calling experience.
      </p>
    </section>

    <!-- Feature Grid -->
    <section class="section-container">
      <div class="space-y-12">
        <!-- Feature 1: Default Tab -->
        <div class="grid md:grid-cols-2 gap-8 items-center">
          <div class="order-2 md:order-1">
            <h2 class="text-4xl font-display font-bold mb-4 text-text-light dark:text-text-dark">
              Default Tab
            </h2>
            <p class="text-gray-700 dark:text-gray-300 mb-6 leading-relaxed">
              Personalize your dialer experience by choosing which tab loads when you open the app. Select from Contacts, Recent, Keypad, or Favorites – whatever works best for you.
            </p>
            <ul class="space-y-3 mb-6">
              <li class="flex items-start gap-3">
                <span class="w-6 h-6 bg-primary-light dark:bg-primary-dark rounded-full flex items-center justify-center text-white text-sm flex-shrink-0 mt-1">✓</span>
                <span class="text-gray-700 dark:text-gray-300">Instant access to your preferred view</span>
              </li>
              <li class="flex items-start gap-3">
                <span class="w-6 h-6 bg-primary-light dark:bg-primary-dark rounded-full flex items-center justify-center text-white text-sm flex-shrink-0 mt-1">✓</span>
                <span class="text-gray-700 dark:text-gray-300">Save time with quick access to frequently used features</span>
              </li>
            </ul>
          </div>
          <div class="order-1 md:order-2">
            <img :src="defaultTabImg" alt="Default Tab Feature" class="w-full rounded-xl shadow-lg border border-gray-200 dark:border-white dark:border-opacity-10">
          </div>
        </div>

        <!-- Feature 2: Recent Searches -->
        <div class="grid md:grid-cols-2 gap-8 items-center">
          <div>
            <h2 class="text-4xl font-display font-bold mb-4 text-text-light dark:text-text-dark">
              Recent Searches
            </h2>
            <p class="text-gray-700 dark:text-gray-300 mb-6 leading-relaxed">
              Search history is turned on by default for convenience, but you have complete control. Disable it anytime to protect your privacy.
            </p>
            <ul class="space-y-3 mb-6">
              <li class="flex items-start gap-3">
                <span class="w-6 h-6 bg-primary-light dark:bg-primary-dark rounded-full flex items-center justify-center text-white text-sm flex-shrink-0 mt-1">✓</span>
                <span class="text-gray-700 dark:text-gray-300">Toggle search history on/off in settings</span>
              </li>
              <li class="flex items-start gap-3">
                <span class="w-6 h-6 bg-primary-light dark:bg-primary-dark rounded-full flex items-center justify-center text-white text-sm flex-shrink-0 mt-1">✓</span>
                <span class="text-gray-700 dark:text-gray-300">Privacy-first design puts you in control</span>
              </li>
            </ul>
          </div>
          <div>
            <img :src="recentSearchesImg" alt="Recent Searches Feature" class="w-full rounded-xl shadow-lg border border-gray-200 dark:border-white dark:border-opacity-10">
          </div>
        </div>

        <!-- Feature 3: Auto Replies -->
        <div class="grid md:grid-cols-2 gap-8 items-center">
          <div class="order-2 md:order-1">
            <h2 class="text-4xl font-display font-bold mb-4 text-text-light dark:text-text-dark">
              Auto Replies
            </h2>
            <p class="text-gray-700 dark:text-gray-300 mb-6 leading-relaxed">
              Automatically send messages to incoming calls when you're busy. Choose from predefined messages or customize your own to fit any situation.
            </p>
            <ul class="space-y-3 mb-6">
              <li class="flex items-start gap-3">
                <span class="w-6 h-6 bg-primary-light dark:bg-primary-dark rounded-full flex items-center justify-center text-white text-sm flex-shrink-0 mt-1">✓</span>
                <span class="text-gray-700 dark:text-gray-300">Pre-made templates for quick setup</span>
              </li>
              <li class="flex items-start gap-3">
                <span class="w-6 h-6 bg-primary-light dark:bg-primary-dark rounded-full flex items-center justify-center text-white text-sm flex-shrink-0 mt-1">✓</span>
                <span class="text-gray-700 dark:text-gray-300">Create custom messages for different situations</span>
              </li>
              <li class="flex items-start gap-3">
                <span class="w-6 h-6 bg-primary-light dark:bg-primary-dark rounded-full flex items-center justify-center text-white text-sm flex-shrink-0 mt-1">✓</span>
                <span class="text-gray-700 dark:text-gray-300">Perfect for meetings, driving, or any busy time</span>
              </li>
            </ul>
          </div>
          <div class="order-1 md:order-2">
            <img :src="autoRepliesImg" alt="Auto Replies Feature" class="w-full rounded-xl shadow-lg border border-gray-200 dark:border-white dark:border-opacity-10">
          </div>
        </div>

        <!-- Feature 4: Call Handling -->
        <div class="grid md:grid-cols-2 gap-8 items-center">
          <div>
            <h2 class="text-4xl font-display font-bold mb-4 text-text-light dark:text-text-dark">
              Call Handling
            </h2>
            <p class="text-gray-700 dark:text-gray-300 mb-6 leading-relaxed">
              Advanced call management options including reply functionality, call screening, and detailed configuration for handling incoming calls exactly how you want.
            </p>
            <ul class="space-y-3 mb-6">
              <li class="flex items-start gap-3">
                <span class="w-6 h-6 bg-primary-light dark:bg-primary-dark rounded-full flex items-center justify-center text-white text-sm flex-shrink-0 mt-1">✓</span>
                <span class="text-gray-700 dark:text-gray-300">Send quick replies to declined calls</span>
              </li>
              <li class="flex items-start gap-3">
                <span class="w-6 h-6 bg-primary-light dark:bg-primary-dark rounded-full flex items-center justify-center text-white text-sm flex-shrink-0 mt-1">✓</span>
                <span class="text-gray-700 dark:text-gray-300">Screen and filter calls intelligently</span>
              </li>
            </ul>
          </div>
          <div>
            <img :src="callHandleImg" alt="Call Handling Feature" class="w-full rounded-xl shadow-lg border border-gray-200 dark:border-white dark:border-opacity-10">
          </div>
        </div>

        <!-- Feature 5: Import/Export -->
        <div class="grid md:grid-cols-2 gap-8 items-center">
          <div class="order-2 md:order-1">
            <h2 class="text-4xl font-display font-bold mb-4 text-text-light dark:text-text-dark">
              Import/Export Contacts
            </h2>
            <p class="text-gray-700 dark:text-gray-300 mb-6 leading-relaxed">
              Backup your contacts to VCF files or import them from other devices and applications. Keep your data safe and portable.
            </p>
            <ul class="space-y-3 mb-6">
              <li class="flex items-start gap-3">
                <span class="w-6 h-6 bg-primary-light dark:bg-primary-dark rounded-full flex items-center justify-center text-white text-sm flex-shrink-0 mt-1">✓</span>
                <span class="text-gray-700 dark:text-gray-300">Export to standard VCF format</span>
              </li>
              <li class="flex items-start gap-3">
                <span class="w-6 h-6 bg-primary-light dark:bg-primary-dark rounded-full flex items-center justify-center text-white text-sm flex-shrink-0 mt-1">✓</span>
                <span class="text-gray-700 dark:text-gray-300">Import contacts from any VCF file</span>
              </li>
              <li class="flex items-start gap-3">
                <span class="w-6 h-6 bg-primary-light dark:bg-primary-dark rounded-full flex items-center justify-center text-white text-sm flex-shrink-0 mt-1">✓</span>
                <span class="text-gray-700 dark:text-gray-300">Migrate seamlessly between devices</span>
              </li>
            </ul>
          </div>
          <div class="order-1 md:order-2">
            <img :src="importExportImg" alt="Import/Export Feature" class="w-full rounded-xl shadow-lg border border-gray-200 dark:border-white dark:border-opacity-10">
          </div>
        </div>

        <!-- Feature 6: Recycle Bin -->
        <div class="grid md:grid-cols-2 gap-8 items-center">
          <div>
            <h2 class="text-4xl font-display font-bold mb-4 text-text-light dark:text-text-dark">
              Recycle Bin
            </h2>
            <p class="text-gray-700 dark:text-gray-300 mb-6 leading-relaxed">
              Accidentally deleted a contact? No problem. Recover it from the Recycle Bin within 30 days. Your important data is always just one tap away.
            </p>
            <ul class="space-y-3 mb-6">
              <li class="flex items-start gap-3">
                <span class="w-6 h-6 bg-primary-light dark:bg-primary-dark rounded-full flex items-center justify-center text-white text-sm flex-shrink-0 mt-1">✓</span>
                <span class="text-gray-700 dark:text-gray-300">30-day recovery window</span>
              </li>
              <li class="flex items-start gap-3">
                <span class="w-6 h-6 bg-primary-light dark:bg-primary-dark rounded-full flex items-center justify-center text-white text-sm flex-shrink-0 mt-1">✓</span>
                <span class="text-gray-700 dark:text-gray-300">One-tap restore for deleted contacts</span>
              </li>
              <li class="flex items-start gap-3">
                <span class="w-6 h-6 bg-primary-light dark:bg-primary-dark rounded-full flex items-center justify-center text-white text-sm flex-shrink-0 mt-1">✓</span>
                <span class="text-gray-700 dark:text-gray-300">Peace of mind for accidental deletions</span>
              </li>
            </ul>
          </div>
          <div>
            <img :src="recycleBinImg" alt="Recycle Bin Feature" class="w-full rounded-xl shadow-lg border border-gray-200 dark:border-white dark:border-opacity-10">
          </div>
        </div>
      </div>
    </section>

    <!-- CTA Section -->
    <section class="section-container bg-gradient-to-r from-primary-light/10 to-primary-dark/10 dark:from-primary-light/5 dark:to-primary-dark/5 rounded-2xl text-center">
      <h2 class="text-4xl font-display font-bold mb-6 text-text-light dark:text-text-dark">
        Experience These Features Today
      </h2>
      <a
        href="https://play.google.com/store/apps/details?id=com.phonecall.phone.contact.callerdialer"
        target="_blank"
        rel="noopener noreferrer"
        class="btn-primary text-lg inline-block"
      >
        Download PhoneCallZombie
      </a>
    </section>
  </div>
</template>

<script setup>
const defaultTabImg = '/assets/default_tab_pref.png'
const recentSearchesImg = '/assets/recent_search_feature.png'
const autoRepliesImg = '/assets/call_handle_edit_top.png'
const callHandleImg = '/assets/replay_call_handling.png'
const importExportImg = '/assets/imp_exp_screen.png'
const recycleBinImg = '/assets/recycle_bin_feature_ux.png'
</script>

<style scoped>
</style>
