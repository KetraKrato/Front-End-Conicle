<template>
  <div id="session">
    <div class="subcourse">
      <h1>All Course > course 01 > session 01</h1>
      <div class="header">
        <img class="imgcourse" src="@/assets/barten.jpg" />
        <div class="coursebox">
          <h1 class="coursename">session 01</h1>
          <p
            class="detailgroup"
          >jfoiejzsdlfjkljnkvasadfvo;jpi nsad;oijvsadvo;ijsadvo;jisdavo;ji;osadijv</p>
        </div>
      </div>
    </div>
    <div class="allsteps">
        <h1>All Steps in session 01</h1>
        <Steps/>
        <Steps/>
        <Steps/>
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
export default {
    components:{
        Steps,Bar
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
            this.$router.push({ path: "/people" });
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