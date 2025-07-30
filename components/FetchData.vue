<script setup lang="ts">
import { onMounted } from "vue";
import { useKediStore } from "~/stores/catStore"; // DİKKAT: catStore değil, kediStore olmalı!

const kediStore = useKediStore();

onMounted(() => {
  kediStore.fetchKediler();
});
</script>

<template>
  <div class="bg-white p-4 rounded-xl shadow space-y-4">
    <div class="flex items-center justify-between">
      <h2 class="text-xl font-semibold">Rastgele Kediler 🐾</h2>
      <button
        class="bg-purple-500 hover:bg-purple-600 text-white text-sm px-4 py-2 rounded"
        @click="kediStore.fetchKediler"
      >
        Yenile 🔄
      </button>
    </div>

    <div v-if="kediStore.yukleniyor" class="text-gray-600">Yükleniyor...</div>
    <div v-if="kediStore.hata" class="text-red-500">Hata: {{ kediStore.hata }}</div>

    <div v-if="!kediStore.yukleniyor && !kediStore.hata" class="grid grid-cols-2 md:grid-cols-3 gap-4">
      <div
        v-for="kedi in kediStore.kediler"
        :key="kedi.id"
        class="overflow-hidden rounded-xl shadow hover:scale-105 transition"
      >
        <img :src="kedi.url" class="w-full h-64 object-cover" alt="Kedi görseli" />
      </div>
    </div>
  </div>
</template>
