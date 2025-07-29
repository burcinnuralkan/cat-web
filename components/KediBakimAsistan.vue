<script setup>
defineProps({
  title: String,
  description: String,
  image: String,
  alt: String
})
</script>

<template>
    <div class="flex flex-col md:flex-row items-center gap-6 mt-8 p-6 bg-[#fff7ee] rounded-xl shadow border border-pink-100">
      <img :src="image" :alt="alt" class="w-47 h-40 rounded-xl object-cover shadow" />
      <div>
        <h3 class="text-2xl font-bold text-pink-700 mb-1">{{ title }}</h3>
        <p class="text-gray-800">
          {{ description }}
          <NuxtLink to="/iletisim" class="text-pink-600 hover:underline">bize yaz</NuxtLink>!
        </p>
      </div>
    </div>
  </template>
  
 