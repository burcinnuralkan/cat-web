<script setup>
const guides = [
  {
    title: "Tüy Bakımı",
    image: "/images/king.jpg",
    subtitle: "Kedinizin tüylerini sağlıklı tutmak için ipuçları.",
  },
  {
    title: "Beslenme Rehberi",
    image: "/images/care.jpg",
    subtitle: "Doğru beslenme yöntemleriyle kedinizi sağlıklı tutun.",
  },
  {
    title: "Aşı Takvimi",
    image: "/images/health.jpg",
    subtitle: "Kediniz için önemli sağlık bilgileri ve aşı takvimi.",
  },
];
</script>
<template>
  <section class="py-12 bg-white">
    <div class="container mx-auto">
      <h2 class="text-3xl font-semibold text-center mb-8">Öne Çıkan Bakım Rehberleri</h2>
      <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        <div
          v-for="guide in guides"
          :key="guide.title"
          class="bg-white shadow rounded-lg overflow-hidden flex flex-col">
          <div>
            <img
              :src="guide.image"
              :alt="guide.title"
              class="object-cover w-full h-80"
            />
          </div>
          <div class="p-4">
            <h3 class="text-lg text-center font-semibold">{{ guide.title }}</h3>
            <p class="text-m text-center text-gray-600 mt-2">{{ guide.subtitle }}</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

