<script setup lang="ts">
import { onMounted } from "vue";
import { useKediStore } from "~/stores/kediStore";

const kediStore = useKediStore();

onMounted(() => {
  kediStore.fetchKediler();
});
</script>

<template>
  <div>
    <h2>Kediler 🐾</h2>

    <div v-if="kediStore.yukleniyor">Yükleniyor...</div>
    <div v-if="kediStore.hata">Hata: {{ kediStore.hata }}</div>

    <div class="grid grid-cols-2 gap-4">
      <div v-for="kedi in kediStore.kediler" :key="kedi.id">
        <img :src="kedi.url" class="rounded-lg shadow" />
      </div>
    </div>
  </div>
</template>
