<template>
<div class="min-h-screen w-full bg-color padding-20px"><bibliotheque /></div>
</template>
<script>
import bibliotheque from "./bibliotheque.vue"
export default{
  components:{bibliotheque}
}
</script>
<style scoped>
.bg-color {
  background-color: #19163d;
  overflow-y: hidden;
}
.padding-20px {
  padding: 20px;
  padding-left: 0;
}
@media screen and (max-width: 1024px) {
  .padding-20px {
    padding-left: 20px;
  }
}
</style>
