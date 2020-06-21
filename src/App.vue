<template>
  <div id="app">
   <img src="@/assets/school.png" />
  <!-- <router-link to="/"><sui-button primary @click ="showA = !showA;">Login</sui-button></router-link>
   <router-link to="/home"><sui-button secondary @click ="showA = !showA;">Home</sui-button></router-link> -->
    <router-view></router-view>
  </div>
</template>

<script>

export default {
  name : 'App',

}
</script>

<style>
    #app{
      margin: 0;
      padding: 0;
      background: #605856;
      height: 100%;
    }
  
</style>

<style scoped>
img{
  padding: 0px;
  margin: 10px;
  height: 50px;
  width: 50px;
}
</style>