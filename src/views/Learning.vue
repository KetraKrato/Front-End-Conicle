<template>
  <div id="learning">
      <div class="course">
      <span class="head">All Course > courseAAA > partnameAA</span>
      
        <div class="mainvideo">
          <video id="my-video" 
                  class="video-js" 
                  controls
                  
                  poster="@/assets/logo.png"
                  height="629"
                  preload= 'auto' 
                  data-setup="{}">
                        <source  src="@/assets/videotest_1080p.mp4"  type='video/mp4'  res ='1080' label='1080'/>
                        <source  src="@/assets/videotest_720p.mp4" type="video/mp4" res = '720' label='720' /> 
          </video>
        </div>
        <div class="nextvideo">
            
            <div class="subvideo">
                <video id="my-video" 
                    class="video-js" 
                    controls                 
                    poster="@/assets/logo.png"
                    height="183"
                  
                    data-setup="{}">
                        <source  src="@/assets/videotest_1080p.mp4#t=2"  type='video/mp4'  res ='1080' label='1080'/>
                     <!--   <source  src="@/assets/videotest_720p.mp4" type="video/mp4" res = '720' label='720' /> -->
                </video>
                <div class="videodetail">
                    <h3>partnameBB</h3>
                    <span>- description -</span>
                </div>
               
            </div>
            <div class="subvideo">
                <div class="subv">
                    <video id="my-video" 
                        class="video-js" 
                        controls

                        poster="@/assets/logo.png"
                        height="183"
                        preload= 'auto' 
                            data-setup="{}">
                        <source  src="@/assets/videotest_1080p.mp4"  type='video/mp4'  res ='1080' label='1080'/>
                     <!--   <source  src="@/assets/videotest_720p.mp4" type="video/mp4" res = '720' label='720' /> -->
                    </video>
               
                
                    <div class="videodetail">
                        <h3>partnameCC</h3>
                        <span>- description -</span>
                    </div>
                </div>
           
            </div>
        </div>
        
        <div class="detailmainvideo">
            <h3>partnameAA</h3>
            <span>-descripion-</span>
        </div>
        <div class="line"></div>
        <div class="comments">
            <h3>1 Comments</h3>
            <div class="publicbox">
                <div class="public">
                    <img src="@/assets/logo.png"/>
                    <span class="textpublic">Massage everyone in the group ..</span>
                    <div class="lineincom"></div>
                    
                </div>
                <div class="add" @click="isShow">Add</div>
                <div class="edit" v-bind:style="{ display: display }" >
                    <span>Edit</span>
                    <div class="linesubmenu"></div>
                    <span>Delete</span>
                </div>
                <div class="bottom">
                    <sui-button negative size="medium">Cancle</sui-button>
                    <sui-button  positive size="medium">Post</sui-button>
                </div>
            </div>

            <div class="privatebox">
                <div v-bind:style="{ position: absolute }">
                <div class="private">
                    <img class="imgprivate" src="@/assets/logo.png"/>
                    <span class="Owner">Post Owner</span>
                    <div class="Time">01 June 2020</div>
                    <p class="toppic">fsdfsdfsdfsdfsdfssdflkojipoiwepoirflkjsdjofsd;ljifasfe;jewo;ipjfwe;oflijwefj;oipkdlsjf;ajweifjdfsdfsdf</p>
                </div>
                <div class="Replay">
                    <span>Add comment ..</span>
                    <button class="send">Send</button>
                </div>
                </div>
            </div>
        </div>
        </div>
        <Bar/>
  </div>
</template>

<script>
import Bar from '@/components/Bar.vue'
export default {
    components:{
        Bar
    },
     data() {
        return {
            display: 'none',
            show : false,
        }
    },
    
methods: {
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
    }
},
}
</script>

<style scoped>
    .course{
        position: relative;
        left: 148px;
        top: 127px;
    }
    .head{
      /*  position: relative;*/
        font-size: 24px;
    }
    .mainvideo{
      /*  position: relative;*/
        width: 1111px;
        height: 629px;
        margin-top: 40px;
        margin-bottom: 35px;

    }
    .nextvideo{
        position: absolute;
        left: 1200px;
        top: 62px;
    }
    .subv{
        position: relative;     
    }
    .videodetail{
        position: absolute;
        left: 350px;
        top: 10px
    }
    .detailmainvideo{
        margin-bottom: 25px;
    }
    .line{
        height: 1px;
        width: 1116px;
        background: black;
    }
    .comments{
        margin-top: 25px;
    }
    .publicbox{
        position: relative;
        padding: 26px;
        width: 1116px;
        border: 1px solid black;
        border-radius: 5px;
        margin-bottom: 30px;
    }
    .lineincom{
        height: 1px;
        width: 1050px;
        background: black;
        margin-top: 25px;
        margin-bottom: 26px;
    }
    img{
        
        width: 70px;
        height: 70px;
        background: #FFFFFF;
        border: 1px solid #000000;
        box-sizing: border-box;
        border-radius: 50%;
    }
    .textpublic{
        position: absolute;
        margin-top: 20px;
        margin-left: 20px;
    }
    .add{
        margin-left:25px;
        margin-right: 1000px;
        left: 50px;
        cursor: pointer;
        
    }
    .edit{
        position: absolute;
        display: none;
        left: 100px;
        width: 100px;
        height: 60px;
        background: #FFFFFF;
        border: 1px solid #000000;
        box-sizing: border-box;
        border-radius: 5px;
        
    }
    .edit span{
        position: relative;
        display: block;
        margin: 5%;
    }
    .edit .linesubmenu{
        height: 1px; 
        background: black;
    }
    .bottom{
        position: absolute;
        left: 900px;
        bottom: 20px;
        cursor: pointer;
    }
    .privatebox{
        position: relative;
        padding: 26px;
        width: 1116px;
        height: 200px;
        border: 1px solid black;
        border-radius: 5px;
        margin-bottom: 30px;
    }
    .private{
        position: relative;
        height: 100px;
        border-bottom:1px solid black ;
    }
    .imgprivate{
        position: absolute;
    }
    .Owner{
       position: absolute;
        margin-top: 12px;
        margin-left: 90px;
    }
    .Time{
        position: absolute;
        margin-top: 32px;
        margin-left: 90px;
    }
    .toppic{
        position: relative;
        top:75px
    }
    .Replay{
        position: relative;
        margin-top: 16px;
        margin-bottom: 16px ;
        border: 1px solid black;
        border-radius: 5px;
        padding: 11px;
    }
    .send{
        position: absolute;
        right:10px;
    }
</style>