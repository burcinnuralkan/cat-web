<template>
  <div class="min-h-screen bg-white py-10">
    <div class="max-w-3xl mx-auto flex flex-col items-center bg-gradient-to-tr from-pink-50 to-white rounded-3xl shadow-lg p-8 mb-10">
      <img
        src="/images/kedi-sahiplenme-3.jpg"
        alt="Kedi Sahiplen"
        class="w-80 h-36 object-cover shadow mb-4 border-4 border-pink-100"
      />
      <h1 class="text-4xl font-extrabold text-pink-700 mb-3 tracking-tight">Bir Kediye Yuva Ol!</h1>
      <p class="text-gray-700 text-lg text-center mb-2">
        Yeni bir dostla hayatını güzelleştir. Hem ona, hem kendine yepyeni bir başlangıç ver!
      </p>
      <div class="flex gap-2 mt-2">
        <span class="bg-pink-100 text-pink-700 text-xs px-3 py-1 rounded-full font-semibold">#sahiplen</span>
        <span class="bg-yellow-50 text-yellow-700 text-xs px-3 py-1 rounded-full font-semibold">#mutluluk</span>
        <span class="bg-blue-50 text-blue-700 text-xs px-3 py-1 rounded-full font-semibold">#yeniarkadaş</span>
      </div>
    </div>
    <div class="max-w-3xl mx-auto mt-16 mb-8 px-4">
      <input
        v-model="search"
        type="text"
        placeholder="Kedi adı veya cinsi gir..."
        class="w-full px-4 py-2 border border-pink-200 rounded-lg shadow-sm focus:ring-pink-300 focus:outline-none"
      />
    </div>
    <div class="max-w-5xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 px-4">
      <div
        v-for="cat in filteredCats"
        :key="cat.name"
        class="bg-white shadow-md rounded-xl p-4 flex flex-col items-center hover:shadow-xl transition"
      >
        <img :src="cat.image" alt="kedi" class="w-40 h-40 object-cover rounded-lg mb-2" />
        <h3 class="text-xl font-semibold text-pink-700">{{ cat.name }}</h3>
        <p class="text-gray-600">{{ cat.breed }} - {{ cat.age }} yaşında</p>
        <span class="text-sm mt-1 text-gray-500">{{ cat.gender }}</span>
        <button
          class="mt-3 bg-pink-100 text-pink-700 text-sm px-4 py-1 rounded-full hover:bg-pink-200 transition"
        >
          Sahiplen
        </button>
      </div>
    </div>
    <div class="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 mt-12 px-4">
      <div class="bg-white rounded-2xl shadow-lg p-6 flex flex-col gap-2">
        <h2 class="text-2xl font-bold text-pink-600 mb-2 flex items-center gap-2">
          <span>🐾</span> Sahiplenme Süreci
        </h2>
        <ul class="list-disc pl-6 text-gray-700 mb-2">
          <li>Kedinin karakteri ve sağlık durumu hakkında bilgi al.</li>
          <li>Evinde güvenli bir alan oluştur.</li>
          <li>Veterinerde ilk kontrolleri ve aşıları tamamla.</li>
          <li>Onu ailenin bir üyesi olarak yavaşça ortama alıştır.</li>
        </ul>
        <div class="text-xs text-gray-500 mt-3">
          <span class="inline-block bg-pink-100 text-pink-600 rounded px-2 py-0.5 mr-1">Sakinlik</span>
          <span class="inline-block bg-pink-100 text-pink-600 rounded px-2 py-0.5">Sabır</span>
        </div>
      </div>

      <div class="bg-white rounded-2xl shadow-lg p-6 flex flex-col gap-2">
        <h2 class="text-2xl font-bold text-pink-600 mb-2 flex items-center gap-2">
          <span>💡</span> Sık Sorulanlar
        </h2>
        <details class="mb-1">
          <summary class="cursor-pointer font-medium text-gray-800 hover:text-pink-600 transition">
            Evde başka evcil hayvan varsa?
          </summary>
          <div class="pl-2 text-gray-700 text-sm">
            Yavaş tanıştırma, ayrı mama ve kum kabı önerilir. Zaman ver!
          </div>
        </details>
        <details class="mb-1">
          <summary class="cursor-pointer font-medium text-gray-800 hover:text-pink-600 transition">
            Sahiplenme ücretli mi?
          </summary>
          <div class="pl-2 text-gray-700 text-sm">
            Genellikle sahiplendirme ücretsizdir. Sadece aşı-mama katkı bedeli istenebilir.
          </div>
        </details>
        <details>
          <summary class="cursor-pointer font-medium text-gray-800 hover:text-pink-600 transition">
            Kedinin tuvalet eğitimi?
          </summary>
          <div class="pl-2 text-gray-700 text-sm">
            Temiz, sakin ve ulaşılabilir bir kum kabı yeterlidir. Çoğu kedi içgüdüsel olarak alışır.
          </div>
        </details>
        <div class="flex items-center gap-2 mt-4">
          <NuxtLink to="/iletisim" class="text-pink-600 hover:underline text-sm font-medium flex items-center gap-1">
            <span>Destek Al</span> <span>→</span>
          </NuxtLink>
        </div>
      </div>
    </div>
    <div class="max-w-3xl mx-auto mt-12 text-center text-gray-500 text-sm">
      <span class="bg-pink-100 px-4 py-2 rounded-xl shadow-sm">
        Her ay <b>25+</b> patili dostumuz yeni bir yuva buldu! Sen de mutlu bir hikayeye ortak olabilirsin.
      </span>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'

const search = ref('')

const cats = ref([
  { name: 'Miskin', breed: 'Tekir', age: 2, gender: 'Dişi', image: '/images/tekir.jpg' },
  { name: 'Zıpır', breed: 'Scottish Fold', age: 1, gender: 'Erkek', image: '/images/sco.jpg' },
  { name: 'Pamuk', breed: 'Van Kedisi', age: 3, gender: 'Dişi', image: '/images/vankedi.jpg' }
])

const filteredCats = computed(() =>
  cats.value.filter(cat =>
    (cat.name + ' ' + cat.breed).toLowerCase().includes(search.value.toLowerCase())
  )
)
</script>
