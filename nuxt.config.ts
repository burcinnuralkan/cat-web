
  export default defineNuxtConfig({
    
    modules: ['@pinia/nuxt'],
    postcss: {
      plugins: {
        tailwindcss: {},
        autoprefixer: {},
      },
    },

  css: ['@/assets/css/tailwind.css']
})




