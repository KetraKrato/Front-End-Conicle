<template>
  <div id="steps">
    <div class="imgblock" @click="selectStep">
      <img class="imggroup" src="@/assets/barten.jpg" />
    </div>
    <div class="detail">
      <p>step 01</p>
      <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s</p>
    </div>
  </div>
</template>

<script>
export default {
    methods: {
        selectStep(){
            this.$router.push({ path: "/learning" });
        }
    },
};
</script>

<style scoped>
#steps {
  position: relative;
  margin-top: 16px;
  margin-bottom: 16px;
  width: 1460px;
  height: 160px;
}
.imgblock img {
  position: absolute;
  width: 280px;
  height: 160px;
  left: 0px;
  top: 0px;
}
.imgblock {
  position: absolute;
  width: 280px;
  height: 160px;
  left: 0px;
  top: 0px;
  cursor: pointer;
}
.detail {
  position: absolute;
  width: 1164px;
  height: 160px;
  left: 296px;
  top: 0px;
  border: 1px solid black;
  border-radius: 5px;
  background-color: white;
  padding-top: 24px;
  padding-bottom: 24px;
  padding-left: 40px;
  padding-right: 40px;
}
</style>