<template>
  <div id="owned" class="block" @click="select">
        <div class="line"></div>
        <span class="head">groupnameA</span>
        <span class="member">0 member</span>
        <div class="submenu"><img src="@/assets/menupoint.png" @click="isShow"></div>
        
        <div class="popup" v-bind:style="{ display: display }">
            <span>Edit</span>
            <div class="linesubmenu"></div>
            <span>Delete</span>
        </div>
        <div class="des">
            <span>--description--</span>
        </div>
       
  </div>
</template>

<script>
export default {
    data() {
        return {
            display: 'none',
            show : false,

        }
    },
    mounted() {
        
    },
    props:{

    },
    methods:{
        isShow(){
            this.show =! this.show
            if(this.show == false){
                this.display = 'none'
                console.log(this.show)
            }
            else{
                this.display = 'block'
                console.log(this.show)
            }
        },
        select(){
            console.log('SelectGroup')
            this.$router.push({path:"/main"})
        }
    }

}
</script>

<style scoped>
    .block{
        position: relative;
        display: inline-block;
        border: 1px solid black;
        border-radius: 5px;
        background-color: white;
        width: 350px;
        height: 185px;
        top:130px;
        left: 210px;
        margin-top: 10px;
        margin-left: 10px;
        cursor: pointer;
    }
    span.head{
        position: absolute;;
        display: block;
        font-size: 24px;
        top:21px;
        left: 32px;
    }
    span.member{
        position: absolute;;
        display: block;
        font-size: 18px;
        left: 32px;
        top: 78px;

    }
    .des{
        position: absolute;
        top:143px;
        left: 32px;
    }
    .submenu{
        position: absolute;
        left: 90%;
        top: 10%;
        width: 10px;
        height: 20px;
    }
    img{
        width: 20px;
        height: 20px;
    }
    .line{
        position: absolute;
        top:120px;
        width: 350px;
        height: 1px;
        background: black; 
    }

    .popup{
        position: absolute;
        width: 123px;
        height: 76px;
        top: 57px;
        left: 198px;

        background: #FFFFFF;
        border: 1px solid #000000;
        box-sizing: border-box;
        border-radius: 5px;

    }
    .popup span{
        position: relative;
        display: block;
        margin: 7.5%;

    }
    .popup .linesubmenu{
        position: relative;
        width: 121px;
        height: 1px;
        background: #000000;
    }
</style>