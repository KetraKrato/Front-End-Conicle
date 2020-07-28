<template>
  <div id="bar">
      <div id="mySidenav" class="sidenav" >
        <div class = "bar">
            <div class = "line" @click ="openNav">
                <div class="linetop"></div>
                <div class="linecen"></div>
                <div class="linebot"></div>
            </div>
            <span @click="selectH" :style="{cursor:'pointer'}">GROUP LEARNING</span>
            <span class="username">{{account.username}}</span>
             <button class="login" type="submit" @click="logout">Logout</button>
        </div>
  <!--      <div style="margin-top: 30px; color: red; ">
            #Spy {{ JSON.stringify(account)}}
        </div> -->
    </div>
    <div class="menusidenav" v-bind:style="{ left:left+'px' }">
        <Vmenu/>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import Vmenu from "@/components/Menu/VerticalMenu.vue"
export default {
    components:{
        Vmenu
    },
    props:['imgUser'],
    data() {
    return {
            left : -350,
            isleft : false,
            dataGroup:{
                GroupName : "",
                Description :"",
            },
      account:{
        username :"",
        first_name:"",
        Last_name:"",
        id:Number,
        image:"",
      },
    }
},
updated() {
  axios
        .get("http://127.0.0.1:8000/auth/users/"+this.account.id+"/",{
          headers: {
            Authorization: `token ${window.localStorage.getItem("token")}`,
          },
        })
        .then((response) => {
          this.account.image = response.data.image;
          window.localStorage.setItem("imgUser",this.account.image)
          window.localStorage.setItem("IdUser",this.account.id)
          console.log(response.data);
          console.log(this.account.image);
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
  this.$emit('imgUser',this.account.image)
},
  mounted(){
          axios
        .get("http://127.0.0.1:8000/auth/users/me/",{
          headers: {
            Authorization: `token ${window.localStorage.getItem("token")}`,
          },
        })
        .then((response) => {
          this.account = response.data;
          console.log(response.data);
          console.log(this.account);
          console.log(this.account.id);

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
    openNav(){
            this.isleft =! this.isleft
            if(this.isleft == false){
                console.log(this.isleft)
                this.left = -350;
            }
             else{
                 console.log(this.isleft)
                    this.left = 0;
             }   
        },
    selectH() {
   /*   this.$router.push({
        params: { NameGroup: window.localStorage.getItem("NameGroup") },
        name: "main"
      });*/
       this.$router.push({ path: "/home" });
    },
    logout(){
      this.$router.push({ path: "/" });
    }
},
}
</script>

<style scoped>
 .sidenav{
        position: absolute;
        margin: 0;
        padding: 0;
        top:0px;
        height: 87px;
        width: 100%;
        background: white;
         border-bottom: 1px solid black;

    }
#bar{
        position :fixed;
        top: 0;
        left: 0;
        width: 100%;
        
    }
    .line{
        position: fixed;
        display: block;
        left: 50px;
        top:25px;
        padding: 0px;
        margin: 0px;
        width: 100px;
    }
    .linetop {
        margin-left: 2%;
        margin-top: 2%;
        margin-right: 0;
        width: 25px;
        height: 3px;
        background-color: black;
    }
    .linecen {
        margin-left: 2%;
        margin-top: 5px;
        margin-bottom: 5px;
        margin-right: 0;
        width: 25px;
        height: 3px;
        background-color: black;
    }
    .linebot {
        margin-left: 2%;
        margin-top: 5px;
        margin-bottom: 5px;
        margin-right: 0;
        width: 25px;
        height: 3px;
        background-color: black;
    }
    span{
        position: fixed;
        top:27px;
        left: 7%;
        font-size: 30px;
    }
    .username{
        position: relative;
        left: 80%;
    }
    .menusidenav{
        position: relative;
        background: #FFFFFF;
        height:  90.75%;
      /*  border: 1px solid #929292;*/
        transition: 0.2s;
        width: 250px;
        
    }
    button.login {
  position: absolute;
  background: #ea2427;
  padding: 14px 10px;
  top:20px;
  right: 10%;

  align-items: center;
  text-align: center;
  letter-spacing: -0.015em;

  border: 6px solid #ea2427;
  width: 125px;
  outline: none;
  color: white;
  border-radius: 5px;
  transition: 0.25s;
  line-height: 0px;
}
button:hover {
  border: 6px solid #f46036;
  background: #f46036;
  color: white;
}
</style>