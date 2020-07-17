<template>
  <div id="course">
    <div class="GO" v-bind:style="{display : displaycourse}">
      <h1 class="course" >All Courses</h1>
    <!--  <GroupCourse v-for="i in courselist" :key="i"  :IdCourse="i" :NameCourse="i.name" :NumSession="i.posts.length" :Description="i.description" :Cover="i.cover" /> -->
      <GroupCourse v-for="i in courselist" :key="i"  :IdCourse="i"  /> 
    </div>

    <Bar />
    <div class="mainbar">
      <div class="M" @click="selectM">Main</div>
      <div class="C" @click="selectC">Course</div>
      <div class="At" @click="selectAt">Attachment</div>
      <div class="As" @click="selectAs">Assignment</div>
      <div class="P" @click="selectP">People</div>
    </div>
  </div>
</template>

<script>
import Bar from "@/components/Bar.vue";
import GroupCourse from "@/components/Group/GroupCourse.vue"; 
import axios from "axios"
export default {
  components: {
    Bar,
    GroupCourse,
  },
  data() {
    return {
      display: "none",
      show: false,
      displaycourse: "block",
      displaysubcourse:"none",
      courselist:[],
    }
  },

  mounted(){
    this.IdGroup = window.localStorage.getItem("IdGroup");
          axios
        .get("http://127.0.0.1:8000/group/"+this.IdGroup+"/",{
          headers: {
            Authorization: `token ${window.localStorage.getItem("token")}`,
          },
        })
        .then((response) => {
          this.courselist = response.data.courses;
          console.log(response.data);
          console.log(this.courselist.courses);
        })
        .catch((err) => {
          if (err.response) {
            this.change();
            console.error(err.response.data);
            console.error(err.response.status);
            console.error(err.response.headers);
            if (err.response.status == 400) {
              //   alert("Email or Password Wrong")
            } else if (err.response.status == 404) {
              //    alert("404 not found")
            }
          }
        });
  },
  methods: {
    callCourse(){

    },
    selectcourse() {
      this.displaycourse = !this.displaycourse;
      this.$router.push({ path: "/course/subcourse" });
    },
  selectM() {
      this.$router.push({
        params: { NameGroup: window.localStorage.getItem("NameGroup") },
        name: "main"
      });
      //  this.$router.push({ path: "/main" });
    },
    selectC() {
      this.$router.push({
        params: { NameGroup: window.localStorage.getItem("NameGroup") },
        name: "course"
      });
      //this.$router.push({ path: "/course" });
    },
    selectAt() {
      this.$router.push({
        params: { NameGroup: window.localStorage.getItem("NameGroup") },
        name: "attachment"
      });
      //  this.$router.push({ path: "/attachment" });
    },
    selectAs() {
      this.$router.push({
        params: { NameGroup: window.localStorage.getItem("NameGroup") },
        name: "assignment"
      });
      // this.$router.push({ path: "/assignment" });
    },
    selectP() {
      this.$router.push({
        params: { NameGroup: window.localStorage.getItem("NameGroup") },
        name: "people"
      });
      //this.$router.push({ path: "/people" });
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
