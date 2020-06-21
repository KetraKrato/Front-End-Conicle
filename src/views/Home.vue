<template>
  <div class="home">
    <div class="V">
      <Vmenu/> 
    </div>
     <div class="H">
       <HeaderM/>
     </div>
     <Body/>
  </div>
</template>

<script>
// @ is an alias to /src
import Vmenu from "@/components/Menu/VerticalMenu.vue"
import HeaderM from "@/components/Main/Header.vue"
import Body from "@/components/Main/Body.vue"

export default {
  name: 'Home',

  components: {
    Vmenu,
    HeaderM,
    Body
  }
}
</script>
<style scoped>
    .home{
      padding:0;
      margin:0;
      height: 90%;
    }
   .V{
     position: initial;
     display: block;
     
   }
   .H{
     position: relative;
     
     left: 200px;
   }

    
</style>
