<template>
   <li class="NumChapter" >
       <ul><div @click="isShow">{{Chaptertitle}}<img src="@/assets/next.png" @click="isShow" v-bind:class="[showC1 ? 'on' : 'off']" /></div>
   <!--    <span v-for="item in items" :key="item"><span v-html="item[0]"></span></span>-->
        <div v-if="Chaptertitle == 'Chapter1'">
            <ListVideo  :Videolist="this.NumVideo1"   v-bind:style="{ display: changeDisplay}" /> 
        </div>
        <div v-else-if="Chaptertitle == 'Chapter2'">
            <ListVideo  :Videolist="this.NumVideo2"   v-bind:style="{ display: changeDisplay}" />  
        </div>     
          </ul>
        </li>
</template>

<script>
import ListVideo from '@/components/Menu/ListVideo.vue'
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
 /*   add(){
      this.item = ['<ListVideo v-bind:style="{ display: changeDisplay}" />']
      this.items.push(this.items)
    },*/

      isShow(){

      this.showC1 =!this.showC1
       if(this.showC1 == false){
         console.log(this.showC1)
          this.displayC1 = 'none'
        }
        else{
        console.log(this.showC1)
          this.displayC1 = 'block'
            }
        },
    },

    components:{
        ListVideo
    }
}
</script>

<style scoped>
.NumChapter{
        list-style-type: none;
    }
    .off{
         padding: 0px;
         padding-top: 2px;
         margin-left: 2px;
         height: 10px;
         width: 10px;
         transition:all 0.1s ease-in-out;
     }
     .on{
        padding: 0px;
         padding-top: 2px;
         margin-left: 2px;
         height: 10px;
         width: 10px;
         transform: rotate(90deg);
         transition:all 0.1s ease-in-out;
     } 
</style>