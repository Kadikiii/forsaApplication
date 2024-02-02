<script setup>
import { ref } from 'vue';
import heroSection from './components/heroSection.vue';
import aboutUs from './components/about/aboutUs.vue';
import contactUs from './components/contact/contactUs.vue';
import enterprisePage from './components/profilePages/enterpriseProfilePage/enterprisePage.vue'
import userProfile from './components/profilePages/userProfilePage/userProfile.vue'
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

