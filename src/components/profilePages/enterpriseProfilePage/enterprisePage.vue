<template>
    <div class="page-container bg-primaryColor">
      <div class="page-container color text-white p-4">
        <div>
          <backbuttonComponent >
            <div class=" top-0 mt-1 w-5 h-5 float-left">
              <img class="mr-2  w-5 h-5" src="../../../assets/svgs/arrowleft.svg" alt="Back Button">
            </div>
            العودة
          </backbuttonComponent>
        </div>
       <div>
        <centerPicture></centerPicture>
       </div>
       <div>
       <p class="font-cairo flex items-start justify-center mb-1 mr-12 ">{{ companyName || 'شركة مجال ' }}</p>
       <h2 class="font-cairo flex items-start justify-center font-bold mb-3 mr-11 ">{{ companyType || 'لتقنية المعلومات' }} </h2>
      </div>
      <div class="flex bg-secondaryColor rounded-lg container w-full">
        <formComponent></formComponent>
      </div>
      </div>
    </div>
  </template>
  
  <style scoped>
  .page-container {
    height: 100vh;
  }
  .container{
    height:65vh ;
    margin-right: 20px;
    margin-bottom: 10px;
  }
  .color{
    background-color: #2B4D75;
  }
  
  </style>
<script setup>

import formComponent from './form-component.vue';
import { ref } from 'vue';
import backbuttonComponent from './backbuttonComponent.vue';
import centerPicture from './centerPicture.vue';
const companyName = ref('');
const companyType = ref('');
const isDisabled = ref(true);
function toggleEditMode() {
  isDisabled.value = !isDisabled.value;
}
</script>