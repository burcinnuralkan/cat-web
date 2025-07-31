
const kediIsimleri = [
    "Pamuk", "Zeytin", "Boncuk", "Tarçın", "Karamel", "Mırmır",
    "Fındık", "Şila", "Duman", "Minnoş", "Pati", "Çıtır"
  ];
  
  function shuffleArray<T>(array: T[]): T[] {
    return [...array].sort(() => Math.random() - 0.5);
  }
  
  export function getUniqueKediIsimleri(count: number): string[] {
    const karisik = shuffleArray(kediIsimleri);
    return karisik.slice(0, count);
  }
  