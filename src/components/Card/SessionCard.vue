<template>
  <div class="backgroud" v-show="value">
    <div class="container2">
      <div class="block">
        <div class="header">
          <h3>Create Session {{ list }}</h3>
        </div>
        <div class="image">
          <div id="preview">
            <img v-if="url" :src="url" />
            <img v-else :src="create.cover" />
          </div>
          <input class="inputImg" type="file" @change="onFileChange" />
        </div>
        <div class="card">
          <sui-form>
            <sui-form-field>
              <p required>Session Name (require){{ create.name }}</p>
              <input v-model="create.name" />
            </sui-form-field>
            <sui-form-field>
              <p required>Description</p>
              <input v-model="create.description" />
            </sui-form-field>
            <div class="allbtn">
              <sui-button class="back" v-on:click="close">Cancel</sui-button>
              <sui-button type="button" secondary v-on:click="submit()"
                >Create</sui-button
              >
            </div>
          </sui-form>
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
        description: "",
        file: "",
        cover: "",
        publish: true,
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
      url: "",
      file: "",
      
    };
  },
  
  mounted() {
    localStorage.getItem("sessionedit")
    console.log(this.list + "m")
    
  },
  methods: {
    close() {
      this.$emit("input", !this.value);
      localStorage.setItem("sessionedit", 0);
    },
    onFileChange(e) {
      const file = e.target.files[0];
      this.url = URL.createObjectURL(file);
      this.file = e.target.files[0];
      console.log(this.file);
    },
    async submit() {
      
        try {
          var formData = new FormData();
          formData.append("name", this.create.name);
          formData.append("description", this.create.description);
          formData.append("cover", this.file);
          await axios
            .post(
              `http://127.0.0.1:8000/sop/session/`,
              formData,
              {
                headers: {
                  Authorization: `token ${localStorage.getItem("token")}`,
                },
              },
              { emulateJSON: true }
            )
            .then((resp) => {
              console.log(JSON.stringify(resp.data));
              localStorage.setItem("sessionedit", "0");
              location.reload()
            });
        } catch (err) {
          console.log(err);
        }
      
      }
    },
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
  margin-top: 20px;
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
</style>
