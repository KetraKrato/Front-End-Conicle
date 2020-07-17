<template>
  <div id="session">
    <div class="subcourse">
      <h1>All Course > {{CourseName}} > {{post.name}}</h1>
      <div class="header">
        <img class="imgcourse" :src="post.cover" />
        <div class="coursebox">
          <h1 class="coursename">{{post.name}}</h1>
          <p
            class="detailgroup"
          >{{post.description}}</p>
        </div>
      </div>
    </div>
    <div class="allsteps">
        <h1>All Steps in {{post.name}}</h1>
        <Steps v-for="i in post.step" :key="i" :IdStep="i.id" />
       <!-- <Steps/>
        <Steps/>
        <Steps/> -->
    </div>
    <Bar/>
     <div class="mainbar">
      <div class="M" @click="selectM">Main</div>
      <div class="C">Course</div>
      <div class="At" @click="selectAt">Attachment</div>
      <div class="As" @click="selectAs">Assignment</div>
      <div class="P" @click="selectP">People</div>
    </div>
  </div>
</template>

<script>
import Steps from "@/components/Group/Steps.vue";
import Bar from "@/components/Bar.vue";
import axios from "axios"
export default {
    components:{
        Steps,Bar
    },
    props:{
      
    },
  data() {
    return {
      IdCourse:Number,
      CourseName:"",
      IdSes:Number,
      display: "none",
      show: false,
      displaycourse:"",
      showcourse: true,
      post:{
        id:Number,
        name:"",
        description:"",
        cover:"",
        publish:"",
        creator:{
          username:"",
          first_name:"",
          last_name:"",
          id:Number
        },
        step:[]
      }
    };
  },
    mounted(){
         this.IdSes= this.$route.params.IdSession; //get IdSession in path
         this.IdCourse= this.$route.params.IdCourse; //get IdSession in path
    axios
        .get("http://127.0.0.1:8000/sop/course/"+this.IdCourse+"/",{
          headers: {
            Authorization: `token ${window.localStorage.getItem("token")}`,
          },
        }).then((response) => {
          this.CourseName = response.data.name;
          console.log(response.data.name);
          console.log(this.CourseName);
        });
    axios
        .get("http://127.0.0.1:8000/sop/session/"+this.IdSes+"/",{
          headers: {
            Authorization: `token ${window.localStorage.getItem("token")}`,
          },
        })
        .then((response) => {
          this.post = response.data;
          console.log(response.data);
          console.log(this.post);
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
        selectM(){
            this.$router.push({ path: "/main" });
        },
        selectAt(){
            this.$router.push({ path: "/attachment" });
        },
        selectAs(){
            this.$router.push({ path: "/main" });
        },
        selectP(){
          this.$router.push({ params:{ NameGroup: window.localStorage.getItem("NameGroup") }, name: "people" });
          //  this.$router.push({ path: "/people" });
        },
    },
};
</script>

<style scoped>
#id {
  position: relative;
}
.subcourse {
  position: absolute;
  top: 104px;
  left: 230px;
  width: 1460px;
}
.header {
  position: relative;
  height: 225px;
  width: 1116px;
  margin-top: 32px;
  margin-bottom: 32px;
}
.imgcourse {
  position: absolute;
  height: 225px;
  width: 400px;
  background: #bdbdbd;
  border: 1px solid #000000;
  box-sizing: border-box;
}
.coursebox {
  position: absolute;
  width: 1040px;
  left: 420px;
  top: 0%;
  bottom: 0%;
  padding-top: 24px;
  padding-bottom: 24px;
  padding-left: 40px;
  padding-right: 40px;
  background: #ffffff;
  border: 1px solid #000000;
  box-sizing: border-box;
  border-radius: 5px;
}
.allsteps{
    position: absolute;
    top:425px;
    left: 230px;
    width: 1500px;
}
.mainbar {
  position: absolute;
  top: 0;
}
.M {
  position: fixed;
  width: 100px;
  height: 50px;
  left: 650px;
  top: 30px;
  font-size: 25px;
  /*border-bottom: 3px solid black;*/
  padding-left: 20px;
  margin-left: 10px;
  margin-right: 10px;
  cursor: pointer;
}
.C {
  position: fixed;
  width: 100px;
  height: 50px;
  left: 750px;
  top: 30px;
  font-size: 25px;
  border-bottom: 3px solid black;
  padding-left: 10px;
  margin-left: 10px;
  margin-right: 10px;
  cursor: pointer;
}
.At {
  position: fixed;
  width: 100px;
  height: 50px;
  left: 850px;
  top: 30px;
  font-size: 25px;
  /*     border-bottom: 3px solid black;*/
  padding-left: 10px;
  margin-left: 10px;
  margin-right: 10px;
  cursor: pointer;
}
.As {
  position: fixed;
  width: 100px;
  height: 50px;
  left: 1000px;
  top: 30px;
  font-size: 25px;
  /*     border-bottom: 3px solid black;*/
  padding-left: 10px;
  margin-left: 10px;
  margin-right: 10px;
  cursor: pointer;
}
.P {
  position: fixed;
  width: 100px;
  height: 50px;
  left: 1150px;
  top: 30px;
  font-size: 25px;
  padding-left: 10px;
  padding-right: 20px;
  /*   border-bottom: 3px solid black;*/
  margin-left: 10px;
  margin-right: 10px;
  cursor: pointer;
}
</style>