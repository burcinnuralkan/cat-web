<script setup lang="ts">
import ButtonCard from '@/components/ButtonCard.vue'
import MultiCard from '@/components/MultiCard.vue'
import FetchData from '@/components/FetchData.vue'
import Blogs from '~/components/Blog.vue';
import Comments from '~/components/Comments.vue';
import Faq from '~/components/Faq.vue';
import Featured from '~/components/Featured.vue';
import Istatistik from '~/components/Istatistik.vue';
import Subscribe from '~/components/Subscribe.vue';

</script>
<template>
  
<div  class="flex flex-col gap-8">
<ButtonCard
  video="/videos/kedi.mp4"
  title="Kedi Bakım Rehberi"
  subtitle="Tüy, mama, sağlık her şey burada"
  button="Başla"
/>

<MultiCard
/>

<Istatistik/>
<Featured/>
<Blogs/>
<Comments/>
<Faq/>
<Subscribe/>
 
</div> 
</template>