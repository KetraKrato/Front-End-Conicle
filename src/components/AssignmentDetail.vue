<template>
  <div id="assigndetail">
    <div class="box">
      <div class="post">
        <div class="detail">
          <span class="headdetail">{{DataAssignment.name}}</span>
          <span class="posttime">{{DataAssignment.date_created | formatDateNoTime }}</span>
          <span class="duetime">Due {{DataAssignment.due_date | formatDate }}</span>
          <span v-if="status==1" class="status" v-bind:style="{ color: 'green' }">Turned in</span>
          <span v-else-if="status==2" class="status" v-bind:style="{ color: 'orange' }">Late</span>
          <span v-else-if="status==3" class="status" v-bind:style="{ color: 'red' }">Missing</span>
        </div>
        <div class="des">
          <p>{{DataAssignment.description}}</p>
        </div>
        <div class="FieldFile">
          <div v-if="DataAssignment.assignment_files.length!=0">
            <AssignmentFile
              v-for="(i,index) in DataAssignment.assignment_files"
              :key="i"
              :pathFile="DataAssignment.assignment_files[index].file.url"
              :nameFile="DataAssignment.assignment_files[index].file.name"
              :sizeFile="DataAssignment.assignment_files[index].file.size"
            />
          </div>
          <!--    <div class="file">
            <a :href="DataAssignment.assignment_files[0].file" download>
              <img src="@/assets/pdf.png" />
              <span class="namefile">File name</span>
              <span class="sizefile">130 kb</span>
            </a>
          </div>
          <div v-if="DataAssignment.assignment_files.length!=0" class="file">
            <a :href="DataAssignment.assignment_files[0].file" download>
              <img />
              <span class="namefile">File name</span>
              <span class="sizefile">130 kb</span>
            </a>
          </div>
          <div v-if="DataAssignment.assignment_files.length!=0" class="file">
            <a :href="DataAssignment.assignment_files[0].file" download>
              <img />
              <span class="namefile">File name</span>
              <span class="sizefile">130 kb</span>
            </a>
          </div>-->
        </div>
      </div>
      <AssignmentWork/>
      <div class="com">
        <div class="commentbox">
          <input placeholder="Add comment ..." type="text" v-model="DataComment.text" />
          <span>
            <form>
              <label class="custom-file-upload">
                <input type="file" id="file" ref="file" v-on:change="handleFileUpload" />
                <img
                  class="fa fa-cloud-upload"
                  v-if="DataAssignment.allow_file == true"
                  src="@/assets/attach.png"
                />
              </label>
            </form>
          </span>
          <span @click.enter="submitFile()">Send</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import AssignmentFile from "@/components/AssignmentFile.vue";
import AssignmentWork from "@/components/Comment/AssignmentWork.vue"
export default {
  data() {
    return {
      show: true,
      status: 3,
      time: "",
      DataComment: {
        assignment_id: 1,
        text: "",
        user:Object,
        user_id: 2,
      },
      respon: {},
    };
  },
  components: {
    AssignmentFile,AssignmentWork
  },
  props: {
    DataAssignment: Object,
  },
  mounted() {
    
    this.DataComment.assignment_id = this.DataAssignment.id; //id Assignment
    this.DataComment.user_id = parseInt(window.localStorage.getItem("IdUser"));
    console.log("check");
    console.log(this.DataComment.assignment_id);
    console.log(this.DataComment.user_id);
    axios
            .get(
              "http://127.0.0.1:8000/auth/users/"+this.DataComment.user_id+"/",
              {
                headers: {
                  Authorization: `token ${window.localStorage.getItem(
                    "token"
                  )}`,
                },
              }
            )
            .then((respon) => {
              this.DataComment.user = respon.data;
              console.log("SUCCESS Data User!!");
            });
  },
  methods: {
    handleFileUpload(event) {
      this.file = this.$refs.file.files[0];
      var fileData = event.target.files[0];
      this.fileName = fileData.name;
      this.fileupload = fileData;
      // this.isShow();
      console.log(this.fileName);
      console.log(fileData);
    },
    submitFile() {
      //  this.DataComment.group_id= 1
      //  this.DataComment.user_id= 1
      console.log(this.DataComment)
      axios
        .post(
          "http://127.0.0.1:8000/group/assignment/work/",
          this.DataComment,
          {
            headers: {
              Authorization: `token ${window.localStorage.getItem("token")}`,
            },
          }
        )
        .then((respon) => {
          this.respon = respon.data;
          this.DataComment.text = "";
          this.fileName = "";
          console.log("Comment SUCCESS!!");

          let formData = new FormData();
          console.log(this.respon.id);
          formData.append("assignment_work_id", this.respon.id);
          formData.append("file", this.fileupload);
          /*for (var i = 0; i < this.files.length; i++) {
        let file = this.files[i];

        formData.append("files[" + i + "]", file);
      }*/

          axios
            .post(
              "http://127.0.0.1:8000/group/assignment/work/file/",
              formData,
              {
                headers: {
                  Authorization: `token ${window.localStorage.getItem(
                    "token"
                  )}`,
                },
              }
            )
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
  },
};
</script>

<style scoped>
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
  margin-top: 24px;
}
.post {
  position: relative;
  width: 1146px;
  padding-top: 24px;
  padding-left: 40px;
  padding-right: 40px;
  padding-bottom: 4px;
}
.detail {
  position: relative;
  width: 1066px;
  height: 78px;
}
.headdetail {
  position: absolute;
  width: 100%;
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
  width: 190px;
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
.FieldFile {
  content: "";
  display: table;
  clear: both;
}
.file {
  position: relative;
  float: left;
  width: 400px;
  height: 50px;
  border: 1px solid black;
  margin-right: 20px;
  margin-bottom: 20px;
}
.file img {
  margin-left: 30px;
  padding: 5px;
  width: 50px;
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
  border-top: 1px solid black;
}
.commentbox {
  position: relative;
  padding: 12px;
  border: 1px solid black;
  border-radius: 5px;
}
.commentbox input {
  position: relative;
  display: inline-block;
  border: #ffffff;
  outline: none;
  width: 88%;
}
.commentbox img {
  position: absolute;
  width: 20px;
  height: 20px;
  top: 0px;
  right: 100px;
}
.commentbox img:hover {
  position: absolute;
  width: 20px;
  height: 20px;
  right: 100px;
  cursor: pointer;
}
.commentbox span {
  position: absolute;
  right: 40px;
  font-family: Montserrat;
  font-style: normal;
  font-weight: 500;
  font-size: 18px;
  line-height: 22px;
}
.commentbox span:hover {
  position: absolute;
  right: 40px;
  font-family: Montserrat;
  font-style: normal;
  font-weight: 500;
  font-size: 18px;
  line-height: 22px;
  cursor: pointer;
}
form {
  position: absolute;
  width: 100%;
}
input[type="file"] {
  display: none;
}
.custom-file-upload {
  display: inline-block;
  cursor: pointer;
  position: relative;
  display: block;
}
</style>