<template>
  <div id="comment">
    <div class="privatebox">
      <div class="private">
        <img class="imgpro" :src="user.image" />
        <span class="Owner">{{user.username}}</span>
        <div class="Time">{{DateCreated | formatDateNoTime }}</div>
        <div v-if="IduserC==Iduser" class="deleteBox"
          @mouseover="hoverL = true; showL ='visible'; opL = '1'; rotate = 'rotate(90deg)' "
          @mouseleave="hoverL = false; showL ='hidden'; opL = '0' "
          :class="{ delete:hover }">
          <img class="delete" :style="{visibility : showL , transform: rotate , opacity: opL }" src="@/assets/more.png" @click="showConfirm" />
        </div>
        <p class="toppic">{{Text}}</p>
        <div class="FieldFile" v-for="(i,index) in Files" :key="index">
          <!--         <BoxFile v-for="i in Files" :key="i" :pathFile="i.file.url" :nameFile="i.file.name" :sizeFile="i.file.size"/> -->

          <BoxFile :pathFile="i.file.url" :nameFile="i.file.name" :sizeFile="i.file.size" />
        </div>
      </div>
      <div v-for="(i,index) in DataReply" :key="index">
        <Reply
          :IdReply="i.id"
          :DateCreatedReply="i.date_created"
          :TextReply="i.text"
          :user="i.user"
        ></Reply>
      </div>
      <!--   <Reply v-for="i in DataReply" :key="i" :IdComment="i.IdComment" :DateCreatedReply="i.date_created" :TextReply="i.text" :IdUser="i.user.id"/>
      <Reply />
      <Reply />
      <Reply />
      <Reply />-->
      <div class="Replay">
        <span>
          <input
            class="commentsbox"
            type="text"
            placeholder="Add comment .."
            v-model="Replyform.text"
          />
        </span>
        <button class="send" @click="submitReply">Send</button>
      </div>
    </div>
  </div>
</template>

<script>
import Reply from "@/components/Comment/Reply.vue";
import BoxFile from "@/components/AssignmentFile.vue";
import axios from "axios";
export default {
  data() {
    return {
      Iduser: Number,
      IduserC: Number,
      showpopup: true,
      User: {},
      DataReply: [],
      UpDataReply: [],
      Reply: "",
      Replyform: {
        user: {
          email: "",
          username: "",
        },
        parent_id: Number,
        text: "",
      },
      Fileform: {
        comment_id: Number,
        file: "",
      },
      respon: "",
      polling: null,
      showL: "hidden",
      opL: "0",
    };
  },
  components: {
    Reply,
    BoxFile,
  },
  props: {
    IdComment: Number,
    user: Object,
    Text: String,
    DateCreated: String,
    Files: {
      type: Array,
      default: () => [],
    },
  },
  created() {
    this.UpdateData();
  },
  updated() {},
  mounted() {
    this.Iduser = window.localStorage.getItem("IdUser");
    this.IduserC = parseInt(this.user.id);
    console.log(this.Iduser);
    console.log(this.user.id);
    // this.imageUser = window.localStorage.getItem("imgUser");

    //call data reply from IdComment
    axios
      .get(
        "http://127.0.0.1:8000/group/" +
          this.IdComment +
          "/comment_group_reply/",
        {
          headers: {
            Authorization: `token ${window.localStorage.getItem("token")}`,
          },
        }
      )
      .then((response) => {
        this.DataReply = response.data;
        console.log(response.data);
        console.log("ReplyData");
        console.log(this.DataReply);
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

    UpdateData() {
      this.polling = setInterval(() => {
        axios
          .get(
            "http://127.0.0.1:8000/group/" +
              this.IdComment +
              "/comment_group_reply/",
            {
              headers: {
                Authorization: `token ${window.localStorage.getItem("token")}`,
              },
            }
          )
          .then((response) => {
            this.UpDataReply = response.data;
            console.log(response.data);
            console.log("ReplyData");
            console.log(this.UpDataReply);
            if (this.DataReply != this.UpDataReply) {
              this.DataReply = this.UpDataReply;
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
      }, 1000);
    },
    submitReply() {
      this.Replyform.parent_id = this.IdComment;
      this.Replyform.email = this.User.email;
      this.Replyform.username = this.User.username;
      axios
        .post("http://127.0.0.1:8000/group/comment/reply/", this.Replyform, {
          headers: {
            Authorization: `token ${window.localStorage.getItem("token")}`,
          },
        })
        .then((respon) => {
          this.respon = respon;
          this.Replyform.text = "";
          console.log("ReplySUCCESS!!");
          if (this.Files.length > 0) {
            this.submitCommentFile();
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
    submitCommentFile() {
      this.Fileform.comment_id = this.IdComment;
      axios
        .post("http://127.0.0.1:8000/group/comment/file/", this.Fileform, {
          headers: {
            Authorization: `token ${window.localStorage.getItem("token")}`,
          },
        })
        .then(function () {
          console.log("FileSUCCESS!!");
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
    showConfirm() {
      const options = {
        title: "Confirm Delete",
        okLabel: "Delete",
        cancelLabel: "Cancle",
      };
      this.$dialogs
        .confirm("Are you sure to delete Comment?", options)
        .then((res) => {
          console.log(res); // {ok: true|false|undefined}
          if (res.ok == true) {
            axios
              .delete(
                "http://127.0.0.1:8000/group/comment/" + this.IdComment + "/",
                {
                  headers: {
                    Authorization: `token ${window.localStorage.getItem(
                      "token"
                    )}`,
                  },
                }
              )
              .then((response) => {
                this.DataReply = response.data;
                console.log(response.data);
                console.log("ReplyData");
                console.log(this.DataReply);
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
          }
        });
    },
  },
};
</script>

<style scoped>
.privatebox {
  position: relative;
  width: 1460px;

  border: 1px solid black;
  border-radius: 5px;
  margin-bottom: 30px;
}
.private {
  position: relative;

  padding: 26px;
  padding-bottom: 16px;
  border-bottom: 1px solid black;
}
.imgprivate {
  position: absolute;
}
.Owner {
  position: absolute;
  top: 40px;
  left: 110px;
}
.Time {
  position: absolute;
  top: 60px;
  left: 110px;
  color: gray;
}
.toppic {
  position: relative;
  margin-top: 10px;
  top: 0px;
}
.FieldFile {
  position: relative;
  width: 450px;
  content: "";
  display: inline-block;
  clear: both;
}
.Replay {
  position: relative;
  margin-top: 8px;
  margin-left: 33px;
  margin-right: 33px;
  margin-bottom: 16px;
  padding: 11px;
  border: 1px solid black;
  border-radius: 5px;
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
.imgpro {
  width: 70px;
  height: 70px;
  background: #ffffff;
  border: 1px solid #000000;
  box-sizing: border-box;
  border-radius: 50%;
}
.imgproR {
  width: 56px;
  height: 56px;
  margin-left: 6px;
  background: #ffffff;
  border: 1px solid #000000;
  box-sizing: border-box;
  border-radius: 50%;
}
.replycomment {
  position: relative;
  padding: 33px;
  padding-top: 8px;
  padding-bottom: 0px;
}
.OwnerR {
  position: relative;
  /* top:20px;
  left: 110px;*/
}
.TimeR {
  position: relative;
  display: inline;
  margin-left: 8px;
  color: gray;
}
.DataR {
  position: absolute;
  top: 20px;
  left: 110px;
}
.deleteBox{
  position: absolute;
  width: 20px;
  height: 20px;
  top:26px;
  right: 26px;

}
.delete {
  width: 20px;
  transition: visibility 0s, opacity 0.2s linear;
}
button.send{
  background: white;
  align-items: center;
  text-align: center;
  letter-spacing: -0.015em;
  width: 100px;
  height: 20px;
  border:none;
  width: 125px;
  outline: none;
  transition: 0.25s;
  line-height: 0px;
}
</style>