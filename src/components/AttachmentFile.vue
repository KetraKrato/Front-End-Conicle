<template>
  <div id="attach">
 <div class="body">
     <a :href="pathFile" download>
        <div class="onecourse">
          <img  v-if="typeFile == 'pdf' " class="profile" src="@/assets/IconFile/PNG/PDF_icon.png" />
          <img  v-else-if="typeFile == 'jpg' " class="profile" src="@/assets/IconFile/PNG/JPG_icon.png" />
          <img  v-else-if="typeFile == 'png' " class="profile" src="@/assets/IconFile/PNG/PNG_icon.png" />
          <img  v-else class="profile" src="@/assets/IconFile/PNG/Notype_icon.png" />
          <p class="detail">{{Name}}</p>
          <p class="time">{{dataDate | formatDateNoTime}}</p>
        </div>
     </a>
  </div>
  </div>
</template>

<script>

export default {
  
  data() {
    return {
      typeFile:"PDF",
    }
  },
props:{
    pathFile:String,
    Name:String,
    dataDate:String,

},
created(){
  this.checkFiletype()
},

methods: {    
    checkFiletype(){
      var l = this.Name.length
      var i
      for ( i = 0 ; i<= l;i++){
        if(this.Name.substring(i,i+1)=="."){
          this.typeFile = this.Name.substring(i+1,l)
          console.log(this.typeFile)
          break
        }
      }
    }
},
}
</script>

<style scoped>
.body {
  position: relative;
  height: 80px;
  margin-top: 20px;
  cursor: pointer;
}
img.profile {
  position: relative;
  left: 65px;
  width: 65px;
  height: 65px;
 /* border: 1px solid black;*/

}
.detail {
  position: absolute;
  top: 25px;
  left: 250px;

  font-family: Montserrat;
  font-style: normal;
  font-weight: normal;
  font-size: 18px;
  line-height: 22px;
}
.time {
  position: absolute;
  top: 25px;
  right: 85px;

  font-family: Montserrat;
  font-style: normal;
  font-weight: normal;
  font-size: 18px;
  line-height: 22px;
}
</style>