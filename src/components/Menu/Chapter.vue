<template>
   <div class="NumChapter" >
       <div @click="select">{{NameGroup}}</div>

          
        </div>
</template>

<script>

export default {
    props:{
            Chaptertitle:String,
            NameGroup : String,
            IdGroup:Number,
     /*       NumVideo2 : {
                  type:Array,
                default: ()=> ['Video1','Video2','Video3'],    
            },*/
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
select() {
      console.log("SelectGroup");
      window.localStorage.setItem("IdGroup",this.IdGroup);
      window.localStorage.setItem("NameGroup",this.NameGroup);
      this.$router.push({ params:{ NameGroup: this.NameGroup }, name: "main" });
      location.reload();
    //  this.$router.push({ path: "/main" });
    }
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