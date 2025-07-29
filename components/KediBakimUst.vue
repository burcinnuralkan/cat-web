<script setup>
defineProps({
  image: String,
  title: String,
  description: String,
  buttonText: String,
  buttonLink: String
})
</script>
<template>
    <section class="relative w-full min-h-[400px] md:min-h-[500px] overflow-hidden flex items-center justify-center px-6 md:px-12 py-12 md:py-20 rounded-b-3xl shadow-lg">
      <img
        :src="image"
        :alt="title"
        class="absolute inset-0 w-full h-full object-cover opacity-70"
      />
      <div class="relative z-10 text-center max-w-2xl">
        <h1 class="text-xl md:text-3xl font-extrabold text-pink-700 mb-4 drop-shadow-lg">
          {{ title }}
        </h1>
        <p class="text-lg md:text-xl text-gray-800 mb-6">
          {{ description }}
        </p>
        <NuxtLink
          :to="buttonLink"
          class="bg-pink-100 hover:bg-pink-300 text-gray px-6 py-3 rounded-full text-md font-medium transition"
        >
          {{ buttonText }}
        </NuxtLink>
      </div>
    </section>
  </template>
  
 
  