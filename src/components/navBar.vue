<template>
    <nav class="flex justify-between items-center py-10 px-20">
      <div>
        <h1 class="text-6xl font-bold pr-12 text-primaryColor font-cairo ">فُرصة</h1>
      </div>
      <div class="flex list-none font-cairo ">
        <li class="pl-20 "><a href="#" class="text-primaryColor hover:text-gray-600 ">الرئيسية</a></li>
        <li class="pl-20"><a href="#" class="text-secondaryColor hover:text-gray-600">تواصل معنا</a></li>
        <li class=""><a href="#" class="text-secondaryColor hover:text-gray-600">من نحن</a></li>
      </div>
      <div class="flex list-none justify-between font-cairo">
       <buttonComponent class="px-4 font-semibold rounded " buttonColor="bg-primaryColor" textClass="text-secondaryColor">انشاء حساب</buttonComponent>
       <buttonComponent class="border rounded-md " buttonColor="bg-transparent text-primaryColor">تسجيل الدخول</buttonComponent>
      </div>
    </nav>
  </template>

  <script setup>
import buttonComponent from './buttonComponent.vue';

</script>