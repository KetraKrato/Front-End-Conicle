<template>
  <div id="member">
    <div class="body">
        <div class="onecourse">
          <img class="profile" src="@/assets/school.png" />
          <p class="detail">{{first_name}} {{last_name}}</p>
          <p v-if="admin" class="role">Admin</p>
        </div>
      </div>
  </div>
</template>

<script>
export default {
    props:{
        admin:Boolean,
        first_name:String,
        last_name:String
    }
}
</script>

<style scoped>
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
</style>