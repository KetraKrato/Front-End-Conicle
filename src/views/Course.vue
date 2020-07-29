<template>
  <div class="course">
    <div class="container">
      <div class="header">
        <h3>All post > post 01</h3>
        <div id="progressbar">
          <div><p>50% (1/2 Posts)</p></div>
        </div>
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
      <div class="clip">
        <h3>All</h3>
        <div class="card">
          <div class="image">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/85/Gfp-missouri-st-louis-clubhouse-pond-and-scenery.jpg/1199px-Gfp-missouri-st-louis-clubhouse-pond-and-scenery.jpg"
            />
          </div>
          <div class="title">
            <h1>
              Write title Here
            </h1>
          </div>
          <div class="des">
            <p>You can Add Desccription Here...</p>
            <button>Read More...</button>
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
.course {
  display: flex;
  margin: 0;
  padding: left;
}
h3 {
  /* position: relative; */
  margin-left: 2%;
  font-family: 'Montserrat', sans-serif;
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
#progressbar {
  background-color: whitesmoke;
  border: 1px solid #000;
  border-radius: 8px;
  width: 850px;
  height: 18px;
  /* (height of inner div) / 2 + padding */
  padding: 1px;
  margin-left: 9%;
  margin-top: 15px;
  margin-bottom: 15px;
}

#progressbar > div {
  background-color: grey;
  width: 50%;
  /* Adjust with JavaScript */
  height: 14px;
  border-radius: 8px;
}
.p {
  margin-right: 10px;
}
.head2 {
  margin-top: 250px;
  margin-left: 0%;
}

.card {
  margin-top: 100px;
  width: 20%;
  display: inline-block;
  /* box-shadow: 2px 2px 20px black; */
  border-radius: 5px;
  margin: 2%;
  border: 1px solid #000;
}

.image img {
  width: 100%;
  border-top-right-radius: 5px;
  border-top-left-radius: 5px;
}

.title {
  text-align: center;
  padding: 10px;
}

h1 {
  font-size: 20px;
}

.des {
  padding: 3px;
  text-align: center;

  padding-top: 10px;
  border-bottom-right-radius: 5px;
  border-bottom-left-radius: 5px;
}
button {
  margin-top: 10px;
  margin-bottom: 10px;
  background-color: white;
  border: 1px solid black;
  border-radius: 5px;
  padding: 10px;
}
button:hover {
  background-color: black;
  color: white;
  transition: 0.5s;
  cursor: pointer;
}
.clip {
  margin-left: 7%;
}
.clip h3 {
  /* margin-left: 0%; */
  margin-top: 250px;
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
</style>
