<template>
  <div>
    <!-- Page Header -->
    <section class="section-container text-center bg-gradient-to-b from-primary-light/5 to-transparent dark:from-primary-dark/5">
      <h1 class="text-5xl md:text-6xl font-display font-bold mb-6 text-text-light dark:text-text-dark">
        How-To Guides
      </h1>
      <p class="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
        Step-by-step instructions for getting the most out of PhoneCallZombie.
      </p>
    </section>

    <!-- Guides Grid -->
    <section class="section-container">
      <div class="grid md:grid-cols-2 gap-8">
        <!-- Guide 1 -->
        <div class="card p-8">
          <div class="w-12 h-12 bg-primary-light/20 dark:bg-primary-dark/30 rounded-lg flex items-center justify-center mb-4">
            <span class="text-2xl">📱</span>
          </div>
          <h3 class="text-2xl font-display font-bold mb-3 text-text-light dark:text-text-dark">
            Set Your Default Tab
          </h3>
          <p class="text-gray-700 dark:text-gray-300 mb-6">
            Customize which screen loads when you open PhoneCallZombie.
          </p>
          <ol class="space-y-3 text-sm text-gray-700 dark:text-gray-300">
            <li class="flex gap-3">
              <span class="font-bold text-primary-light dark:text-primary-dark flex-shrink-0">1.</span>
              <span>Open Settings in the app</span>
            </li>
            <li class="flex gap-3">
              <span class="font-bold text-primary-light dark:text-primary-dark flex-shrink-0">2.</span>
              <span>Tap "Default Tab"</span>
            </li>
            <li class="flex gap-3">
              <span class="font-bold text-primary-light dark:text-primary-dark flex-shrink-0">3.</span>
              <span>Select your preferred tab (Contacts, Recent, Keypad, or Favorites)</span>
            </li>
            <li class="flex gap-3">
              <span class="font-bold text-primary-light dark:text-primary-dark flex-shrink-0">4.</span>
              <span>Changes apply immediately</span>
            </li>
          </ol>
        </div>

        <!-- Guide 2 -->
        <div class="card p-8">
          <div class="w-12 h-12 bg-primary-light/20 dark:bg-primary-dark/30 rounded-lg flex items-center justify-center mb-4">
            <span class="text-2xl">🔍</span>
          </div>
          <h3 class="text-2xl font-display font-bold mb-3 text-text-light dark:text-text-dark">
            Enable Search History
          </h3>
          <p class="text-gray-700 dark:text-gray-300 mb-6">
            Keep track of your recent searches or disable for privacy.
          </p>
          <ol class="space-y-3 text-sm text-gray-700 dark:text-gray-300">
            <li class="flex gap-3">
              <span class="font-bold text-primary-light dark:text-primary-dark flex-shrink-0">1.</span>
              <span>Go to Settings</span>
            </li>
            <li class="flex gap-3">
              <span class="font-bold text-primary-light dark:text-primary-dark flex-shrink-0">2.</span>
              <span>Find "Search History" toggle</span>
            </li>
            <li class="flex gap-3">
              <span class="font-bold text-primary-light dark:text-primary-dark flex-shrink-0">3.</span>
              <span>Turn ON to enable (or OFF to disable)</span>
            </li>
            <li class="flex gap-3">
              <span class="font-bold text-primary-light dark:text-primary-dark flex-shrink-0">4.</span>
              <span>Your preference is saved instantly</span>
            </li>
          </ol>
        </div>

        <!-- Guide 3 -->
        <div class="card p-8">
          <div class="w-12 h-12 bg-primary-light/20 dark:bg-primary-dark/30 rounded-lg flex items-center justify-center mb-4">
            <span class="text-2xl">💬</span>
          </div>
          <h3 class="text-2xl font-display font-bold mb-3 text-text-light dark:text-text-dark">
            Setup Auto Replies
          </h3>
          <p class="text-gray-700 dark:text-gray-300 mb-6">
            Configure automatic messages when you're unavailable.
          </p>
          <ol class="space-y-3 text-sm text-gray-700 dark:text-gray-300">
            <li class="flex gap-3">
              <span class="font-bold text-primary-light dark:text-primary-dark flex-shrink-0">1.</span>
              <span>Open Settings</span>
            </li>
            <li class="flex gap-3">
              <span class="font-bold text-primary-light dark:text-primary-dark flex-shrink-0">2.</span>
              <span>Select "Auto Replies"</span>
            </li>
            <li class="flex gap-3">
              <span class="font-bold text-primary-light dark:text-primary-dark flex-shrink-0">3.</span>
              <span>Choose a template or create a custom message</span>
            </li>
            <li class="flex gap-3">
              <span class="font-bold text-primary-light dark:text-primary-dark flex-shrink-0">4.</span>
              <span>Toggle ON when needed, OFF when done</span>
            </li>
          </ol>
        </div>

        <!-- Guide 4 -->
        <div class="card p-8">
          <div class="w-12 h-12 bg-primary-light/20 dark:bg-primary-dark/30 rounded-lg flex items-center justify-center mb-4">
            <span class="text-2xl">📥</span>
          </div>
          <h3 class="text-2xl font-display font-bold mb-3 text-text-light dark:text-text-dark">
            Import Contacts
          </h3>
          <p class="text-gray-700 dark:text-gray-300 mb-6">
            Transfer contacts from another phone or application.
          </p>
          <ol class="space-y-3 text-sm text-gray-700 dark:text-gray-300">
            <li class="flex gap-3">
              <span class="font-bold text-primary-light dark:text-primary-dark flex-shrink-0">1.</span>
              <span>Open PhoneCallZombie and go to Settings</span>
            </li>
            <li class="flex gap-3">
              <span class="font-bold text-primary-light dark:text-primary-dark flex-shrink-0">2.</span>
              <span>Tap "Import/Export Contacts"</span>
            </li>
            <li class="flex gap-3">
              <span class="font-bold text-primary-light dark:text-primary-dark flex-shrink-0">3.</span>
              <span>Select "Import from VCF" and choose your file</span>
            </li>
            <li class="flex gap-3">
              <span class="font-bold text-primary-light dark:text-primary-dark flex-shrink-0">4.</span>
              <span>Confirm and watch your contacts populate</span>
            </li>
          </ol>
        </div>

        <!-- Guide 5 -->
        <div class="card p-8">
          <div class="w-12 h-12 bg-primary-light/20 dark:bg-primary-dark/30 rounded-lg flex items-center justify-center mb-4">
            <span class="text-2xl">💾</span>
          </div>
          <h3 class="text-2xl font-display font-bold mb-3 text-text-light dark:text-text-dark">
            Backup Your Contacts
          </h3>
          <p class="text-gray-700 dark:text-gray-300 mb-6">
            Create a backup of your contacts for safekeeping.
          </p>
          <ol class="space-y-3 text-sm text-gray-700 dark:text-gray-300">
            <li class="flex gap-3">
              <span class="font-bold text-primary-light dark:text-primary-dark flex-shrink-0">1.</span>
              <span>Go to Settings → Import/Export Contacts</span>
            </li>
            <li class="flex gap-3">
              <span class="font-bold text-primary-light dark:text-primary-dark flex-shrink-0">2.</span>
              <span>Tap "Export to VCF"</span>
            </li>
            <li class="flex gap-3">
              <span class="font-bold text-primary-light dark:text-primary-dark flex-shrink-0">3.</span>
              <span>Choose a location to save your backup file</span>
            </li>
            <li class="flex gap-3">
              <span class="font-bold text-primary-light dark:text-primary-dark flex-shrink-0">4.</span>
              <span>Your backup is complete and secure</span>
            </li>
          </ol>
        </div>

        <!-- Guide 6 -->
        <div class="card p-8">
          <div class="w-12 h-12 bg-primary-light/20 dark:bg-primary-dark/30 rounded-lg flex items-center justify-center mb-4">
            <span class="text-2xl">♻️</span>
          </div>
          <h3 class="text-2xl font-display font-bold mb-3 text-text-light dark:text-text-dark">
            Recover Deleted Contacts
          </h3>
          <p class="text-gray-700 dark:text-gray-300 mb-6">
            Restore accidentally deleted contacts from Recycle Bin.
          </p>
          <ol class="space-y-3 text-sm text-gray-700 dark:text-gray-300">
            <li class="flex gap-3">
              <span class="font-bold text-primary-light dark:text-primary-dark flex-shrink-0">1.</span>
              <span>Open the Recycle Bin tab in the app</span>
            </li>
            <li class="flex gap-3">
              <span class="font-bold text-primary-light dark:text-primary-dark flex-shrink-0">2.</span>
              <span>Browse recently deleted contacts</span>
            </li>
            <li class="flex gap-3">
              <span class="font-bold text-primary-light dark:text-primary-dark flex-shrink-0">3.</span>
              <span>Tap the contact you want to restore</span>
            </li>
            <li class="flex gap-3">
              <span class="font-bold text-primary-light dark:text-primary-dark flex-shrink-0">4.</span>
              <span>Select "Restore" to bring it back</span>
            </li>
          </ol>
        </div>
      </div>
    </section>

    <!-- FAQ Section -->
    <section class="section-container bg-gradient-to-b from-primary-light/5 to-transparent dark:from-primary-dark/5 rounded-2xl">
      <h2 class="text-4xl font-display font-bold text-center mb-12 text-text-light dark:text-text-dark">
        Frequently Asked Questions
      </h2>

      <div class="space-y-4 max-w-3xl mx-auto">
        <details class="card p-6 group">
          <summary class="font-semibold cursor-pointer flex items-center justify-between text-text-light dark:text-text-dark">
            How do I uninstall PhoneCallZombie?
            <svg class="w-5 h-5 transform transition-transform group-open:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
          </summary>
          <p class="mt-4 text-gray-700 dark:text-gray-300">
            Go to Settings → Apps → PhoneCallZombie → Uninstall. Your data will be preserved in the Recycle Bin for 30 days even after uninstalling.
          </p>
        </details>

        <details class="card p-6 group">
          <summary class="font-semibold cursor-pointer flex items-center justify-between text-text-light dark:text-text-dark">
            Will PhoneCallZombie work with my contacts?
            <svg class="w-5 h-5 transform transition-transform group-open:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
          </summary>
          <p class="mt-4 text-gray-700 dark:text-gray-300">
            Yes! PhoneCallZombie works with all contact types on your Android device, including synced contacts from Google, local device contacts, and contacts from other apps.
          </p>
        </details>

        <details class="card p-6 group">
          <summary class="font-semibold cursor-pointer flex items-center justify-between text-text-light dark:text-text-dark">
            Is my data safe and private?
            <svg class="w-5 h-5 transform transition-transform group-open:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
          </summary>
          <p class="mt-4 text-gray-700 dark:text-gray-300">
            Absolutely. PhoneCallZombie is designed with privacy first. All data stays on your device, and you have full control over what features are enabled or disabled.
          </p>
        </details>

        <details class="card p-6 group">
          <summary class="font-semibold cursor-pointer flex items-center justify-between text-text-light dark:text-text-dark">
            What permissions does PhoneCallZombie need?
            <svg class="w-5 h-5 transform transition-transform group-open:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
          </summary>
          <p class="mt-4 text-gray-700 dark:text-gray-300">
            PhoneCallZombie needs permissions to access your contacts, make calls, and send SMS/messages. All permissions are required for core functionality and can be managed individually in Settings.
          </p>
        </details>
      </div>
    </section>

    <!-- CTA Section -->
    <section class="section-container bg-gradient-to-r from-primary-light/10 to-primary-dark/10 dark:from-primary-light/5 dark:to-primary-dark/5 rounded-2xl text-center">
      <h2 class="text-4xl font-display font-bold mb-6 text-text-light dark:text-text-dark">
        Ready to Master PhoneCallZombie?
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
</script>

<style scoped>
</style>
