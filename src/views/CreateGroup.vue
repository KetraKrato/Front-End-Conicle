<template>
  <div id="creategroup">
    <Bar />

    <form v-on:submit.prevent="submit">
      <div class="data">
        <div>
          <p>Create Group</p>
        </div>
        <div class="boxtxt">
          <p class="text">Group name(requied)</p>
          <input type="text" name="group" v-model="dataGroup.GroupName" />
        </div>
        <div class="boxtxt">
          <p class="text">Description</p>
          <input
            type="text"
            name="description"
            v-model="dataGroup.Description"
          />
        </div>
        <div>
          <button class="cancle" @click="cancle">Cancle</button>
          <button class="create" type="submit">Create</button>
        </div>
      </div>
    </form>
  </div>
</template>

<script>
import axios from "axios";
import Bar from "@/components/Bar.vue";
//import Vmenu from "@/components/Menu/VerticalMenu.vue"
export default {
  components: {
    Bar,
    // Vmenu
  },
  beforeMount: {
    calldata() {},
  },
  mounted: {},
  created: {},
  name: "Create",
  data() {
    return {
      left: 0,
      isleft: false,
      dataGroup: {
        GroupName: "",
        Description: "",
      },
      account: {
        username: "NoneUser",
      },
    };
  },
  computed: {
    changeuser() {
      return this.account.username;
    },
  },
  methods: {
    submit() {
      console.log(
        JSON.stringify(this.dataGroup) + window.localStorage.getItem("key")
      );
      axios
        .post("http://127.0.0.1:8000/auth/users/me/", this.dataGroup, {
          headers: {
            Authorization: `token ${window.localStorage.getItem("token")}`,
          },
        })
        .then((response) => {
          this.account = response.data.username;
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
    cancle() {
      this.$router.push({ path: "/home" });
    },
    openNav() {
      this.isleft = !this.isleft;
      if (this.isleft == false) {
        console.log(this.isleft);
        this.left = -250;
      } else {
        console.log(this.isleft);
        this.left = 0;
      }
    },

    change() {
      this.$router.push({ path: "/home" });
      this.act = true;
      console.log(JSON.stringify(this.obj));
      console.log(window.localStorage.getItem("key"));
    },
    calldata() {
      console.log(window.localStorage.getItem("token"));
      axios.defaults.headers.common[
        "Authorization"
      ] = window.localStorage.getItem("token");
      axios
        .get("http://127.0.0.1:8000/auth/users/me/", {
          headers: {
            Authorization: `token ${window.localStorage.getItem("token")}`,
          },
        })
        .then((response) => {
          console.log(response.data);
        })
        .catch((err) => {
          console.log(err);
        });
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
.data input[type="text"] {
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
.data input[type="text"]:focus {
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
.data button.create {
  position: absolute;
  left: 70%;
  top: 78%;
  background: green;
  padding: 14px 10px;

  align-items: center;
  text-align: center;
  letter-spacing: -0.015em;

  border: 6px solid green;
  width: 125px;
  outline: none;
  color: white;
  border-radius: 5px;
  transition: 0.25s;
  line-height: 0px;
}

.data button.cancle {
  position: absolute;
  left: 53%;
  top: 78%;
  background: #f46036;
  padding: 14px 10px;

  align-items: center;
  text-align: center;
  letter-spacing: -0.015em;

  border: 6px solid #f46036;
  width: 125px;
  outline: none;
  color: white;
  border-radius: 5px;
  transition: 0.25s;
  line-height: 0px;
}
.data button.cancle:hover {
  border: 6px solid #ea2427;
  background: #ea2427;
  color: white;
}
.data button.create:hover {
  border: 6px solid rgb(4, 185, 4);
  background: rgb(4, 185, 4);
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
.sidenav {
  height: 87px;
  width: 100%;
  background: white;
}
p {
  color: #605856;
}
.bar {
  display: flex;
  position: inherit;
  padding: 30px;
}
.line {
  display: block;
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
span {
  position: absolute;
  left: 7%;
  font-size: 30px;
}
.username {
  position: relative;
  left: 80%;
}
.menusidenav {
  position: absolute;
  background: #ffffff;
  height: 90.75%;
  border: 1px solid #929292;
  transition: 0.2s;
  width: 250px;
}
ul {
  list-style-type: none;
  border: 1px solid #929292;
}
</style>
