<template>
  <div>
    <!-- Hero Section -->
    <Hero />

    <!-- Features Overview Section -->
    <section class="section-container bg-white dark:bg-white dark:bg-opacity-5">
      <h2 class="text-4xl md:text-5xl font-display font-bold text-center mb-4 text-text-light dark:text-text-dark">
        Meet Your New Dialer
      </h2>
      <p class="text-center text-gray-600 dark:text-gray-400 max-w-2xl mx-auto mb-16">
        Six powerful features designed to make calling and contact management a breeze.
      </p>

      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <FeatureCard
          v-for="feature in features"
          :key="feature.id"
          :title="feature.title"
          :shortDescription="feature.shortDescription"
          :description="feature.description"
          :useCase="feature.useCase"
          :image="feature.image"
        />
      </div>

      <div class="text-center mt-12">
        <router-link to="/features" class="btn-primary text-lg inline-block">
          Explore All Features
        </router-link>
      </div>
    </section>

    <!-- CTA Section -->
    <section class="section-container bg-gradient-to-r from-primary-light/10 to-primary-dark/10 dark:from-primary-light/5 dark:to-primary-dark/5 rounded-2xl">
      <div class="text-center max-w-2xl mx-auto">
        <h2 class="text-4xl md:text-5xl font-display font-bold mb-6 text-text-light dark:text-text-dark">
          Ready to Upgrade Your Dialer?
        </h2>
        <p class="text-lg text-gray-600 dark:text-gray-400 mb-8">
          Join thousands of users who have already transformed their calling experience.
        </p>
        <a
          href="https://play.google.com/store/apps/details?id=com.phonecall.phone.contact.callerdialer"
          target="_blank"
          rel="noopener noreferrer"
          class="btn-primary text-lg inline-block"
        >
          Get PhoneCallZombie Now
        </a>
      </div>
    </section>
  </div>
</template>

<script setup>
import Hero from '../components/Hero.vue'
import FeatureCard from '../components/FeatureCard.vue'

const features = [
  {
    id: 1,
    title: 'Default Tab',
    shortDescription: 'Choose your startup screen in Settings',
    description: 'Customize which tab appears when you open the dialer. Whether you prefer Recent, Contacts, or Keypad, PhoneCallZombie lets you choose.',
    useCase: 'Perfect for power users who want quick access to their most-used feature.',
    image: '/assets/default_tab_pref.png'
  },
  {
    id: 2,
    title: 'Recent Searches',
    shortDescription: 'Privacy-friendly search history toggle',
    description: 'Keep track of your recent searches or disable history for privacy. Full control over your search data.',
    useCase: 'Great for professionals who need to maintain privacy and clear history easily.',
    image: '/assets/recent_search_feature.png'
  },
  {
    id: 3,
    title: 'Auto Replies',
    shortDescription: 'Busy mode with ready-made messages',
    description: 'Set automatic replies for when you are busy. Choose from pre-made messages or create your own.',
    useCase: 'Ideal for busy professionals who want to let callers know they are unavailable.',
    image: '/assets/call_handle_edit_top.png'
  },
  {
    id: 4,
    title: 'Call Handling',
    shortDescription: 'Detailed call configuration options',
    description: 'Advanced call management with reply options, forwarding, and call screening.',
    useCase: 'For users who need fine-grained control over how their calls are managed.',
    image: '/assets/replay_call_handling.png'
  },
  {
    id: 5,
    title: 'Import/Export Contacts',
    shortDescription: 'VCF file backup and restore',
    description: 'Backup your contacts to VCF files or import contacts from other sources. Never lose your data.',
    useCase: 'Essential for migrating between devices or maintaining backup copies.',
    image: '/assets/imp_exp_screen.png'
  },
  {
    id: 6,
    title: 'Recycle Bin',
    shortDescription: 'Restore deleted contacts within 30 days',
    description: 'Accidentally deleted a contact? No problem. Restore it from the Recycle Bin within 30 days.',
    useCase: 'Provides peace of mind for users who accidentally delete important contacts.',
    image: '/assets/recycle_bin_feature_ux.png'
  }
]
</script>

<style scoped>
</style>
