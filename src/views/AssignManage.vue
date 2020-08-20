<template>
  <div class="container">
    <div class="manage">
      <h3 class="head-txt">Assignment Management</h3>
    </div>
    <div class="create">
      <div class="icon">
        <p class="p-text">Total {{count}} Assignments</p>
        <button class="plus" v-on:click="CreateAssign()">+ Create Assignment</button>
        <div class="search_box">
          <img class="image" src="../img/search.png" alt="">
          <input type="text" placeholder="Search..." />
        </div>
      </div>
    </div>
    <div class="course-manage">
      <div class="header">
        <span class="headname">Title</span>
        <span class="headupdate1">Assigned date </span>
        <span class="headupdate2">Turned in</span>
        <span class="headupdate3">Due</span>
        <span class="headupdate4">For</span>
      </div>
      <div class="line"></div>
      <div class="show" v-for="list in lists" :key="list.id" >
        <div class="content dropright">
         
          <span class="name" >{{list.name}}</span>
          <span class="lastdate1" >{{list.group.group_name}}</span>
          <span class="lastdate2" >{{getDate(list.due_date)}} </span>
          <span class="lastdate3" >{{list.turn_in_count}}/{{list.group.member_count}}</span>
          <span class="lastdate4" >{{getDate(list.date_modified)}}</span>
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
            <a class="dropdown-item" href="#" v-on:click="editAssign(list.id)">Edit</a>
            <a class="dropdown-item" href="#" v-on:click="DeleteAssign(list.id, list.name)">Delete</a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios"
import moment from "moment";
export default {
  components: {},
  data() {
    return {
      lists: 
        {
        id: "",
        group: {
            id: "",
            member_count: "",
            group_name: "",
        },
        admin: {
            id: "",
            email: "",
            username: "",
            first_name: "",
            last_name: "",
            phone: "",
            image: "",
            is_staff: ""
        },
        assignment_files: [],
        name: "",
        description: "",
        turn_in_count: "0",
        date_created: "",
        date_modified: "",
        due_date: "",
        allow_file: ""
        },
        groups:{
          id: "",
          group_name: "",
          group_description: "",
          member_count: "",
        }
      
    };
  },
   beforeCreate() {
    try {
      axios
        .get(`http://127.0.0.1:8000/group/assignment/`, {
          headers: { Authorization: `token ${localStorage.getItem("token")}` },
        })
        .then((resp) => {
          // console.log(resp.data);
          this.lists = resp.data;
          this.count = resp.data.length
          console.log(JSON.stringify(this.lists));
        });
    } catch (err) {
      console.log(err);
    }
      try {
      axios
        .get(`http://127.0.0.1:8000/group/` , {
          headers: { Authorization: `token ${localStorage.getItem("token")}` },
        })
        .then((resp) => {
          // console.log(resp.data);
          this.group = resp.data;
          this.count = resp.data.length
          console.log(JSON.stringify(this.group));
        });
    } catch (err) {
      console.log(err);
    }
  },
  methods: {
   
    editAssign(id){
      localStorage.setItem("assign_id",id)
      this.$router.push({ path: "/createassign" , query: { type: "editassign"  }});
    },
    getDate: function(date) {
      return moment(date, "YYYY-MM-DD").format("DD MMMM YYYY");
    },
   CreateAssign() {
      this.$router.push({ path: "/createassign" , query: { type: "createassign"  }});
    },
      DeleteAssign(id, name) {
       if (confirm("Are you sure to delete " + name + "?")) {
        try {
          axios
            .delete("http://127.0.0.1:8000/group/assignment/" + id + "/", {
              headers: {
                Authorization: `token ${localStorage.getItem("token")}`,
              },
            })
            .then((resp) => {
              console.log(resp.data);
              this.lists = resp.data;
              console.log(JSON.stringify(this.lists));
              window.location.reload();
            });
        } catch (err) {
          console.log(err);
        }
      }
    
    

  }},
  
  computed: {
    userLastCount() {
      return this.lists[this.lists.length - 1]
  }
}
}

</script>

<style scoped>
* {
  font-family: "Montserrat", sans-serif;
  align-items: center;
  color: #000;
}
.container {
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
  margin-left: 60px;
  color: black;
  text-align: center;
  text-decoration: none;
  font-size: 16px;
  font-weight: bold;
}
.course-manage .headupdate1 {
  float: right;
  margin-top: 20px;
  margin-right: 7%;
  color: black;
  text-align: center;
  font-size: 16px;
  font-weight: bold;
}
.course-manage .headupdate2 {
  float: right;
  margin-top: 20px;
  margin-right: 5%;
  color: black;
  text-align: center;
  font-size: 16px;
  font-weight: bold;
}
.course-manage .headupdate3 {
  float: right;
  margin-top: 20px;
  margin-right: 9%;
  color: black;
  text-align: center;
  font-size: 16px;
  font-weight: bold;
}
.course-manage .headupdate4 {
  float: right;
  margin-top: 20px;
  margin-right: 10.5%;
  color: black;
  text-align: center;
  font-size: 16px;
  font-weight: bold;
}
.content {
  position: relative;
  margin-top: 20px;
   margin-left: 15px;
  margin-bottom: 20px;
  font-size: 14px;
}
.content .name {
  position: relative;
  margin-top: 20px;
  margin-left: 40px;
  margin-right: 32%;
}
.content .lastdate1 {
  position: absolute;
  top: 21px;
  left: 35%;
  text-align: center;
}
.content .lastdate2 {
  position: absolute;
  top: 21px;
  left: 50%;
  text-align: center;
}
.content .lastdate3 {
  position: absolute;
  top: 21px;
  left: 70%;
  text-align: center;
}
.content .lastdate4 {
  position: absolute;
  top: 21px;
  left: 81%;
  text-align: center;
}
.content button {
  position: absolute;
  float: right;
  top: 15px;
  right: 25px;
  text-align: center;
  padding: 1px 1px;
}

.p-text{
  margin-top: 20px;
}
/* .text{
  position: absolute;
  right: 140px;
  top: 56px;
} */

.plus {
  position: absolute;
  border: none;
  margin-top: 0.5%;
  margin-left: calc(100% - 685px);
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
  margin-left: 26.5%;
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
  padding-left: 50px;
}
.image{
  position: absolute;
  width: 20px;
  height: 20px;
  top: 7px;
  left:10px;
}
</style>
