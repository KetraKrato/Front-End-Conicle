<template>
  <div id="owned" class="block" @click="select">
    <div class="imgblock">
      <img class="imggroup" :src="ImgGroup" />
    </div>
    <div class="textblock">
      <span class="head">{{NameGroup}}</span>
      <span class="member">{{member_count}} member</span>
      <!--   <div class="submenu"><img src="@/assets/menupoint.png" @click="isShow"></div> 
        
        <div class="popup" v-bind:style="{ display: display }">
            <span>Edit</span>
            <div class="linesubmenu"></div>
            <span>Delete</span>
      </div>-->
      <div class="des">
        <span>{{DesGroup}}</span>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      member_count: Number,
      display: "none",
      show: false,
    };
  },
  mounted() {

    axios
      .get("http://127.0.0.1:8000/group/" + this.IdGroup + "/", {
        headers: {
          Authorization: `token ${window.localStorage.getItem("token")}`
        }
      })
      .then(response => {
        this.member_count = response.data.member_count;
        console.log(response.data);
        console.log("this is member" + JSON.stringify(this.member_count));
      })
      .catch(err => {
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
  props: {
    IdGroup: Number,
    NameGroup: String,
    DesGroup: String,
    ImgGroup: String
  },
  methods: {
    isShow() {
      this.show = !this.show;
      if (this.show == false) {
        this.display = "none";
        console.log(this.show);
      } else {
        this.display = "block";
        console.log(this.show);
      }
    },
    select() {
      console.log("SelectGroup");
      window.localStorage.setItem("IdGroup", this.IdGroup);
      window.localStorage.setItem("NameGroup", this.NameGroup);
      this.$router.push({
        params: { NameGroup: this.NameGroup },
        name: "main"
      });
      //  this.$router.push({ path: "/main" });
    }
  }
};
</script>

<style scoped>
.block {
  position: relative;
  display: inline-block;
  border: 1px solid black;
  border-radius: 5px;
  background-color: white;
  width: 350px;

  height: 359px;
  top: 130px;
  left: 0px;
  margin-top: 32px;
  margin-left: 32px;
  cursor: pointer;
}
.imgblock {
  position: relative;
  width: 350px;
  height: 194px;
}
.imggroup {
  position: absolute;
  width: 348px;
  height: 194px;
  border-radius: 2px;
}
.textblock {
  position: relative;
  width: 348px;
  height: 165px;
}
span.head {
  position: absolute;
  display: block;
  font-size: 24px;
  top: 16px;
  left: 32px;
}
span.member {
  position: absolute;
  display: block;
  font-size: 18px;
  left: 32px;
  top: 55px;
  font-family: Montserrat;
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  line-height: 17px;
}
.des {
  position: absolute;
  top: 89px;
  left: 32px;
  font-family: Montserrat;
  font-style: normal;
  font-weight: normal;
  font-size: 18px;
  line-height: 22px;
}
/*.submenu {
  position: absolute;
  left: 90%;
  top: 10%;
  width: 10px;
  height: 20px;
}
img {
  width: 20px;
  height: 20px;
}

  .popup{
        position: absolute;
        width: 123px;
        height: 76px;
        top: 57px;
        left: 198px;

        background: #FFFFFF;
        border: 1px solid #000000;
        box-sizing: border-box;
        border-radius: 5px;

    }
    .popup span{
        position: relative;
        display: block;
        margin: 7.5%;

    }
    .popup .linesubmenu{
        position: relative;
        width: 121px;
        height: 1px;
        background: #000000;
    }*/
</style>