<template>
  <div class="relative min-h-screen bg-[#fcf8f4] py-14 px-4">
    <div class="absolute -top-28 left-1/2 -translate-x-1/2 w-[420px] h-[420px] rounded-full bg-pink-100 opacity-60 blur-2xl z-0"></div>

    <div class="relative max-w-3xl mx-auto bg-white rounded-2xl shadow-2xl p-10 border-t-8 border-pink-400">
      <div class="flex items-center justify-center gap-4 mb-6">
        <div class="bg-pink-100 rounded-full w-14 h-14 flex items-center justify-center shadow">
          <span class="text-3xl">🛡️</span>
        </div>
        <h1 class="text-3xl md:text-4xl font-extrabold text-pink-700 tracking-wide">
          KVKK Bilgilendirmesi
        </h1>
      </div>
      <p class="text-center text-gray-600 mb-8 max-w-xl mx-auto">
        Kişisel verilerinizin güvenliği ve gizliliği önceliğimizdir. KVKK kapsamındaki tüm haklarınızı aşağıda bulabilirsiniz.
      </p>
      <div class="grid gap-5 md:grid-cols-2">
        <div class="bg-[#fbe2e8] rounded-xl shadow p-6 flex flex-col gap-2 hover:shadow-lg transition">
          <div class="flex items-center gap-2 font-bold text-pink-700 text-lg">
            <span>👤</span> Veri Sorumlusu
          </div>
          <div class="text-gray-700 text-sm">
            Kedi Bakım Rehberi olarak yasalara uygun şekilde verilerinizi işleriz.
          </div>
        </div>
        <div class="bg-[#fbe2e8] rounded-xl shadow p-6 flex flex-col gap-2 hover:shadow-lg transition">
          <div class="flex items-center gap-2 font-bold text-pink-700 text-lg">
            <span>📋</span> Hangi Veriler?
          </div>
          <ul class="list-disc pl-5 text-gray-700 text-sm">
            <li>Ad, soyad, e-posta, telefon</li>
            <li>Kullanım sırasında oluşan teknik bilgiler</li>
            <li>Formlardaki içerik</li>
          </ul>
        </div>
        <div class="bg-[#fbe2e8] rounded-xl shadow p-6 flex flex-col gap-2 hover:shadow-lg transition">
          <div class="flex items-center gap-2 font-bold text-pink-700 text-lg">
            <span>⚖️</span> Amaç ve Sebep
          </div>
          <div class="text-gray-700 text-sm">
            İletişim, hizmet, yasal yükümlülük ve deneyimi iyileştirme amaçlı işlenir.
          </div>
        </div>
        <div class="bg-[#fbe2e8] rounded-xl shadow p-6 flex flex-col gap-2 hover:shadow-lg transition">
          <div class="flex items-center gap-2 font-bold text-pink-700 text-lg">
            <span>📝</span> Haklarınız
          </div>
          <ul class="list-disc pl-5 text-gray-700 text-sm">
            <li>Verinizi görme, düzeltme, silme hakkı</li>
            <li>İtiraz hakkı</li>
            <li>info@kedibakimrehberi.com üzerinden başvuru</li>
          </ul>
        </div>
      </div>
      <div class="text-center text-gray-500 mt-8 text-sm">
        Daha fazla bilgi için <NuxtLink to="/iletisim" class="text-pink-600 hover:underline">iletişim</NuxtLink> sayfamızdan bize ulaşabilirsin.
      </div>
    </div>
  </div>
</template>
