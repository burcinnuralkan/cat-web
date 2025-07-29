<script setup lang="ts">
import Flooter from '~/components/Flooter.vue';
import Navbar from '~/components/Navbar.vue';

</script>

<template>
  <Navbar/>
    <div class="min-h-screen bg-white flex flex-col">
      <NuxtPage />
    </div>
  
    <Flooter/>
  </template>