<template>
  <div id="welcome">
    <img src="../assets/welcome.jpg" />
    <p>Welcome to Group Learning!</p>
    <div class="groupbutton">
      <sui-button basic color="grey">Join Group</sui-button>
      <sui-button color="black">Create Group</sui-button>
    </div>
    <Bar/>
  </div>
</template>

<script>
import Bar from "@/components/Bar.vue";
export default {
  components:{
    Bar,
  }
};
</script>

<style scoped>
img {
  position: absolute;
  width: 688.07px;
  height: 500px;
  left: 646px;
  top: 186px;
}
.groupbutton {
  position: absolute;
  width: 500px;
  height: 45px;
  left: 840px;
  top: 794px;
}
p {
  position: absolute;
  width: 520px;
  height: 44px;
  left: 750px;
  top: 702px;

  font-family: Montserrat;
  font-style: normal;
  font-weight: normal;
  font-size: 36px;
  line-height: 44px;
}
</style>
