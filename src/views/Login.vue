<template>
  <div id="login">
    <form v-on:submit.prevent="submit">
      <div class="data">
        <div>
          <p>Log in</p>
        </div>
        <div class="boxtxt">
          <p class="text">Email</p>
          <input type="text" name="user" v-model="account.email" />
        </div>
        <div class="boxtxt">
          <p class="text">Password</p>
          <input type="password" name="pass" v-model="account.password" />
        </div>
        <button class="login" type="submit" @click.enter="submit">Login</button>
        <!-- <button  @click="$router.push({path:'/creategroup'})">ChangePage</button> -->
      </div>
   <!--   <div style=" position: absolute; margin-top: 16px; color: red;">
        #Spy {{ JSON.stringify(account) }}
      </div> -->
    </form>
    <div class="top">
        <p>Group learning</p>
        <button class="login">Login</button>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "login",
  mounted() {
    this.visibility = "password";
  },
  data() {
    return {
      act: false,
      obj: String,
      account: {
        password: "",
        email: "",
      },
    };
  },
  methods: {
    submit() {
      console.log(JSON.stringify(this.account));
      axios
        .post("http://127.0.0.1:8000/auth/token/login/", this.account)
        .then((response) => {
          (this.obj = response.data),
            window.localStorage.setItem("token", response.data.auth_token),
            this.change();
        })
        .catch((err) => {
          if (err.response) {
            console.error(err.response.data);
            console.error(err.response.status);
            console.error(err.response.headers);
            if (err.response.status == 400) {
              alert("Email or Password Wrong");
            } else if (err.response.status == 404) {
              alert("404 not found");
            }
          }
        });
    },
    change() {
      this.$router.push({ path: "/home" });
      this.act = true;
      console.log(JSON.stringify(this.obj));
      console.log(window.localStorage.getItem("key"));
    },

    /*     hidePassword(){
            this.visibility = 'password'
        }*/
  },
  computed: {
    home() {
      return this.act;
    },
  },
};
</script>

<style scoped>
.data {
  font-family: sans-serif;
  position: absolute;
  width: 761px;
  height: 419px;
  left: 610px;
  top: 250px;

  background: white;
  text-align: left;
  color: #605856;

  background: #ffffff;
  border: 1px solid #000000;
  box-sizing: border-box;
  border-radius: 5px;
}
.data input[type="text"],
.data input[type="password"] {
  border: 0;
  background: none;
  display: absolute;
  margin-bottom: 20px;
  text-align: left;
  border: 2px solid #ea2427;
  padding: 14px 10px;
  width: 85%;
  outline: none;
  color: #605856;
  border-radius: 5px;
  font-size: 16px;
  /*  transition: 0.25s;*/
}
.data input[type="text"]:focus,
.data input[type="password"]:focus {
  width: 85%;
  border-color: #f46036;
}

.data p {
  margin-top: 7%;
  margin-left: 3%;
  margin-bottom: 3%;
  color: #605856;
  padding-left: 50px;
  font-size: 30px;
  font-weight: 500;
}
.data button.login {
  position: absolute;
  left: 70%;
  top: 78%;
  background: #ea2427;
  padding: 14px 10px;

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
.data button:hover {
  border: 6px solid #f46036;
  background: #f46036;
  color: white;
}

.router {
  color: #605856;
}

.router:hover {
  color: white;
}
p.text {
  font-size: 18px;
  margin: 0;
  padding: 0;
  text-align: left;
}
.boxtxt {
  padding-left: 10%;
}
.boxtxt p {
  padding-bottom: 5px;
}
.top{
    height: 84px;
    border-bottom: 1px solid black;
}
.top .login{
    position: absolute;
    top:1%;
    right: 1%;
    background: #ea2427;
    padding: 14px 10px;

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
.top p{
position: absolute;
width: 261px;
height: 52px;
left: 32px;
top:20px;

    font-family: Montserrat;
font-style: normal;
font-weight: normal;
font-size: 24px;
line-height: 29px;
display: flex;
align-items: center;
text-align: center;
}
</style>
<style>
body {
  background-color: #605856;
}
</style>
