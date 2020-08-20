<template>
<keep-alive>
    <div class="editpost">
      <div class="container-progress">
      <ul class="progressbar">
          <li class="active">Edit Course</li>
          <li>Edit Session</li>
          <li>Edit Step</li>
      </ul>
  </div>
  <div>
    <form id="form" @submit.prevent="submit" >
      <div class="container">
        <div class="header">
          <h2>Edit Course</h2>
        </div>
        <div class="image">
          <div class="imagebox">
            <picture-input 
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
          <label for="name">Course Name (required)</label>
          <input
            v-model="lists.name"
            type="text"
            class="form-control"
            id="name"
            aria-describedby="emailHelp"
            name="name"
            required
          />
          <div class="discription">
            <div class="form-group">
              <label for="description">Description</label>
              <textarea
                v-model="lists.description"
                type="text"
                name="description"
                class="form-control"
                id="description"
                rows="3"
              ></textarea>
            </div>
          </div>
          <div class="select" >
            <lable for="status">Status {{lists.publish}}</lable>
              <select class="custom-select" v-model="lists.publish" >
                <option value="" disabled>----Select Status------</option>
              <!-- <option v-for="option in options" :key="option.id" v-bind:value="option.value">{{option.name}}</option> -->
                <option v-bind:value= true >Publish</option>
                <option v-bind:value= false >Unpublish</option>
                <!-- <option value="3">Schedule</option> -->
            </select>

           
          </div>
          <div class="buttonis-info">
            <sui-button class="back" v-on:click="backPage" >Cancel</sui-button>
            <sui-button secondary v-on:click="submit">Create &amp; Next</sui-button>
          </div>
        </div>
      </div>
    </form>
  </div>
  </div>
  </keep-alive>
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
      files: "",
      inputName: "",
      inputDiscriptionCourse: "",
      image: "",
      selected:"",
      options: [
          {id: '1' ,
           name: "Publish",
           value: true,
          },
          {id: '2' ,
           name: "Unpublish",
           value: false,
          },
      ],  
      lists: [
        {
        id: "",
        name: "",
        description: "",
        file: "",
        publish: false ,
        creator: {
            username: "",
            first_name: "",
            last_name: "",
            id: ""
        },
        post: [],
        date_created:"",
        date_modified:"",
        }
      ],
        id: this.$route.params.id
    }
  },
 
mounted(){
    console.log(this.$route.params.id)
try {
      axios
        .get(`http://127.0.0.1:8000/sop/course/` + this.$route.params.id +"/" ,
     {
          headers: { Authorization: `token ${localStorage.getItem("token")}` },
          
        })
        .then((resp) => {
          
          console.log(resp.data);
          this.lists = resp.data;
          console.log(JSON.stringify(this.lists));
        });
    } catch (err) {
      console.log(err);
    }
},

  
  methods: {
    onChange () {
          this.lists.cover = this.$refs.file.file;
        },
    backPage(){
      this.$router.push({path:"/coursemanage"})
    },
        
     async submit() {
        try {
        var formData = new FormData();
        
        formData.append('name',this.lists.name)
        formData.append('description',this.lists.description)
        formData.append('cover', this.lists.cover)
        // formData.append('publish',JSON.stringify(this.lists.publish.value))
         await axios.put("http://127.0.0.1:8000/sop/course/" + this.$route.params.id +"/" ,formData, {
           headers: {Authorization: `token ${localStorage.getItem("token")}`,}},{emulateJSON: true})
         .then((resp) => {console.log(JSON.stringify(resp.data))

         this.$router.push({path:"/createsession"})
         })
      } catch (err) {
        console.log(err);
        
      }
    },

  },
};
</script>

<style scoped>
.editpost {
  margin: 0px;
  padding: 0px;
  font-family: "Montserrat", sans-serif;
}
.container {
  position: absolute;
  top: 28%;
  margin-left: auto;
  margin-right: auto;
  left: 0;
  right: 0;
  border: 1px solid #000;
  border-radius: 4px;
  width: 52%;
  margin-bottom: 50px;
}
.header {
  position: absolute;
  margin-top: 7%;
  margin-left: 10%;
}
.imagebox {
  position: relative;
  margin: auto;
  margin-top: 17%;
  width: calc(100% - 200px);
  height: 280px;
  /* border: 1px solid #000;
  border-radius: 2px; */
}
.name {
  position: relative;
  margin-top: 40px;
  margin-left: 10%;
  margin-right: 10%;
}
.discription {
  margin-top: 5%;
  bottom: 20px;
}
.select {
  margin-top: 5%;
  bottom: 50px;
}
.buttonis-info {
  margin-top: 15px;
  margin-left: 15px;
  margin-bottom: 30px;
  width: 100%;
  text-align: right;
  margin-right: 0%;
}
.custom-select {
  appearance: none;
  width: 100%;
  font-size: 16px;
  -webkit-appearance: none;
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

</style>
