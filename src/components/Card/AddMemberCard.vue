<template>
  <div class="backgroud" value="show">
    <div class="container2">
      <form @submit.prevent="submit">
      <div class="block">
        <div class="header">
          <h3>Add Member</h3>
        </div>
        <div class="card">
          <sui-form >
            <sui-form-field>
              <p required>Email or a name (require){{lists.new_user_joined_list | json}}</p>
              <input v-model="lists.new_user_joined_list"  
            type="text"
            id="new_user_joined_list"
            aria-describedby="new_user_joined_list"
            name="new_user_joined_list"/>

            </sui-form-field>
           
            <div class="allbtn">
              <sui-button class="back" v-on:click="close">Cancel</sui-button>
              <sui-button type="submit" secondary v-on:click="submit">Create</sui-button>
            </div>
          </sui-form>
        </div>
      </div>
      </form>
    </div>
  </div>
</template>

<script>

import axios from "axios"
export default {
  name: "Modal",
  components: {

    },
  props: {
    value: {
      required: true,
    },
  },
   data() {
    return {
      lists:{
         new_user_joined_list: []
      }

    }},
     
  methods: {
    close() {
      this.$emit("input", !this.value);
      // this.$router.push({ path: "/addmember" });
    },
      submit() {
         var testsplit = this.lists.new_user_joined_list.split(",")
         let a = testsplit.map(e => { return parseInt(e) })
          this.lists.new_user_joined_list = a
         console.log(a)
      try {
          // http://127.0.0.1:8000/group/10/member/
          axios.post(`http://127.0.0.1:8000/group/` + localStorage.getItem("group_id") +  `/member/` ,  this.lists , {
          headers: {Authorization: `token ${localStorage.getItem("token")}`,}},{emulateJSON: true})
         .then((resp) => {console.log(JSON.stringify(resp.data))
         })
      } catch (err) {
        console.log(err);
        console.error(err.resp.data);
        console.error(err.resp.status);
        console.error(err.resp.headers);
      }
    },

}
  }

</script>

<style scoped>
* {
  font-family: "Montserrat", sans-serif;
  margin: 0%;
  padding: 0%;
}
.backgroud {
  width: 100%;
  position: absolute;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.7);
  z-index: 1000;
}
.container2 {
  position: fixed;
  right: 0;
  left: 0;
  margin-right: auto;
  margin-left: auto;
  margin-top: 10%;
  width: 90%;
  z-index: 1001;
}
.block {
  margin-left: auto;
  margin-right: auto;
  width: 600px;
  border: 1px solid #000;
  background-color: white;
  border-radius: 4px;
  -webkit-box-shadow: 10px 10px 5px 0px rgba(0, 0, 0, 0.75);
  -moz-box-shadow: 10px 10px 5px 0px rgba(0, 0, 0, 0.75);
  box-shadow: 10px 10px 5px 0px rgba(0, 0, 0, 0.75);
}
.header {
  position: relative;
  margin-left: 40px;
  top: 30px;
  color: #000;
}
.card {
  position: relative;
  margin-left: 40px;
  margin-right: 80px;
  margin-top: 50px;
  margin-bottom: 30px;
  width: 86%;
  border: none;
}
label .inputEmail {
  position: relative;
  margin-top: 40px;
  padding: 10px;
}
.from-control {
  position: relative;
  margin-top: 40px;
}
.allbtn {
  position: relative;
  margin-top: 30px;
  margin-left: 67%;
}
label {
  font-weight: normal;
}
</style>
