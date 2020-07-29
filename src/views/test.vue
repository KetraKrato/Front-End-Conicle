<template>
<div id="app">
    <h4>User</h4>
        <div>
            <table>
                <tr>
                    <th>Name</th>
                    <th>Select All<input type="checkbox" @click="selectAll" v-model="allSelected"></th>
                </tr>
                <tr v-for="list in lists" :key="list.id">
                    <td>{{ list.username }}</td>
                    <td><input type="checkbox" v-model="userIds" @click="select" :value="list.username"></td>
                </tr>
            </table>
        </div>

        <span>Selected Ids: {{ userIds }}</span>
</div>
</template>

<script>
import axios from "axios"
export default {

  data() {
    return {      
       lists:{
        id:"",
        email: "",
        username: "",
        first_name: "",
        last_name: "",
        phone: "",
        image: "",
        is_staff: Boolean
       },
        users: [ 
            { "id": "Shad", "name": "Shad" }, 
            { "id": "Duane", "name": "Duane" }, 
            { "id": "Myah", "name": "Myah" }, 
            { "id": "Kamron", "name": "Kamron" }, 
            { "id": "Brendon", "name": "Brendon" }
        ],
        selected: [],
        allSelected: false,
        userIds: []
       
    }
  },
  mounted(){
    try {
         axios.get("http://127.0.0.1:8000/auth/users/", {headers: {Authorization: `token ${localStorage.getItem("token")}`,}})
         .then((resp) => {console.log(resp.data)
         this.lists = resp.data
         console.log(JSON.stringify(this.lists));
         })
      } catch (err) {
        console.log(err);
      }
  
  },
    methods: {
        selectAll: function() {
            this.userIds = [];

            if (!this.allSelected) {
                for (var user in this.lists) {
                    this.userIds.push(this.lists[user].username);
                }
            }
        },
        select: function() {
            this.allSelected = false;
        }
    }
}
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
  
  top: 2.5%;
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
</style>