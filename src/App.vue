<script setup>
import { ref } from 'vue';
import heroSection from './components/heroSection.vue';
import aboutUs from './components/about/aboutUs.vue';
import contactUs from './components/contact/contactUs.vue';
</script>
<template>
  <div>
<heroSection />
  </div>

  <div>
<aboutUs />
  </div>

  <div>

    <contactUs />
  </div>
</template>

<style scoped>

</style>

