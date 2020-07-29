<template>
   <div id="app">
    <ResponsiveNavigation v-if="$route.name != 'Loginform' "
		:nav-links="navLinks"
		background="#fff"
		link-color="#777"
		hoverBackground="#ddd"
    
    ></ResponsiveNavigation>
<!-- 
		
      <ul>
        <router-link to="/"></router-link>
        <router-link to="/login"></router-link>
        <router-link to="/classS"></router-link>
        <router-link to="/step"></router-link>
        <router-link to="/register"></router-link>
        <router-link to="/secret"></router-link>
        <router-link to="/createclass"></router-link>
        <router-link to="/loginform"></router-link>
        <router-link to="/test"></router-link>
        <router-link to="/addstep"></router-link>
      </ul>
             -->
    <router-view />
      <!-- <div class="bg-model">
      <div class="model-content">
        
      </div>
    </div> -->
    
  </div>
</template>

<script>
import ResponsiveNavigation from "../src/components/ResponsiveNavigation"
export default {
  components: {
    ResponsiveNavigation
  },
 
}
</script>

<style lang="scss" scpoed>

body {
  margin: 0;
  padding: 0;
}
#app {
  font-family: "Montserrat", sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

</style>
