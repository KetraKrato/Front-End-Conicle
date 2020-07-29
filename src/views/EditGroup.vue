<template>
  <div class="editgroup">
      <div class="container-progress">
        
      <ul class="progressbar">
          <li class="active">Edit Group</li>
          <li>Add Member</li>
          <li>Select</li>
      </ul>

  </div>
    <form @submit.prevent="submit" >
      <div class="container">
          
        <div class="header">
          <p class="text_h">Edit Group {{id}}</p>
        </div>
        
        <div class="image">
          <div class="imagebox" >
            <picture-input 
      v-model="group_image"
      type="file"
      id="file"
      ref="file"
      width="490" 
      height="300" 
      margin="16" 
      accept="image/jpeg,image/png" 
      size="10" 
      button-class="btn"
      :custom-strings="{
        upload: '<h1>Bummer!</h1>',
        drag: 'Drag a 😺 GIF or GTFO'
      }"
      @change="onChange">
    </picture-input>
          </div>
        </div>
        <div class="name">
          <label for="name">Group Name (required){{lists.group_name}} </label>
          <input
            v-model="lists.group_name"
            type="text"
            class="form-control"
            id="name"
            required
          />
          <div class="discription">
            <div class="form-group">
              <label for="description">Description{{lists.group_description}} </label>
              <textarea
                v-model="lists.group_description"
                class="form-control"
                id="description"
                rows="3"
              ></textarea>
            </div>
          
          
          <div class="buttonis-info">
            
               <sui-button class="back" v-on:click="backPage" >Back</sui-button>
            <sui-button secondary class="create" v-on:click="submit">Create &amp; Next</sui-button>
          </div>
        </div>
      </div>
        </div>
    </form>
  </div>

</template>

<script>

import PictureInput from 'vue-picture-input'
import axios from "axios";
export default {
  name: "upload",
  components: {
    PictureInput
  },
  data() {
    
    return {
      id: this.$route.params.id,
    lists: [
        {
          id: "",
          group_name: "",
          member_count:"",
          group_description: "",
          group_image: "",
          publish: "",
          creator: {
            username: "",
            first_name: "",
            last_name: "",
            id: "",
          },
          date_created: "",
          date_modified: "",
        },
      ],
    };
  },
  
       mounted() {
      try {
        // return  axios.get("http://127.0.0.1:8000/sop/course/" , this.files, {headers: {Authorization : `token ${localStorage.getItem("token")}`,}});
         axios.get("http://127.0.0.1:8000/group/", {headers: {Authorization: `token ${localStorage.getItem("token")}`,}})
         .then((resp) => {console.log(resp.data.username)
         this.account = resp.data
         console.log(JSON.stringify(this.account));
         })
      } catch (err) {
        console.log(err);
      }
  },
  
  methods: {
    onChange() {
      this.lists.group_image = this.$refs.file.file;
    },
    async submit() {
        try {
        var formData = new FormData();
        formData.append('group_name',this.lists.group_name)
        formData.append('group_description',this.lists.group_description)
        formData.append('group_image', this.lists.group_image)
         await axios.post("http://127.0.0.1:8000/group/",formData, {
           headers: {Authorization: `token ${localStorage.getItem("token")}`,}},{emulateJSON: true})
         .then((resp) => {console.log(JSON.stringify(resp.data))
         this.$router.push({path:"/addmember"})
         })
      } catch (err) {
        console.log(err);
        
      }
    },

    backPage(){
          
            this.$router.push({path:"/groupmanage"})
        },
        next(){
          if (this.inputName == ""){
            console.log(this.inputName)
          }
          else{
            this.$router.push({path:"/addmember"})
          }
        },
        
  },
};
</script>

<style scoped>
.editgroup {
  margin: 0px;
  padding: 0px;
  font-family: "Montserrat", sans-serif;
}
.container {
  position: relative;
  top: 120px;
  border: 1px solid #000;
  border-radius: 4px;
  width: 50%;
  margin-bottom: 40px;
  /* margin-bottom: 20px; */
  /* margin-top: 5%; */
}
.header {
  position: relative;
  margin-left: 10%;
  margin-top: -20px;
  font-size: 24px;
  font-weight: bold;
}
/* .imagebox {
  position: relative;
  margin: auto;
  margin-top: -10px;
  width: calc(100% - 220px);
  height: 280px;
  border: 1px solid #000;
  border-radius: 2px;
} */
.name {
  position: relative;
  margin-top: 3%;
  margin-left: 7%;
  margin-right: 7%;
}
.discription {
  margin-top: 5%;
  bottom: 20px;
}
.select {
  margin-top: 5%;
  bottom: 50px;
}

.buttonis-info{
  position: relative;
  margin-top: 20px;
  margin-left: 345px;
  margin-bottom: 20px;
  width: 100%;

}
button .create {
  margin-top: 15px;

}
.custom-select {
  appearance: none;
  width: 100%;
  font-size: 16px;
  -webkit-appearance: none;
  appearance: none;
  line-height: 22;
}
button .cancle{
    margin-left: -20%;
}
.container-progress{
        width: 100%;

    }
    .progressbar{
        counter-reset: step;
    }
    .progressbar li{
        list-style-type: none;
        float: left;
        width: 33.33%;
        position: relative;
        text-align: center;
    }
    .progressbar li::before{
        content: counter(step);
        counter-increment: step;
        width: 50px;
        height: 50px;
        line-height: 50px;
        border: 2px solid #ddd;
        display: block;
        text-align: center;
        margin: 10px auto 10px auto;
        border-radius: 50%;
        background-color: #fff;
    }
    .progressbar li::after{
        content: '';
        position: absolute;
        width: 100%;
        height: 5px;
        background-color: #ddd;
        top: 33px;
        left: -50%;
        z-index: -1;
    }
    .progressbar li:first-child::after{
        content: none;
    }
    .progressbar li.active{
        color: #4F4F4F;
        font-weight: bold;
    }
    .progressbar li.active::before{
        border-color:#4F4F4F;
    }
    .progressbar li.active + li::after{
        border-color: #4F4F4F;
        color: #4F4F4F;
    }
    .back a{
    margin: 0px;
    color: #4f4f4f;
    text-align: center;
}
.text_h{
  position: relative;
  top: -40px;
  
}
.file-select > .select-button {
  position: absolute;
  top: 600%;
  padding: 1rem;

  color: white;
  background-color: #2EA169;

  border-radius: .3rem;

  text-align: center;
  font-weight: bold;
}

/* Don't forget to hide the original file input! */
.file-select > input[type="file"] {
  display: none;
}
</style>
