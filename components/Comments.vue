<script setup>
  const comments = [
    { name: "Eylül T.", cat: "Mırmır'ın Sahibi", comment: "Harika bir deneyimdi, kedim artık çok daha mutlu!" },
    { name: "Kerem D.", cat: "Pamuk'un Sahibi", comment: "Bakım rehberleri sayesinde kedim çok daha sağlıklı." },
    { name: "Cansu B.", cat: "Tarçın'ın Sahibi", comment: "Kedi sahiplenirken verdiğiniz destek için teşekkürler!" },
  ];
  </script><template>
    <div class="py-12 bg-pink-50">
      <div class="container mx-auto">
        <div class="text-3xl font-semibold text-center mb-8">Kullanıcılarımız Ne Diyor?</div>
        <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div v-for="c in comments" :key="c.name" class="bg-white shadow rounded-lg p-6">
            <div class="italic text-gray-700">"{{ c.comment }}"</div>
            <div class="mt-4 text-right">
              <div class="font-semibold">{{ c.name }}</div>
              <div class="text-sm text-gray-500">{{ c.cat }}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  
  