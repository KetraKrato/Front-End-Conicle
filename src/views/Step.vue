<template>
  <center class="Step">
    <video-player
      class="video-player-box"
      ref="videoPlayer"
      :options="playerOptions"
    >
    </video-player>
    <h1>{{ video.name }}</h1>
    <!-- <img :src="video.thumbnail" alt="" /> -->
    <p>{{ this.$route.params.id }}</p>
    <div v-html="video.description"></div>  
  </center>
</template>

<script>
import "video.js/dist/video-js.css";
import { videoPlayer } from "vue-video-player";

export default {
  component: {
    videoPlayer,
  },
  computed: {
    video() {
      return this.$store.state.videos.find(
        (vid) => vid.id == this.$route.params.id
      );
    },
    playerOptions() {
      return {
        muted: false,
        language: "en",
        playbackRates: [0.25, 0.5, 0.75, 1.0, 1.5, 2.0],
        width: "640",
        height: "360px",
        sources: [
          {
            type: "video/mp4",
            src: this.video.videoUrl,
          },
        ],
        poster: this.video.thumbnail,
      };
    },
  },
};
</script>

<style scoped>
img {
  max-width: 60%;
  line-height: 50px;
  padding: 0%;
  left: 10px;
}
.video-player-box {
  margin: auto;
  display: flex;
  position: center;
  align-items: center;
}
.vjs-big-play-button {
    margin-top: 23%;
    margin-left: 42%;
    width: 64px !important;
    height: 47px !important;
}
</style>
