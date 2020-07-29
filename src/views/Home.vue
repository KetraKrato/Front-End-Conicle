<template>
  <body>
    <div class="container">
      <div id="wrap">
        <form action="" autocomplete="on">
          <input
            id="search"
            name="search"
            type="text"
            placeholder="What're we looking for ?"
          /><input id="search_submit" value="Rechercher" type="submit" />
        </form>
      </div>
    </div>

    <div class="main">
      <h3 class="text">All Course (9)</h3>
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
      <!--cards -->

      <div class="card">
        <div class="image">
          <!-- <img v-for="img in list" :key="img.id"
            src= {{img.image}}
          /> -->
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
  </body>
</template>

<script>
export default {
   data() {
    return {
      list: [
        {
          id: 1,
          image: "https://cdn.pixabay.com/photo/2018/01/09/03/49/the-natural-scenery-3070808_1280.jpg",
        },
        {
          id: 2,
          image: "https://cdn.pixabay.com/photo/2018/01/09/03/49/the-natural-scenery-3070808_1280.jpg",
        },
        {
          id: 3,
          image: "https://cdn.pixabay.com/photo/2018/01/09/03/49/the-natural-scenery-3070808_1280.jpg",
        },
      ],
    };
  },
};
</script>

<style scoped>

#wrap {
  margin: 20px 50px;
  display: inline-block;
  position: relative;
  height: 30px;
  float: right;
  padding: 0;
}
.h3 {
  margin-top: 50px;
  top: 100px;
}
input[type="text"] {
  height: 60px;
  font-size: 20px;
  display: inline-block;
  font-family: "Lato";
  font-weight: 100;
  border: none;
  outline: none;
  color: #555;
  padding: 3px;
  padding-right: 40px;
  width: 0px;
  position: absolute;
  top: 0;
  right: 10%;
  background: none;
  z-index: 3;
  transition: width 0.4s cubic-bezier(0, 0.795, 0, 1);
  cursor: pointer;
}

input[type="text"]:focus:hover {
  border-bottom: 1px solid #bbb;
}

input[type="text"]:focus {
  width: 400px;
  z-index: 1;
  border-bottom: 1px solid #bbb;
  cursor: text;
}
input[type="submit"] {
  height: 50px;
  width: 50px;
  display: inline-block;
  color: red;
  float: right;
  background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAMAAABg3Am1AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAADNQTFRFU1NT9fX1lJSUXl5e1dXVfn5+c3Nz6urqv7+/tLS0iYmJqampn5+fysrK39/faWlp////Vi4ZywAAABF0Uk5T/////////////////////wAlrZliAAABLklEQVR42rSWWRbDIAhFHeOUtN3/ags1zaA4cHrKZ8JFRHwoXkwTvwGP1Qo0bYObAPwiLmbNAHBWFBZlD9j0JxflDViIObNHG/Do8PRHTJk0TezAhv7qloK0JJEBh+F8+U/hopIELOWfiZUCDOZD1RADOQKA75oq4cvVkcT+OdHnqqpQCITWAjnWVgGQUWz12lJuGwGoaWgBKzRVBcCypgUkOAoWgBX/L0CmxN40u6xwcIJ1cOzWYDffp3axsQOyvdkXiH9FKRFwPRHYZUaXMgPLeiW7QhbDRciyLXJaKheCuLbiVoqx1DVRyH26yb0hsuoOFEPsoz+BVE0MRlZNjGZcRQyHYkmMp2hBTIzdkzCTc/pLqOnBrk7/yZdAOq/q5NPBH1f7x7fGP4C3AAMAQrhzX9zhcGsAAAAASUVORK5CYII=)
    center center no-repeat;
  text-indent: -10000px;
  border: none;
  position: absolute;
  top: 0;
  right: 0;
  z-index: 2;
  cursor: pointer;
  opacity: 0.4;
  cursor: pointer;
  transition: opacity 0.4s ease;
}

input[type="submit"]:hover {
  opacity: 0.8;
}
* {
  margin: 0px;
  padding: 0px;
  font-family: arial;
}
.main {
  margin: 10%;
}

.main text {
  margin: 10%;
}

.card {
  width: 20%;
  display: inline-block;
  box-shadow: 2px 2px 20px black;
  border-radius: 5px;
  margin: 2%;
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
</style>
