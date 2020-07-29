<template>
  <div class="course">
    <div class="container">
      <div class="header">
        <h3>All post > post 01</h3>
        
        <div class="show">
          <div class="box"><img src="../img/image.jpg" alt="" /></div>
          <div class="box2">
            <h4>Couse 01</h4>
            <div class="num_p">
              <h5>
                3 post
              </h5>
            
            <div class="dis">
              <h5>discription</h5>
            </div>
            </div>
          </div>
        </div>
      </div>


        <div class="content">
        <h3><br>All post > post 02</h3>
        
        <div class="show_small">
          <div class="s_box"><img src="../img/image.jpg" alt="" /></div>
          <div class="s_box2">
            <h4>Couse 01</h4>
            <div class="num_p">
              <h5>
                3 post
              </h5>
            
            <div class="dis">
              <h5>discription</h5>
            </div>
            </div>
          </div>
        </div>
         <div class="show_small">
          <div class="s_box"><img src="../img/image.jpg" alt="" /></div>
          <div class="s_box2">
            <h4>Couse 01</h4>
            <div class="num_p">
              <h5>
                3 post
              </h5>
            
            <div class="dis">
              <h5>discription</h5>
            </div>
            </div>
          </div>
        </div>
         <div class="show_small">
          <div class="s_box"><img src="../img/image.jpg" alt="" /></div>
          <div class="s_box2">
            <h4>Couse 01</h4>
            <div class="num_p">
              <h5>
                3 post
              </h5>
            
            <div class="dis">
              <h5>discription</h5>
            </div>
            </div>
          </div>
        </div>
      </div>
      
      
       
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.container {
    display: grid;
    grid-column: 1;
    margin-bottom: 70px;
}

.course {
  display: flex;

  margin: 0;
  padding: left;
}
h3 {
  /* position: relative; */
  margin-left: 2%;
  font-family: Montserrat;
  font-style: normal;
  font-weight: bold;
  font-size: 24px;
  line-height: 29px;
  margin-left: 100px;
  color: #000000;
  /* top: 50px */
}
.box {
  position: relative;
  display: flex;
  background-color: lightgrey;
  width: 300px;
  border: 1px solid #000;
  padding: 0px;
  margin: 5px;
  margin-left: 100px;
  float: left;
  border-radius: 4px;
}
.box2 {
  align-content: center;
  position: relative;
  display: flex;
  background-color: #fff;
  width: 650px;
  height: 175px;
  border: 1px solid #000;
  padding: 50px;
  margin: 5px;
  margin-left: 10px;
  float: left;
  border-radius: 4px;
}
.box img {
  position: relative;
  width: 100%;
  height: 100%;
}

.p {
  margin-right: 10px;
}


.box2 h4 {
  position: relative;
  margin: 0;
  top: -25px;
  left: 1px;
  font-family: "Montserrat", sans-serif;
}
.num_p h5 {
  position: relative;
  margin: 10px;
  font-weight: normal;
  top: 0px;
  left: -75px;
  font-family: "Montserrat", sans-serif;
}
.dis h5 {
  position: relative;
  margin: 10px;
  font-weight: normal;
  top: 0px;
  left: -75px;
  font-family: "Montserrat", sans-serif;
}
.content h4{
    margin-top: -25px;
    margin-left: -2px;
}
.s_box {
  position: relative;
  display: flex;
  background-color: lightgrey;
  width: 220px;
  border: 1px solid #000;
  padding: 0px;
  margin: 5px;
  margin-left: 100px;
  float: left;
  border-radius: 4px;
}
.s_box2 {
  align-content: center;
  position: relative;
  display: flex;
  background-color: #fff;
  width: 600px;
  height: 130px;
  border: 1px solid #000;
  padding: 50px;
  margin: 5px;
  margin-left: 10px;
  float: left;
  border-radius: 4px;
}
.s_box img {
  position: relative;
  width: 100%;
  height: 100%;
}
.content .num_p h5{
    margin-left: 15px;
}
</style>
