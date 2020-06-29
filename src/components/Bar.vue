<template>
  <div id="bar">
      <div id="mySidenav" class="sidenav" >
        <div class = "bar">
            <div class = "line" @click ="openNav">
                <div class="linetop"></div>
                <div class="linecen"></div>
                <div class="linebot"></div>
            </div>
            <span>Group Learning</span>
            <span class="username">{{account.username}}</span>
        </div>
        <div style="margin-top: 30px; color: red; ">
            #Spy {{ JSON.stringify(account)}}
        </div>
    </div>
    <div class="menusidenav" v-bind:style="{ left:left+'px' }">
        <Vmenu/>
    </div>
  </div>
</template>

<script>
import Vmenu from "@/components/Menu/VerticalMenu.vue"
export default {
    components:{
        Vmenu
    },
    data() {
    return {
            left : -350,
            isleft : false,
            dataGroup:{
                GroupName : "",
                Description :"",
            },
            account:{
                username: "NoneUser"
            },
    }
},
methods: {
    openNav(){
            this.isleft =! this.isleft
            if(this.isleft == false){
                console.log(this.isleft)
                this.left = -350;
            }
             else{
                 console.log(this.isleft)
                    this.left = 0;
             }   
        },
},
}
</script>

<style scoped>
 .sidenav{
        height: 87px;
        width: 100%;
        background: white;

    }
#bar{
        position :fixed;
        top: 0;
        left: 0;
        width: 100%;
        border-bottom: 1px solid black;
        
    }
    .line{
        position: fixed;
        display: block;
        left: 50px;
        top:25px;
        padding: 0px;
        margin: 0px;
        width: 100px;
    }
    .linetop {
        margin-left: 2%;
        margin-top: 2%;
        margin-right: 0;
        width: 25px;
        height: 3px;
        background-color: black;
    }
    .linecen {
        margin-left: 2%;
        margin-top: 5px;
        margin-bottom: 5px;
        margin-right: 0;
        width: 25px;
        height: 3px;
        background-color: black;
    }
    .linebot {
        margin-left: 2%;
        margin-top: 5px;
        margin-bottom: 5px;
        margin-right: 0;
        width: 25px;
        height: 3px;
        background-color: black;
    }
    span{
        position: fixed;
        top:27px;
        left: 7%;
        font-size: 30px;
    }
    .username{
        position: relative;
        left: 80%;
    }
    .menusidenav{
        position: relative;
        background: #FFFFFF;
        height:  90.75%;
      /*  border: 1px solid #929292;*/
        transition: 0.2s;
        width: 250px;
        
    }
</style>