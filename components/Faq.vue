<script setup>
import { ref } from 'vue'

const faqs = ref([
  { question: "Nasıl kedi sahiplenebilirim?", answer: "Sitemizdeki 'Sahiplen' bölümünden form doldurabilirsiniz.", open: false },
  { question: "Kedimi ne sıklıkta veterinere götürmeliyim?", answer: "Yılda en az 1 kez düzenli kontrol öneriyoruz.", open: false },
  { question: "Hangi mamayı tercih etmeliyim?", answer: "Beslenme rehberimize göz atarak doğru mamayı seçebilirsiniz.", open: false },
]);
</script>
<template>
    <section class="py-12">
      <div class="container mx-auto">
        <h2 class="text-3xl font-semibold text-center mb-8">Sıkça Sorulan Sorular</h2>
        <div class="max-w-2xl mx-auto">
          <div v-for="(faq, idx) in faqs" :key="idx" class="mb-4">
            <button @click="faq.open = !faq.open"
                    class="w-full text-left bg-gray-100 p-4 rounded font-medium">
              {{ faq.question }}
            </button>
            <div v-if="faq.open" class="p-4 bg-white border">
              {{ faq.answer }}
            </div>
          </div>
        </div>
      </div>
    </section>
  </template>
  
 