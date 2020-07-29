<template>
            <a :href="pathFile" download>
                <div class="file">
              <img  v-if="typeFile == 'pdf' " class="profile" src="@/assets/IconFile/PNG/PDF_icon.png" />
          <img  v-else-if="typeFile == 'jpg' " class="profile" src="@/assets/IconFile/PNG/JPG_icon.png" />
          <img  v-else-if="typeFile == 'png' " class="profile" src="@/assets/IconFile/PNG/PNG_icon.png" />
          <img  v-else class="profile" src="@/assets/IconFile/PNG/Notype_icon.png" />
              <span class="namefile">{{nameFileDemo}}</span>
              <span class="sizefile">{{dataSize}}</span>
                </div>
            </a>

</template>

<script>
export default {
  data() {
    return {
      num : Number,
      dataSize : "",
      nameFileDemo :"",
      typeFile:"",
    }
  },
    props:{
        pathFile:String,
        nameFile:String,
        sizeFile:Number,
    },
    created(){
      this.checkFiletype()
    },
    mounted() {
        this.calSize()
        this.reFileName()
        
    },
    methods: {
      calSize(){
            if(this.sizeFile >= 1048576){       
                this.num = this.sizeFile/1048576;
                this.dataSize = String(this.num.toFixed(2)) +" MB" 
            }
            else if(this.sizeFile >= 1024 && this.sizeFile <= 1048576){
              this.num = this.sizeFile/1024
              this.dataSize = String(this.num.toFixed(2))+" KB"
            }
            else{                        
              this.dataSize = String(this.num.toFixed(2))+" B"
            }
      },
      reFileName(){
        if(this.nameFile.length >= 35){
            this.nameFileDemo = this.nameFile.substring(0,35)+"..." 
        }
        else{
          this.nameFileDemo = this.nameFile
        }
      },
      checkFiletype(){
      var l = this.nameFile.length
      var i
      for ( i = 0 ; i<= l;i++){
        if(this.nameFile.substring(i,i+1)=="."){
          this.typeFile = this.nameFile.substring(i+1,l)
          console.log(this.typeFile)
          break
        }
      }
    }
    },
    
}
</script>

<style scoped>
.file {
  position: relative;
  float: left;
  width: 400px;
  height: 50px;
  border: 1px solid black;
  margin-right: 20px;
  margin-bottom: 20px;
}
.file img {
  margin-left: 30px;
  padding: 5px;
  width: 50px;
  height: 50px;
}
.file .namefile {
  position: absolute;
  top: 7px;
  left: 110px;
  font-family: Montserrat;
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  line-height: 17px;
}
.file .sizefile {
  position: absolute;
  top: 28px;
  left: 110px;
  font-family: Montserrat;
  font-style: normal;
  font-weight: normal;
  font-size: 12px;
  line-height: 15px;
}
</style>