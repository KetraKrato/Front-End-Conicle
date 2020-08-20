<template>
  <div id="learning">
    <div class="course">
      <span class="head">
        <span @click="selectC" :style="{cursor :'pointer'}">All Course</span> >
        <span @click="selectBack" :style="{cursor :'pointer'}">{{NameCourse}}</span> >
        <span @click="selectBackSession" :style="{cursor :'pointer'}">{{NameSession}}</span> >
        <span>{{Step.name}}</span>
      </span>
      <div class="mainvideo">
        <video
          id="my-video"
          class="video-js"
          controls
          poster="@/assets/logo.png"
          height="629"
          preload="auto"
          data-setup="{}"
        >
          <source src="@/assets/videotest_1080p.mp4" type="video/mp4" res="1080" label="1080" />
          <source src="@/assets/videotest_720p.mp4" type="video/mp4" res="720" label="720" />
        </video>
        <div
          v-if="Session[0].id!=IdStep"
          class="arrowL"
          @mouseover="hoverL = true; showL ='visible'; opL = '1'; rotate = 'rotate(180deg)' "
          @mouseleave="hoverL = false; showL ='hidden'; opL = '0' "
          :class="{ arrowleft:hover }"
          @click="Previous"
        >
          <img
            class="arrowleft"
            :style="{visibility : showL , transform: rotate , opacity: opL }"
            src="@/assets/arrow.png"
          />
        </div>
        <div
          v-if="Session[Sessionlength-1].id!=IdStep"
          class="arrowR"
          @mouseover="hoverR = true; showR ='visible'; opR = '1';  "
          @mouseleave="hoverR = false; showR ='hidden'; opR = '0' "
          :class="{ arrowleft:hover }"
        >
          <img
            class="arrowright"
            @click="Next"
            :style="{visibility : showR , opacity: opR }"
            src="@/assets/arrow.png"
          />
        </div>
      </div>
      <div class="nextvideo">
        <!--      <div class="subvideo">
          <video
            id="my-video"
            class="video-js"
            controls
            poster="@/assets/logo.png"
            height="183"
            data-setup="{}"
          >
            <source
              src="@/assets/videotest_1080p.mp4#t=2"
              type="video/mp4"
              res="1080"
              label="1080"
            />
        <source  src="@/assets/videotest_720p.mp4" type="video/mp4" res = '720' label='720' />-->
        <!--    </video>
          <div class="videodetail">
            <h3>partnameBB</h3>
            <span>- description -</span>
          </div>
        </div>
        <div class="subvideo">
          <div class="subv">
            <video
              id="my-video"
              class="video-js"
              controls
              poster="@/assets/logo.png"
              height="183"
              preload="auto"
              data-setup="{}"
            >
              <source
                src="@/assets/videotest_1080p.mp4"
                type="video/mp4"
                res="1080"
                label="1080"
              />
               <source  src="@/assets/videotest_720p.mp4" type="video/mp4" res = '720' label='720' /> 
            </video>

            <div class="videodetail">
              <h3>partnameCC</h3>
              <span>- description -</span>
            </div>
          </div>
        </div>-->
        <div v-for="i in Session" :key="i">
          <SubVideo :IdStep="i.id" />
        </div>
      </div>

      <div class="detailmainvideo">
        <h3>{{Step.name}}</h3>
        <span>{{Step.textcontent}}</span>
      </div>
      <div class="line"></div>
      <div class="comments">
        <h3>{{groupcommentstep.length}} Comments</h3>
        <div class="publicbox">
          <!--  <div class="public">
            <img class="imgpublic" src="@/assets/logo.png" />
            <span class="textpublic">Massage everyone in the group ..</span>
            <div class="lineincom"></div>
          </div>-->
          <div class="public">
            <img class="imgpro" :src="imageUser" />
            <input
              class="textpublic"
              type="text"
              maxlength="200"
              placeholder="Massage everyone in the group .."
              v-model="DataCommentStep.text"
            />
            <!-- <span>{{DataComment.text}}</span> -->
          </div>
          <div class="publiccom">
            <!--     <div class="add" @click="isShow">Add</div>
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
            </div>-->
            <div class="bottom">
              <button class="post" @click="submitFile">Post</button>
            </div>
          </div>
        </div>

        <div v-for="(i,index) in groupcommentstep" :key="index" class="CommentStepBox">
          <CommentStep
            :IdComment="i.id"
            :User="i.user"
            :Text="i.text"
            :DateCreated="i.date_created"
          />
        </div>
      </div>
    </div>
    <Bar />
  </div>
</template>

<script>
import Bar from "@/components/Bar.vue";
import SubVideo from "@/components/SubVideo.vue";
import axios from "axios";
import CommentStep from "@/components/Comment/CommentStep.vue";
export default {
  components: {
    Bar,
    SubVideo,
    CommentStep,
  },
  data() {
    return {
      hover: false,
      display: "none",
      showL: "hidden",
      opL: "0",
      rotate: "rotate(180deg)",
      showR: "hidden",
      opR: "0",
      show: false,
      IdGroup: Number,
      IdSession: Number,
      IdStep: Number,
      NameCourse: "",
      Session: {},
      Sessionlength: Number,
      Step: {},
      groupcommentstep: [],
      upgroupcommentstep: {},
      DataCommentStep: {
        group_id: Number,
        step_id: Number,
        text: "",
        user_id: Number,
      },
      respon: {},
      index: 0,
    };
  },
  created() {
    this.imageUser = window.localStorage.getItem("imgUser");
    this.UpdateData();
  },
  mounted() {
    this.NameSession = window.localStorage.getItem("NameSession"); //get NameSession in path
    this.NameCourse = window.localStorage.getItem("NameCourse"); //get NameCoures in path
    this.IdGroup = window.localStorage.getItem("IdGroup");
    this.IdSession = window.localStorage.getItem("IdSession");
    this.IdStep = window.localStorage.getItem("IdStep");

    console.log(this.IdStep);
    axios
      .get("http://127.0.0.1:8000/sop/step/" + this.IdStep + "/", {
        headers: {
          Authorization: `token ${window.localStorage.getItem("token")}`,
        },
      })
      .then((response) => {
        this.Step = response.data;
        console.log(response.data);
        console.log("DataStep");
        console.log(this.Step);
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
    axios
      .get("http://127.0.0.1:8000/sop/session/" + this.IdSession + "/", {
        headers: {
          Authorization: `token ${window.localStorage.getItem("token")}`,
        },
      })
      .then((response) => {
        this.Session = response.data.step;
        this.Sessionlength = this.Session.length;
        console.log(response.data.step);
        console.log("DatalistStep");
        console.log(this.Session);
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
    /* handleFileUpload(event) {
      this.file = this.$refs.file.files[0];

      var fileData = event.target.files[0];
      this.fileName = fileData.name;
      this.fileupload = fileData;
      this.isShow();
      console.log(this.fileName);
      console.log(fileData);
    },*/
    submitFile() {
      this.DataCommentStep.group_id = this.IdGroup; //id comment
      this.DataCommentStep.user_id = window.localStorage.getItem("IdUser");
      this.DataCommentStep.step_id = this.IdStep;
      //  this.DataComment.group_id= 1
      //  this.DataComment.user_id= 1
      axios
        .post(
          "http://127.0.0.1:8000/group/comment/step/",
          this.DataCommentStep,
          {
            headers: {
              Authorization: `token ${window.localStorage.getItem("token")}`,
            },
          }
        )
        .then((respon) => {
          this.respon = respon.data;
          this.DataCommentStep.text = "";
          this.fileName = "";
          console.log("Comment SUCCESS!!");

          /*  let formData = new FormData();
          console.log(this.respon.id);
          formData.append("step_id", this.respon.id);
          formData.append("file", this.fileupload);
          /*for (var i = 0; i < this.files.length; i++) {
        let file = this.files[i];

        formData.append("files[" + i + "]", file);
      }*/

          /*    axios
            .post("http://127.0.0.1:8000/sop/step/file/", formData, {
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
          }*/
        });
    },
    UpdateData() {
      this.polling = setInterval(() => {
        axios
          .get(
            "http://127.0.0.1:8000/group/" + this.IdGroup + "/comment_step/",
            {
              headers: {
                Authorization: `token ${window.localStorage.getItem("token")}`,
              },
            }
          )
          .then((response) => {
            this.groupcommentstep = response.data;

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
    Next() {
      console.log("Click Next");
      var j = 0;
      for (j; j < this.Session.length; j++) {
        console.log(j);
        if (this.IdStep == this.Session[j].id) {
          window.localStorage.setItem("IdStep", this.Session[j + 1].id);
          this.NameSession = window.localStorage.getItem("NameSession");
          this.NameCourse = window.localStorage.getItem("NameCourse");
          this.$router.push({
            name: "learning",
            params: {
              NameCourse: this.NameCourse,
              NameSession: this.NameSession,
              NameStep: this.Session[j + 1].name,
            },
          });
          j = 0;
          location.reload();
          break;
        }
      }
    },
    Previous() {
      console.log("Click Previous");
      var j = 0;
      for (j; j < this.Session.length; j++) {
        console.log(j);
        if (this.IdStep == this.Session[j].id) {
          window.localStorage.setItem("IdStep", this.Session[j - 1].id);
          this.NameSession = window.localStorage.getItem("NameSession");
          this.NameCourse = window.localStorage.getItem("NameCourse");
          this.$router.push({
            name: "learning",
            params: {
              NameCourse: this.NameCourse,
              NameSession: this.NameSession,
              NameStep: this.Session[j - 1].name,
            },
          });
          j = 0;
          location.reload();
          break;
        }
      }
    },
    selectBack() {
      this.$router.push({
        name: "subcourse",
        params: { NameCourse: this.NameCourse },
      });
      location.reload();
    },

    selectBackSession() {
      this.$router.push({
        name: "session",
        params: { NameCourse: this.NameCourse, NameSession: this.NameSession },
      });
      location.reload();
    },
    selectC(){},
    
  },
  beforeDestroy() {
    console.log("beforeDestroy");
    clearInterval(this.polling);
  },
};
</script>

<style scoped>
.course {
  position: relative;
  left: 148px;
  top: 127px;
}
.head {
  /*  position: relative;*/
  font-size: 24px;
}
.mainvideo {
  /*  position: relative;*/
  width: 1111px;
  height: 629px;
  margin-top: 40px;
  margin-bottom: 35px;
}
.nextvideo {
  position: absolute;
  left: 1200px;
  top: 62px;
}
.subv {
  position: relative;
}
.videodetail {
  position: absolute;
  left: 350px;
  top: 10px;
}
.detailmainvideo {
  margin-bottom: 25px;
}
.line {
  height: 1px;
  width: 1116px;
  background: black;
}
.comments {
  margin-top: 25px;
}
.publicbox {
  position: relative;
  width: 1116px;
  border: 1px solid black;
  border-radius: 5px;
  margin-bottom: 30px;
}
.public {
  padding: 26px;
  border-bottom: 1px solid black;
}
.publiccom {
  padding: 26px;
  position: relative;
  height: 77px;
}
.lineincom {
  height: 1px;
  width: 1050px;
  background: black;
  margin-top: 25px;
  margin-bottom: 26px;
}
.imgprivate {
  width: 70px;
  height: 70px;
  background: #ffffff;
  border: 1px solid #000000;
  box-sizing: border-box;
  border-radius: 50%;
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
  width: 80%;
  height: 50px;
  outline: none;
  border: none;
  font-size: 20px;
}
.add {
  margin-left: 25px;
  margin-right: 1000px;
  left: 50px;
  cursor: pointer;
}
.edit {
  position: absolute;
  display: none;
  left: 100px;
  width: 100px;
  height: 60px;
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
.privatebox {
  position: relative;
  padding: 26px;
  width: 1116px;
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
  margin-top: 12px;
  margin-left: 90px;
}
.Time {
  position: absolute;
  margin-top: 32px;
  margin-left: 90px;
}
.toppic {
  position: relative;
  top: 75px;
}
.Replay {
  position: relative;
  margin-top: 16px;
  margin-bottom: 16px;
  border: 1px solid black;
  border-radius: 5px;
  padding: 11px;
}
.send {
  position: absolute;
  right: 10px;
}
.arrowL {
  position: absolute;
  top: 325px;
  left: 20px;
  width: 75px;
  height: 75px;
}
.arrowleft {
  top: 325px;
  left: 20px;
  width: 75px;
  transition: visibility 0s, opacity 0.2s linear;
}
.arrowR {
  position: absolute;
  top: 330px;
  left: 1020px;
  width: 75px;
  height: 75px;
}
.arrowright {
  top: 330px;
  left: 1020px;
  width: 75px;
  transition: visibility 0s, opacity 0.2s linear;
}
button.post{
  background: black;
  color: white;
  align-items: center;
  text-align: center;
  letter-spacing: -0.015em;
  width: 100px;
  height: 35px;
  border:none;
  width: 125px;
  outline: none;
  transition: 0.25s;
  line-height: 0px;
  border-radius: 5px;
  margin-right: 10px;
}
</style>
