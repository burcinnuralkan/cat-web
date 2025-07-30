<template>
  <div class="min-h-screen bg-white py-10">
    <!-- Başlık ve banner -->
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

    <!-- Arama alanı -->
    <div class="max-w-3xl mx-auto mt-16 mb-8 px-4">
      <input
        v-model="search"
        type="text"
        placeholder="Kedi adı veya cinsi gir..."
        class="w-full px-4 py-2 border border-pink-200 rounded-lg shadow-sm focus:ring-pink-300 focus:outline-none"
      />
    </div>

    <!-- Sabit Kediler -->
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

    <!-- 🎉 Rastgele Kediler (Pinia'dan gelen) -->
    <section class="max-w-6xl mx-auto mt-24 px-4 space-y-4">
      <div class="flex justify-between items-center">
        <h2 class="text-2xl font-bold text-pink-700">Seni Bekleyen Diğer Minikler 🐾</h2>
        <button
          @click="store.fetchKediler"
          class="bg-orange-500 hover:bg-orange-600 text-white text-sm px-4 py-2 rounded"
        >
          Yeni Kediler Getir 🔄
        </button>
      </div>

      <div v-if="store.yukleniyor">Yükleniyor...</div>
      <div v-if="store.hata" class="text-red-500">Hata: {{ store.hata }}</div>

      <div
        v-if="!store.yukleniyor"
        class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6"
      >
        <div
          v-for="kedi in store.kediler"
          :key="kedi.id"
          class="rounded-lg overflow-hidden shadow hover:scale-105 transition bg-white"
        >
          <img :src="kedi.url" class="w-full h-64 object-cover" alt="Kedi" />
          <div class="p-4 text-center">
            <h3 class="text-lg font-semibold text-pink-700">{{ kedi.isim }}</h3>
            <p class="text-sm text-gray-500">Yeni yuvasını bekliyor 🏠</p>
            <button
              class="mt-2 bg-green-500 hover:bg-green-600 text-white px-4 py-1 rounded text-sm"
            >
              Sahiplen ✨
            </button>
          </div>
        </div>
      </div>
    </section>

    <!-- Sahiplenme Süreci ve SSS -->
    <div class="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 mt-16 px-4">
      <!-- ... senin süreç ve sık sorulanlar bölümü aynı kalabilir ... -->
      <!-- değişiklik gerekirse söyle ekleyelim -->
    </div>

    <div class="max-w-3xl mx-auto mt-12 text-center text-gray-500 text-sm">
      <span class="bg-pink-100 px-4 py-2 rounded-xl shadow-sm">
        Her ay <b>25+</b> patili dostumuz yeni bir yuva buldu! Sen de mutlu bir hikayeye ortak olabilirsin.
      </span>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed, onMounted } from 'vue'
import { useKediStore } from '~/stores/catStore'

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

// 🐾 Rastgele kediler için Pinia store
const store = useKediStore()

onMounted(() => {
  store.fetchKediler()
})
</script>
