<template>
  <div id="member">
    <div class="body">
        <div class="onecourse">
          <img class="profile" :src="image" />
          <p class="detail">{{first_name}} {{last_name}}</p>
          <p v-if="admin" class="role">Admin</p>
        </div>
      </div>
  </div>
</template>

<script>
//import axios from "axios"
export default {
  data() {
    return {
      //image:""
    }
  },
      props:{
        admin:Boolean,
        first_name:String,
        last_name:String,
        image:String,
        id:Number,
    },
  mounted(){
/* axios
        .get("http://127.0.0.1:8000/auth/users/"+this.id+"/",{
          headers: {
            Authorization: `token ${window.localStorage.getItem("token")}`,
          },
        })
        .then((response) => {
          this.image = response.data.image;
          console.log(response.data);
          console.log(this.image);
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
        });*/
  },
    
}
</script>

<style scoped>
.body {
  position: relative;
  height: 80px;
  margin-top: 20px;
  cursor: pointer;
}
img.profile {
  position: relative;
  left: 65px;
  width: 65px;
  height: 65px;
  border: 1px solid black;
  border-radius: 50%;
}
.detail {
  position: absolute;
  top: 25px;
  left: 250px;

  font-family: Montserrat;
  font-style: normal;
  font-weight: normal;
  font-size: 18px;
  line-height: 22px;
}
.role {
  position: absolute;
  top: 25px;
  right: 85px;

  font-family: Montserrat;
  font-style: normal;
  font-weight: normal;
  font-size: 18px;
  line-height: 22px;
}
</style>