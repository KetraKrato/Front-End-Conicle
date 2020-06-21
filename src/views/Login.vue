<template>
  <div id="login">
      <form v-on:submit.prevent="submit">
          <div class="data">
              <div>
                  <p>Log in</p>
              </div>
              <div class="boxtxt">
                  <p class ="text" >Email</p>
                  <input type="text" name="user"  v-model="account.email"/>
              </div>
              <div class="boxtxt">
                  <p class ="text">Password</p>
                  <input type="password" name="pass"  v-model="account.password"/>
              </div>
           <button class ="login" type="submit">Login</button>
           <div v-if="home"><router-link to ="/home" class="router" ></router-link></div>
          </div>
        <div style="margin-top: 16px; color: red;">
            #Spy {{ JSON.stringify(account)}}
        </div>
      </form>

  </div>
</template>

<script>
import axios from 'axios';
export default {
       name: "login",
    mounted() {
        this.visibility = 'password' 
    },
    data() {
        return {
            act : false,
            obj : String,
            account:{
                password: "Admin101857",
                email: "test@example.com"
            },
        
        }
        
    },
    methods: {
        submit(){
            console.log(JSON.stringify(this.account))
             axios.post('http://127.0.0.1:8000/auth/token/login/',this.account)
                .then(response => { this.obj = response.data,this.change()} )
                .catch(err => {console.error(err),alert("Email or Password Wrong")})
            
        },
        change(){
            this.$router.push({path:'/home'})
            this.act = true
            console.log(JSON.stringify(this.obj))
        },

   /*     hidePassword(){
            this.visibility = 'password'
        }*/
    },
    computed:{
        home(){ 
            return this.act
        }
    }

}
</script>

<style scoped>
    .data{
        font-family: sans-serif;
        width: 1000px;
        height: 500px;
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%,-50%);
        background: white;
        text-align: left;
        color: #605856;
    }
    .data input[type ="text"],.data input[type ="password"]{
        border:0;
        background: none;
        display: block;
        margin-bottom: 20px;
        text-align: left;
        border: 2px solid #EA2427;
        padding: 14px 10px;
        width: 85%;
        outline: none;
        color: #605856;
        border-radius: 5px;
        font-size: 16px;
      /*  transition: 0.25s;*/
    }
    .data input[type ="text"]:focus,.data input[type ="password"]:focus{
        width: 85%;
        border-color: #F46036;

    }

    .data p{
        margin: 5%;
        color: #605856;
        padding-left: 50px;
        font-size: 30px;
        font-weight: 500;
    }
    .data button.login{
        border:0;
        background:  #EA2427;
        display: block;
        margin-left: 739px;  /* change*/
        text-align: center;
        border: 2px solid #EA2427;
        padding: 14px 10px;
        width: 125px;
        outline: none;
        color: white;
        border-radius: 5px;
        transition: 0.25s;
    }
    .data button:hover{
        border: 2px solid #F46036;
        background: #F46036;
        color: white;
    }

    .router{
        color:#605856;
    }

    .router:hover{
        color: white;
    }
    p.text{
        font-size: 18px;
        margin: 0;
        padding: 0;
        text-align: left;
    }
    .boxtxt{
        padding-left: 10%;
    }
    .boxtxt p{
        padding-bottom: 5px;
    }
</style>
<style>
    body{
        background-color: #605856;
    }
</style>