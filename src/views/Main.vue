<template>
  <div id="main">
    <div class="box">
      <div class="publicbox">
        <div class="public">
          <img src="@/assets/logo.png" />
          <span class="textpublic">Massage everyone in the group ..</span>
          <div class="lineincom"></div>
        </div>
        <div class="add" @click="isShow">Add</div>
        <div class="edit" v-bind:style="{ display: display }">
          <span>File</span>
          <span>Photo</span>
        </div>
        <div class="bottom">
          <sui-button negative size="medium">Cancle</sui-button>
          <sui-button positive size="medium">Text</sui-button>
        </div>
      </div>

      <div class="privatebox">
        <div v-bind:style="{ position: absolute }">
          <div class="private">
            <img class="imgprivate" src="@/assets/logo.png" />
            <span class="Owner">Post Owner</span>
            <div class="Time">01 June 2020</div>
            <p class="toppic">
              fsdfsdfsdfsdfsdfssdflkojipoiwepoirflkjsdjofsd;ljifasfe;jewo;ipjfwe;oflijwefj;oipkdlsjf;ajweifjdfsdfsdf
            </p>
          </div>
          <div class="Replay">
            <span>Add comment ..</span>
            <button class="send">Send</button>
          </div>
        </div>
      </div>
    </div>
    <Bar />
    <div class="mainbar">
      <div class="M">Main</div>
      <div class="C" @click="selectC">Course</div>
      <div class="P" @click="selectP">People</div>
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
      show: false,
    };
  },

  methods: {
    isShow() {
      this.show = !this.show;
      if (this.show == false) {
        this.display = "none";
        console.log(this.show);
      } else {
        this.display = "block";
        console.log(this.show);
      }
    },
    selectC() {
      this.$router.push({ path: "/course" });
    },
    selectP() {
      this.$router.push({ path: "/people" });
    },
  },
};
</script>

<style scoped>
.box {
  position: relative;
  top: 144px;
  left: 360px;
}
.comments {
  margin-top: 25px;
}
.publicbox {
  position: relative;
  padding: 26px;
  width: 1116px;
  border: 1px solid black;
  border-radius: 5px;
  margin-bottom: 30px;
}
.lineincom {
  height: 1px;
  width: 1050px;
  background: black;
  margin-top: 25px;
  margin-bottom: 26px;
}
img {
  width: 70px;
  height: 70px;
  background: #ffffff;
  border: 1px solid #000000;
  box-sizing: border-box;
  border-radius: 50%;
}
.textpublic {
  position: absolute;
  margin-top: 20px;
  margin-left: 20px;
}
.add {
  margin-left: 25px;
  margin-right: 1000px;
  left: 50px;
  cursor: pointer;
}
.edit {
  position: absolute;
  display: none;
  left: 100px;
  width: 100px;
  height: 55px;
  background: #ffffff;
  border: 1px solid #000000;
  box-sizing: border-box;
  border-radius: 5px;
}
.edit span {
  position: relative;
  display: block;
  margin: 5%;
}
.edit .linesubmenu {
  height: 1px;
  background: black;
}
.bottom {
  position: absolute;
  left: 900px;
  bottom: 20px;
  cursor: pointer;
}
.privatebox {
  position: relative;
  padding: 26px;
  width: 1116px;
  height: 200px;
  border: 1px solid black;
  border-radius: 5px;
  margin-bottom: 30px;
}
.private {
  position: relative;
  height: 100px;
  border-bottom: 1px solid black;
}
.imgprivate {
  position: absolute;
}
.Owner {
  position: absolute;
  margin-top: 12px;
  margin-left: 90px;
}
.Time {
  position: absolute;
  margin-top: 32px;
  margin-left: 90px;
}
.toppic {
  position: relative;
  top: 75px;
}
.Replay {
  position: relative;
  margin-top: 16px;
  margin-bottom: 16px;
  border: 1px solid black;
  border-radius: 5px;
  padding: 11px;
}
.send {
  position: absolute;
  right: 10px;
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
  border-bottom: 3px solid black;
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
  /*     border-bottom: 3px solid black;*/
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
  /*   border-bottom: 3px solid black;*/
  margin-left: 10px;
  margin-right: 10px;
  cursor: pointer;
}
</style>
