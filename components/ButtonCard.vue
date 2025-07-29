 
<script setup>
const props = defineProps({
  video: String,  
  title: String,
  subtitle: String,
  button: String
})
 
const videoSrc = props.video.startsWith('/') ? props.video : '/' + props.video
 
const alert1 = () => {
  alert("Minik dostun için harika bilgiler geliyor 😻");
}
</script>
<style scoped>
.buttonCard {
  position: relative;
  width: 100%;
  height: 100%;
  padding: 0;
}
 
.buttonCard .video {
  width: 100%;
  height: auto;
  max-height: 500px;
  object-fit: cover;
  display: block;
}
 
.buttonCard .ust {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  padding: 1rem;
}
 
.buttonCard .title {
  color: aliceblue;
  font-size: 3rem;
  font-weight: bold;
  padding: 0.5rem 1rem;
  border-radius: 8px;
  margin-bottom: 0.5rem;
}
 
.buttonCard .subtitle {
  font-size: 1rem;
  background-color: rgba(255, 255, 255, 0.85);
  padding: 0.3rem 0.8rem;
  border-radius: 2px;
  margin-bottom: 1rem;
}
 
.buttonCard button {
  background-color: #3e404b;
  color: white;
  font-weight: bold;
  padding: 0.5rem 1rem;
  border: none;
  border-radius: 5px;
  cursor: pointer;
 
}

.buttonCard button:hover {
  background-color: #686f90;
}
 
@media (max-width: 640px) {
  .buttonCard .title {
    font-size: 1.3rem;  
  }
 
  .buttonCard .subtitle {
    font-size: 0.9rem;
  }
 
  .buttonCard button {
    font-size: 0.85rem;
  }
}
</style><template>
  <div class="buttonCard bg-[#fcf8f4] flex flex-col">
    <video :src="videoSrc" class="video" autoplay loop muted playsinline></video>
    <div class="ust">
      <div class="title">{{ title }}</div>
      <div class="subtitle">{{ subtitle }}</div>
      <button @click="alert1" style="display:flex;align-items:center;gap:8px;">
  <span style="font-size:1.5em;">🐾</span>
  <span>Başla</span>
  <span style="font-size:1.5em;">🐾</span>
</button>
    </div>
  </div>
</template>
