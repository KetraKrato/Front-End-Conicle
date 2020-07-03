<template>
  <div id="subcourse">
      <div class="subcourse">
            <h1>All Course > course 01</h1>
        <sui-progress size="small" :percent="percent" />
              <div class="header">
        <img class="imgcourse" src="@/assets/barten.jpg" />
        <div class="coursebox">
          <h1 class="coursename">course 01</h1>
          <p
            class="detailgroup"
          >jfoiejzsdlfjkljnkvasadfvo;jpi nsad;oijvsadvo;ijsadvo;jisdavo;ji;osadijv</p>
        </div>
      </div>
      </div>
      <div class="sessionbox">
    <h1>All Sessions in course 01</h1>
        <SessionGroup/>
        <SessionGroup/>
        <SessionGroup/>
        <SessionGroup/>
        <SessionGroup/>
        <SessionGroup/>
      </div>
      <Bar/>
          <div class="mainbar">
      <div class="M" @click="selectM">Main</div>
      <div class="C">Course</div>
      <div class="At" @click="selectP">Attachment</div>
      <div class="As" @click="selectP">Assignment</div>
      <div class="P" @click="selectP">People</div>
    </div>
  </div>
</template>

<script>
import Bar from "@/components/Bar.vue";
import SessionGroup from "@/components/Group/SessionGroup.vue"
export default {
  components: {
    Bar,SessionGroup
  },
  data() {
      return {
          percent: 10,
      }
  },
}
</script>

<style scoped>
#id{
    position: relative;
}
.subcourse{
    position: absolute;
    top:104px;
    left: 230px;
    width: 1460px;
}
.header {
  position: relative;
  height: 225px;
  width: 1116px;
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
.sessionbox{
    position: absolute;
    top:475px;
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