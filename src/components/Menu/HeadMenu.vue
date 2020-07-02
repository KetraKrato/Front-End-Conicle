<template>
  
      <li class="HeaderMenu" ><ul>
          <div @click="isShow">{{Headertitle}}<img src="@/assets/next.png" @click="isShow" v-bind:class="[showC1 ? 'on' : 'off']" /></div>
   <!--   <span v-for="item in items" :key="item">
        <span v-html="item[0]"></span></span>
      <button v-on:click="add">+</button> -->
          <div id="chapter">
            <Chapter v-for="i in Numtitle" :key="i"  :Chaptertitle="i" :NumVideo="NumVideo" v-bind:style="{ display:changeDisplay }" />
            

            </div>
      
          </ul>
        </li>

</template>

<script>
import Chapter from '@/components/Menu/Chapter.vue'
export default {
    
mounted(){

   },
   props: {
       Headertitle : String,
       Numtitle : {
         type:Array,
         default: ()=> ['Chapter1','Chapter2']
       },
      NumVideo : {
         type:Array,
         default: ()=> []
       },
   },
    data() {
    return { 
      showC1 : false,
      displayC1 :"none" ,
      items:[],
      item:[]
    }
  },
  created(){
    
    },
  computed: {
    changeDisplay(){
          return this.displayC1;    
    },

  },
  methods: {

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
  components: {
    Chapter
  }
}
</script>

<style scoped>
    .HeaderMenu{
      margin-top: 29px;
        list-style-type: none;
        font-family: Montserrat;
font-style: normal;
font-weight: bold;
font-size: 18px;
line-height: 22px;
cursor: pointer;
    }
    #chapter{
      font-family: Montserrat;
font-style: normal;
font-weight: normal;
font-size: 18px;
line-height: 22px;
    }
    img{
      position: absolute;
      top: 49px;
      right: 20px;
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