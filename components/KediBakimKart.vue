<script setup>
const bakimKartlari = [
  {
    icon: '🧼',
    title: 'Tüy ve Tırnak Bakımı',
    items: [
      'Fırçalama dökülmeyi azaltır, masaj yapar.',
      'Tırnak kesimi için uygun makas kullan.',
      'Tüyde keçeleşme olursa nazikçe çöz.'
    ],
    bgColor: 'bg-[#fde2e4]'
  },
  {
    icon: '🍲',
    title: 'Sağlıklı Beslenme',
    items: [
      'Her zaman taze su bulunsun.',
      'Yaşa uygun kuru/yaş mama ver.',
      'Ev yemekleri zararlı olabilir, dikkat!'
    ],
    bgColor: 'bg-[#fce4ec]'
  },
  {
    icon: '🧴',
    title: 'Tuvalet & Hijyen',
    items: [
      'Kum kabını günlük temizle.',
      'Doğru kum seçimi hem kedi hem insan için önemli.',
      'Ağız, göz ve kulak temizliğini kontrol et.'
    ],
    bgColor: 'bg-[#e3fcec]'
  },
  {
    icon: '🐈',
    title: 'Eğitim & Davranış',
    items: [
      'Olumlu davranışları ödüllendir.',
      'Sabırlı ol, bağırma – anlayışlı ol.',
      'Oyuncaklarla aktif kalmasını sağla.'
    ],
    bgColor: 'bg-[#f3e8ff]'
  }
]
</script>

<template>
    <div class="grid grid-cols-1 md:grid-cols-2 gap-8 mt-10 mb-10">
      <div
        v-for="(kart, index) in bakimKartlari"
        :key="index"
        :class="['flex flex-col items-center rounded-xl p-6 shadow hover:scale-105 transition', kart.bgColor]"
      >
        <span class="text-4xl mb-2">{{ kart.icon }}</span>
        <h2 class="text-xl font-semibold text-pink-700 mb-1">{{ kart.title }}</h2>
        <ul class="text-gray-700 text-left list-disc pl-4 text-base">
          <li v-for="(item, i) in kart.items" :key="i">{{ item }}</li>
        </ul>
      </div>
    </div>
  </template>
  