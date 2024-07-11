<template >
    <div>
        <Nav/>
        <RouterView/>
        <Footer/>
    </div>
</template>
<script setup>
import { RouterView } from 'vue-router';
import Nav from '../Nav/Nav.vue';
import Footer from '../Footer/Footer.vue';
</script>
<style scoped>
    
</style>