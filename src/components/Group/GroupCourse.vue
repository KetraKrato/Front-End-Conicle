<template>
  <div id="owned" class="block" @click="select">
    <div class="imgblock">
      <img class="imggroup" src="@/assets/barten.jpg" />
    </div>
    <div class="textblock">
      <span class="head">Course 01</span>
      <span class="member">3 sessions</span>

      <div class="des">
        <span>--description--</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      display: "none",
      show: false
    };
  },
  mounted() {},
  props: {

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
    select() {
      console.log("SelectGroup");
      this.$router.push({ path: "/subcourse" });
    }
  }
};
</script>

<style scoped>
.block {
  position: relative;
  display: inline-block;
  border: 1px solid black;
  border-radius: 5px;
  background-color: white;
  width: 350px;

  height: 359px;
  top: 130px;
  left: 210px;
  margin-top: 32px;
  margin-left: 32px;
  cursor: pointer;
}
.imgblock {
  position: relative;
  width: 350px;
  height: 194px;
}
.imggroup {
  position: absolute;
  width: 348px;
  height: 194px;
  border-radius: 2px;
}
.textblock {
  position: relative;
  width: 348px;
  height: 165px;
}
span.head {
  position: absolute;
  display: block;
  font-size: 24px;
  top: 16px;
  left: 32px;
}
span.member {
  position: absolute;
  display: block;
  font-size: 18px;
  left: 32px;
  top: 55px;
  font-family: Montserrat;
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  line-height: 17px;
}
.des {
  position: absolute;
  top: 89px;
  left: 32px;
  font-family: Montserrat;
  font-style: normal;
  font-weight: normal;
  font-size: 18px;
  line-height: 22px;
}

</style>