<template>
            <a :href="pathFile" download>
                <div class="file">
              <img src="@/assets/pdf.png" />
              <span class="namefile">{{nameFile}}</span>
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
    }
  },
    props:{
        pathFile:String,
        nameFile:String,
        sizeFile:Number,
    },
    mounted() {
        this.calSize()
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