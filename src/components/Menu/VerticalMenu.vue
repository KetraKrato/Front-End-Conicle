<template>
  <div id="Vmenu">
      <ul class="menulist">
        <li class="HeaderMenu"><ul>Home</ul></li>

        <HeadMenu Headertitle="CourseUxUI" :Numtitle="['Chapter1','Chapter2']" />
        <HeadMenu Headertitle = "CourseWeb" :Numtitle="['Chapter1','Chapter2','Chapter3','Chapter4']" />
        <HeadMenu Headertitle = "CoureseBackEnd" :Numtitle="['Chapter1','Chapter2','Chapter3','Chapter4','Chapter5']" />
        <HeadMenu Headertitle = "CourseBackEnd" :Numtitle="['Chapter1','Chapter2','Chapter3','Chapter4']" />
        
        <li class="HeaderMenu">Contact</li>
        <li class="HeaderMenu">Help</li>
        
        <div>
        
                      
         </div>   
    </ul>
    
  </div>
  
  
</template>

<script>
import HeadMenu from '@/components/Menu/HeadMenu.vue'
export default {
       mounted(){
                },
      data() {
        return { 
            Chapter2 : "Chapter2",
            showC1 : false,
            displayC1 :'none' 
                }
            },
  computed: {
    changeDisplay(){
          return this.displayC1;
          
    }
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
    components:{
        HeadMenu
    }
}
</script>
<style scoped>
    .home{
      padding:0;
      margin:0;
      height: 100%;
    }
    .menulist{
      padding: 10px;
      margin: 0px;
      list-style-type: none;
      background-color: antiquewhite;
      width: 200px;
      height: 1000px;
      float: left;
      font-size: 15px;
      font-family: 'Courier New', Courier, monospace;
      position: fixed;
    }
    .menulist li{
      text-decoration: none;
      overflow: auto;
     
    }
    
    .Chapter{
      transition: 0.5s;
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