import { defineStore } from "pinia";
import axios from "axios";

export const useKediStore = defineStore("kedi", {
  state: () => ({
    kediler: [] as any[],
    yukleniyor: false,
    hata: null as string | null
  }),
  actions: {
    async fetchKediler() {
      this.yukleniyor = true;
      this.hata = null;
      try {
        const res = await axios.get("https://api.thecatapi.com/v1/images/search?limit=5");
        this.kediler = res.data;
      } catch (err: any) {
        this.hata = err.message;
      } finally {
        this.yukleniyor = false;
      }
    }
  }
});
