<template>
  <body>
    <div id="Nofile">
      <div class="container">
      <div class="img">
        <img src="../img/nofile.jpg" alt="" />
      </div>
      <div class="header">
        <h1 >Welcome to SOP</h1>
      </div>

      <img src="background" alt="" />
      <div class="buttons">
        <a href="/createcourse"><button type="submit"  class="btn">Create Course</button></a>
        <a href="/createpost"><button type="submit" class="btn">Create Post</button></a>
        
      </div>
    </div>
    </div>
  </body>
</template>

<script>
export default {};
</script>

<style scoped>

* {
  margin: 0;
  padding: 0;
}
.container{
  margin-top: 20px;
}
.header{
  margin-top: 40px;
  margin-bottom: 20px;
  text-align: center;
  font-family: "Montserrat", sans-serif;
  font-style: normal;
  font-weight: normal;
  font-size: 36px;
  line-height: 44px;
}
.buttons {
  display: flex;
  justify-content: center;
  align-items: center;
}
img{
  width: 688.07px;
  /* height: 500px; */
  left: 646px;
  top: 100px;
  opacity: 0.8;
  display: flex;
  margin-left: auto;
  margin-right: auto;
  width: 50%;
}
.btn {
  border: none;
  background: #404040;
  color: #ffffff !important;
  font-family: Montserrat;
  font-style: normal;
  font-weight: 500;
  font-size: 12px;
  line-height: 22px;
  padding:  10px 24px;
  text-transform: uppercase;
  border-radius: 6px;
  display: flex;
  transition: all 0.3s ease 0s;
  align-items: center;
  text-align: center;
  letter-spacing: -0.015em;
  margin: 10px;
}
.btn:hover {
  color: #404040 !important;
  font-weight: 700 !important;
  letter-spacing: 3px;
  background: none;
  -webkit-box-shadow: 0px 5px 40px -10px rgba(0, 0, 0, 0.57);
  -moz-box-shadow: 0px 5px 40px -10px rgba(0, 0, 0, 0.57);
  transition: all 0.3s ease 0s;
}
</style>
