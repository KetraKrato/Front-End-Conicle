<template>
  <div id="comment">
    <div class="privatebox">
      <div class="private">
        <img class="imgpro" :src="User.image" />
        <span class="Owner">{{User.username}}</span>
        <div class="Time">{{DateCreated | formatDateNoTime }}</div>
        <p
          class="toppic"
        >{{Text}}</p>
        <BoxFile/>
      </div>
      <Reply v-for="i in DataReply" :key="i" :IdComment="i.IdComment" :DateCreatedReply="i.date_created" :TextReply="i.text" :IdUser="i.user.id"/>
  <!--    <Reply />
      <Reply />
      <Reply />
      <Reply /> -->
      <div class="Replay">
        <span>
          <input class="commentsbox" type="text" placeholder="Add comment .." v-model="Replyform.text"/>
        </span>
        <button class="send" @click="submitReply">Send</button>
      </div>
    </div>
  </div>
</template>

<script>
import Reply from "@/components/Comment/Reply.vue";
import BoxFile from "@/components/AssignmentFile.vue"
import axios from "axios"
export default {
  data() {
    return {
      User:{},
      DataReply:[],
      Reply:"",
      Replyform:{
        user:{
            email:"",
            username:""
        },
        parent_id:Number,
        text:""
      },
      Fileform:{
        comment_id:Number,
        file:"",
      }
    }
  },
  components: {
    Reply,BoxFile
  },
  props:{
    IdComment:Number,
    IdUser:Number,
    Text:String,
    DateCreated:String,
    Files : {
                  type:Array,
                default: ()=> [],    
            },
  },
  mounted() {
   // this.IdGroup = window.localStorage.getItem("IdGroup");
   // this.imageUser = window.localStorage.getItem("imgUser");
    axios
      .get("http://127.0.0.1:8000/auth/users/" + this.IdUser + "/", {
        headers: {
          Authorization: `token ${window.localStorage.getItem("token")}`
        }
      })
      .then(response => {
        this.User = response.data;
        console.log(response.data);
        console.log("fromcommentUser");
        console.log(this.User);
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


      //call data reply from IdComment
          axios
      .get("http://127.0.0.1:8000/group/" + this.IdComment + "/comment_group_reply/", {
        headers: {
          Authorization: `token ${window.localStorage.getItem("token")}`
        }
      })
      .then(response => {
        this.DataReply = response.data;
        console.log(response.data);
        console.log("ReplyData");
        console.log(this.DataReply);
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
methods: {
  submitReply(){
    this.Replyform.parent_id = this.IdComment
    this.Replyform.email = this.User.email
    this.Replyform.username = this.User.username

       axios
      .post("http://127.0.0.1:8000/group/comment/reply/", this.Replyform,{
        headers: {
          Authorization: `token ${window.localStorage.getItem("token")}`
        }
      })
      .then(function() {
          console.log("ReplySUCCESS!!");
          if(this.Files.length>0){
            this.submitCommentFile()
          }
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
  submitCommentFile(){
    this.Fileform.comment_id = this.IdComment
    axios
      .post("http://127.0.0.1:8000/group/comment/file/", this.Fileform,{
        headers: {
          Authorization: `token ${window.localStorage.getItem("token")}`
        }
      })
      .then(function() {
          console.log("FileSUCCESS!!");
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
  }
},
}


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
</style>