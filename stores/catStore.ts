import { defineStore } from "pinia";
import axios from "axios";
import { getUniqueKediIsimleri } from "~/utils/catNames";

export const useKediStore = defineStore("kedi", {
  state: () => ({
    kediler: [] as { url: string; id: string; isim: string }[],
    yukleniyor: false,
    hata: null as string | null
  }),
  actions: {
    async fetchKediler() {
      this.yukleniyor = true;
      this.hata = null;

      try {
        const res = await axios.get("https://api.thecatapi.com/v1/images/search?limit=10");
        const kediVerileri = res.data.slice(0, 6); 

        const isimler = getUniqueKediIsimleri(6); 

        this.kediler = kediVerileri.map((kedi: any, index: number) => ({
          url: kedi.url,
          id: kedi.id,
          isim: isimler[index] || `Kedi-${index + 1}`
        }));
      } catch (err: any) {
        this.hata = err.message;
      } finally {
        this.yukleniyor = false;
      }
    }
  }
});
