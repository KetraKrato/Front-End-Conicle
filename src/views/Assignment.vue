<template>
  <div id="Assignments">
    <div class="assignment">
      <div class="header">All Assignments</div>
  <!--    <div class="box">
        <div class="post">
          <div class="detail">
            <span class="headdetail">Assignment title 01</span>
            <span class="posttime">Post 01 June 2020</span>
            <span class="duetime">Due 15 June 2020, 11:59 PM</span>
            <span v-if="status==1" class="status" v-bind:style="{ color: 'green' }">Turned in</span>
            <span v-else-if="status==2" class="status" v-bind:style="{ color: 'orange' }">Late</span>
            <span v-else-if="status==3" class="status" v-bind:style="{ color: 'red' }">Missing</span>
          </div>
          <div class="des">
            <p>kdiiiwefoasdoifjawoiehfoiadhjfoawhefowdohifuodisfhjhoidsafofidshfjos</p>
          </div>

          <div v-if="show" class="file">
            <img />
            <span class="namefile">photo.png</span>
            <span class="sizefile">130 kb</span>
          </div>
        </div>
        <div class="com">
          <div class="commentbox">
            <input placeholder="Add comment ..." type="text" />
            <img src="@/assets/attach.png" />
            <span @click="send">Send</span>
          </div>
        </div>
      </div> -->
      <AssignmentDetail v-for="(i,index) in assignData" :key="index" :DataAssignment="i"/>
    </div>
    
    <Bar />
    <div class="mainbar">
      <div class="M" @click="selectM">Main</div>
      <div class="C" @click="selectC">Course</div>
      <div class="At" @click="selectAt">Attachment</div>
      <div class="As" @click="selectAs">Assignment</div>
      <div class="P" @click="selectP">People</div>
    </div>
  </div>
</template>

<script>
import Bar from "@/components/Bar.vue";
import AssignmentDetail from "@/components/AssignmentDetail.vue";
import axios from "axios"
export default {
  data() {
    return {
      show: true,
      status: 3,
      assignData:Object,
      IdGroup:Number,
    };
  },
  components: {
    Bar,AssignmentDetail
  },
  mounted(){
    this.IdGroup = window.localStorage.getItem("IdGroup");
 axios
        .get("http://127.0.0.1:8000/group/"+this.IdGroup+"/assignment/",{
          headers: {
            Authorization: `token ${window.localStorage.getItem("token")}`,
          },
        })
        .then((response) => {
          this.assignData = response.data;
          console.log(this.assignData);
         // console.log(this.grouplist);
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
    send() {},
    selectM() {
      this.$router.push({
        params: { NameGroup: window.localStorage.getItem("NameGroup") },
        name: "main"
      });
      //  this.$router.push({ path: "/main" });
    },
    selectC() {
      this.$router.push({
        params: { NameGroup: window.localStorage.getItem("NameGroup") },
        name: "course"
      });
      //this.$router.push({ path: "/course" });
    },
    selectAt() {
      this.$router.push({
        params: { NameGroup: window.localStorage.getItem("NameGroup") },
        name: "attachment"
      });
      //  this.$router.push({ path: "/attachment" });
    },
    selectAs() {
      this.$router.push({
        params: { NameGroup: window.localStorage.getItem("NameGroup") },
        name: "assignment"
      });
      // this.$router.push({ path: "/assignment" });
    },
    selectP() {
      this.$router.push({
        params: { NameGroup: window.localStorage.getItem("NameGroup") },
        name: "people"
      });
      //this.$router.push({ path: "/people" });
    },
  }
};
</script>

<style scoped>
.assignment {
  position: relative;
  left: 387px;
  top: 110px;
}
.header {
  font-family: Montserrat;
  font-style: normal;
  font-weight: bold;
  font-size: 24px;
  line-height: 29px;
  margin-bottom: 32px;
}
.box {
  position: relative;
  width: 1146px;
  background: #ffffff;
  border: 1px solid #000000;
  box-sizing: border-box;
  border-radius: 5px;
}
.post {
  position: relative;
  width: 1146px;
  border-bottom: 1px solid black;
  padding-top: 24px;
  padding-left: 40px;
  padding-right: 40px;
  padding-bottom: 24px;
}
.detail {
  position: relative;
  width: 1066px;
  height: 78px;
}
.headdetail {
  position: absolute;
  width: 173px;
  height: 22px;

  font-family: Montserrat;
  font-style: normal;
  font-weight: normal;
  font-size: 18px;
  line-height: 22px;
}
.posttime {
  position: absolute;
  width: 143px;
  height: 17px;
  top: 29px;

  font-family: Montserrat;
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  line-height: 17px;

  color: #4f4f4f;
}
.duetime {
  position: absolute;
  width: 186px;
  height: 17px;
  right: 0px;

  font-family: Montserrat;
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  text-align: right;
  line-height: 17px;

  color: #4f4f4f;
}
.status {
  position: absolute;
  width: 80px;
  height: 17px;
  right: 0px;
  top: 29px;

  font-family: Montserrat;
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  line-height: 17px;

  text-align: right;
}
.des {
  position: relative;
  width: 1066px;
  height: 44px;

  font-family: Montserrat;
  font-style: normal;
  font-weight: normal;
  font-size: 18px;
  line-height: 22px;

  color: #000000;
}
.file {
  position: relative;
  width: 400px;
  height: 50px;
  border: 1px solid black;
}
.file img {
  width: 85px;
  height: 50px;
}
.file .namefile {
  position: absolute;
  top: 7px;
  left: 110px;
  font-family: Montserrat;
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  line-height: 17px;
}
.file .sizefile {
  position: absolute;
  top: 28px;
  left: 110px;
  font-family: Montserrat;
  font-style: normal;
  font-weight: normal;
  font-size: 12px;
  line-height: 15px;
}
.com {
  position: relative;
  padding-top: 16px;
  padding-left: 40px;
  padding-right: 40px;
  padding-bottom: 16px;
}
.commentbox {
  position: relative;
  padding: 12px;
  border: 1px solid black;
  border-radius: 5px;
}
.commentbox input {
  position: relative;
  border: #ffffff;
  outline: none;
  width: 88%;
}
.commentbox img {
  position: absolute;
  width: 20px;
  height: 20px;
  right: 90px;
}
.commentbox span {
  position: absolute;
  right: 30px;
  font-family: Montserrat;
  font-style: normal;
  font-weight: 500;
  font-size: 18px;
  line-height: 22px;
}
.M {
  position: fixed;
  width: 100px;
  height: 50px;
  left: 650px;
  top: 30px;
  font-size: 25px;
  /*  border-bottom: 3px solid black;*/
  padding-left: 20px;
  margin-left: 10px;
  margin-right: 10px;
  cursor: pointer;
}
.C {
  position: fixed;
  width: 100px;
  height: 50px;
  left: 750px;
  top: 30px;
  font-size: 25px;
  /*     border-bottom: 3px solid black;*/
  padding-left: 10px;
  margin-left: 10px;
  margin-right: 10px;
  cursor: pointer;
}
.At {
  position: fixed;
  width: 120px;
  height: 50px;
  left: 855px;
  top: 30px;
  font-size: 25px;
  /*     border-bottom: 3px solid black;*/
  padding-left: 10px;
  margin-left: 10px;
  margin-right: 10px;
  cursor: pointer;
}
.As {
  position: fixed;
  width: 170px;
  height: 50px;
  left: 1025px;
  top: 30px;
  font-size: 25px;
  border-bottom: 3px solid black;
  padding-left: 10px;
  margin-left: 10px;
  margin-right: 10px;
  cursor: pointer;
}
.P {
  position: fixed;
  width: 100px;
  height: 50px;
  left: 1200px;
  top: 30px;
  font-size: 25px;
  padding-left: 10px;
  padding-right: 20px;
  /*   border-bottom: 3px solid black;*/
  margin-left: 10px;
  margin-right: 10px;
  cursor: pointer;
}
</style>