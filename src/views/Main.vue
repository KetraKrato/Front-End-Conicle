<template>
  <div id="main">
    <div class="box">
      <div class="header">
        <img class="imggroup" :src="group.group_image" />
        <div class="groupbox">
          <h1 class="groupname">{{group.group_name}}</h1>
          <p class="detailgroup">{{group.group_description}}</p>
        </div>
      </div>

      <div class="publicbox">
        <div class="public">
          <img class="imgpro" :src="imageUser" />
          <input
            class="textpublic"
            type="text"
            maxlength="200"
            placeholder="Massage everyone in the group .."
            v-model="DataComment.text"
          />
          <!-- <span>{{DataComment.text}}</span> -->
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
            <sui-button negative size="medium" @click="clear">Cancle</sui-button>

            <sui-button positive size="medium" @click="submitFile()">Text</sui-button>
          </div>
        </div>
      </div>
      <div class="posted">Posted</div>

      <div v-for="(i,index) in groupcomment" :key="index">
        <Comment
          :IdComment="i.id"
          :user="i.user"
          :Text="i.text"
          :DateCreated="i.date_created"
          :Files="i.comment_group_files"
        />
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
import Comment from "@/components/Comment/Comment.vue";
import axios from "axios";
export default {
  components: {
    Bar,
    Comment,
  },
  data() {
    return {
      IdGroup: Number,
      display: "none",
      show: false,
      file: null,
      fileName: "",
      group: {
        course: [],
        data_created: "",
        date_modified: "",
        group_creator: {},
        group_description: "",
        group_image: "",
        group_name: "",
        id: Number,
        member_count: Number,
      },
      imageUser: "",
      groupcomment: {},
      upgroupcomment: {},
      sortcomment:{},
      groupreply: {},
      fileupload: Object,
      DataComment: {
        group_id: Number,
        text: "",
        user_id: Number,
      },
      respon: {},
      polling: null,
      showpopup:"",
    };
  },
  created() {
    this.UpdateData();
  },
  mounted() {
    this.IdGroup = window.localStorage.getItem("IdGroup");
    this.imageUser = window.localStorage.getItem("imgUser");
    axios
      .get("http://127.0.0.1:8000/group/" + this.IdGroup + "/", {
        headers: {
          Authorization: `token ${window.localStorage.getItem("token")}`,
        },
      })
      .then((response) => {
        this.group = response.data;
        console.log(response.data);
        console.log("from main");
        console.log(this.group);
      })
      .catch((err) => {
        if (err.response) {
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
    /*   this.UpdateData();*/
     this.polling = setInterval(()=>{
    axios
      .get("http://127.0.0.1:8000/group/"+this.IdGroup+"/comment_group/", {
        headers: {
          Authorization: `token ${window.localStorage.getItem("token")}`
        }
      })
      .then(response => {
        this.upgroupcomment = response.data;
        if(this.upgroupcomment != this.groupcomment){
          this.groupcomment = this.upgroupcomment
        }
        console.log(response.data);
        console.log("frommaincomment");
        console.log(this.groupcomment);
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
},1000)
    // call comment group
    axios
      .get("http://127.0.0.1:8000/group/" + this.IdGroup + "/comment_group/", {
        headers: {
          Authorization: `token ${window.localStorage.getItem("token")}`,
        },
      })
      .then((response) => {
        this.groupcomment = response.data;
        console.log(response.data);
        console.log("frommaincomment");
        console.log(this.groupcomment);
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
  beforeDestroy() {
    console.log("beforeDestroy");
    clearInterval(this.polling);
  },
  destroyed() {
    clearInterval(this.polling);
  },
  methods: {
    /*updateMessage: function () {
    //  this.message = 'updated'
    //  console.log(this.$el.textContent) // => 'not updated'
      this.$nextTick(function () {
        console.log(this.$el.textContent) // => 'updated'
      })
    },*/
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
      this.$router.push({
        params: { NameGroup: window.localStorage.getItem("NameGroup") },
        name: "main",
      });
      //  this.$router.push({ path: "/main" });
    },
    selectC() {
      this.$router.push({
        params: { NameGroup: window.localStorage.getItem("NameGroup") },
        name: "course",
      });
      //this.$router.push({ path: "/course" });
    },
    selectAt() {
      this.$router.push({
        params: { NameGroup: window.localStorage.getItem("NameGroup") },
        name: "attachment",
      });
      //  this.$router.push({ path: "/attachment" });
    },
    selectAs() {
      this.$router.push({
        params: { NameGroup: window.localStorage.getItem("NameGroup") },
        name: "assignment",
      });
      // this.$router.push({ path: "/assignment" });
    },
    selectP() {
      this.$router.push({
        params: { NameGroup: window.localStorage.getItem("NameGroup") },
        name: "people",
      });
      //this.$router.push({ path: "/people" });
    },
    handleFileUpload(event) {
      this.file = this.$refs.file.files[0];

      var fileData = event.target.files[0];
      this.fileName = fileData.name;
      this.fileupload = fileData;
      this.isShow();
      console.log(this.fileName);
      console.log(fileData);
    },
    submitFile() {
      this.DataComment.group_id = this.IdGroup; //id comment
      this.DataComment.user_id = window.localStorage.getItem("IdUser");
      //  this.DataComment.group_id= 1
      //  this.DataComment.user_id= 1
      axios
        .post("http://127.0.0.1:8000/group/comment/", this.DataComment, {
          headers: {
            Authorization: `token ${window.localStorage.getItem("token")}`,
          },
        })
        .then((respon) => {
          this.respon = respon.data;
          this.DataComment.text = "";
          this.fileName = "";
          console.log("Comment SUCCESS!!");

          let formData = new FormData();
          console.log(this.respon.id);
          formData.append("comment_id", this.respon.id);
          formData.append("file", this.fileupload);
          /*for (var i = 0; i < this.files.length; i++) {
        let file = this.files[i];

        formData.append("files[" + i + "]", file);
      }*/

          axios
            .post("http://127.0.0.1:8000/group/comment/file/", formData, {
              headers: {
                Authorization: `token ${window.localStorage.getItem("token")}`,
              },
            })
            .then((respon) => {
              this.respon = respon.data;
              this.fileupload = {};
              this.fileName = "";
              this.file = null;
              console.log("SUCCESS!!");
            });
        })
        .catch((err) => {
          if (err.response) {
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

      /*     let formData = new FormData();
      console.log(this.respon.id);
      formData.append('comment_id',this.respon.id);
      formData.append('file', this.fileupload);
      /*for (var i = 0; i < this.files.length; i++) {
        let file = this.files[i];

        formData.append("files[" + i + "]", file);
      }

      axios
        .post("http://127.0.0.1:8000/group/comment/file/", formData, {
          headers: {
             Authorization: `token ${window.localStorage.getItem("token")}`
          }
        })
        .then(function() {
          console.log("SUCCESS!!");
        })
        .catch(err => {
        if (err.response) {
          console.error(err.response.data);
          console.error(err.response.status);
          console.error(err.response.headers);
          if (err.response.status == 400) {
            //   alert("Email or Password Wrong")
          } else if (err.response.status == 404) {
            //    alert("404 not found")
          }
        }
      });*/
    },
    UpdateData() {
      this.polling = setInterval(() => {
        axios
          .get(
            "http://127.0.0.1:8000/group/" + this.IdGroup + "/comment_group/",
            {
              headers: {
                Authorization: `token ${window.localStorage.getItem("token")}`,
              },
            }
          )
          .then((response) => {
            this.upgroupcomment = response.data;
            if (this.upgroupcomment != this.groupcomment) {
              this.groupcomment = this.upgroupcomment;
            }
            console.log(response.data);
            console.log("frommaincomment");
            console.log(this.groupcomment);
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
      }, 1000);
    },
    clear() {
      this.DataComment.text = "";
      this.file = null;
      this.file.filename = "";
      this.fileupload = {};
      this.fileName = "";
    },
   showpop(value){
     alert("showpopup")
     console.log("showpopup")
     console.log("showpopup")
     console.log("showpopup")
      console.log(value)   
    },

  },
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
  /* padding: 26px;*/
  width: 1460px;
  border: 1px solid black;
  border-radius: 5px;
  margin-bottom: 30px;
}
.public {
  padding: 26px;
  padding-bottom: 16px;
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
  margin-top: 10px;
  margin-left: 20px;
  width: 90%;
  height: 50px;
  outline: none;
  border: none;
  font-size: 20px;
}
.publiccom {
  padding: 26px;
  position: relative;
  height: 77px;
}
.add {
  position: absolute;

  width: 50px;
  top: 27px;
  left: 63px;
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
  left: 100px;
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
  right: 32px;
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
  /* height: 100px;*/
  border-bottom: 1px solid black;
}
.imgprivate {
  position: absolute;
}
.Owner {
  position: absolute;
  top: 19px;
  left: 100px;
}
.Time {
  position: absolute;
  top: 39px;
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
  /*border-bottom: 3px solid black;*/
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
