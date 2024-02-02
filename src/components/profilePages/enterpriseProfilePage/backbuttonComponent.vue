<template>
 <div>
  <button class="mt-0 float-left hover:duration-100 buttonColor textClass" 
  :class="[buttonClass, textClass]">
    <slot></slot>
  </button>
</div>
  </template>
  
  <script>
  export default {
    props: {
      buttonColor: {
        type: String,
        default: 'bg-transparent',
      },
      textClass: {
        type: String,
        default: 'text-secondaryColor',
        default: 'font-cairo',
      },
    },
  };
  </script>
 