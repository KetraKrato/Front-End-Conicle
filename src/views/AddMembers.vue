<template>
<div class="addcourse">

      <ul class="progressbar">
          <li type="button" v-on:click="back2create" class="active">Create Group</li>
          <li type="button" v-on:click="refresh" class="active2">Add Member</li>
          <li type="button" v-if="add_member.new_user_joined_list" v-on:click="go2selectcourse">Select Course</li>
      </ul>
      <div class="fheader">
        <h3>Add Member {{add_member.new_user_joined_list}}</h3>
      </div>

      <div class="search_box">
          <img class="image" src="../img/search.png" alt="">
          <input class="search"  type="text" placeholder="Search..." v-on:keyup.enter="searchc(search)" v-model="search"/>
      </div>
      
      <div class="container">
      <div class="course-manage">
        <div class="headcontent">
          <input type="checkbox" class="checkhead" @click="selectAll" v-model="allSelected">
          <span class="headname">Name</span>
          <span class="heademail">Email</span>

        </div>
        <div class="line"></div>
        <div class="show" v-for="list in lists" :key="list.id">
            <div class="content dropright">
            <input type="checkbox" class="checkheadinside" v-model="add_member.new_user_joined_list" @click="select"  :value="list.id" >
            <img class="circle" :src="list.image" alt="" />
              <span class="name">{{list.first_name}} &nbsp;&nbsp; {{list.last_name}}</span>
              <span class="lastdate3"> {{list.email}} </span>
            </div>
        </div>
        
      </div>
      <div class="allbtn">
            
            <sui-button type="submit" class="next" secondary  v-on:click="submit">Save &amp; Next</sui-button>
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
        lists:{
        id: "",
        email: "",
        username: "",
        first_name: "",
        last_name: "",
        phone: "",
        image: "",
        is_staff: Boolean
    },
        search:"",
        selectall:"",
        checked:[],
      add_member:{
         new_user_joined_list: []
      },
      selected: [],
      allSelected: false,
      userIds: []
      
      
    }
  },

  mounted() {
    try {
         axios.get("http://127.0.0.1:8000/auth/users/", {headers: {Authorization: `token ${localStorage.getItem("token")}`,}})
         .then((resp) => {console.log(resp.data)
         this.lists = resp.data
         console.log(JSON.stringify(this.lists));
         })
      } catch (err) {
        console.log(err);
      }
  
  try {
         axios.get(`http://127.0.0.1:8000/group/` + localStorage.getItem("group_id") +  `/member/?idonly`, {headers: {Authorization: `token ${localStorage.getItem("token")}`,}})
         .then((resp) => {console.log(resp.data)
         this.add_member.new_user_joined_list = resp.data
         console.log(JSON.stringify(this.lists));
         })
      } catch (err) {
        console.log(err);
      }
  },
  
  methods: {
      selectAll: function() {
            this.add_member.new_user_joined_list = [];

            if (!this.allSelected) {
                for (var list in this.lists) {
                    this.add_member.new_user_joined_list.push(this.lists[list].id);
                }
            }
        },
      select: function() {
            this.allSelected = false;
      },
      searchc(event) {
       
        try {
      axios
        .get(`http://127.0.0.1:8000/auth/users/?search=` + event, {
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
      this.$router.push({ path: "/creategroup" , query: { type: "back"  }});
      location.reload()
    },
    go2selectcourse(){
      this.$router.push({ path: "/addcourse" , query: { type: "frommember"  }});
      location.reload()
    },
     getDate: function(date) {
      return moment(date, "YYYY-MM-DD").format("DD MMMM YYYY");
    },
    check: function(e) {
      if (e.target.checked) {
        console.log(e.target.value)
      }
    },
     submit() {
        //  var testsplit = this.lists.new_user_joined_list.split(",")
        //  let a = testsplit.map(e => { return parseInt(e) })
        //   this.lists.new_user_joined_list = a
        //  console.log(a)
      try {
          // http://127.0.0.1:8000/group/10/member/
          axios.post(`http://127.0.0.1:8000/group/` + localStorage.getItem("group_id") +  `/member/` ,  this.add_member , {
          headers: {Authorization: `token ${localStorage.getItem("token")}`,}},{emulateJSON: true})
         .then((resp) => {console.log(JSON.stringify(resp.data))
         this.$router.push({ path: "/addcourse" , query: { type: "savefrommem "  }});
         })
      } catch (err) {
        console.log(err);
        console.error(err.resp.data);
        console.error(err.resp.status);
        console.error(err.resp.headers);
      }
    },
    
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
        background-color: #ddd;
        top: 33px;
        left: -50%;
        z-index: -1;
    }
    .progressbar li:first-child::after{
        content: none;
    }
    .progressbar li.active{
         color: #ddd;
  font-weight: bold;
    }
    .progressbar li.active::before{
        border-color:#4F4F4F;
    }
    .progressbar li.active2{
        color: #4f4f4f;
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
  margin-top: -10px ;
}
.headcontent{
    margin-top: 18px;
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
.checkhead{
  top: 20px;
  left: 32%;
}
.headname {
  margin-left: 95px;
  margin-top: 20px;
  font-size: 16px;
  font-weight: bold;

} .heademail {
  margin-left: 55%;
  margin-top: 150%;
  margin-bottom: 15px;
  font-size: 16px;
  font-weight: bold;
}
.checkheadinside{
  margin-top: 40px;
  margin-left: 41px;
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
.content .lastdate3 {
  position: absolute;
  top: 40px;
  left: 71%;

}


.check{
    position: absolute;
    margin-left: 20px;
    margin-top: 40px;
}
.allbtn{
    position: relative;
    margin-top: 30px;
    margin-left: 79.5%;
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
</style>