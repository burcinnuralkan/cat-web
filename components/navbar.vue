
<script setup>
import { ref } from 'vue'
const menuOpen = ref(false)
</script>
<template>
  <nav class="bg-white shadow fixed top-0 left-0 w-full z-10">
    <div class="container mx-auto flex items-center justify-between py-4">
      
      <NuxtLink to="/" class="text-xl font-bold text-pink-600">
        KediPortal
      </NuxtLink>

      <ul class="hidden md:flex space-x-8">
        <li><NuxtLink to="/" class="hover:text-pink-500">Anasayfa</NuxtLink></li>
        <li><NuxtLink to="/kedi-sahiplen" class="hover:text-pink-500">Sahiplen</NuxtLink></li>
        <li><NuxtLink to="/bakim-rehberi" class="hover:text-pink-500">Bakım Rehberi</NuxtLink></li>
        <li><NuxtLink to="/blog" class="hover:text-pink-500">Blog</NuxtLink></li>
        <li><NuxtLink to="/iletisim" class="hover:text-pink-500">İletişim</NuxtLink></li>
      </ul>

      <button @click="menuOpen = !menuOpen" class="md:hidden text-gray-600 text-2xl focus:outline-none">
        <span v-if="!menuOpen">☰</span>
        <span v-else>✕</span>
      </button>
    </div>

    <ul v-if="menuOpen" class="md:hidden bg-white shadow">
      <li class="py-2 px-4 border-t"><NuxtLink to="/" @click="menuOpen = false">Anasayfa</NuxtLink></li>
      <li class="py-2 px-4 border-t"><NuxtLink to="/kedi-sahiplen" @click="menuOpen = false">Sahiplen</NuxtLink></li>
      <li class="py-2 px-4 border-t"><NuxtLink to="/bakim-rehberi" @click="menuOpen = false">Bakım Rehberi</NuxtLink></li>
      <li class="py-2 px-4 border-t"><NuxtLink to="/blog" @click="menuOpen = false">Blog</NuxtLink></li>
      <li class="py-2 px-4 border-t"><NuxtLink to="/iletisim" @click="menuOpen = false">İletişim</NuxtLink></li>
    </ul>
  </nav>
</template>

