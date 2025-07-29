<template>
  <div class="max-w-3xl mx-auto py-12 px-4">
    <h1 class="text-3xl font-bold text-pink-700 mb-4">Sıkça Sorulan Sorular</h1>
    <img src="/images/think.jpg" alt="Kedi SSS" class="w-40 mx-auto mb-6" />
    <ul class="list-disc pl-6 text-gray-700 mb-8">
      <li>Kedi sahiplenmek ücretli mi?</li>
      <li>Hangi mamayı tercih etmeliyim?</li>
      <li>Kedim neden tüy döküyor?</li>
      <li>Kedimin tuvalet eğitimi için ne yapmalıyım?</li>
    </ul>
    <section class="bg-white rounded-lg shadow px-4 py-8">
      <h2 class="text-2xl font-extrabold text-pink-700 mb-4">Detaylı Cevaplar</h2>
      <details class="mb-3">
        <summary class="font-semibold cursor-pointer text-gray-900">Kedim neden sürekli miyavlıyor?</summary>
        <div class="pl-4 text-gray-700">
          Açlık, ilgi isteği, stres veya sağlık sorunları olabilir. Davranışı sürekli ise veteriner kontrolü önerilir.
        </div>
      </details>
      <details class="mb-3">
        <summary class="font-semibold cursor-pointer text-gray-900">Evdeki çiçekler kedime zararlı mı?</summary>
        <div class="pl-4 text-gray-700">
          Zambak, difenbahya, filodendron gibi birçok süs bitkisi kediler için toksiktir. Bitki almadan önce araştırmalısın!
        </div>
      </details>
      <details class="mb-3">
        <summary class="font-semibold cursor-pointer text-gray-900">Kedime banyo yaptırmalı mıyım?</summary>
        <div class="pl-4 text-gray-700">
          Çoğu kedi kendi temizliğini yapar, ancak çok kirlendiyse veya deri problemi varsa özel şampuan ile veteriner önerisiyle yıkanabilir.
        </div>
      </details>
      <p class="mt-6 text-center text-gray-700">
        Diğer sorularınız için <NuxtLink to="/iletisim" class="text-pink-600 hover:underline">bize ulaşabilirsiniz</NuxtLink>.
      </p>
    </section>
  </div>
</template>
