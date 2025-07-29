
<script setup>
const tips = [
  'Fırçalama, kedinizi hem sakinleştirir hem tüylerini güzelleştirir.',
  'Mama kabını seramik seçmek daha sağlıklı olur.',
  'Göz ve kulakları haftada 1 kontrol et.',
  'Kedinizi su içmeye teşvik etmek için çeşme tipi suluk kullanabilirsin.',
  'Oyun saati onun zihinsel sağlığı için çok önemlidir.',
  'Kum kabını rüzgâr almayan, sakin bir yere koy.',
]
</script>

<style scoped>
.no-scrollbar::-webkit-scrollbar {
  display: none;
}
.no-scrollbar {
  -ms-overflow-style: none;
  scrollbar-width: none;
}
</style>

<template>
    <div class="py-12 bg-[#fff5f7]">
      <div class="max-w-5xl mx-auto px-4">
        <h2 class="text-xl md:text-3xl font-bold text-pink-700 mb-6 text-center">
          🐾 Mini Bakım İpuçları
        </h2>
  
        <div class="flex gap-4 overflow-x-auto no-scrollbar py-2 px-1">
          <div
            v-for="(tip, index) in tips"
            :key="index"
            class="min-w-[260px] flex-shrink-0 bg-white rounded-xl shadow-md p-4 border border-pink-100 hover:scale-105 transition"
          >
            <p class="text-gray-800 text-base">{{ tip }}</p>
          </div>
        </div>
      </div>
    </div>
  </template>
  