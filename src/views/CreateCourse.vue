<template>
  <div class="createpost">
    <div class="container-progress">
      <ul class="progressbar">
        <li type="button" v-on:click="refresh" class="active">Create Course</li>
        <li>Create Session</li>
        <li>Create Step</li>
      </ul>
    </div>
    <form @submit.prevent="submit">
      <div class="container">
        <div class="header">
          <p class="text_h">Create Course</p>
        </div>

        <div class="image">
          <div id="preview">
            <img v-if="url" :src="url" />
            <img v-else :src="lists.cover"/>
          </div>
          <input class="inputImg" type="file" @change="onFileChange" />
        </div>
        <div class="name">
          <label for="name">Course Name (required) {{lists.name}} </label>
          <input type="text" class="form-control" id="name" required v-model="lists.name"/>
          <div class="discription">
            <div class="form-group">
              <label for="description">Description {{lists.description}} </label>
              <textarea
                v-model="lists.description"
                class="form-control"
                id="description"
                rows="3"
              ></textarea>
            </div>
            <div class="select">
              <lable for="status">Status {{lists.publish}}</lable>
              <select class="custom-select" v-model="lists.publish" >
                <option v-bind:value="true" @click="lists.publish = true">Publish</option>
                <option v-bind:value="false" @click="lists.publish = false">Unpublish</option>
              </select>
              <!-- <datetime type="datetime" v-model="form.due_date"></datetime> -->
            </div>
            <div class="buttonis-info">
              <sui-button type="button" class="back" v-on:click="backPage">Cancle</sui-button>
              <sui-button type="button" secondary v-on:click="submit">Create &amp; Next</sui-button
              >
            </div>
          </div>
        </div>
      </div>
    </form>
  </div>
</template>

<script>
import axios from "axios";
// import { Datetime } from "vue-datetime";
export default {
  name: "upload",
  components: {
    // datetime: Datetime,
  },
  prop: "num",
  data() {
    return {
      lists: 
        {
      name: "",
      description: "",
      cover: null,
      publish: false,
      
},
      
      url: "",
      id: "",
      parameters: this.$route.query.type,
      file: "",
      edit:{
        id:"",
        name:"",
      },
    };
  },
  mounted() {
    const parameters = this.$route.query.type;
    console.log(parameters);
    if (parameters == "createcourse") {
      console.log(parameters);
    } else if (parameters == "editcourse") {
      try {
        axios
          .get(
            "http://127.0.0.1:8000/sop/course/" + localStorage.getItem("course_id") + "/",
            {
              headers: {
                Authorization: `token ${localStorage.getItem("token")}`,
              },
            },
            { emulateJSON: true }
          )
          .then((resp) => {
            console.log(JSON.stringify(resp.data.id));
            this.lists = resp.data;
            console.log(JSON.stringify(this.lists));
          });
      } catch (err) {
        console.log(err);
      }
    } else if (parameters == "backfromstep" || parameters == "backfromsession") {
      try {
        axios
          .get(
            "http://127.0.0.1:8000/sop/course/" +
              localStorage.getItem("course_id") +
              "/",
            {
              headers: {
                Authorization: `token ${localStorage.getItem("token")}`,
              },
            },
            { emulateJSON: true }
          )
          .then((resp) => {
            console.log(JSON.stringify(resp.data.id));
            this.lists = resp.data;
            console.log(JSON.stringify(this.lists));
          });
      } catch (err) {
        console.log(err);
      }
    }
  },
  methods: {
    refresh() {
      location.reload();
    },
    onFileChange(e) {
      const file = e.target.files[0];
      this.url = URL.createObjectURL(file);
      this.file = e.target.files[0];
      console.log(this.file)
    },

    async submit() {
      if (this.parameters == "createcourse") {
        try {    
        await axios
          .post("http://127.0.0.1:8000/sop/course/", this.lists, {
            headers: {Authorization: `token ${localStorage.getItem("token")}`,},
          })
          .then((respone) => {
            this.edit.id = respone.data.id
            console.log(respone.data);
            localStorage.setItem("course_id", this.id)
            
          });
      } catch {
        (error) => {
          console.log(error);
          console.error(error.respone.data);
          console.error(error.respone.status);
          console.error(error.respone.headers);
        };
      }
      try {
        console.log(JSON.stringify(this.edit.id))
         var formData = new FormData();
         formData.append('name',this.lists.name)
         formData.append('description',this.lists.description)
         formData.append('cover', this.file)
          await axios
          .patch(
            `http://127.0.0.1:8000/sop/course/` + this.edit.id + `/`,formData, {
           headers: {Authorization: `token ${localStorage.getItem("token")}`,}},{emulateJSON: true})
         .then((resp) => {console.log(JSON.stringify(resp.data))
         localStorage.setItem("course_id",this.edit.id)
         this.$router.push({ path: "/createsession" , query: { type: "fromcreatecourse"  }});
         })
      } catch (err) {
        console.log(err);
      }
    } 
      else if (this.parameters == "editcourse" || this.parameters == "backfromsession"  || this.parameters == "backfromstep") {
        try {
          var formDataedit = new FormData();
          formDataedit.append('name',this.lists.name)
          formDataedit.append('description',this.lists.description)
          formDataedit.append('cover', this.file)
        await axios.patch("http://127.0.0.1:8000/sop/course/" + localStorage.getItem("course_id") + "/", formDataedit, {
            headers: {Authorization: `token ${localStorage.getItem("token")}`,},
          })
          .then((respone) => {
            this.edit.id = respone.data.id
            console.log(respone.data);
            localStorage.setItem("course_id", this.id)
            
          });
      } catch {
        (error) => {
          console.log(error);
          console.error(error.respone.data);
          console.error(error.respone.status);
          console.error(error.respone.headers);
        };
      }
      try {
        
          await axios
          .patch(
            `http://127.0.0.1:8000/sop/course/` + this.edit.id + `/`,this.lists.publish, {
           headers: {Authorization: `token ${localStorage.getItem("token")}`,}},{emulateJSON: true})
         .then((resp) => {console.log(JSON.stringify(resp.data))
         localStorage.setItem("course_id",this.edit.id)
         this.$router.push({ path: "/createsession" , query: { type: "fromeditcourse"  }});
         })
      } catch (err) {
        console.log(err);
      }
        }
    },

    backPage() {
      this.$router.push({ path: "/coursemanage" });
    },

  },
};
</script>

<style scoped>
.inputImg {
  margin-top: 10px;
  margin-left: 35%;
}
#preview {
  background-image: url(https://www.creativeglobal.co.in/mcp/uploads/product/original/no_image.jpg);
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 80%;
  height: 280px;
  margin-left: 10%;
}
#preview img {
  border: #000 solid 1px;
  width: 100%;
  height: 280px;
}
.createpost {
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
  margin-bottom: 150px;
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

.buttonis-info {
  position: relative;
  margin-top: 20px;
  margin-left: 62%;
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
button .cancle {
  margin-left: -20%;
}
.container-progress {
  width: 100%;
}
.progressbar {
  counter-reset: step;
}
.progressbar li {
  list-style-type: none;
  float: left;
  width: 33.33%;
  position: relative;
  text-align: center;
}
.progressbar li::before {
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
.progressbar li::after {
  content: "";
  position: absolute;
  width: 100%;
  height: 5px;
  background-color: #ddd;
  top: 33px;
  left: -50%;
  z-index: -1;
}
.progressbar li:first-child::after {
  content: none;
}
.progressbar li.active {
  color: #4f4f4f;
  font-weight: bold;
}
.progressbar li.active::before {
  border-color: #4f4f4f;
}
.progressbar li.active + li::after {
  border-color: #4f4f4f;
  color: #4f4f4f;
}
.back a {
  margin: 0px;
  color: #4f4f4f;
  text-align: center;
}
.text_h {
  position: relative;
  top: -40px;
}
.file-select > .select-button {
  position: absolute;
  top: 600%;
  padding: 1rem;
  color: white;
  background-color: #2ea169;
  border-radius: 0.3rem;
  text-align: center;
  font-weight: bold;
}

/* Don't forget to hide the original file input! */
.file-select > input[type="file"] {
  display: none;
}
</style>
