<template>
   <div id="progressbar">
          <div><p>50% (1/2 Posts)</p></div>
        </div>
</template>

<script>
export default {

}
</script>

<style scoped>
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
</style>