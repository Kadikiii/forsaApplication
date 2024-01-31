<template>
 <div>
  <button class="px-4 py-2 font-semibold rounded-md transition-colors ease-in-out duration-300 hover:text-primaryColor hover:bg-secondaryColor hover:border-primaryColor font-cairo" 
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
        default: 'bg-primaryColor',
      },
      textClass: {
        type: String,
        default: 'text-secondaryColor',
      },
    },
    computed: {
    buttonClass() {
      return `px-4 py-2 font-semibold rounded ${this.buttonColor} ${this.textClass}`;
    },
  },
   
  };
  </script>