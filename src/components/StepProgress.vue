<template>
  <div class="container">
      <ul class="progressbar">
          <li class="active">Create Course</li>
          <li class="active2">Step 2</li>
          <li>Step 3</li>
      </ul>

  </div>
</template>

<script>
export default {

}
</script>

<style scoped>
*{
    font-family: "Montserrat", sans-serif;
}
    .container-progress{
        width: 100%;

    }
    .progressbar{
        counter-reset: step;
    }
    .progressbar li{
        list-style-type: none;
        float: left;
        width: 33.33%;
        position: relative;
        text-align: center;
    }
    .progressbar li::before{
        content: counter(step);
        counter-increment: step;
        width: 50px;
        height: 50px;
        line-height: 50px;
        border: 2px solid #ddd;
        display: block;
        text-align: center;
        margin: 10px auto 10px auto;
        border-radius: 50%;
        background-color: #fff;
    }
    .progressbar li::after{
        content: '';
        position: absolute;
        width: 100%;
        height: 5px;
        background-color: #ddd;
        top: 33px;
        left: -50%;
        z-index: -1;
    }
    .progressbar li:first-child::after{
        content: none;
    }
    .progressbar li.active{
        color: #4F4F4F;
        font-weight: bold;
    }
    .progressbar li.active::before{
        border-color:#4F4F4F;
    }
    .progressbar li.active2{
        color: #4F4F4F;
        font-weight: bold;
    }
    .progressbar li.active2::before{
        border-color:#4F4F4F;
    }
    .progressbar li.active + li::after{
        background-color: #4F4F4F;
    }
    
    
</style>