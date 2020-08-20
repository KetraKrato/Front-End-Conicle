<template>
  <div class="container">
    <div class="manage">
      <h3 class="head-txt">Course Management </h3>
    </div>
    <div class="create">
      <div class="icon">
        <p class="p-text">Total {{count}} Course</p>
        <button class="plus" v-on:click="createCourse()">+ Create Course</button>
        <div class="search_box">
         <!-- <i class="fas fa-search"></i>  -->
          <img class="image" src="../img/search.png" alt="">
          <input class="search" type="text" placeholder="Search..." />
        </div>
      </div>
    </div>
    <div class="course-manage">
      <div class="header">
        <span class="headname">Course Name</span>
        <span class="headupdate">Last Updated</span>
        <span class="headupdate">Stutus</span>
        <span class="headupdate">Session</span>
      </div>
      <div class="line"></div>
      <div class="show" v-for="list in lists" :key="list.id">
        <div class="content dropright">
          <img class="cimg" :src="list.cover" alt="" />
          <span class="name">{{ list.name }}</span>
          <span class="lastdate1">{{ list.posts.length }}</span>
          <span class="lastdate2" v-if="list.publish == true">Published</span>
          <span class="lastdate2-2" v-else-if="list.publish == false">Unpublished</span>
          <span class="lastdate3">{{ getDate(list.date_modified) }}</span>

          <button
            class="btn"
            type="button"
            id="dropdownMenuButton"
            data-toggle="dropdown"
            aria-haspopup="true"
            aria-expanded="false"
          >
            <i class="edit icon"></i>
          </button>
          <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
            <a class="dropdown-item" href="#" v-on:click="editCourse(list.id)">Edit</a>
            <a href="#" class="dropdown-item" v-on:click="DeleteUser(list.id, list.name)">Delete</a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import moment from "moment";

export default {
  components: {},
  data() {
    return {
      new: "",
      lists: [
        {
          id: "",
          name: "",
          description: "",
          group_image: "",
          publish: "",
          creator: {
            username: "",
            first_name: "",
            last_name: "",
            id: "",
          },
          post: [],
          date_created: "",
          date_modified: "",
        },
      ],
    };
  },
  mounted() {
    try {
      axios
        .get(`http://127.0.0.1:8000/sop/course/`, {
          headers: { Authorization: `token ${localStorage.getItem("token")}` },
        })
        .then((resp) => {
          console.log(resp.data);
          this.lists = resp.data;
          this.count = resp.data.length
          console.log(JSON.stringify(this.lists));
        });
    } catch (err) {
      console.log(err);
    }
    const person = { lastVisitedAt: this.lists.date_modified };
    moment(person.lastVsitedAt).format();
  },
  methods: {
    getDate: function(date) {
      return moment(date, "YYYY-MM-DD").format("DD MMMM YYYY");
    },
    editCourse(id){
      localStorage.setItem("course_id",id)
      this.$router.push({ path: "/createcourse" , query: { type: "editcourse" }});
    },
    createCourse(){
      this.$router.push({ path: "/createcourse" , query: { type: "createcourse" }});
    },
    DeleteUser(id, name) {
      if (confirm("Are you sure to delete " + name + "?")) {
    try {
      axios.delete("http://127.0.0.1:8000/sop/course/" + id + "/" ,{
          headers: { Authorization: `token ${localStorage.getItem("token")}` },
        })
        .then((resp) => {
          console.log(resp.data);
          console.log(JSON.stringify(this.lists));
          window.location.reload();
        });
    } catch (err) {
      console.log(err);
      console.log(this.lists.id)
      
    }
        }
    }
  },
  computed: {
    userLastCount() {
      return this.lists[this.lists.length - 1];
    },
    strippedUsername: function() {
      if (this.lists.date_modified.length > 5) {
        return this.lists.date_modified.slice(0, 4);
      }
      return this.lists.date_modified;
    },
  },
};
</script>

<style scoped>
* {
  font-family: "Montserrat", sans-serif;
  align-items: center;
  color: #000;
}
.container {
  position: relative;
  margin-top: 50px;
  margin-bottom: 50px;
}
.manage {
  position: relative;
}

.icon {
  margin-left: 10%;
  display: flex;
  flex-wrap: wrap;
}

h3 {
  position: relative;
  margin-left: 10%;
}

.content {
  display: flex;
  flex-wrap: wrap;
  position: relative;
  margin-top: -10px;
}
.course-manage {
  font-size: 18px;
  border: 1px solid #000;
  width: 80%;
  margin: auto;
  margin-top: 2%;
  border-radius: 4px;
}
.course-manage .line {
  margin-top: 60px;
  border: 0.1px solid rgba(0, 0, 0, 0.582);
  width: 100%;
  height: 0px;
}

.course-manage .headname {
  float: left;
  margin-top: 20px;
  margin-left: 80px;
  color: black;
  text-align: center;
  text-decoration: none;
  font-size: 16px;
  font-weight: bold;
}
.course-manage .headupdate {
  float: right;
  margin-top: 20px;
  margin-right: 7%;
  color: black;
  text-align: center;
  font-size: 16px;
  font-weight: bold;
}
.course-manage .cimg {
  /* border: 1px solid #000; */
  border-radius: 5px;
  margin-top: 20px;
  margin-left: 70px;
  width: 110px;
  height: 60px;
  grid: 3;
}
.content {
  position: relative;
  margin-bottom: 10px;
  font-size: 14px;
}
.content .name {
  float: left;
  margin-top: 22px;
  margin-left: 40px;
  margin-right: 32%;
}

.content .lastdate1 {
  position: absolute;
  top: 41px;
  left: 56%;
}
.content .lastdate2 {
  position: absolute;
  top: 41px;
  left: 67%;
}
.content .lastdate2-2 {
  position: absolute;
  top: 41px;
  left: 66%;
}
.content .lastdate3 {
  position: absolute;
  top: 41px;
  left: 81.5%;
}
.content button {
  position: absolute;
  float: right;
  top: 35px;
  right: 3%;
  text-align: center;
  padding: 1px 1px;
}.plus {
  position: absolute;
  border: none;
  margin-top: 0.5%;
  margin-left: calc(100% - 420px);
  border: none;
  background: #404040;
  color: #ffffff !important;
  font-family: Montserrat;
  font-style: normal;
  font-weight: 500;
  font-size: 12px;
  line-height: 20px;
  padding: 8px 20px;
  text-transform: uppercase;
  border-radius: 6px;
  display: flex;
  transition: all 0.2s ease 0s;
  align-items: center;
  text-align: center;
  letter-spacing: -0.015em;
  /* margin: 10px; */
}
.plus:hover {
  color: #404040 !important;
  font-weight: 700 !important;
  letter-spacing: 1px;
  background: none;
  -webkit-box-shadow: 0px 5px 40px -10px rgba(36, 2, 2, 0.57);
  -moz-box-shadow: 0px 5px 40px -10px rgba(0, 0, 0, 0.57);
  transition: all 0.2s ease 0s;
}
.search_box {
  width: 300px;
  position: absolute;
  margin-top: 0.5%;
  margin-left: 35%;
  border: 1px solod #828282;
  color: #fff;
}
.search_box input[type="text"] {
  width: 100%;
  padding: 8px;
  box-sizing: border-box;
  border: 1px solid #828282;
  border-radius: 5px;
  font-size: 14px;
  color: #000;
  outline: none;
  padding-left: 40px;
}
.image{
  position: absolute;
  width: 20px;
  height: 20px;
  top: 7px;
  left:10px;
}
.p-text {
  margin-top: 20px;
}
.text {
  position: absolute;
  right: 140px;
  top: 43px;
}
.btn{
  cursor: pointer;
}
</style>
