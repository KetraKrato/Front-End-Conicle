<template>
  <div class="backgroud" v-show="value">
    <div class="container2">
      <div class="block">
        <div class="header">
          <h3>Create Step {{ list }}</h3>
        </div>
        <div class="image">
          <div id="preview">
            <img v-if="url" :src="url" />
            <img v-else :src="create.cover" />
          </div>
          <input class="inputImg" type="file" @change="onFileChange" />
        </div>
        <div class="card">
          <form>
            <div class="form-group">
              <label for="name">Step name </label>
              <input
                type="text"
                class="form-control" v-model="create.name"/>

            </div>
            <div class="form-group">
              <label for="descript">Description </label>
              <input
                type="text"
                class="form-control"
                id="descript"
                v-model="create.textcontent" 
              />
            </div>
            <input class="inputB" type="file" @change="onFileChangefile" />

          </form>
          
            <div class="allbtn">
              <sui-button class="back" v-on:click="close">Cancel</sui-button>
              <sui-button type="button" secondary v-on:click="submit()"
                >Create</sui-button
              >
            </div>
          
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "Modal",
  components: {},
  props: {
    list: Number,
    value: {
      required: false,
    },
  },
  data() {
    return {
      create: {
        name: "",
        textcontent: "",
        link: "",
        cover_file: "",
        post_id: 0,
        date_modified: "",
        date_created: "",
      },
      add:{
        step_id: "",
        file:{
          url: "",
          size: "",
          name: ""
        }
        
      },
      url: "",
      file: "",
      includefile: "",
      stepid:"",
      session_id : localStorage.getItem("session_id")
    };
  },
  update(){
    this.session_id = localStorage.getItem("sessionedit")
      console.log(this.session_id)
  },

  methods: {
    
    close() {
      this.$emit("input", !this.value);
      localStorage.setItem("sessionedit",'0')
      location.reload()
    },
    onFileChange(e) {
      const file = e.target.files[0];
      this.url = URL.createObjectURL(file);
      this.create.cover_file = e.target.files[0];
      console.log(this.create.cover_file );
    },
    onFileChangefile(e) {
      this.add.file.url = e.target.files[0];
      console.log(this.add.file.url);
    },
    
    async submit() {
      
      if (this.add.file.url){
         try {
           const formData = new FormData();
           formData.append("name", this.create.name);
           formData.append("textcontent", this.create.textcontent);
           formData.append("cover_file", this.create.cover_file);
           formData.append("post_id", this.session_id);
           console.log(formData.get("name"));
           console.log(formData.get("post_id"));
        await axios.post( `http://127.0.0.1:8000/sop/step/`,  formData,
            {
              headers: {Authorization: `token ${localStorage.getItem("token")}`,},
            },)
          .then((resp) => {
            this.add.step_id = resp.data.id;
            console.log(this.add.stepid)
            console.log(JSON.stringify(resp.data));
          });
      } catch (err) {
        console.error(err.resp.name);
      }
        try{
          var formDataedit = new FormData();
          formDataedit.append("step_id", this.add.step_id);
          formDataedit.append("file", this.add.file.url);
          console.log(formDataedit.get("file"));
          console.log(this.add);
          await axios
            .post( `http://127.0.0.1:8000/sop/step/file/`,  formDataedit,
              {
                headers: {
                  Authorization: `token ${localStorage.getItem("token")}`,
                },
              },
              { emulateJSON: true }
            )
            .then((resp) => {
              console.log(JSON.stringify(resp.data));
              location.reload()
            });
        }
        catch (err) {
          console.log(err);
        }
      }
      else if(!this.add.file.url){
        try {
           const formData = new FormData();
           formData.append("name", this.create.name);
           formData.append("textcontent", this.create.textcontent);
           formData.append("cover_file", this.create.cover_file);
           formData.append("post_id", this.session_id);
           console.log(formData.get("name"));
           console.log(formData.get("post_id"));
        await axios.post( `http://127.0.0.1:8000/sop/step/`,  formData,
            {
              headers: {Authorization: `token ${localStorage.getItem("token")}`,},
            },)
          .then((resp) => {
            this.add.step_id = resp.data.id;
            console.log(this.add.stepid)
            console.log(JSON.stringify(resp.data));
            location.reload()

          });
      } catch (err) {
        console.error(err.resp.name);
      }
      }
    },
  },
};
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
  margin-top: 10px;
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
  margin-top: 10px;
  margin-bottom: 20px;
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
  margin-top: -30px;
  margin-left: 337px;
}
label {
  font-weight: normal;
}

.btn {
  position: absolute;
  margin-left: -340px;
  border: whitesmoke;
}

.inputImg {
  margin-top: 40px;
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
  height: 230px;
  margin-top: 60px;
  margin-left: 10%;
}
#preview img {
  border: #000 solid 1px;
  width: 100%;
  height: 280px;
}
.inputB {
  margin-top: 10px;
}
</style>
