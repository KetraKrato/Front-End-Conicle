<template>
  <div class="home">
    <div v-if="grouplist.length == 0" id="welcome">
      <img class="welcomeimg" src="../assets/welcome.jpg" />
      <p class="HeadWel">Welcome to Group Learning!</p>
      <div class="groupbutton">
        <p>Sorry,you have no group</p>
        <p>Please contact you administrator and try agian.</p>
      </div>
    </div>
    <div class="GO">
      <div class="H1">
        <h1>All Groups</h1>
      </div>
      <GroupOwned
        v-for="i in grouplist"
        :key="i"
        :IdGroup="i.id"
        :NameGroup="i.group_name"
        :DesGroup="i.group_description"
        :ImgGroup="i.group_image"
      />
    </div>
    <div class="V">
      <Bar />
    </div>

    <!--   <div class="iconplus">
      <img
        class="iconplus"
        src="@/assets/plusoncircle.png"
        @click="$router.push({ path: '/creategroup' })"
      />
    </div>-->

    <!--  <Body/> -->
  </div>
</template>

<script>
// @ is an alias to /src
import Bar from "@/components/Bar.vue";
import axios from "axios";
//import HeaderM from "@/components/Main/Header.vue"
//import Body from "@/components/Main/Body.vue"
import GroupOwned from "@/components/Group/GroupOwned.vue";

export default {
  name: "Home",

  components: {
    Bar,
    // HeaderM,
    // Body,
      GroupOwned,
  },
  data() {
    return {
      grouplist: [],
    };
  },
  created(){
    
  },
  mounted() {
  axios
      .get("http://127.0.0.1:8000/group/", {
        headers: {
          Authorization: `token ${window.localStorage.getItem("token")}`,
        },
      })
      .then((response) => {
        {
          this.grouplist = response.data;
          console.log(response.data);
          console.log(this.grouplist);
        }
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
    submit() {
      console.log(
        JSON.stringify(this.dataGroup) + window.localStorage.getItem("key")
      );
    },
  },
};
</script>
<style scoped>
.home {
  padding: 0;
  margin: 0;
  height: 90%;
}
.V {
  position: initial;
  display: block;
}
.GO {
  position: relative;
  display: block;
  width: 1700px;
  left: 220px;
  margin-bottom: 50px;
}
.GO .H1 {
  position: relative;
  top: 130px;

  color: black;
}

.GJ {
  position: relative;
  display: block;
  width: 1700px;
  margin-bottom: 200px;
}
.GJ h1 {
  position: relative;
  top: 140px;
  left: 220px;
  color: black;
}

#welcome {
  position: absolute;
}
.welcomeimg {
  position: absolute;
  width: 688.07px;
  height: 500px;
  left: 630px;
  top: 186px;
}
.groupbutton {
  position: absolute;
  width: 500px;
  height: 45px;
  left: 720px;
  top: 794px;
}
.groupbutton p {
 
  font-family: Montserrat;
  font-style: normal;
  font-weight: normal;
  font-size: 24px;
  line-height: 29px;
  text-align: center;
}
.HeadWel {
  position: absolute;
  width: 520px;
  height: 44px;
  left: 750px;
  top: 702px;

  font-family: Montserrat;
  font-style: normal;
  font-weight: normal;
  font-size: 36px;
  line-height: 44px;
}
</style>
