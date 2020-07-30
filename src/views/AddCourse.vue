<template>
<div class="addcourse">

      <ul class="progressbar">
          <li class="active2" type="button" v-on:click="back2create">Create Group</li>
          <li class="active2" type="button" v-on:click="back2addmem">Add Member</li>
          <li class="active" type="button" v-on:click="refresh">Select Course</li>
      </ul>
      <div class="fheader">
        <h3>Add Course {{add.courses}}</h3>
        
          
      </div>
      <div class="search_box">
          <img class="image" src="../img/search.png" alt="">
          <input class="search" type="text" placeholder="Search..." v-on:keyup.enter="searchc(search)" v-model="search"/>
        
        </div>
      
      <div class="container">
      <div class="course-manage">
        <div class="header">
          <input type="checkbox" class="checkonhead" @click="selectAll" v-model="allSelected">
          <span class="headname">Course Name</span>
          <span class="headupdate">Last Updated</span>
          <span class="headupdate">Stutus</span>
          <span class="headupdate">Session</span>

        </div>
        <div class="line"></div>
        <div class="show" v-for="list in lists" :key="list.id">
            <div class="content dropright">
            <input type="checkbox" class="checkheadinside" @click="select" v-model="group.courses" :value="list.id">
            <img class="cimg" :src="list.cover" alt="" />
              <span class="name">{{list.name}}</span>
              <span class="lastdate1">{{list.posts.length}}</span>
              <span class="lastdate2"  v-if="list.publish == true">Published</span>
              <span class="lastdate2-1" v-else-if="list.publish == false">Unpublished</span>
              <span class="lastdate3">{{getDate(list.date_modified)}}</span>
            </div>
        </div>
        
      </div>
      <div class="allbtn">
            
            <sui-button type="button" class="next" secondary  v-on:click="submit">Confirm</sui-button>
          </div>
    </div>
</div>
</template>

<script>
import moment from "moment";
import axios from "axios"
export default {
  data() {
    return {
      showModal: true,
      activeModel: "",
        lists: 
        {
        id: "",
        name: "",
        description: "",
        cover: "",
        publish: "",
        courses: [],
        posts: [],
        date_created: "",
        date_modified: ""
        },
        search:"",
        add:{
          courses: [],
        },
        group:{
          courses: [],
        },
      selected: [],
      allSelected: false,
      userIds: []
    }
  },

  mounted() {
    try {
         axios.get("http://127.0.0.1:8000/sop/course/", {headers: {Authorization: `token ${localStorage.getItem("token")}`,}})
         .then((resp) => {console.log(resp.data)
         this.lists = resp.data
         console.log(JSON.stringify(this.lists));
         })
      } catch (err) {
        console.log(err);
      }
    try {
         axios.get("http://127.0.0.1:8000/group/" +localStorage.getItem("group_id")+ "/", {headers: {Authorization: `token ${localStorage.getItem("token")}`,}})
         .then((resp) => {console.log(resp.data)
         this.group = resp.data
         console.log(JSON.stringify(this.group));
         })
      } catch (err) {
        console.log(err);
      }
  },
  methods: {
       selectAll: function() {
            // this.group.courses = [];
            this.group.courses = [];

            if (!this.allSelected) {
                for (var list in this.lists) {
                    // this.group.courses.push(this.lists[list].id);
                    this.group.courses.push(this.lists[list].id);
                }
            }
        },
        select: function() {
            this.allSelected = false;
        },
      searchc(event) {
        try {
      axios
        .get(`http://127.0.0.1:8000/sop/course/?search=` + event, {
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
    refresh(){
      location.reload()
    },
    back2create(){
      this.$router.push({ path: "/creategroup" , query: { type: "backfromcourse"  }});
      location.reload()
    },
    back2addmem(){
      this.$router.push({ path: "/addmember" , query: { type: "back"  }});
      location.reload()
    },
     getDate: function(date) {
      return moment(date, "YYYY-MM-DD").format("DD MMMM YYYY");
    },
    submit(){
      console.log(this.add)
      try {
          axios.patch(`http://127.0.0.1:8000/group/` + localStorage.getItem("group_id") +  `/` ,  this.group , {
          headers: {Authorization: `token ${localStorage.getItem("token")}`,}},{emulateJSON: true})
         .then((resp) => {console.log(JSON.stringify(resp.data))
          // this.$router.push({ path: "/groupmanage" , });
          
         })
      } catch (err) {
        console.log(err);
        console.error(err.resp.data);
        console.error(err.resp.status);
        console.error(err.resp.headers);
      }
    }
  },
};

</script>

<style scoped>
*{
    font-family: "Montserrat", sans-serif;
}
    .container-progress{
        width: 100%;

    }
    .progressbar{
        counter-reset: step;

    }
    .progressbar li{
        list-style-type: none;
        float: left;
        width: 33.33%;
        position: relative;
        text-align: center;
    }
    .progressbar li::before{
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
    }
    .progressbar li::after{
        content: '';
        position: absolute;
        width: 100%;
        height: 5px;
        background-color: #4f4f4f;
        top: 33px;
        left: -50%;
        z-index: -1;
    }
    .progressbar li:first-child::after{
        content: none;
    }
    .progressbar li.active{
        color: #4F4F4F;
        font-weight: bold;
    }
    .progressbar li.active::before{
        border-color:#4F4F4F;
    }
    .progressbar li.active2{
        color: #ddd;
        font-weight: bold;
    }
    .progressbar li.active2::before{
        border-color:#4f4f4f;
        
    }
    .progressbar li.active + li::after{
        background-color: #4F4F4F;
    }
    
.container{
  position: absolute;
  margin-top:15%;
  margin-left: 10%;
  margin-bottom: 4%;
}
.manage {
  position: absolute;

}
.checkonhead{
  margin-top: 24px;
  margin-left: 40px;
}
.fheader {
  position: absolute;
  margin-left: 19%;
  margin-top: 10%;
  color: #000;
}
.content {
  display: flex;
  flex-wrap: wrap;
  position: relative;
}
.course-manage {
  font-size: 18px;
  border: 1px solid #000;
  width: 80%;
  margin: auto;
  margin-top: 2%;
  border-radius: 5px;
}
.course-manage .line {
  margin-top: 20px;
  border: 0.1px solid rgba(0, 0, 0, 0.582);
  width: 100%;
  height: 0px;
}

.course-manage .headname {
  margin-top: 20px;
  margin-left: 20px;
  color: black;
  text-align: center;
  text-decoration: none;
  font-size: 16px;
  font-weight: bold;
  padding-left: 20px;
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
  /* border: 1px solid #000; */
  border-radius: 5px;
  margin-top: 20px;
  margin-left: 40px;
  width: 110px;
  height: 60px;
  grid: 3;
}
.p-text{
  margin-top: 20px;
}
.content {
  position: relative;
  margin-bottom: 10px;
  font-size: 14px;
}
.content .name {
  position: relative;
  float: left;
  margin-top: 4.5%;
  margin-left: 5%;
  margin-right:32%;
}
.content .lastdate1 {
  position: absolute;
  top: 40px;
  left: 59%;

}
.content .lastdate2 {
  text-align: center;
  position: absolute;
  top: 40px;
  left: 69%;
}
.content .lastdate2-1{
  text-align: center;
  position: absolute;
  top: 40px;
  left: 68%;
}
.content .lastdate3 {
  position: absolute;
  top: 40px;
  left: 83%;
}

.check{
    position: absolute;
    margin-left: 20px;
    margin-top: 40px;
}
.allbtn{
    position: relative;
    margin-top: 30px;
    margin-left: 81.5%;
}
.checkhead{
    position: absolute;
    margin-left: -17.25% ;
    margin-right: 20px ;
    margin-top: 2.25%;
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
.image{
  position: absolute;
  width: 20px;
  height: 20px;
  opacity: 0.5;
  top: 7px;
  left:10px;
}
.checkheadinside{
  margin-top: 40px;
  margin-left: 41px;
}
</style>