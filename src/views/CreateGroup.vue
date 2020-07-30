<template>
  <div class="createpost">
    <div class="container-progress">
      <ul class="progressbar">
        <li type="button" v-on:click="refresh" class="active">Create Group</li>
        <li >Add Member</li>
        <li>Select</li>
      </ul>
    </div>
    <form @submit.prevent="submit">
      <div class="container">
        <div class="header">
          <p class="text_h">Create Group</p>
        </div>

        <div class="image">
          <div id="preview">
            <img v-if="url" :src="url" />
            <img v-else :src="lists.group_image"/>
          </div>
          <input class="inputImg" type="file" @change="onFileChange" />
        </div>
        <div class="name">
          <label for="name">Group Name (required){{ lists.group_name }} </label>
          <input
            v-model="lists.group_name"
            type="text"
            class="form-control"
            id="name"
            required
          />
          <div class="discription">
            <div class="form-group">
              <label for="description"
                >Description{{ lists.group_description }}
              </label>
              <textarea
                v-model="lists.group_description"
                class="form-control"
                id="description"
                rows="3"
              ></textarea>
            </div>

            <div class="buttonis-info">
              <sui-button type="button" class="back" v-on:click="backPage"
                >Cancle</sui-button
              >
              <sui-button type="button" secondary v-on:click="submit"
                >Create &amp; Next</sui-button
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
export default {
  name: "upload",
  components: {},
  prop: "num",
  data() {
    return {
      lists: [
        {
          id: "",
          group_name: "",
          member_count: "",
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
      url: "",
      id: "",
      parameters: this.$route.query.type,
      file:""
    };
  },
  mounted() {
    const parameters = this.$route.query.type;
    console.log(parameters);
    if (parameters == "create") {
      console.log(parameters);
    } else if (parameters == "edit") {
      try {
        axios
          .get(
            "http://127.0.0.1:8000/group/" +localStorage.getItem("group_id") +  "/",
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
    } else if (parameters == "back") {
       try {
        axios
          .get(
            "http://127.0.0.1:8000/group/" +
              localStorage.getItem("group_id") +
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
    refresh(){
      location.reload()
    },
    onFileChange(e) {
      const file = e.target.files[0];
      this.url = URL.createObjectURL(file);
      this.file = e.target.files[0];
    },

    async submit() {

      if(this.parameters == "create" ){
      const formData = new FormData();
      formData.append("group_name", this.lists.group_name);
      formData.append("group_description", this.lists.group_description);
      console.log(formData.get("group_name"));
      console.log(formData.get("group_description"));
      formData.append("group_image", this.file);
      try {
        await axios
          .post("http://127.0.0.1:8000/group/", formData, {
            headers: {Authorization: `token ${localStorage.getItem("token")}`,},
          })
          .then((respone) => {
            this.id = respone.data.id
            console.log(respone.data);
            localStorage.setItem("group_id", this.id)
            this.$router.push({ path: "/addmember" , query: { type: "fromcreate"  }});
          });
      } catch {
        (error) => {
          console.log(error);
          console.error(error.respone.data);
          console.error(error.respone.status);
          console.error(error.respone.headers);
        };
      }
    }
    
      else if(this.parameters == "edit" || this.parameters == "back"){
      const formData = new FormData();
      formData.append("group_name", this.lists.group_name);
      formData.append("group_description", this.lists.group_description);
      console.log(formData.get("group_name"));
      console.log(formData.get("group_description"));
      formData.append("group_image", this.file);
      try {
        await axios
          .patch("http://127.0.0.1:8000/group/" + localStorage.getItem("group_id") + "/", formData, {
            headers: {Authorization: `token ${localStorage.getItem("token")}`,},
          })
          .then((respone) => {
            this.id = respone.data.id
            console.log(respone.data);
            localStorage.setItem("group_id", this.id)
            this.$router.push({ path: "/addmember" , query: { type: "fromedit"  }});
          });
      } catch {
        (error) => {
          console.log(error);
          console.error(error.respone.data);
          console.error(error.respone.status);
          console.error(error.respone.headers);
        };
      }
    }
    },

    backPage() {
      this.$router.push({ path: "/groupmanage" });
    },
    next() {
      if (this.inputName == "") {
        console.log(this.inputName);
      } else {
        this.$router.push({ path: "/addmember" });
      }
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
