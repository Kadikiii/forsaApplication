<template>
    <div class="section">
    <h1 class="text-white font-cairo"> <slot></slot></h1>
    <p class="text-white font-cairo"> <slot name="paragraph"></slot> </p>
</div>

</template>

<style scoped>
.section {
    width: 500px;
}
</style>