<template>
  <div id="owned" class="block" @click="select" v-bind:style="{display : displaycourse}">
    <div class="imgblock">
      <img class="imggroup" :src="DataCourse.cover" />
    </div>
    <div class="textblock">
      <span class="head">{{DataCourse.name}}</span>
      <span class="member">{{DataCourse.posts.length}} sessions</span>
      <span class="des">{{DataCourse.description}}</span>

    </div>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  data() {
    return {
      display: "none",
      show: false,
      displaycourse:"",
      showcourse: true,
      DataCourse:{},
    };
  },
 mounted() {
    console.log(this.IdCourse)
    axios
        .get("http://127.0.0.1:8000/sop/course/"+this.IdCourse+"/",{
          headers: {
            Authorization: `token ${window.localStorage.getItem("token")}`,
          },
        })
        .then((response) => {
          this.DataCourse= response.data;
          console.log(response.data);
          console.log(this.DataCourse);
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
  props: {
      IdCourse:Number,
   /*   NameCourse:String,
      NumSession:Number,
      Description:String,
      Cover:String*/
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
            this.showcourse = !this.showcourse;
      if (this.showcourse == false) {
        this.displaycourse = "none";
        console.log(this.showcourse);
      } else {
        this.displaycourse = "";
        console.log(this.showcourse);
      }
      console.log("SelectGroup");
      console.log(this.IdCourse)
      window.localStorage.setItem("IdCourse", this.IdCourse);
      this.$router.push({ name: "subcourse", params:{ NameCourse: this.NameCourse} });
      //this.$router.push({ path: "/subcourse"});
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
  left: 210px;
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
  position: relative;
  display: block;
  font-size: 24px;
  top: 16px;
  left: 32px;
}
span.member {
  position: relative;
  display: block;
  font-size: 18px;
  left: 32px;
  top: 25px;
  font-family: Montserrat;
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  line-height: 17px;
}
span.des {
  position: absolute;
  width: 290px;
  top: 70px;
  left: 32px;
  font-family: Montserrat;
  font-style: normal;
  font-weight: normal;
  font-size: 18px;
  line-height: 22px;
  word-wrap: break-word;
  color: blue;
}

</style>