<script setup>
  const posts = [
    { title: "Yeni Kedi Sahiplenmenin Püf Noktaları", image: "/images/cat.jpg", subtitle: "Kedi sahiplenirken bilmeniz gereken temel noktalar." },
    { title: "Kedinizin Sevdiği Oyuncaklar", image: "/images/oyun2.jpg", subtitle: "Kedinizi mutlu edecek en iyi oyuncaklar." },
    { title: "Evde Kedi Eğitimi", image: "/images/oyun.jpg", subtitle: "Basit yöntemlerle kedinizi eğitin." },
  ];
  </script>
  <template>
    <section class="py-12">
      <div class="container mx-auto">
        <div class="text-3xl font-semibold text-center mb-8">Son Blog Yazıları</div>
        <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div v-for="post in posts" :key="post.title" class="bg-white shadow rounded-lg overflow-hidden">
            <img :src="post.image" :alt="post.title" class="h-60 w-full object-cover">
            <div class="p-4">
              <div class="text-lg text-center font-semibold">{{ post.title }}</div>
              <div class="text-sm text-center text-gray-600 mt-2">{{ post.subtitle }}</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </template>
  
  