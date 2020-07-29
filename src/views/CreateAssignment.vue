<template>
  <div class="backgroud">
    <div class="container2">
      <div class="block">
        <div class="header">
          <h3>Create Assignment</h3>
        </div>

        <div class="card">
          <sui-form @submit.prevent="submit">
            <sui-form-field>
              <p required>Assignment Name (require)</p>
              <input
                type="text"
                v-model="form.name"
                name="name"
                id="name"
                required
              />
            </sui-form-field>
            <div class="form-group">
              <label for="exampleFormControlTextarea1">Description</label>
              <textarea
                class="form-control"
                id="exampleFormControlTextarea1"
                rows="3"
                v-model="form.description"
                name="description"
                type="text"
              ></textarea>
            </div>
            <div class="select">
              <lable for="status">For </lable>
              <select class="custom-select" v-model="form.group_id">
                <option
                  v-for="option in options"
                  :key="option.id"
                  :value="option.id"
                  >{{ option.group_name }}</option
                >
              </select>
            </div>
            <div class="select">
              <lable for="status">Due </lable>
              <datetime type="datetime" v-model="form.due_date"></datetime>
            </div>
            <div class="select">
              <lable for="status">Assignment type {{form.allow_file}} </lable>
              <select class="custom-select" v-model="form.allow_file">
                <option v-bind:value="true" @click="form.allow_file = true">Included file</option>
                <option v-bind:value="false" @click="form.allow_file = false">Question-Answer</option
                >
              </select>
            </div>
          </sui-form>
          <input class="inputB" type="file" @change="onFileChange" />
          <div class="allbtn">
            <sui-button class="back" v-on:click="back">Cancel</sui-button>
            <sui-button type="submit" v-on:click="submit" secondary
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
import { Datetime } from "vue-datetime";

export default {
  name: "Modal",
  components: {
    datetime: Datetime,
  },
  props: {
    value: {
      required: true,
    },
  },
  data() {
    return {
      options: [
        {
          id: "",
          group_name: "",
          description: "",
          file: "",
          publish: false,
          creator: {
            username: "",
            first_name: "",
            last_name: "",
            id: "",
          },
          post: [],
          date_created: "",
          date_modified: "",
        },
      ],
      datetime: "",
      form: {
        group_id: "",
        name: "",
        description: "",
        due_date: "",
        allow_file: true,
      },
      parameters: this.$route.query.type,
      url: "",
      file: "",
      assigncreate_id: "",
      attatch_file: {
        assignment_id: this.assigncreate_id,
        file: "",
      },
    };
  },
  beforeCreate() {
    try {
      axios
        .get(`http://127.0.0.1:8000/group/`, {
          headers: { Authorization: `token ${localStorage.getItem("token")}` },
        })
        .then((resp) => {
          // console.log(resp.data);
          this.options = resp.data;
          console.log(JSON.stringify(this.options));
        });
    } catch (err) {
      console.log(err);
    }
  },
  mounted() {
    const parameters = this.$route.query.type;
    console.log(parameters);
    if (parameters == "createassign") {
      console.log(parameters);
    } else if (parameters == "editassign") {
      try {
        axios
          .get(
            `http://127.0.0.1:8000/group/assignment/` +
              localStorage.getItem("assign_id") +
              `/`,
            {
              headers: {
                Authorization: `token ${localStorage.getItem("token")}`,
              },
            }
          )
          .then((resp) => {
            // console.log(resp.data);
            this.form = resp.data;
            console.log(JSON.stringify(this.lists));
          });
      } catch (err) {
        console.log(err);
      }
    }
  },
  methods: {
    onFileChange(e) {
      const file = e.target.files[0];
      this.url = URL.createObjectURL(file);
      this.attatch_file.file = e.target.files[0];
      console.log(this.attatch_file.file)
    },
    
    back() {
      this.$router.push({ path: "/assignmanage" });
    },
    async submit() {
      if(this.parameters == "createassign"){
      
       try {
        await axios.post( `http://127.0.0.1:8000/group/assignment/`,  this.form,
            {
              headers: {Authorization: `token ${localStorage.getItem("token")}`,},
            },)
          .then((resp) => {
            this.assigncreate_id = resp.data.id;
            console.log(this.assigncreate_id)
            console.log(JSON.stringify(resp.data));
          });
      } catch (err) {
        console.error(err.resp.name);
      }
      try {
        const formData = new FormData();
        formData.append("assignment_id", this.assigncreate_id);
        formData.append("file", this.attatch_file.file);
        console.log(this.attatch_file.file);
        console.log(formData.get("assignment_id"));
        console.log(formData.get("file"));
        
        await axios.post(`http://127.0.0.1:8000/group/assignment/file/`, formData,
            {
              headers: {
                Authorization: `token ${localStorage.getItem("token")}`,
              },
            },
            
          )
          .then((resp) => {
            console.log(JSON.stringify(resp.data));
            this.$router.push({ path: "/assignmanage" });
          });
      } catch (err) {
        console.error(err.resp.name);
      }
      }
      else if(this.parameters == "editassign"){

      try {
        await axios.patch( `http://127.0.0.1:8000/group/assignment/`+ localStorage.getItem("assign_id") + "/",  this.form,
            {
              headers: {Authorization: `token ${localStorage.getItem("token")}`,},
            },)
          .then((resp) => {
            this.assigncreate_id = resp.data.id;
            console.log(this.assigncreate_id)
            console.log(JSON.stringify(resp.data));
          });
      } catch (err) {
        console.error(err.resp.name);
      }
      try {
        const formData = new FormData();
        formData.append("assignment_id", this.assigncreate_id);
        formData.append("file", this.attatch_file.file);
        console.log(this.attatch_file.file);
        console.log(formData.get("assignment_id"));
        console.log(formData.get("file"));
        
        await axios.post(`http://127.0.0.1:8000/group/assignment/file/`, formData,
            {
              headers: {
                Authorization: `token ${localStorage.getItem("token")}`,
              },
            },
            
          )
          .then((resp) => {
            console.log(JSON.stringify(resp.data));
             this.$router.push({ path: "/assignmanage" });
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
  /* background-color: rgba(0, 0, 0, 0.7); */
  z-index: 1000;
}
.container2 {
  right: 0;
  left: 0;
  margin-right: auto;
  margin-left: auto;
  margin-top: 50px;
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
  /* -webkit-box-shadow: 10px 10px 5px 0px rgba(0, 0, 0, 0.75);
  -moz-box-shadow: 10px 10px 5px 0px rgba(0, 0, 0, 0.75);
  box-shadow: 10px 10px 5px 0px rgba(0, 0, 0, 0.75); */
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
  margin-top: -30px;
  margin-left: 337px;
}
label {
  font-weight: normal;
}
.select {
  margin-top: 20px;
}
.add {
  margin-top: 40px;
}
.inputB {
  margin-top: 30px;
}
</style>
