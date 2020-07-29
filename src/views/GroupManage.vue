<template>
  <div class="container">

    <div class="header">
      <h3 class="head-txt">Group Management</h3>
    </div>
    <div class="create">
      <div class="icon">
        <p class="p-text">Total {{ count }} Group</p>
        <button class="plus" v-on:click="groupcreate()">+ Create Group</button>
        <div class="search_box">
         <!-- <i class="fas fa-search"></i>  -->
          <img class="image" src="../img/search.png" alt="">
          <input class="search" type="text" placeholder="Search..." v-on:keyup.enter="searchget(search)" v-model="search"/>
        </div>
      </div>
    </div>
    <form @submit.prevent="submit">
      <div class="course-manage">
        <div class="headcontent">
          <span class="headname">Course Name</span>
          <span class="headupdate">Created date</span>
          <span class="headupdate">Course</span>
          <span class="headupdate">Members</span>
        </div>
        <div class="line"></div>
        <div class="show" v-for="list in lists" :key="list.id">
          <div class="content dropright">
            <img class="cimg" :src="list.group_image" alt="" />
            <span class="name">{{ list.group_name }}</span>
            <span class="lastdate1">{{ list.member_count }}</span>
            <span class="lastdate2">{{ list.courses.length }} </span>
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

                <a class="dropdown-item" href="#" v-on:click="editPage(list.id)"
                  >Edit</a
                >

              <a href="#" class="dropdown-item" v-on:click="DeleteUser(list.id, list.group_name)"
                >Delete</a
              >
            </div>
          </div>
        </div>
      </div>
    </form>
  </div>
</template>

<script>

import moment from "moment";
import axios from "axios";
export default {
  components: {
    
  },

  data() {
    return {
      showModal: false,
      modalOpen: false,
      lists: {
        id: "",
        group_name: "",
        group_description: "",
        member_count: "",
        group_image: "",
        courses: "",
        group_creator: {
          id: "",
          email: "",
          username: "",
          first_name: "",
          last_name: "",
          phone: null,
          image: null,
          is_staff: true,
        },
        date_created: "",
        date_modified: "",
      },
      search:"",
      blog:[]
    };
  },
 
  mounted() {
    try {
      axios
        .get(`http://127.0.0.1:8000/group/`, {
          headers: { Authorization: `token ${localStorage.getItem("token")}` },
        })
        .then((resp) => {
          console.log(resp.data);
          this.count = resp.data.length;
          this.lists = resp.data;
        });
    } catch (err) {
      console.log(err);
    }
  },
  methods: {
     searchget(event) {
        try {
      axios
        .get(`http://127.0.0.1:8000/group/?search=` + event, {
          headers: { Authorization: `token ${localStorage.getItem("token")}` },
        })
        .then((resp) => {
          console.log(resp.data);
          this.count = resp.data.length;
          this.lists = resp.data;
        });
    } catch (err) {
      console.log(err);
    }
  },
    editPage(id){
      localStorage.setItem("group_id",id)
      this.$router.push({ path: "/creategroup" , query: { type: "edit"  }});
    },
    DeleteUser(id, name) {
      if (confirm("Are you sure to delete " + name + "?")) {
        try {
          axios
            .delete(`http://127.0.0.1:8000/group/` + id + "/", {
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
    },
    openModal() {
      this.modalOpen = !this.modalOpen;
    },
    groupcreate() {
      this.$router.push({ path: "/creategroup" , query: { type: "create"  }});
    },
    getDate: function(date) {
      return moment(date, "YYYY-MM-DD").format("DD MMMM YYYY");
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
* {
  font-family: "Montserrat", sans-serif;
  align-items: center;
  color: #000;
}

.header {
  position: relative;
  color: #000;
}
.container{
  margin-top: 50px;
  margin-bottom: 50px;
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
.course-manage .headupdate {
  float: right;
  margin-top: 20px;
  margin-right: 6%;
  color: black;
  text-align: center;
  font-size: 16px;
  font-weight: bold;
}
.course-manage .cimg {
  border: 1px solid #000;
  border-radius: 5px;
  margin-top: 20px;
  margin-left: 50px;
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
  margin-top: 20px;
  margin-left: 2%;
  margin-right: 32%;
}
.content .lastdate1 {
  position: absolute;
  float: right;
  top: 40px;
  left: 58%;
  text-align: center;
}
.content .lastdate2 {
  position: absolute;
  float: right;
  top: 41px;
  left: 72%;
  text-align: center;
}
.content .lastdate3 {
  position: absolute;
  float: right;
  top: 41px;
  /* left:100px; */
  right: 7.25%;
  text-align: center;
}
.content button {
  position: absolute;
  float: right;
  top: 36px;
  /* left: 100px; */
  right: 3%;
  text-align: center;
  padding: 1px 1px;
}

.p-text {
  margin-top: 25px;
}

.plus {
  position: absolute;
  border: none;
  margin-top: 0.5%;
  margin-left: calc(100% - 630px);
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
  margin-left: 30%;
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
  opacity: 0.5;
  top: 7px;
  left:10px;
}
/* .fa-search{
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  left: 20px;
  color: #828282;
  font-size: 20px;
} */
::-webkit-input-placeholder {
  color: #828282;
}

@media screen and (max-width: 425px) {
  .search_box {
    width: 95%;
  }
}
</style>
