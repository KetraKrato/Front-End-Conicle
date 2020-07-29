<template>
  <div class="wrapper">
  <div class="search_box">
      <i class="fas fa-search"></i> 
      <input type="text" placeholder="Search...">
      
  </div>
  
</div>
</template>

<script>
export default {

}
</script>

<style scoped>

*{
  margin: 0;
  padding: 0;
  font-family: 'Montserrat', sans-serif;
  font-size: 18px;
}
.wrapper{
  position: absolute;
  right: 150px;
  top: 100px;

}

.search_box{
  width: 100%;
  position: relative;
  border: 1px solod #828282;
  color: #fff;
  
}

.search_box input[type="text"]{
  width: 100%;
  padding: 5px;
  padding-left: 65px;
  box-sizing: border-box;
  /* background: rgba(0,0,0,0.3); */
  border: 1px solid #828282;
  border-radius: 5px;
  font-size: 18px;
  color: #000;
  outline: none;
  
}

.fa-search{
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  left: 20px;
  color: #828282;
  font-size: 20px;
  

}
::-webkit-input-placeholder {
  color: #828282;
}

@media screen and (max-width: 425px){
  .search_box{
    width: 95%;
  }
}
</style>