<template>
    <nav class="flex justify-between items-center py-10 px-20">
      <div>
        <h1 class="text-6xl font-bold pr-12 text-primaryColor ">فُرصة</h1>
      </div>
      <div class="flex list-none font-cairo ">
        <li class="pl-20 "><a href="#" class="px-4 py-2 font-semibold rounded-md text-primaryColor hover:text-secondaryColor hover:bg-primaryColor ">الرئيسية</a></li>
        <li class="pl-20"><a href="#" class="px-4 py-2 font-semibold rounded-md  hover:text-secondaryColor hover:bg-primaryColor">تواصل معنا</a></li>
        <li class=""><a href="#" class="px-4 py-2 font-semibold rounded-md hover:text-secondaryColor hover:bg-primaryColor">من نحن</a></li>
      </div>
      <div class="flex list-none justify-between">
       <buttonComponent class="px-4 font-semibold rounded " buttonColor="bg-primaryColor" textClass="text-secondaryColor">انشاء حساب</buttonComponent>
       <buttonComponent class="border rounded-md " buttonColor="bg-primaryColor text-primaryColor">تسجيل الدخول</buttonComponent>
      </div>
    </nav>
  </template>

  <script setup>
import buttonComponent from './buttonComponent.vue';
</script>