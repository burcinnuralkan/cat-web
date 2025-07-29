<template>
  <div class="min-h-screen bg-white py-10">
    <div class="max-w-2xl mx-auto mb-8 flex flex-col items-center">
      <img src="/images/catlaptop.jpg" alt="Kedi Blog" class="w-60 h-30 rounded-2xl shadow-lg border-4 border-pink-100 mb-3 object-cover" />
      <h1 class="text-4xl font-extrabold text-pink-700 mb-2">Kedi Blog</h1>
      <p class="text-lg text-gray-700 text-center mb-1">En yeni yazılar, kullanıcı hikayeleri ve güncel bakım tüyoları burada!</p>
    </div>
    <div class="max-w-2xl mx-auto grid gap-6">
      <div v-for="post in posts" :key="post.title"
        class="bg-white rounded-xl shadow-lg hover:shadow-2xl transition cursor-pointer flex flex-col p-5 group border border-pink-50">
        <div class="flex items-center gap-3 mb-2">
          <span class="text-pink-600 text-2xl">{{ post.icon }}</span>
          <h2 class="font-bold text-lg text-pink-700 group-hover:underline">{{ post.title }}</h2>
        </div>
        <p class="text-gray-700 text-sm mb-1">{{ post.summary }}</p>
        <span class="text-xs text-gray-400">{{ post.date }}</span>
      </div>
    </div>
    <div class="max-w-2xl mx-auto mt-10 text-center text-gray-700">
      <span class="bg-pink-50 px-4 py-2 rounded-lg shadow-sm">Sen de bloga yazı eklemek ister misin? <NuxtLink to="/iletisim" class="text-pink-600 hover:underline">İletişim</NuxtLink> sayfamızdan bize ulaş!</span>
    </div>
  </div>
</template>

<script setup>
const posts = [
  {
    icon: "🧼",
    title: "Kedilerde Tüy Dökülmesi ve Çözüm Yolları",
    summary: "Mevsim geçişlerinde yoğun tüy dökülmesinin sebepleri ve önleme yöntemleri.",
    date: "Temmuz 2025"
  },
  {
    icon: "🐱",
    title: "Yavru Kedi Bakımı: İlk Aylar",
    summary: "Yeni doğan kediler için beslenme, temizlik ve oyun önerileri.",
    date: "Haziran 2025"
  },
  {
    icon: "🚗",
    title: "Kediyle Güvenli Seyahat",
    summary: "Taşıma çantası, alışma süreci ve yolculuk öncesi hazırlıklar.",
    date: "Mayıs 2025"
  }
]
</script>
