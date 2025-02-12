<script setup>
import Navbar from './components/Navbar.vue';
import { RouterLink, RouterView } from 'vue-router'
import Footer from './components/Footer.vue'
</script>
<template>
  <Navbar />
  <RouterView />
  <Footer></Footer>
</template>
