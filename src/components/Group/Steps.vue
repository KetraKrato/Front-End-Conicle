<template>
  <div id="steps">
    <div class="imgblock" @click="selectStep">
      <img class="imggroup" :src="step.cover_file" />
    </div>
    <div class="detail">
      <p>{{step.name}}</p>
      <p>{{step.textcontent}}</p>
    </div>
  </div>
</template>

<script>
import axios from "axios"
export default {
    data() {
      return {
        step:{
          id:Number,
          name:"",
          textcontent:"",
          link:"",
          cover_type:Number,
          cover_file:"",
          post_id:Number,
          step_file:""
        }
      }
    },
    props:{
      IdStep:Number,
      Cover:String
    },
    mounted() {
      console.log(this.IdStep)
      axios
        .get("http://127.0.0.1:8000/sop/step/"+this.IdStep+"/",{
          headers: {
            Authorization: `token ${window.localStorage.getItem("token")}`,
          },
        })
        .then((response) => {
          this.step = response.data;
          console.log(response.data);
          console.log(this.step);
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
    methods: {
        selectStep(){
            this.$router.push({ path: "/learning" });
        }
    },
};
</script>

<style scoped>
#steps {
  position: relative;
  margin-top: 16px;
  margin-bottom: 16px;
  width: 1460px;
  height: 160px;
}
.imgblock img {
  position: absolute;
  width: 280px;
  height: 160px;
  left: 0px;
  top: 0px;
  border: 1px solid black;
}
.imgblock {
  position: absolute;
  width: 280px;
  height: 160px;
  left: 0px;
  top: 0px;
  cursor: pointer;
  
}
.detail {
  position: absolute;
  width: 1164px;
  height: 160px;
  left: 296px;
  top: 0px;
  border: 1px solid black;
  border-radius: 5px;
  background-color: white;
  padding-top: 24px;
  padding-bottom: 24px;
  padding-left: 40px;
  padding-right: 40px;
}
</style>