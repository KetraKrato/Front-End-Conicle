<template>
  <div id="people">
    <div class="numcourse">
      <span>Everyone(3)</span>
      <v-if>
          <p class="pluscourse" @click="isShowlink">+ Invite link</p>
      </v-if>
    </div>
    <div class="coursebox">
      <div class="header">
        <span class="name">Name</span>
        <span class="update">Role</span>
      </div>
      <div class="body">
        <div class="onecourse">
          <img class="profile" src="@/assets/school.png" />
          <p class="detail">Firstname Surename</p>
          <p class="role">Admin</p>
        </div>
        <v-if>
          <div class="editimg" @click="isShowOn">
            <img src="@/assets/edit.png" />
          </div>
        </v-if>
        <div class="edit" v-bind:style="{ display: display }">
          <span>Admin</span>
          <span>Instrutor</span>
          <span>Member</span>
          <div class="linesubmenu"></div>
          <span>Delete</span>
        </div>
      </div>
        <div class="body">
        <div class="onecourse">
          <img class="profile" src="@/assets/school.png" />
          <p class="detail">Firstname Surename</p>
          <p class="role">Admin</p>
        </div>
      </div>

    </div>
    <Bar />
    <div class="mainbar">
      <div class="M" @click="selectM">Main</div>
      <div class="C" @click="selectC">Course</div>
      <div class="P">People</div>
    </div>
              <div class="editlink" v-bind:style="{ display: displaylink }">
          <p>Send a invite link.</p>
          <div class="link">https://www.testpapa.com/</div>
        </div>
  </div>
</template>

<script>
import Bar from "@/components/Bar.vue";
export default {
  components: {
    Bar,
  },
  data() {
    return {
      display: "none",
      displaylink: "none",
      show: false,
      showlink: false,
    };
  },
  methods: {
    selectM() {
      this.$router.push({ path: "/main" });
    },
    selectC() {
      this.$router.push({ path: "/course" });
    },
    isShowOn() {
      this.show = !this.show;
      if (this.show == false) {
        this.display = "none";
        console.log(this.show);
      } else {
        this.display = "block";
        console.log(this.show);
      }
    },
    isShowlink() {
      this.showlink = !this.showlink;
      if (this.showlink == false) {
        this.displaylink = "none";
        console.log(this.showlink);
      } else {
        this.displaylink = "block";
        console.log(this.showlink);
      }
    },
  },
};
</script>

<style scoped>
.coursebox {
  position: relative;
  top: 205px;
  left: 417px;
  width: 1146px;

  background: #ffffff;
  border: 1px solid #000000;
  box-sizing: border-box;
  border-radius: 5px;
}
.numcourse {
  position: absolute;
  top: 144px;
  left: 417px;
  font-size: 28px;
  width: 1146px;
  height: 45px;
}
p.pluscourse {
  position: absolute;
    padding-top: 12px;
    width: 180px;
    height: 45px;
  right: 0px;
  top: 0px;
  text-align: center;
    background: rgb(189, 188, 188);
  font-family: Montserrat;
  font-style: normal;
  font-weight: 500;
  font-size: 18px;
  line-height: 22px;
}
.header {
  position: relative;
  height: 65px;
  border-bottom: 1px solid black;
}
.header span.name {
  position: absolute;
  top: 20px;
  left: 80px;
  font-weight: 600;
  font-size: 18px;
  line-height: 22px;
}
.header span.update {
  position: absolute;
  top: 20px;
  right: 80px;
  font-weight: 600;
  font-size: 18px;
  line-height: 22px;
}
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
.editimg {
  position: absolute;
  right: 20px;
  top: 20px;
  width: 31px;
  height: 31px;
  /*border: 1px solid black;*/
  border-radius: 50%;
  background: rgb(218, 213, 213);
}

.editimg img {
  position: absolute;
  width: 25px;
  height: 25px;
  top: 2.5px;
  left: 3px;
  padding: 4px;
  /*border-radius: 50%;*/
}

.edit {
  position: absolute;
  display: none;
  right: -75px;
  top: 55px;
  width: 100px;
  height: 120px;
  background: #ffffff;
  border: 1px solid #000000;
  box-sizing: border-box;
  border-radius: 5px;
}
.edit span {
  position: relative;
  display: block;
  background: white;
  margin: 6%;
}
.edit span:nth-child(3) {
  font-weight: bold;
}
.edit .linesubmenu {
  height: 1px;
  background: black;
}

.editlink{
    position: absolute;
width: 400px;
height: 96px;
right: 150px;
top: 180px;
background: white;
      border: 1px solid #000000;
  box-sizing: border-box;
  border-radius: 5px;
}

.editlink p{
    font-family: Montserrat;
font-style: normal;
font-weight: bold;
font-size: 18px;
line-height: 22px;
text-align: center;
padding-top: 15px;
}

.editlink .link{
text-align: center;
font-style: normal;
font-weight: normal;
font-size: 18px;
line-height: 22px;
}
.mainbar {
  position: absolute;
  top: 0;
}
.M {
  position: absolute;
  width: 100px;
  height: 50px;
  left: 800px;
  top: 30px;
  font-size: 25px;
  /*    border-bottom: 3px solid black;*/
  padding-left: 20px;
  margin-left: 10px;
  margin-right: 10px;
  cursor: pointer;
}
.C {
  position: absolute;
  width: 100px;
  height: 50px;
  left: 900px;
  top: 30px;
  font-size: 25px;
  /*  border-bottom: 3px solid black;*/
  padding-left: 10px;
  margin-left: 10px;
  margin-right: 10px;
  cursor: pointer;
}
.P {
  position: absolute;
  width: 100px;
  height: 50px;
  left: 1000px;
  top: 30px;
  font-size: 25px;
  padding-left: 10px;
  padding-right: 20px;
  border-bottom: 3px solid black;
  margin-left: 10px;
  margin-right: 10px;
  cursor: pointer;
}
</style>
