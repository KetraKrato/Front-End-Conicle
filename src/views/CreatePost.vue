<template>
  <div class="createpost">
    <div class="container">
      <div class="header">
        <h2>Create Post</h2>
      </div>
      <div class="image">
        <div class="imagebox" v-on:click="insert()"></div>
        <!-- <input type="file"/> -->
      </div>
      <div class="name">
        <label for="name">Post Name (required) {{ inputText }}</label>
        <input
          v-model="inputText"
          type="text"
          class="form-control"
          id="name"
          aria-describedby="emailHelp"
        />
        <div class="discription">
          <div class="form-group">
            <label for="discription">Discription</label>
            <textarea class="form-control" id="discription" rows="3"></textarea>
          </div>
          </div>
          <!-- <div class="select">
            <select class="custom-select">
              <option v-for="option in list" :key="option.id" value="1">{{ option.name }}</option>
            </select>
            
          </div> -->
          <div class="btn">
            <sui-button secondary >Create    &amp;    Next</sui-button>
          </div>
        
      </div>
    </div>
  </div>
</template>

<script>
export default {
    data () {
        return {
            inputText: '',
            image: '',
            // list: [
            //     {
            //         id: 1,
            //         name: 'One'
            //     },
            //     {
            //         id: 2,
            //         name: 'Two'
            //     },
            //     {
            //         id: 3,
            //         name: 'Three'
            //     },
            //     {
            //         id: 4,
            //         name: 'Four'
            //     }
            // ]
        }
    },
    methods:{
      insert: function () {
      
    }

    }
}
</script>

<style scoped>
.createpost{
    margin: 0px;
    padding: 0px;
}
.container{
    position: relative;
    top: 20px;
    border: 1px solid #000;
    border-radius: 4px;
    width: 52%;
    margin-bottom: 50px;
}
.header{
    
    margin-top: 7%;
    margin-left: 10%;
}
.imagebox{
    position: relative;
    margin: auto;
    margin-top: 5%;
    width: calc(100% - 250px);
    height: 280px;
    border: 1px solid #000;
    border-radius: 2px;
}
.name{
    position: relative;
    margin-top: 8%;
    margin-left: 10%;
    margin-right: 10%;
}
.discription{
    margin-top: 5%;
    bottom: 20px;
}
.select{
    margin-top: 5%;
    bottom: 50px;
}
.btn{
    margin-left: 15px;
    margin-bottom: 30px;
    width: 100%;
    text-align: right;
    margin-right: 0%;
    }


</style>
