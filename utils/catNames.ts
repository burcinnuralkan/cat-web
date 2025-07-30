// utils/catNames.ts
const kediIsimleri = [
    "Pamuk", "Zeytin", "Boncuk", "Tarçın", "Karamel", "Mırmır",
    "Fındık", "Şila", "Duman", "Minnoş", "Pati", "Çıtır"
  ];
  
  // Array'ı karıştıran küçük fonksiyon
  function shuffleArray<T>(array: T[]): T[] {
    return [...array].sort(() => Math.random() - 0.5);
  }
  
  // Dışa aktarılan fonksiyon: tekrar etmeyen N isim getirir
  export function getUniqueKediIsimleri(count: number): string[] {
    const karisik = shuffleArray(kediIsimleri);
    return karisik.slice(0, count);
  }
  