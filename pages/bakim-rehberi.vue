<template>
  <div class="min-h-screen bg-white py-12">
    <div class="max-w-4xl mx-auto bg-white rounded-2xl shadow p-8">
      <KediBakimUst
      image="/images/kedi-bakim.jpg"
      title="Kediniz İçin En İyi Bakım Rehberi"
      description="Tüyünden mamasına, sağlığından oyunlarına kadar her şey burada 🐾"
      buttonText="Kedi Sahiplen"
      buttonLink="/kedi-sahiplen"
      />
      
    <KediBakimKart />
  <BakimIpuclari/>
      <KediBakimAsistan
        title="Benimle Tanış!"
        description="Merhaba! Ben Pamuk, rehberdeki önerileri her gün deneyen minik bir asistanım 😸 Eğer bakım hakkında bir şeyleri test etmemi istiyorsan,"
        image="/images/kedi-dus.jpg"
        alt="Yapan Kedi"
      />
    </div>
  </div>
</template>

<script setup>
import BakimIpuclari from '~/components/BakimIpuclari.vue';
import KediBakimAsistan from '~/components/KediBakimAsistan.vue';
import KediBakimKart from '~/components/KediBakimKart.vue';
import KediBakimUst from '~/components/KediBakimUst.vue';


</script>
