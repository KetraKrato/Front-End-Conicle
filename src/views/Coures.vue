<template>
  <div id="course">
    <div class="GO">
      <h1>All Courses</h1>
        <GroupCourse/>
        <GroupCourse/>
      <!-- <HeaderM/> -->
    </div>
<!--    <div class="numcourse">
      <span>All Courses(3)</span>
      <v-if><span class="pluscourse">+ Create Course</span></v-if>
    </div>
    <div class="coursebox">
      <div class="header">
        <span class="name">Course name</span>
        <span class="update">Last updated</span>
      </div>
      <div class="body">
        <div class="onecourse" @click="select">
          <img class="profile" src="@/assets/school.png" />
          <p class="detail">course 01</p>
          <p class="time">01 June 2020</p>
        </div>
        <v-if>
          <div class="editimg" @click="isShow">
            <img src="@/assets/edit.png" />
          </div>
        </v-if>
        <div class="edit" v-bind:style="{ display: display }">
          <span>Edit</span>
          <span>Delete</span>
        </div>
      </div>
      <div class="body">
        <div class="onecourse">
          <img class="profile" src="@/assets/school.png" />
          <p class="detail">course 02</p>
          <p class="time">01 June 2020</p>
        </div>
      </div>
      <div class="body">
        <div class="onecourse">
          <img class="profile" src="@/assets/school.png" />
          <p class="detail">course 03</p>
          <p class="time">01 June 2020</p>
        </div>
      </div>
      <div class="body">
        <div class="onecourse">
          <img class="profile" src="@/assets/school.png" />
          <p class="detail">course 03</p>
          <p class="time">01 June 2020</p>
        </div>
      </div>
      <div class="body">
        <div class="onecourse">
          <img class="profile" src="@/assets/school.png" />
          <p class="detail">course 03</p>
          <p class="time">01 June 2020</p>
        </div>
      </div>
      <GroupJoined/>
    </div>-->
    <Bar />
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
import GroupCourse from "@/components/Group/GroupCourse.vue"; 
export default {
  components: {
    Bar,GroupCourse
  },
  data() {
    return {
      display: "none",
      show: false,
    };
  },
  methods: {
    select() {
      this.$router.push({ path: "/part" });
    },
    selectM() {
      this.$router.push({ path: "/main" });
    },
    selectP() {
      this.$router.push({ path: "/people" });
    },
    isShow() {
      this.show = !this.show;
      if (this.show == false) {
        this.display = "none";
        console.log(this.show);
      } else {
        this.display = "block";
        console.log(this.show);
      }
    },
  },
};
</script>

<style scoped>
.GO {
  position: relative;
  display: block;
  width: 1700px;
  margin-bottom: 50px;
}
.GO h1 {
  position: relative;
  top: 130px;
  left: 220px;
  color: black;
}
/*.coursebox {
  position: relative;
  top: 205px;
  left: 417px;
  width: 1146px;

  background: #ffffff;
  border: 1px solid #000000;
  box-sizing: border-box;
  border-radius: 5px;
}
.numcourse {
  position: absolute;
  top: 144px;
  left: 417px;
  font-size: 28px;
  width: 1146px;
}
.header {
  position: relative;
  height: 65px;
  border-bottom: 1px solid black;
}
.header span.name {
  position: absolute;
  top: 20px;
  left: 80px;
  font-weight: 600;
  font-size: 18px;
  line-height: 22px;
}
.header span.update {
  position: absolute;
  top: 20px;
  right: 80px;
  font-weight: 600;
  font-size: 18px;
  line-height: 22px;
}
.body {
  position: relative;
  height: 80px;
  margin-top: 20px;
  cursor: pointer;
}
img.profile {
  position: relative;
  left: 80px;
  width: 120px;
  height: 65px;
  border: 1px solid black;
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

.editimg {
  position: absolute;
  right: 20px;
  top: 20px;
  width: 31px;
  height: 31px;
  /*border: 1px solid black;
  border-radius: 50%;
  background: rgb(218, 213, 213);
}

.editimg img {
  position: absolute;
  width: 25px;
  height: 25px;
  top: 2.5px;
  left: 3px;
  padding: 4px;
  /*border-radius: 50%;
}

.edit {
  position: absolute;
  display: none;
  right: -75px;
  top: 55px;
  width: 100px;
  height: 60px;
  background: #ffffff;
  border: 1px solid #000000;
  box-sizing: border-box;
  border-radius: 5px;
}
.edit span {
  position: relative;
  display: block;
  background: white;
  margin: 5%;
}

.pluscourse {
  position: absolute;
  width: 300px;
  right: 0px;
  top: 0px;
  text-align: right;

  font-family: Montserrat;
  font-style: normal;
  font-weight: 500;
  font-size: 18px;
  line-height: 22px;
} */

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
