<template>
  <div id="Reply">
    <div class="replycomment">
      <div class="DataR">
        <span class="OwnerR">{{DataUserReply.username}}</span>
        <div class="TimeR">{{DateCreatedReply | formatDateNoTime}}</div>
        <p
          class="toppicR"
        >{{TextReply}}</p>
      </div>
      <img class="imgproR" :src="DataUserReply.image" />
    </div>
  </div>
</template>

<script>
import axios from "axios"
export default {
  data() {
    return {
      Id:Number,
      DataUserReply:{}
    }
  },
  props:{
    IdComment : Number,
    DateCreatedReply:String,
    TextReply:String,
    IdUser:Number,
  },
  mounted() {
    this.Id=1
   // this.IdGroup = window.localStorage.getItem("IdGroup");
   // this.imageUser = window.localStorage.getItem("imgUser");
axios
      .get("http://127.0.0.1:8000/auth/users/" + this.IdUser + "/", {
        headers: {
          Authorization: `token ${window.localStorage.getItem("token")}`
        }
      })
      .then(response => {
        this.DataUserReply = response.data;
        console.log(response.data);
        console.log("fromcommentUser");
        console.log(this.DataUserReply);
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
};
</script>

<style scoped>
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