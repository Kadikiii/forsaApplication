<template>
    <div class="flex justify-between w-full h-full">
         <form class="container" action="/" method="post">

        <inputComponent > <template v-slot:label>البريد الالكتروني</template></inputComponent>
        <inputComponent> <template v-slot:label> الاسم الكامل</template></inputComponent>
        <inputComponent :is-input-message="true" > <template v-slot:label>الرسالة </template></inputComponent>
        <buttonComponent class="grid place-items-center pr-32 pt-12">ارسال</buttonComponent>

    </form>

    <div class="ml-4">
        <img class="image" src="../../assets/photos/bro4.jpg" alt="">
    </div>
    </div>
   

    <div>
        <h1 class="font-cairo font-bold text-3xl text-primaryColor text-center">او يمكنك التواصل معنا على:</h1>
    </div>
    <div class=" flex text-center items-center justify-center pb-12">
         <img class="w-16 h-16" src="../../assets/svgs/Facebook.svg" alt="">
        <img class="w-16 h-16" src="../../assets/svgs/youtube.svg" alt="">
        <img class="w-16 h-16" src="../../assets/svgs/twitter.svg" alt="">
        <img class="w-16 h-16" src="../../assets/svgs/linkedin.svg" alt="">
        <img class="w-16 h-16" src="../../assets/svgs/instagram.svg" alt="">
    </div>
       

    <div>

    </div>
</template>

<script setup>
import inputComponent from './inputComponent.vue';
import buttonComponent from '../buttonComponent.vue';

</script>

<style scoped>
.container {
    width: 700px;
}
.image {
    width: 500px;
}
</style>