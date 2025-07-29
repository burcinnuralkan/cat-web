<script setup>
const cards = [
  {
    image: '/images/kedi2.webp',
    title: 'Sağlık',
    subtitle: 'Aşılar, veteriner kontrolleri ve daha fazlası.',
    description: 'Kediler ilk aylarda karma aşı takvimine ihtiyaç duyar. Yılda bir kez yapılan kontroller; diş, kilo ve tüy sağlığının takibini sağlar.'
  },
  {
    image: '/images/kedi3.jpeg',
    title: 'İletişim',
    subtitle: 'Miyavların ve beden dilinin sırları.',
    description: 'Düz, yüksek miyavlama acıktığını; kısa ve kesik miyavlar ilgi istediğini gösterir. Kuyruk hareketleri de ruh hâlini anlatır.'
  },
  {
    image: '/images/kedi4.jpg',
    title: 'Oyun Zamanı',
    subtitle: 'Enerji atmak için en iyi aktiviteler.',
    description: 'İpli oyuncaklarla zıplama, tünel içinde saklanma ve ufak top oyunları kedinin avcılık içgüdüsünü tatmin eder.'
  },
  {
    image: '/images/kedi-5.jpeg',
    title: 'Doğa ve Keşif',
    subtitle: 'Açık havada güvenli bakım.',
    description: 'Dış ortamda parazit riskine karşı düzenli pire-kene önleyici sprey kullanın. Zehirli bitkilere dikkat ederek bahçe gezintisi planlayın.'
  },
  {
    image: '/images/kedi6.jpg',
    title: 'Beslenme',
    subtitle: 'Dengeli ve sağlıklı mama önerileri.',
    description: 'Yetişkin kediler için günde 40–50 kcal/kg enerji yeterlidir. Nem oranı yüksek mamanın yanında kuru mamayı porsiyonla dengeleyin.'
  },
  {
    image: '/images/kedi8.webp',
    title: 'Günlük Bakım',
    subtitle: 'Tüy tarama, tırnak kesme ve hijyen ipuçları.',
    description: 'Her gün kısa bir tüy fırçalama cilt yağ dengesini korur. Tırnak kesimini haftada bir, kulak ve diş temizliğini ayda bir kontrol edin.'
  }
];
</script><template>
  <div class="bg-white flex flex-col">
    <div class="container mx-auto px-4">
      <div class="text-center mb-10">
  <h2 class="text-2xl font-bold text-gray-800">Kedi Bakımında Öne Çıkan Konular</h2>
  <p class="text-gray-600 mt-2 text-lg">
    Kedinizin sağlığı, mutluluğu ve enerjisi için en önemli bakım ipuçlarını keşfedin.
  </p>
</div>

      <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 justify-items-center">
        <div
          v-for="card in cards"
          :key="card.title"
          class="flex flex-col items-center w-full max-w-xs bg-white rounded-lg shadow p-4"
        >
          <div class="w-80 h-80 overflow-hidden rounded-lg mb-2">
            <img
              :src="card.image"
              :alt="card.title"
              class="w-full h-full object-cover"
            />
          </div>

          <div class="font-bold text-xl text-center mb-1">{{ card.title }}</div>
          <div class="text-lg text-gray-900 text-center mb-2">{{ card.subtitle }}</div>
          <div class="text-sm text-gray-700 text-center">
            {{ card.description }}
          </div>
        </div>
      </div>
    </div>
  </div>
</template>