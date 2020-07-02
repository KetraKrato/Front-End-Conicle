<template>
  <div id="joingroup">
    <Bar />

    <form v-on:submit.prevent="submit">
      <div class="data">
        <div>
          <p>Join Group</p>
        </div>
        <div class="boxtxt">
          <p class="text">Group code</p>
          <input type="text" name="group" v-model="dataGroup.GroupCode" />
        </div>
        <div>
          <button class="cancle" @click="cancle">Cancle</button>
          <button class="create" type="submit">Join</button>
        </div>
      </div>
    </form>
  </div>
</template>

<script>
import Bar from "@/components/Bar.vue";

export default {
  name: "Join",
  components: {
    Bar,
  },
  data() {
    return {
      dataGroup: {
        GroupCode: "",
      },
    };
  },
};
</script>

<style scoped>
.data {
  font-family: sans-serif;
  position: absolute;
  width: 761px;
  height: 419px;
  left: 610px;
  top: 250px;

  background: white;
  text-align: left;
  color: #605856;

  background: #ffffff;
  border: 1px solid #000000;
  box-sizing: border-box;
  border-radius: 5px;
}
.data input[type="text"] {
  border: 0;
  background: none;
  display: absolute;
  margin-bottom: 20px;
  text-align: left;
  border: 2px solid #ea2427;
  padding: 14px 10px;
  width: 85%;
  outline: none;
  color: #605856;
  border-radius: 5px;
  font-size: 16px;
  /*  transition: 0.25s;*/
}
.data input[type="text"]:focus {
  width: 85%;
  border-color: #f46036;
}

.data p {
  margin-top: 7%;
  margin-left: 3%;
  margin-bottom: 3%;
  color: #605856;
  padding-left: 50px;

  font-size: 30px;
  font-weight: 500;
}
.data button.create {
  position: absolute;
  left: 70%;
  top: 78%;
  background: green;
  padding: 14px 10px;

  align-items: center;
  text-align: center;
  letter-spacing: -0.015em;

  border: 6px solid green;
  width: 125px;
  outline: none;
  color: white;
  border-radius: 5px;
  transition: 0.25s;
  line-height: 0px;
}

.data button.cancle {
  position: absolute;
  left: 53%;
  top: 78%;
  background: #f46036;
  padding: 14px 10px;

  align-items: center;
  text-align: center;
  letter-spacing: -0.015em;

  border: 6px solid #f46036;
  width: 125px;
  outline: none;
  color: white;
  border-radius: 5px;
  transition: 0.25s;
  line-height: 0px;
}
.data button.cancle:hover {
  border: 6px solid #ea2427;
  background: #ea2427;
  color: white;
}
.data button.create:hover {
  border: 6px solid rgb(4, 185, 4);
  background: rgb(4, 185, 4);
  color: white;
}
p.text {
  font-size: 18px;
  margin: 0;
  padding: 0;
  text-align: left;
}
.boxtxt {
  padding-left: 10%;
  padding-top: 5%;
}
.boxtxt p {
  padding-bottom: 5px;
}
</style>
