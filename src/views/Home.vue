<template>
  <div class="home">
    <div class="GO">
      <h1>Group Owned(5)</h1>
      <GroupOwned />
      <GroupOwned />
      <GroupOwned />
      <GroupOwned />
      <GroupOwned />

      <!-- <HeaderM/> -->
    </div>
    <div class="GJ">
      <h1>Group Joined(7)</h1>
      <GroupJoined />
      <GroupJoined />
      <GroupJoined />
      <GroupJoined />
      <GroupJoined />
      <GroupJoined />
      <GroupJoined />
    </div>
    <div class="V">
      <Bar />
    </div>

    <div class="iconplus">
      <img
        class="iconplus"
        src="@/assets/plusoncircle.png"
        @click="$router.push({ path: '/creategroup' })"
      />
    </div>

    <!--  <Body/> -->
  </div>
</template>

<script>
// @ is an alias to /src
import Bar from "@/components/Bar.vue";
//import HeaderM from "@/components/Main/Header.vue"
//import Body from "@/components/Main/Body.vue"
import GroupOwned from "@/components/Group/GroupOwned.vue";
import GroupJoined from "@/components/Group/GroupJoined.vue";

export default {
  name: "Home",

  components: {
    Bar,
    // HeaderM,
    // Body,
    GroupOwned,
    GroupJoined,
  },
};
</script>
<style scoped>
.home {
  padding: 0;
  margin: 0;
  height: 90%;
}
.V {
  position: initial;
  display: block;
}
.GO {
  position: relative;
  display: block;
  width: 1700px;
  margin-bottom: 50px;
}
.GO h1 {
  position: relative;
  top: 130px;
  left: 220px;
  color: black;
}
.GJ {
  position: relative;
  display: block;
  width: 1700px;
  margin-bottom: 200px;
}
.GJ h1 {
  position: relative;
  top: 140px;
  left: 220px;
  color: black;
}
img {
  position: fixed;
  left: 92%;
  top: 85%;
  width: 70px;
  height: 70px;
}
.iconplus {
  position: fixed;
  left: 92%;
  top: 85%;
  width: 70px;
  height: 70px;
  background: white;
  border-radius: 50%;
  /*   box-shadow: 3px 2px gray;*/
  border: 1px solid black;
  padding: 15px;
}
</style>
