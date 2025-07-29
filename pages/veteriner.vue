<template>
  <div class="min-h-screen bg-[#fcf8f4] py-10">
    <div class="max-w-2xl mx-auto bg-white rounded-2xl shadow-xl p-8">
      <div class="flex items-center gap-4 mb-4">
        <span class="text-4xl">👩‍⚕️</span>
        <h1 class="text-3xl font-extrabold text-pink-700">Veteriner Desteği & Sağlık</h1>
      </div>
      <p class="text-lg text-gray-700 mb-4">
        Kedinin sağlığı için düzenli veteriner kontrolleri, aşılar ve acil durumlarda ne yapılacağını bilmek çok önemlidir.
      </p>
      <div class="grid md:grid-cols-2 gap-6">
        <div>
          <h2 class="font-bold text-pink-600 mb-2">🚨 Acil Durumlar</h2>
          <ul class="list-disc pl-5 text-gray-800 mb-3 text-sm">
            <li>Ani iştahsızlık, halsizlik, sürekli kusma</li>
            <li>Yaralanma, travma, düşme</li>
            <li>Solunum zorluğu, ağızdan nefes alma</li>
            <li>Uzun süren ishal ya da kabızlık</li>
          </ul>
        </div>
        <div>
          <h2 class="font-bold text-pink-600 mb-2">💉 Aşı Takvimi</h2>
          <ol class="list-decimal pl-5 text-gray-800 mb-3 text-sm">
            <li>İlk karma aşı: 2 aylıkken</li>
            <li>Lösemi aşısı: 2,5-3 aylıkken</li>
            <li>Kuduz aşısı: 3 aylıkken</li>
            <li>Her yıl tekrar aşı ve kontrol</li>
          </ol>
        </div>
      </div>
      <div class="mt-7">
        <h2 class="font-bold text-pink-600 mb-2">Sıkça Sorulanlar</h2>
        <details class="mb-2">
          <summary class="font-medium cursor-pointer text-gray-800 hover:text-pink-600 transition">Kedim kustu, ne yapmalıyım?</summary>
          <div class="pl-3 text-gray-700 text-sm">Sürekli ve yoğun kusma varsa mutlaka veterinerine danış.</div>
        </details>
        <details>
          <summary class="font-medium cursor-pointer text-gray-800 hover:text-pink-600 transition">Aşıyı kaçırdım, ne yapmalıyım?</summary>
          <div class="pl-3 text-gray-700 text-sm">Geciken aşı için en kısa sürede veterinere danışmalısın.</div>
        </details>
      </div>
      <div class="mt-8 text-center">
        <span class="inline-block bg-pink-100 px-4 py-2 rounded-lg text-pink-700 font-medium">
          Uzman veteriner desteği ve <NuxtLink to="/iletisim" class="hover:underline">online danışma</NuxtLink> için bize yaz!
        </span>
      </div>
    </div>
  </div>
</template>
