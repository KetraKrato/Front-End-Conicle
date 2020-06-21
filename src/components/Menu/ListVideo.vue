<template>
  <ul>
      <li v-for="(i,index) in Videolist" :key="i" >Video{{index+1}}</li>
  </ul>
</template>

<script>
export default {
    data() {
        return {
            c : 0
        }
    },
    props:{
         Videolist : {
         type:Array,
         default: ()=> []
       },
    },
    methods:{
        Numvideo(){
            this.c=this.c+1
            return this.c 
        }
    }

}
</script>

<style scoped>
    li{
        list-style-type: none;
    }
</style>