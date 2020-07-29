<template>
  <div id="course">
    <div class="GO" v-bind:style="{display : displaycourse}">
      <div class="H1">
          <p class="course" >All Courses</p>
          <div class="search" v-on:keyup.enter="search">
            <img src="@/assets/search.png"  />
            <input placeholder="Search" v-model="DataSearch"/>
            </div>
      </div>

    <!--  <GroupCourse v-for="i in courselist" :key="i"  :IdCourse="i" :NameCourse="i.name" :NumSession="i.posts.length" :Description="i.description" :Cover="i.cover" /> -->
      <GroupCourse v-for="i in courselist" :key="i"  :DataCourse="i"  /> 
 
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
      courselist:{},
      DataSearch:"",
    }
  },
  created(){
 this.IdGroup = window.localStorage.getItem("IdGroup");
          axios
        .get("http://127.0.0.1:8000/group/"+this.IdGroup+"/course/",{
          headers: {
            Authorization: `token ${window.localStorage.getItem("token")}`,
          },
        })
        .then((response) => {
          this.courselist = response.data;
          console.log(response.data);
          console.log("coureslist")
          console.log(this.courselist);
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
  mounted(){
   
  },
  beforeDestroy () {
    console.log("beforeDestroy")
	clearInterval(this.polling)
},
  methods: {
    callCourse(){

    },
    selectcourse() {
      this.displaycourse = !this.displaycourse;
      this.$router.push({ name: "subcourse", params:{ NameCourse: this.NameCourse} });
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
    search(){
      console.log(this.DataSearch)
    this.IdGroup = window.localStorage.getItem("IdGroup");
          axios
        .get("http://127.0.0.1:8000/group/"+this.IdGroup+"/course/?search="+this.DataSearch,{
          headers: {
            Authorization: `token ${window.localStorage.getItem("token")}`,
          },
        })
        .then((response) => {
          this.courselist = response.data;
          console.log(response.data); 
          console.log("Search Succ")
          console.log(this.courselist);
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
  },
};
</script>

<style scoped>
.GO {
  position: relative;
  display: block;
  width: 1700px;
  margin-bottom: 50px;
  margin-left: -25px;

}
.GO .H1 {
  position: relative;
  top: 130px;
  left: 200px;
  color: black;
  width: 1500px;
  height: 88px;
}
.GO .H1 .course{
font-family: Montserrat;
font-style: normal;
font-weight: 600;
font-size: 24px;
line-height: 29px;
}
.GO .H1 .search{
  position: absolute;
  right: -40px;
}
.GO .H1 .search img{
  width: 20px;
  position: absolute;
  top: 10px;
  left: 16px;
}
.search input{
  padding-left: 50px;
  width: 400px;
height: 40px;
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
  /*  border-bottom: 3px solid black;*/
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
  width: 120px;
  height: 50px;
  left: 855px;
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
  width: 170px;
  height: 50px;
  left: 1025px;
  top: 30px;
  font-size: 25px;
 /* border-bottom: 3px solid black;*/
  padding-left: 10px;
  margin-left: 10px;
  margin-right: 10px;
  cursor: pointer;
}
.P {
  position: fixed;
  width: 110px;
  height: 50px;
  left: 1200px;
  top: 30px;
  font-size: 25px;
  padding-left: 10px;
  padding-right: 20px;
  /*border-bottom: 3px solid black;*/
  margin-left: 10px;
  margin-right: 10px;
  cursor: pointer;
}
</style>
