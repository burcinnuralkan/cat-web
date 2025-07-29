<template>
  <div class="min-h-screen bg-white flex flex-col justify-center items-center py-16">
    <div class="bg-white bg-opacity-80 rounded-3xl shadow-2xl p-8 max-w-xl w-full flex flex-col items-center">
      <img src="/images/phone2.jpg" alt="Kediyle İletişim" class="w-60 h-40 object-cover rounded-xl border-4 border-pink-100 mb-4 shadow" />
      <h1 class="text-3xl font-extrabold text-pink-700 mb-2 tracking-tight">Bize Ulaş!</h1>
      <p class="text-gray-700 text-center mb-6">Her türlü soru, öneri ve işbirliği için bize WhatsApp, telefon veya e-posta yoluyla ulaşabilirsin.</p>
      <div class="w-full flex flex-col gap-3 mb-6">
        <div class="flex items-center gap-3 bg-pink-50 px-4 py-2 rounded-lg">
          <span class="text-green-500 text-2xl">💬</span>
          <span class="font-bold text-gray-800">WhatsApp:</span>
          <a href="https://wa.me/905456178336" class="text-pink-700 font-semibold hover:underline ml-1">+90 533 850 45 00</a>
        </div>
        <div class="flex items-center gap-3 bg-yellow-50 px-4 py-2 rounded-lg">
          <span class="text-yellow-500 text-2xl">📞</span>
          <span class="font-bold text-gray-800">Çağrı Merkezi:</span>
          <a href="tel:+903926504500" class="text-pink-700 font-semibold hover:underline ml-1">+90 392 650 45 00</a>
        </div>
        <div class="flex items-center gap-3 bg-blue-50 px-4 py-2 rounded-lg">
          <span class="text-blue-500 text-2xl">📧</span>
          <span class="font-bold text-gray-800">E-posta:</span>
          <a href="mailto:info@kedibakimrehberi.com" class="text-pink-700 font-semibold hover:underline ml-1">info@kedibakimrehberi.com</a>
        </div>
      </div>
      <NuxtLink to="/iletisim-form" class="mt-4 px-6 py-2 bg-pink-600 text-white rounded-full shadow hover:bg-pink-700 transition font-semibold">
        İletişim Formu ile Yaz
      </NuxtLink>
    </div>
  </div>
</template>
