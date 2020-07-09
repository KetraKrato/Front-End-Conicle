<template>
  <div id="main">
    <div class="box">
      <div class="header">
        <img class="imggroup" src="@/assets/barten.jpg" />
        <div class="groupbox">
          <h1 class="groupname">group 01</h1>
          <p
            class="detailgroup"
          >jfoiejzsdlfjkljnkvasadfvo;jpi nsad;oijvsadvo;ijsadvo;jisdavo;ji;osadijv</p>
        </div>
      </div>

      <div class="publicbox">
        <div class="public">
          <img class="imgpro" src="@/assets/logo.png" />
          <span class="textpublic">Massage everyone in the group ..</span>
          
        </div>
        <div class="publiccom">
          <div class="add" @click="isShow">Add</div>
          <div class="edit" v-bind:style="{ display: display }">
            <form>
              <label class="custom-file-upload">
                <input type="file" id="file" ref="file" v-on:change="handleFileUpload" />
                <i class="fa fa-cloud-upload"></i> File
              </label>
              <label class="custom-file-upload">
                <input
                  type="file"
                  id="file"
                  ref="file"
                  accept=".jpg, .png"
                  v-on:change="handleFileUpload"
                />
                <i class="fa fa-cloud-upload"></i> Photo
              </label>
            </form>
          </div>
          <div class="filename">{{fileName}}</div>
          <div class="bottom">
            <sui-button negative size="medium">Cancle</sui-button>

            <sui-button positive size="medium" @click="submitFile()">Text</sui-button>
          </div>
        </div>
      </div>
      <div class="posted">Posted</div>
      <div class="privatebox">
        <div v-bind:style="{ position: absolute }">
          <div class="private">
            <img class="imgpro" src="@/assets/logo.png" />
            <span class="Owner">Post Owner</span>
            <div class="Time">01 June 2020</div>
            <p
              class="toppic"
            >fsdfsdfsdfsdfsdfssdflkojipoiwepoirflkjsdjofsd;ljifasfe;jewo;ipjfwe;oflijwefj;oipkdlsjf;ajweifjdfsdfsdf</p>
          </div>
          <div class="Replay">
            <span>
              <input class="commentsbox" type="text" placeholder="Add comment .." />
            </span>
            <button class="send">Send</button>
          </div>
        </div>
      </div>
      
    </div>
    <Bar />
    <div class="mainbar">
      <div class="M">Main</div>
      <div class="C" @click="selectC">Course</div>
      <div class="At" @click="selectAt">Attachment</div>
      <div class="As" @click="selectAs">Assignment</div>
      <div class="P" @click="selectP">People</div> 
    </div>
  </div>
</template>

<script>
import Bar from "@/components/Bar.vue";
import axios from "axios";
export default {
  components: {
    Bar
  },
  data() {
    return {
      display: "none",
      show: false,
      file: "",
      fileName: ""
    };
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
    selectM() {
      this.$router.push({ params:{ NameGroup: window.localStorage.getItem("NameGroup") }, name: "main" });
    //  this.$router.push({ path: "/main" });
    },
    selectC() {
      this.$router.push({ params:{ NameGroup: window.localStorage.getItem("NameGroup") }, name: "course" });
      //this.$router.push({ path: "/course" });
    },
        selectAt() {
      this.$router.push({ path: "/attachment" });
    },
        selectAs() {
      this.$router.push({ path: "/assignment" });
    },
    selectP() {
      this.$router.push({ params:{ NameGroup: window.localStorage.getItem("NameGroup") }, name: "people" });
      //this.$router.push({ path: "/people" });
    },
    handleFileUpload(event) {
      this.file = this.$refs.file.files[0];

      var fileData = event.target.files[0];
      this.fileName = fileData.name;
      this.isShow();
      console.log(this.fileName);
    },
    submitFile() {
      let formData = new FormData();
      for (var i = 0; i < this.files.length; i++) {
        let file = this.files[i];

        formData.append("files[" + i + "]", file);
      }

      axios
        .post("/multiple-files", formData, {
          headers: {
            "Content-Type": "multipart/form-data"
          }
        })
        .then(function() {
          console.log("SUCCESS!!");
        })
        .catch(function() {
          console.log("FAILURE!!");
        });
    }
  }
};
</script>

<style scoped>
.box {
  position: relative;
  top: 144px;
  left: 230px;
}
.header {
  position: relative;
  height: 225px;
  width: 1116px;
  margin-bottom: 32px;
}
.imggroup {
  position: absolute;
  height: 225px;
  width: 400px;
  background: #bdbdbd;
  border: 1px solid #000000;
  box-sizing: border-box;
}
.groupbox {
  position: absolute;
  width: 1040px;
  left: 420px;
  top: 0%;
  bottom: 0%;
  padding-top: 24px;
  padding-bottom: 24px;
  padding-left: 40px;
  padding-right: 40px;
  background: #ffffff;
  border: 1px solid #000000;
  box-sizing: border-box;
  border-radius: 5px;
}
.comments {
  margin-top: 25px;
}
.publicbox {
  position: relative;
  padding: 26px;
  width: 1460px;
  border: 1px solid black;
  border-radius: 5px;
  margin-bottom: 30px;
}
.public{
  padding-bottom:16px;
  border-bottom: 1px solid black;
}
.lineincom {
  height: 1px;
  width: 1050px;
  background: black;
  margin-top: 25px;
  margin-bottom: 26px;
}
.imgpro {
  width: 70px;
  height: 70px;
  background: #ffffff;
  border: 1px solid #000000;
  box-sizing: border-box;
  border-radius: 50%;
}
.textpublic {
  position: absolute;
  margin-top: 20px;
  margin-left: 20px;
}
.publiccom {
  position: relative;
  height: 50px;
}
.add {
  position: absolute;
  margin: 25px;
  width: 50px;
  top: 0px;
  left: 0px;
  cursor: pointer;
}
.filename {
  position: absolute;
  left: 100px;
  top: 25px;
}
.edit {
  position: absolute;
  display: none;
  left: 50px;
  top: 50px;
  width: 100px;
  height: 55px;
  background: #ffffff;
  border: 1px solid #000000;
  box-sizing: border-box;
  border-radius: 5px;
}
.edit span {
  position: relative;
  display: block;
  margin: 5%;
}
.edit .linesubmenu {
  height: 1px;
  background: black;
}
.bottom {
  position: absolute;
  right: 0px;
  top: 20px;
  cursor: pointer;
}
.posted {
  margin-bottom: 32px;

  font-family: Montserrat;
  font-style: normal;
  font-weight: bold;
  font-size: 24px;
  line-height: 29px;
}
.privatebox {
  position: relative;
  padding: 26px;
  width: 1460px;
  height: 200px;
  border: 1px solid black;
  border-radius: 5px;
  margin-bottom: 30px;
}
.private {
  position: relative;
  height: 100px;
  border-bottom: 1px solid black;
}
.imgprivate {
  position: absolute;
}
.Owner {
  position: absolute;
  top:19px;
  left: 100px;
}
.Time {
  position: absolute;
  top:39px;
  left: 100px;
  color: gray;
}
.toppic {
  position: relative;
  top: 0px;
}
.Replay {
  position: relative;
  margin-top: 16px;
  margin-bottom: 16px;
  border: 1px solid black;
  border-radius: 5px;
  padding: 11px;
}
.Replay input[type="text"] {
  border-color: white;
  font-size: 16px;
  width: 95%;
  border: 0;
  outline: none;
  background: none;
}
.Replay input[type="text"]:focus {
  border-color: white;
}
.send {
  position: absolute;
  right: 10px;
}
.mainbar {
  position: absolute;
  top: 0;
}
.M {
  position: fixed;
  width: 100px;
  height: 50px;
  left: 650px;
  top: 30px;
  font-size: 25px;
  border-bottom: 3px solid black;
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
  width: 100px;
  height: 50px;
  left: 850px;
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
  width: 100px;
  height: 50px;
  left: 1000px;
  top: 30px;
  font-size: 25px;
  /*     border-bottom: 3px solid black;*/
  padding-left: 10px;
  margin-left: 10px;
  margin-right: 10px;
  cursor: pointer;
}
.P {
  position: fixed;
  width: 100px;
  height: 50px;
  left: 1150px;
  top: 30px;
  font-size: 25px;
  padding-left: 10px;
  padding-right: 20px;
  /*   border-bottom: 3px solid black;*/
  margin-left: 10px;
  margin-right: 10px;
  cursor: pointer;
}
input[type="file"] {
  display: none;
}
.custom-file-upload {
  display: inline-block;
  cursor: pointer;

  position: relative;
  display: block;
  margin: 5%;
}
</style>
