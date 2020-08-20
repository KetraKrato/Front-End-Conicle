<template>
  <div id="Reply">
    <div class="replycomment">
      <div class="DataR">
        <span class="OwnerR">{{user.username}}</span>
        <div class="TimeR">{{DateCreatedReply | formatDateNoTime}}</div>
        <p
          class="toppicR"
        >{{TextReply}}</p>
      </div>
      <img class="imgproR" :src="user.image" />
        <div v-if="IduserC==Iduser" class="deleteBox"
          @mouseover="hoverL = true; showL ='visible'; opL = '1'; rotate = 'rotate(90deg)' "
          @mouseleave="hoverL = false; showL ='hidden'; opL = '0' "
          :class="{ delete:hover }">
          <img  class="delete"  :style="{visibility : showL , transform: rotate , opacity: opL }" src="@/assets/more.png" @click="showConfirm"/>
        </div>
    </div>
  </div>
</template>

<script>
import axios from "axios"
export default {
  data() {
    return {
      Iduser:Number,
      IduserC:Number,
      Id:Number,
      DataUserReply:{},
      showL: "hidden",
      opL: "0",
    }
  },
  props:{
    IdReply : Number,
    DateCreatedReply:String,
    TextReply:String,
    user:Object,
  },
  mounted() {
        this.Iduser = window.localStorage.getItem("IdUser");
    this.IduserC = parseInt(this.user.id) 
  
   // this.IdGroup = window.localStorage.getItem("IdGroup");
   // this.imageUser = window.localStorage.getItem("imgUser");
  
},
methods:{
        showConfirm() {
    const options = {title: 'Confirm Delete',okLabel : 'Delete', cancelLabel: 'Cancle',}
    this.$dialogs.confirm('Are you sure to delete Reply?', options)
    .then(res => {
      console.log(res) // {ok: true|false|undefined}
      if(res.ok==true){
      axios
      .delete("http://127.0.0.1:8000/group/comment/reply/" + this.IdReply+"/", {
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
      }
    })
    },
}
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
.deleteBox{
  position: absolute;
  width: 20px;
  height: 20px;
  top:26px;
  right: 26px;

}
.delete{
  width: 20px;
  transition: visibility 0s, opacity 0.2s linear;
}
</style>