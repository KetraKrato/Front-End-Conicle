<template>
   <div class="NumChapter" >
       <div @click="isShow">{{Chaptertitle}}</div>

          
        </div>
</template>

<script>

export default {
    props:{
            Chaptertitle:String,
            NumVideo1 : {
                  type:Array,
                default: ()=> ['Video1','Video2'],
                
            },
            NumVideo2 : {
                  type:Array,
                default: ()=> ['Video1','Video2','Video3'],    
            },
            },
 data() {
    return {  
      showC1 : false,
      displayC1 :'none' ,
    }
  },
  created(){
 
    },

  computed: {
    changeDisplay(){
          return this.displayC1;
          
    }
  },

  methods: {
 
    },

}
</script>

<style scoped>
.NumChapter{

        left: 0px;
        margin-top: 20px;
        margin-bottom: 20px;
        list-style-type: none;
    }

</style>