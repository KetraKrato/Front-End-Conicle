<template>
  <div id="Header">
   <!-- <link rel="stylesheet" href="path/to/plyr.css" /> -->
    <sui-tab :menu="{        
        color: 'blue',
        inverted: true,
        attached: false,}">
      <sui-tab-pane title="Test1" >
        <h3>Test11</h3>
        <p>sdfkjiweifjikolsdfmpoiwaefmpopcimwaefmoifoiadfsadfawefdzvrthbstdwfpoiadfsadfawefwaefdsffdzvrthbstfjyfukyufuretgaergg</p>
        <div>
          <video id="my-video" 
                  class="video-js" 
                  controls
                  
                  poster="@/assets/logo.png"
                  height="720"
                  preload= 'auto' 
                  data-setup="{}">
                        <source  src="@/assets/videotest_1080p.mp4"  type='video/mp4'  res ='1080' label='1080'/>
                        <source  src="@/assets/videotest_720p.mp4" type="video/mp4" res = '720' label='720' /> 
          </video>
        </div>
        
      </sui-tab-pane>
      <sui-tab-pane title="Test2" >
        <h3>Test22</h3>
        <p>sdfkjiweifjikolsdfmpoiwaefmpopcimfmoifoaiwopiemoipdwfpoiadfsadfawefwaefdsffdzvrthbsthaergfszdfjyfukyufuretgaergg</p>
      </sui-tab-pane>
      <sui-tab-pane title="Test3">
        <h3>Test3</h3>
        <p>sdfkjiweifjikolsdfmpoiwaefmpopcimfmoifoaiwopiemoipdwfpoiadfsadfawefwaefdsffdzvrthbsthaergfszdfjyfukyufuretgaergg</p>
      </sui-tab-pane>
      </sui-tab>

  </div>
</template>
<script>
//import videojs from 'video.js'
//import 'videojs-resolution-switcher'
export default {
  
  components: {
  
  },
  created() {
  
},
mounted(){
 // videojs('my-video').videoJsResolution()
},
  methods:{

     

    
  }
  
}

</script>

<style scoped>
    #id{
      position: relative;
      left: 100px;
    }
    .videoSize{
      width: 50%;
    }


</style>
<style>


</style>