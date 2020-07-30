<template>
  <div>
    <div class="top">
      <ul class="progressbar">
        <li type="button" v-on:click="back2create" class="active2">Create Course</li>
        <li type="button" v-on:click="back2session" class="active2">Create Session</li>
        <li type="button" class="active">Create Step</li>
        
      </ul>
    </div>
    <div class="crestesession">
        <div class="headermain">
        <h3>Create Step  </h3>
        <div class="secondheadmain">
          <span>Total {{ count }} Session</span>
        </div>
      </div>
      <div class="container">
        <div class="headcontent">
          <span class="headname">Step Name</span>
          <span class="headdiscript">Discription</span>
          <span class="headupdate">Last updated</span>
        </div>
        <div class="line"></div>
        <div class="insidecontent" v-for="list in lists.step" :key="list.id" >
          <img class="cimg" :src="list.cover_file" alt="" />
          <span class="name">{{ list.name }}</span>
          <span class="discript" v-if="list.textcontent < 20">{{
            list.textcontent
          }}</span>
          <span class="discript" v-else>{{
            list.textcontent.substring(0, 17) + "..."
          }}</span>

          <span class="lastdate3">{{ getDate(list.date_modified) }}</span>
          <button
            class="btn"
            type="button"
            id="dropdownMenuButton"
            data-toggle="dropdown"
            aria-haspopup="true"
            aria-expanded="false"
          >
            <i class="edit icon"></i>
          </button>
          <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
             <a class="dropdown-item" type="button" :value="list.id"  @click="edit(list.id)">Edit</a>
             <a class="dropdown-item" type="button" href="" v-on:click="deletestep(list.id, list.name)">Delete</a>
          </div>
        </div>

        <div class="allbtnmain">
          
          <sui-button class="next" secondary v-on:click="nextPage"
            >Confirm</sui-button
          >
        </div>
      </div>

      <button class="plus" @click="modal =!modal"> + Create Step</button>
    <div v-if="modal">
      <div class="container2">
      <div class="block">
        <div class="header">
          <h3>Create Step </h3>
        </div>
        <div class="image">
          <div id="preview">
            <img v-if="url" :src="url" />
            <img v-else :src="create.cover_file" />
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
              <sui-button type="button" secondary v-on:click="submit(id)"
                >Create</sui-button
              >
            </div>
          
        </div>
      </div>
    </div>
    </div>
  </div>
  </div>
</template>

<script>
import axios from "axios"
import moment from "moment"
export default {
data(){
  return{
    modal:false,
     create: {
        name: "",
        textcontent: "",
        link: "",
        cover_file: "",
        post_id: 0,
        date_modified: "",
        date_created: "",
      },
      showModal: true,
      activeModel: "",
      modalOpen: false,
      lists: {
        id: "",
        name: "",
        textcontent: "",
        cover: "",
        publish: "",

        step:[{
          id: "",
          name: "",
          textcontent: "",
          link: "",
          cover_type: "",
          cover_file: "",
          post_id: "",
          step_file: [],
          date_created: "",
          date_modified: "",
        }],
        date_created: "",
        date_modified: "",
      },
      add:{
        step_id: "",
        file:{
          url: "",
          size: "",
          name: ""
        }
        
      },
      session_id : localStorage.getItem("session_id"),
      id:""
      
      
  }
},
 mounted() {
    console.log(this.count)
    try {
      axios
        .get(
          `http://127.0.0.1:8000/sop/session/  ` + localStorage.getItem("session_id") +  `/`,
          {
            headers: {
              Authorization: `token ${localStorage.getItem("token")}`,
            },
          }
        )
        .then((resp) => {
          console.log(resp.data);
          this.lists = resp.data;
          this.count = this.lists.step.length;
          
          
        });
    } catch (err) {
      console.log(err);
    }
  },
methods: {
  
  edit(id){
    localStorage.setItem("sessforstepedit", id);
     try {
      axios
        .get(
          `http://127.0.0.1:8000/sop/step/  ` + id +  `/`,
          {
            headers: {
              Authorization: `token ${localStorage.getItem("token")}`,
            },
          }
        )
        .then((resp) => {
          console.log(resp.data);
          this.create = resp.data;
          this.count = this.lists.step.length;
        });
    } catch (err) {
      console.log(err);
    }
    this.id = id
    console.log(this.id)
    this.modal = !this.modal
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
  close(){
    this.modal = !this.modal
    localStorage.setItem("sessforstepedit","0")
     location.reload()
  },
    back2create(){
      this.$router.push({ path: "/createcourse" , query: { type: "backfromstep"  }});
      
    },
    refresh(){
      this.modal = !this.modal
       location.reload()
    },
    getDate: function(date) {
      return moment(date, "YYYY-MM-DD").format("DD MMMM YYYY");
    },
    back2session() {
      this.$router.push({ path: "/createsession" , query: { type: "backfromstep"  }});
    },
    nextPage() {
      this.$router.push({ path: "/coursemanage" });
    },
    deletestep(id ,name){
       if (confirm("Are you sure to delete " + name + "?")) {
       try {
      axios
        .delete(`http://127.0.0.1:8000/sop/step/`+ id + '/' ,  {
          headers: { Authorization: `token ${localStorage.getItem("token")}` },
        })
        .then((resp) => {
          
          console.log(resp.data);
          this.lists = resp.data;
          console.log(JSON.stringify(this.lists));
          window.location.reload();
        });
    } catch (err) {
      console.log(err);
    }
       }
    },
     async submit() {
      if(localStorage.getItem("sessforstepedit") == '0'){
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
      }
      else{
      
      if (this.add.file.url){
         try {
           const formData2 = new FormData();
           formData2.append("name", this.create.name);
           formData2.append("textcontent", this.create.textcontent);
           formData2.append("cover_file", this.create.cover_file);
           formData2.append("post_id", this.session_id);
           console.log(formData2.get("name"));
           console.log(formData2.get("post_id"));
        await axios.patch( `http://127.0.0.1:8000/sop/step/` + localStorage.getItem("sessforstepedit") + "/",  formData2,
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
          var formDataedit2 = new FormData();
          formDataedit2.append("step_id", this.add.step_id);
          formDataedit2.append("file", this.add.file.url);
          console.log(formDataedit2.get("file"));
          console.log(this.add);
          await axios
            .post( `http://127.0.0.1:8000/sop/step/file/`,  formDataedit2,
              {
                headers: {
                  Authorization: `token ${localStorage.getItem("token")}`,
                },
              },
              { emulateJSON: true }
            )
            .then((resp) => {
              console.log(JSON.stringify(resp.data));
              localStorage.setItem("sessforstepedit" , "0") 
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
      }
    },
},
}
</script>

<style scoped>
* {
  font-family: "Montserrat", sans-serif;
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
  margin: 30px auto 10px auto;
  border-radius: 50%;
  background-color: #fff;
}
.progressbar li::after {
  content: "";
  position: absolute;
  width: 100%;
  height: 5px;
  background-color: #4f4f4f;
  top: 53px;
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
.progressbar li.active2 {
  color: #ddd;
  font-weight: bold;
}
.progressbar li.active2::before {
  border-color: #4f4f4f;
}
.progressbar li.active + li::after {
  background-color: #4f4f4f;
}

.plus {
  position: absolute;
  border: none;
  margin-top: 12%;
  margin-left: calc(100% - 370px);
  border: none;
  background: #404040;
  color: #ffffff !important;
  font-family: Montserrat;
  font-style: normal;
  font-weight: 500;
  font-size: 12px;
  line-height: 20px;
  padding: 8px 20px;
  text-transform: uppercase;
  border-radius: 6px;
  display: flex;
  transition: all 0.2s ease 0s;
  align-items: center;
  text-align: center;
  letter-spacing: -0.015em;
  /* margin: 10px; */
}
.plus:hover {
  color: #404040 !important;
  font-weight: 700 !important;
  letter-spacing: 1px;
  background: none;
  -webkit-box-shadow: 0px 5px 40px -10px rgba(36, 2, 2, 0.57);
  -moz-box-shadow: 0px 5px 40px -10px rgba(0, 0, 0, 0.57);
  transition: all 0.2s ease 0s;
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
  margin-left: 335px;
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
.headermain {
  position: absolute;
  margin-left: 19%;
  margin-top: 10%;
  color: #000;
}
.secondheadmain {
  margin-top: -1%;
  color: #000;
}
.headcontent {
  color: #000;
  font-weight: bold;
}
.container {
  border: 1px solid #000;
  position: absolute;
  margin-top: 16%;
  margin-left: 19%;
  margin-bottom: 8%;
  width: 65%;
  border-radius: 4px;
  padding: 0%;
}
.headname {
  float: left;
  margin-left: 50px;
  margin-top: 15px;
  font-size: 16px;
  font-weight: bold;
}
.headdiscript {
  float: left;
  margin-left: 140px;
  margin-top: 15px;
  font-size: 16px;
  font-weight: bold;
}
.headupdate {
  float: right;
  margin-top: 15px;
  margin-right: 11%;
  color: black;
  text-align: center;
  font-size: 16px;
  font-weight: bold;
}
.container .line {
  margin-top: 50px;
  border: 0.1px solid rgba(0, 0, 0, 0.582);
  width: 100%;
  height: 0px;
}

.insidecontent {
  display: flex;
  flex-wrap: wrap;
  margin-bottom: 10px;
}
.name {
  float: left;
  margin-top: 41px;
  margin-left: 20px;
  margin-right: 32%;
}
.discript {
  position: absolute;
  margin-top: 41px;
  margin-left: 290px;
  max-width: 20ch;
  text-align: center;
}

.lastdate3 {
  position: absolute;
  margin-top: 41px;
  margin-left: 77%;
}
.btn {
  position: absolute;
  margin-top: 37px;
  margin-left: 93%;
  border: none;
  padding: 1px 1px;
}
.allbtnmain {
  position: relative;
  float: right;
  margin-top: 3%;
  margin-left: 89.5%;
  position: absolute;
  
}
.back a {
  margin: 20px;
  color: #4f4f4f;
  list-style-type: none;
}
.next {
  margin: 20px;
}
.cimg {
  border: 1px solid #000;
  border-radius: 5px;
  margin-top: 20px;
  margin-left: 40px;
  width: 110px;
  height: 60px;
  grid: 3;
}
</style>