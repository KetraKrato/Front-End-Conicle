<template>
  <div class="AddMembers">
    <!-- <span><button class="plus" @click="openModal">+ Add Member</button></span>
    <modal-direction v-show="modalOpen"></modal-direction> -->
    <!-- <h1>param {{ group_id }}</h1> -->

      <div class="top">
        <ul class="progressbar">
          <li type="button" v-on:click="back2create" class="active">Create Group</li>
          <li type="button" v-on:click="refresh" class="active2">Add Member</li>
          <li type="button" v-on:click="go2selectcourse">Select Course</li>
        </ul>
      </div>
      <div class="search_box">
          <img class="image" src="../img/search.png" alt="">
            <input class="search" type="text" placeholder="Search..." v-on:keyup.enter="searchget(search)" v-model="search"/>
        </div>
      <div class="header">
        <h3  >Add Member </h3>
        
          <!-- <span>Total {{count}} Member</span> -->
          
      </div>
      <div class="container">
        <div class="headcontent">
          <input class="checkhead"  type="checkbox" >
          <span class="headname">Name</span>
          <span class="heademail">Email</span>
        </div>
        <div class="line"></div>
        <input type="checkbox" id="jack" value="minors" v-model="check">
        <div class="insidecontent" v-for="user in users" :key="user.id ">
          <input type="checkbox" class="insidecheckbox"> 
          <img class="circle" :src="user.image" />
          <p class="memname">{{ user.first_name }} {{user.last_name }}</p>
          <p class="email">{{ user.email }}</p>
        </div>
            

        <div class="allbtn">
          <sui-button class="next" secondary v-on:click="nextPage"
            >Save &amp; Next</sui-button
          >
        </div>
      </div>
    
  </div>
</template>

<script>
// import ModalDirection from "../components/Card/AddMemberCard.vue";
import axios from "axios";
export default {
  components: {
    // ModalDirection,
  },
  data() {
    return {      
      users: {
        id: "",
        email: "",
        username: "",
        first_name: "",
        last_name: "",
        phone: "",
        image: "",
        is_staff: Boolean
    },
     
      activeModel: "",
      // modalOpen: false,
      last: "",
      member: [],
      group_id: localStorage.getItem("group_id"),
      selected: false,
      check: [],
      search:""
    };
  },

  mounted() {
    try {
      axios
        .get(`http://127.0.0.1:8000/auth/users/`, {
          headers: { Authorization: `token ${localStorage.getItem("token")}` },
        })
        .then((resp) => {
          console.log(resp.data);
          this.count = resp.data.length;
          this.users = resp.data;
        });
    } catch (err) {
      console.log(err);
    }
  },
  methods: {
     searchget() {

        try {
      axios
        .get(`http://127.0.0.1:8000/auth/users/?search=` + this.search, {
          headers: { Authorization: `token ${localStorage.getItem("token")}` },
        })
        .then((resp) => {
          console.log(resp.data);
          this.count = resp.data.length;
          this.users = resp.data;
          
        });
       
    } catch (err) {
      console.log(err);
    }
       
  },

    refresh(){
      location.reload()
    },
    back2create(){
      this.$router.push({ path: "/creategroup" , query: { type: "back"  }});
      location.reload()
    },
    go2selectcourse(){
      this.$router.push({ path: "/addcourse" , query: { type: "frommember"  }});
      location.reload()
    },
    
    // openModal() {
    //   this.modalOpen = !this.modalOpen;
    // },
    submit() {
         var testsplit = this.lists.new_user_joined_list.split(",")
         let a = testsplit.map(e => { return parseInt(e) })
          this.lists.new_user_joined_list = a
         console.log(a)
      try {

          axios.post(`http://127.0.0.1:8000/group/` + localStorage.getItem("group_id") +  `/member/` ,  this.lists , {
          headers: {Authorization: `token ${localStorage.getItem("token")}`,}},{emulateJSON: true})
         .then((resp) => {console.log(JSON.stringify(resp.data))
         })
      } catch (err) {
        console.log(err);
        console.error(err.resp.data);
        console.error(err.resp.status);
        console.error(err.resp.headers);
      }
    },
  },
  computed: {
    userLastCount() {
      return this.lists[this.lists.length - 1];
    },
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
  z-index: -1;
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
.AddMembers {
  position: relative;
}
.container {
  border: 1px solid #000;
  position: absolute;
  margin-top: 16%;
  margin-left: 19%;
  width: 65%;
  border-radius: 4px;
  padding: 0%;
}
.top {
  position: relative;
  /* margin-top: 5%; */
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
.plus {
  position: absolute;
  border: none;
  margin-left: 74%;
  margin-top: 12.75%;
  background-color: white;
  z-index: 1;
}

.container .line {
  margin-top: 18px;
  border: 0.1px solid rgba(0, 0, 0, 0.582);
  width: 100%;
  height: 0px;
}
.headcontent {
  color: #000;
  font-weight: bold;
  font-size: 16px;
}
.checkhead{
  position: relative;
  margin-top: 2%;
  margin-left: 30px;
}
.headcontent .headname {
  margin-left: 40px;
  margin-top: 15px;
}
.headcontent .heademail {
  margin-left: 55%;
  margin-top: 15px;
}
.insidecontent {
  display: flex;
  flex-wrap: wrap;
  margin-bottom: 10px;
}
.insidecheckbox{
  margin-top: 40px;
  margin-left: 30px;
}
.circle {
  background-image: url(https://www.creativeglobal.co.in/mcp/uploads/product/original/no_image.jpg);
  position: relative;
  margin-left: 40px;
  margin-top: 20px;
  border: 1px solid #BDBDBD;
  height: 50px;
  width: 50px;
  border-radius: 50%;
  -moz-border-radius: 50%;
  -webkit-border-radius: 50%;
}
.memname {
  position: relative;
  margin-left: 30px;
  margin-top: 35px;
  color: #000;
}
 .email {
  position: absolute;
  margin-left: 70%;
  margin-top: 35px;
  color: #000;
  text-align: center;
}
/* .btn {
  position: absolute;
  margin-top: 30px;
  margin-left: 90%;
  border: none;
  padding: 1px 1px;
} */
.allbtn {
  float: right;
  margin-left: 86%;
  position: absolute;
  margin-top: 3%;
  margin-bottom: 40px;
}
.back a {
  margin: 20px;
  color: #4f4f4f;
  list-style-type: none;
}
.next {
  margin: 20px;
}
.image{
  position: absolute;
  width: 20px;
  height: 20px;
  opacity: 0.5;
  top: 7px;
  left:10px;
}
.search_box {
  width: 25%;
  position: absolute;
  margin-top: 13%;
  margin-left: 59%;
  border: 1px solod #828282;
  color: #fff;
}
.search_box input[type="text"] {
  width: 100%;
  padding: 8px;
  box-sizing: border-box;
  border: 1px solid #828282;
  border-radius: 5px;
  font-size: 13px;
  color: #000;
  outline: none;
  padding-left: 50px;
}
</style>
