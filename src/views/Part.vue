<template>
  <div id="course">
      <div class="numcourse">All Part(3)</div>
      <div class="coursebox">
          <div class="header">
            <span class="name">Part name</span>
            <span class="update">Last updated</span>
          </div>
          <div class="body">
              <div class="onecourse" @click="select">
                  <img src="@/assets/school.png"/>
                  <p class="detail">post 01</p>
                  <p class="time">01 June 2020</p>
              </div>
          </div>
        <div class="body">
              <div class="onecourse">
                  <img src="@/assets/school.png"/>
                  <p class="detail">post 02</p>
                  <p class="time">01 June 2020</p>
              </div>
          </div>
                    <div class="body">
              <div class="onecourse">
                  <img src="@/assets/school.png"/>
                  <p class="detail">post 03</p>
                  <p class="time">01 June 2020</p>
              </div>
          </div>
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
import Bar from "@/components/Bar.vue"
export default {
components:{
    Bar,
},
methods: {
    select(){
        this.$router.push({path:"/learning"})
    },
    selectM() {
      this.$router.push({ path: "/course" });
    },
    selectC() {
      this.$router.push({ path: "/course" });
    },
    selectP() {
      this.$router.push({ path: "/people" });
    },
},
}
</script>

<style scoped>
.coursebox{
    position: relative;
    top:205px;
    left:417px;
    width: 1146px;

    background: #FFFFFF;
    border: 1px solid #000000;
    box-sizing: border-box;
    border-radius: 5px;
}
.numcourse{
    position: absolute;
    top:144px;
    left: 417px;
    font-size: 28px;
}
.header{
    position: relative;
    height: 65px;
    border-bottom: 1px solid black;
}
.header span.name{
    position: absolute;
    top:20px;
    left: 80px;
    font-weight: 600;
    font-size: 18px;
    line-height: 22px;
}
.header span.update{
    position: absolute;
    top:20px;
    right: 80px;
    font-weight: 600;
    font-size: 18px;
    line-height: 22px;
}
.body{
    position: relative;
    height: 80px;
    margin-top: 20px;
    cursor: pointer;
}
img{
    position: relative;
    left: 80px;
    width: 120px;
    height: 65px;
    border: 1px solid black;

}
.detail{
    position: absolute;
    top:25px;
    left:250px;

    font-family: Montserrat;
    font-style: normal;
    font-weight: normal;
    font-size: 18px;
    line-height: 22px;
    
}
.time{
    position: absolute;
    top:25px;   
    right: 85px;

    font-family: Montserrat;
    font-style: normal;
    font-weight: normal;
    font-size: 18px;
    line-height: 22px;
    
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
  border-bottom: 3px solid black;
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