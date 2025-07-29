

<script setup>
defineProps({
  backgroundColor: {
    type: String,
    default: "#FDE2E4"
  }
});
</script>
<template>
  <div
    :style="{ backgroundColor: backgroundColor }"
    class="w-full rounded-[4rem] min-h-[150px] md:min-h-[200px] flex flex-col justify-center items-center py-8 md:py-20"
  >
    <div class="text-gray-800 text-xl sm:text-xl md:text-4xl font-light tracking-widest text-center mb-6 md:mb-10">
      KEDİLERLE DÖRT MEVSİM MUTLULUK SİZİ BEKLİYOR
    </div>
    <div class="flex flex-col sm:flex-row gap-4 sm:gap-6 w-full justify-center items-center">
      <button
        class="bg-white text-gray-800 px-3 py-1.5 sm:px-6 sm:py-2 md:px-8 md:py-3 rounded-full border border-gray-300 font-medium hover:bg-gray-100 transition w-11/12 sm:w-auto"
      >
        Kedi Sahiplen
      </button>
      <button
        class="bg-gray-800 text-white px-3 py-1.5 sm:px-6 sm:py-1 md:px-4 md:py-3 rounded-full font-medium shadow hover:bg-gray-700 transition w-11/12 sm:w-auto"
      >
        Kedi Bakım Rehberi
      </button>
      <button
        class="bg-white text-gray-800 px-3 py-1.5 sm:px-6 sm:py-2 md:px-8 md:py-3 rounded-full border border-gray-300 font-medium hover:bg-gray-100 transition w-11/12 sm:w-auto"
      >
        Bizi Arayın
      </button>
    </div>
  </div>
</template>
