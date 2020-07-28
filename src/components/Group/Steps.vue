<template>
  <div id="steps">
    <div class="imgblock" @click="selectStep">
      <img class="imggroup" :src="step.cover_file" />
    </div>
    <div class="detail">
      <p>{{step.name}}</p>
      <p>{{step.textcontent}}</p>
      <img class="imgcomment" src="@/assets/comment.png" />
      <p class="numcomment">{{groupcommentstep.length}}</p>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      NameSession: "",
      NameCourse: "",
      step: {
        id: Number,
        name: "",
        textcontent: "",
        link: "",
        cover_type: Number,
        cover_file: "",
        post_id: Number,
        step_file: "",
      },
      groupcommentstep: [],
    };
  },
  props: {
    IdStep: Number,
    Cover: String,
  },
  created() {},
  mounted() {
    console.log(this.IdStep);
    axios
      .get("http://127.0.0.1:8000/sop/step/" + this.IdStep + "/", {
        headers: {
          Authorization: `token ${window.localStorage.getItem("token")}`,
        },
      })
      .then((response) => {
        this.step = response.data;
        console.log(response.data);
        console.log(this.step);
      })
      .catch((err) => {
        if (err.response) {
          this.change();
          //   console.error(err.response.data);
          console.error(err.response.status);
          //     console.error(err.response.headers);
          if (err.response.status == 400) {
            //   alert("Email or Password Wrong")
          } else if (err.response.status == 404) {
            //    alert("404 not found")
          }
        }
      });

    this.IdGroup = window.localStorage.getItem("IdGroup");
    axios
      .get("http://127.0.0.1:8000/group/" + this.IdGroup + "/comment_step/", {
        headers: {
          Authorization: `token ${window.localStorage.getItem("token")}`,
        },
      })
      .then((response) => {
        this.groupcommentstep = response.data;
        console.log(response.data);
        console.log("fromlearningcomment");
        console.log(this.groupcommentstep);
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
    selectStep() {
      window.localStorage.setItem("IdStep", this.IdStep);
      this.NameSession = window.localStorage.getItem("NameSession");
      this.NameCourse = window.localStorage.getItem("NameCourse");
      console.log(this.NameCourse);
      console.log(this.NameSession);
      console.log(this.step.name);
      this.$router.push({
        name: "learning",
        params: {
          NameCourse: this.NameCourse,
          NameSession: this.NameSession,
          NameStep: this.step.name,
        },
      });
      // this.$router.push({ path: "/learning" });
    },
  },
};
</script>

<style scoped>
#steps {
  position: relative;
  margin-top: 16px;
  margin-bottom: 16px;
  width: 1460px;
  height: 160px;
}
.imgblock img {
  position: absolute;
  width: 280px;
  height: 160px;
  left: 0px;
  top: 0px;
  border: 1px solid black;
}
.imgblock {
  position: absolute;
  width: 280px;
  height: 160px;
  left: 0px;
  top: 0px;
  cursor: pointer;
}
.detail {
  position: absolute;
  width: 1164px;
  height: 160px;
  left: 296px;
  top: 0px;
  border: 1px solid black;
  border-radius: 5px;
  background-color: white;
  padding-top: 24px;
  padding-bottom: 24px;
  padding-left: 40px;
  padding-right: 40px;
}
.imgcomment {
  position: absolute;
  width: 18px;
  height: 18px;
  right: 58px;
  top: 118px;
}
.numcomment {
  position: absolute;
  width: 10px;
  height: 17px;
  right: 40px;
  top: 119px;

  font-family: Montserrat;
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  line-height: 17px;
}
</style>