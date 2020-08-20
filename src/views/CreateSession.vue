<template>
  <div class="crestesession">
    <span><button class="plus" @click="openModal">+ Create Session</button></span>
    <modal-direction  v-bind:list="e_id"  v-show="modalOpen"></modal-direction>
    <form @submit.prevent="submit">
      <div class="top">
        <ul class="progressbar">
          <li type="button" v-on:click="back2createcourse" class="active">Create Course</li>
          <li type="button" v-on:click="refresh" class="active2">Create Session</li>
          <li type="button" v-on:click="go2step">Create Step</li>
        </ul>
      </div>
        <div class="header">
        <h3>Create Session {{lists.id}} </h3>
        <div class="secondhead">
          <span>Total {{ count }} Session</span>
        </div>
      </div>
      <div class="container">
        <div class="headcontent">
          <span class="headname">Session Name</span>
          <span class="headupdate">Last updated</span>
          <span class="headupdate">Step</span>
        </div>
        <div class="line"></div>
        <div class="insidecontent" v-for="list in lists" :key="list.id">
          <input type="radio" class="radioB" v-model="lists.id" :value="list.id">
          <img class="cimg" :src="list.cover" alt="" />
          <span class="name">{{ list.name }}</span>
          <span class="lastdate1">{{ list.step.length }}</span>
          <span class="lastdate2">{{ getDate(list.date_modified) }}</span>
          <button class="btn" type="button" id="dropdownMenuButton"  data-toggle="dropdown"
            aria-haspopup="true"  aria-expanded="false"  v-on:click="collect(list.id)" >
            <i class="edit icon"></i>
          </button>
          <div class="dropdown-menu" aria-labelledby="dropdownMenuButton" >
            <button class="dropdown-item" :value="list.id"   @click="openModaledit(list.id)">Edit</button>
           <a href="" class="dropdown-item" v-on:click="DeleteUser(list.id, list.name)">Delete</a >
          </div>
          
        </div>

        <div class="allbtn">
          
          <sui-button class="next" secondary v-on:click="nextPage"
            >Confirm</sui-button
          >
        </div>
      </div>
    </form>
  </div>
</template>

<script>
import ModalDirection from "../components/Card/SessionCard";
import axios from "axios";
import moment from "moment";
export default {
  components: {
    ModalDirection,
  },
  data() {
    return {
      modalOpen: false,
      lists: {
        id: "",
        name: "",
        description: "",
        cover: "",
        publish: true,
        creator: {
          id: "",
          email: "",
          username: "",
          first_name: "",
          last_name: "",
          phone: null,
          image: null,
          is_staff: true,
        },
        step: [
          {
            id: "",
            name: "",
            textcontent: "",
            link: "",
            cover_type: "",
            cover_file: "",
            post_id: "",
            step_file: [],
            date_created: "",
            date_modified: "",
          }],
        date_created: "",
        date_modified: "",
        e_id:""
      },
        
    };
  },
  mounted() {
    try {
      axios
        .get(`http://127.0.0.1:8000/sop/session/`, {
          headers: { Authorization: `token ${localStorage.getItem("token")}` },
        })
        .then((resp) => {
          console.log(resp.data);
          this.lists = resp.data;
          this.count = resp.data.length;
          console.log(JSON.stringify(this.lists));
        });
    } catch (err) {
      console.log(err);
    }
  },
  methods: {
    back2createcourse(){
      this.$router.push({ path: "/createcourse" , query: { type: "backfromsession"  }});
      location.reload()
    },
    refresh(){
      location.reload()
    },
     go2step(){
       this.$router.push({ path: "/createstep" , query: { type: "fromsession"  }});
      location.reload()
    },
    getDate: function(date) {
      return moment(date, "YYYY-MM-DD").format("DD MMMM YYYY");
    },
    nextPage() {
  
      window.localStorage.setItem("session_id", this.lists.id),
      this.$router.push({ path: "/createstep" });
    },
    openModal() {
      this.modalOpen = !this.modalOpen;
      document.documentElement.style.overflow = 'hidden'
    },
    openModaledit(id){
      localStorage.setItem("sessionedit" ,id)
      this.e_id = id
      console.log(this.e_id)
      //if (localStorage.setItem("sessionedit" ,id) != '0'){
        this.modalOpen = !this.modalOpen;
        // localStorage.setItem("sessionedit", id)
     // }

      document.documentElement.style.overflow = 'hidden'
    },
    collect(id){
      localStorage.setItem("sessionedit", id)
      console.log(localStorage.getItem("sessionedit"))
    },
     DeleteUser(id, name) {
      if (confirm("Are you sure to delete " + name + "?")) {
      try {
        axios
          .delete("http://127.0.0.1:8000/sop/session/" + id + "/", {
            headers: {
              Authorization: `token ${localStorage.getItem("token")}`,
            },
          })
          .then((resp) => {
            console.log(resp.data);
            console.log(JSON.stringify(this.lists));
            window.location.reload();
          });
      } catch (err) {
        console.log(err);
        console.log(this.lists.id);
      }
      }
    },
  },

  computed: {
  },
};
</script>

<style scoped>
* {
  font-family: "Montserrat", sans-serif;
}
.top-progress {
  width: 100%;
}
.progressbar {
  counter-reset: step;
}
.progressbar li {
  list-style-type: none;
  float: left;
  width: 33.33%;
  position: relative;
  text-align: center;
}
.progressbar li::before {
  content: counter(step);
  counter-increment: step;
  width: 50px;
  height: 50px;
  line-height: 50px;
  border: 2px solid #ddd;
  display: block;
  text-align: center;
  margin: 10px auto 10px auto;
  border-radius: 50%;
  background-color: #fff;
  font-weight: bold;
}
.progressbar li::after {
  content: "";
  position: absolute;
  width: 100%;
  height: 5px;
  background-color: #ddd;
  top: 33px;
  left: -50%;
  z-index: -100;
}
.progressbar li:first-child::after {
  content: none;
}
.progressbar li.active {
  color: #ddd;
  font-weight: bold;
}
.progressbar li.active::before {
  border-color: #4f4f4f;
}
.progressbar li.active2 {
  color: #4f4f4f;
  font-weight: bold;
}
.progressbar li.active2::before {
  border-color: #4f4f4f;
}
.progressbar li.active + li::after {
  background-color: #4f4f4f;
}
.crestesession {
  margin-bottom: 50px;
}


.plus {
  position: absolute;
  border: none;
  margin-top: 163px;
  margin-left: calc(100% - 390px);
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
.header {
  position: absolute;
  margin-left: 19%;
  margin-top: 10%;
  color: #000;
}
.secondhead {
  margin-top: -1%;
  color: #000;
}
.top {
  position: relative;
  /* margin-top: 5%; */
}
.container {
  border: 1px solid #000;
  position: absolute;
  margin-top: 16%;
  margin-left: 19%;
  margin-bottom: 50px;
  width: 65%;
  border-radius: 4px;
  padding: 0%;
}

.container .line {
  margin-top: 50px;
  border: 0.1px solid rgba(0, 0, 0, 0.582);
  width: 100%;
  height: 0px;
}
.headcontent {
  color: #000;
  font-weight: bold;
}
.headname {
  float: left;
  margin-left: 80px;
  margin-top: 15px;
  font-size: 16px;
  font-weight: bold;
}
.headdiscript {
  float: left;
  margin-left: 120px;
  margin-top: 15px;
  font-size: 16px;
  font-weight: bold;
}
.headupdate {
  float: right;
  margin-top: 15px;
  margin-right: 10%;
  color: black;
  text-align: center;
  font-size: 16px;
  font-weight: bold;
}

.insidecontent {
  display: flex;
  flex-wrap: wrap;
  margin-bottom: 10px;
}
.name {
  float: left;
  margin-top: 41px;
  margin-left: 20px;
  margin-right: 32%;
}
.discript {
  position: absolute;
  margin-top: 41px;
  margin-left: 270px;
  max-width: 20ch;
  text-align: center;
}
.lastdate1 {
  position: absolute;
  margin-top: 41px;
  margin-left: 65%;
  text-align: center;
}
.lastdate2 {
  position: absolute;
  margin-top: 41px;
  margin-left: 79%;
}
.lastdate3 {
  position: absolute;
  margin-top: 41px;
  margin-left: 735px;
}
.btn {
  position: absolute;
  margin-top: 37px;
  margin-left: 93%;
  margin-right: 0%;
  border: none;
  padding: 1px 1px;
}
.allbtn {
  float: right;
  margin-left: calc(100% - 92px);
  border: none;
  position: absolute;
  margin-top: 3%;
  margin-bottom: 50px;
}
.back a {
  margin: 20px;
  color: #4f4f4f;
  list-style-type: none;
}
.next {
  margin: 20px;
}
.cimg {
  /* border: 1px solid #000; */
  border-radius: 5px;
  margin-top: 20px;
  margin-left: 40px;
  width: 110px;
  height: 60px;
  grid: 3;
}
.radioB {
  position: relative;
  margin-top: 41px;
  margin-left: 25px;
  z-index: auto;
}

</style>
