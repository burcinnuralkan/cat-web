<script setup>
  const stats = [
    {
      icon: '🐾',
      number: '1.245',
      title: 'Sahiplendirme',
      desc: 'Yuvaya kavuşan minik dostlarımız',
      link: '/kedi-sahiplen'
    },
    {
      icon: '😻',
      number: '%98',
      title: 'Kullanıcı Desteği',
      desc: 'Topluluğumuzda memnuniyet',
      link: '/iletisim'
    },
    {
      icon: '👩‍⚕️',
      number: '12',
      title: 'Veteriner',
      desc: 'Uzman kadro ve online destek',
      link: '/veteriner'
    },
    {
      icon: '📚',
      number: '72',
      title: 'Blog',
      desc: 'Kedi bakımı ve güncel bilgiler',
      link: '/blog'
    }
  ]
  </script>
  
<template>
    <section class="w-full py-12 bg-white">
      <div class="container mx-auto px-4">
        <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 text-center">
          <NuxtLink
            v-for="stat in stats"
            :key="stat.title"
            :to="stat.link"
            tabindex="0"
            class="bg-[#fcf8f4] rounded-xl py-8 shadow flex flex-col items-center hover:shadow-xl hover:scale-105 transition block focus:outline-none focus:ring-2 focus:ring-pink-400"
          >
            <div class="text-4xl mb-2">{{ stat.icon }}</div>
            <div class="text-3xl font-extrabold text-pink-600 mb-1">{{ stat.number }}</div>
            <div class="text-lg font-semibold text-gray-700 mb-1">{{ stat.title }}</div>
            <div class="text-sm text-gray-500 mb-1">{{ stat.desc }}</div>
            <span class="mt-2 text-xs text-pink-600 font-medium">Detaylı Bilgi</span>
          </NuxtLink>
        </div>
      </div>
    </section>
  </template>
  
  