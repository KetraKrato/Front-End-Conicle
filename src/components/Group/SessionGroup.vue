<template>
  <div id="owned" class="block" @click="selectS">
    <div class="imgblock">
      <img class="imggroup" src="@/assets/barten.jpg" />
    <div class="numsteps">
        <p>3</p>
        <p>Steps</p>
        </div>  
    </div>
    
    <div class="textblock">
      <span class="head">session 01</span>
      <div class="des">
        <span>--description--</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
    components:{
        
    },
  data() {
    return {
      display: "none",
      show: false,
      displaycourse:"",
      showcourse: true,
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
    selectS(){
            this.$router.push({ path: "/session" });
        },

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

  margin-top: 32px;
  margin-right: 20px;
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
.numsteps{
    position: absolute;
    width: 70px;
    height: 70px;
    right: 0px;
    background: #4F4F4F;
    color: white;
    padding: 8px;
    border-radius: 0px 6px 0px 0px;
}
.numsteps p{
    margin: 0px;
    padding: 0px;
    font-family: Montserrat;
font-style: normal;
font-weight: normal;
font-size: 24px;
line-height: 25px;
align-items: center;
text-align: center;
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