<template>
  <div id="sv">
      
      <div v-if="IdStepShow != DataStep.id" class="subvideo">
          <div class="subv">
              <img @click="selectN" :src="DataStep.cover_file"/>
          <!--  <video
              id="my-video"
              class="video-js"
              controls
              poster="@/assets/logo.png"
              height="183"
              preload="auto"
              data-setup="{}"
            >
              <source
                src="@/assets/videotest_1080p.mp4"
                type="video/mp4"
                res="1080"
                label="1080"
              />
                <source  src="@/assets/videotest_720p.mp4" type="video/mp4" res = '720' label='720' /> 
            </video> -->

            <div class="videodetail">
              <h3>{{DataStep.name}}</h3>
              <span>{{DataStep.textcontent}}</span>
            </div>
          </div>
        </div>

  </div>
</template>

<script>
import axios from "axios"
export default {
data() {
    return {
        IdStepShow:Number,
        DataStep:{},
    }
},
props:{
    IdStep:Number,
},
 mounted(){
     this.IdStepShow = window.localStorage.getItem("IdStep");
      console.log(this.IdStep)
      axios
        .get("http://127.0.0.1:8000/sop/step/"+this.IdStep+"/",{
          headers: {
            Authorization: `token ${window.localStorage.getItem("token")}`,
          },
        })
        .then((response) => {
          this.DataStep = response.data;
          console.log(response.data);
          console.log("DataStep")
          console.log(this.DataStep);
        })
        .catch((err) => {
          if (err.response) {
            this.change();
         //   console.error(err.response.data);
            console.error(err.response.status);
       //     console.error(err.response.headers);
            if (err.response.status == 400) {
              //   alert("Email or Password Wrong")
            } else if (err.response.status == 404) {
              //    alert("404 not found")
            }
          }
        });
 },
 methods:{
     selectN(){
         window.localStorage.setItem("IdStep", this.DataStep.id);
            this.NameSession = window.localStorage.getItem("NameSession");
          this.NameCourse = window.localStorage.getItem("NameCourse");
          this.$router.push({ name: "learning", params:{ NameCourse: this.NameCourse,NameSession: this.NameSession,NameStep:this.DataStep.name}  });
          location.reload();
     }
 }

}
</script>

<style scoped>
.subv {
  position: relative;
}
.videodetail {
  position: absolute;
  width: 200px;
  left: 320px;
  top: 10px;
}
img{
    width: 300px;
    height: 180px;
    margin-bottom: 30px;
}
</style>