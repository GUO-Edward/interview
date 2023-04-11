<template>
  <div class="videos">
    <video-player
      class="video-player vjs-custom-skin"
      ref="videoPlayer"
      :playsinline="true"
      :options="playerOptions"
    ></video-player>
  </div>
</template>

<script>
// import 'video.js/dist/video-js.css'
import { videoPlayer } from "vue-video-player";
export default {
  name: "Videos",
  //子组件接收父组件(VideoList)
  props: ["videoList", "index"],
  data() {
    return {
      playerOptions: {
        autoplay: false,
        muted: false,
        loop: false,
        preload: "auto",
        fluid: true,
        sources: [
          {
            src: this.videoList.url,
            type: "video/mp4",
          },
        ],
        width: document.documentElement.clientWidth,
        controlBar: false,
      },
      playing: true,
    };
  },
  created() {
    this.autoPlayAction();
  },
  methods: {
    playOrStop() {
      if (this.playing) {
        this.$refs.videoPlayer.player.pause();
        this.playing = false;
      } else {
        this.$refs.videoPlayer.player.play();
        this.playing = true;
      }
    },
    //自动播放第一个视频
    autoPlayAction() {
      if (this.index == 0) {
        this.playerOptions.autoplay = true;
      }
    },

    play() {
      //重新载入
      this.$refs.videoPlayer.player.load();
      this.$refs.videoPlayer.player.play();
      this.playing = true;
    },
    stop() {
      this.$refs.videoPlayer.player.pause();
      this.playing = false;
    },
  },
  components: {
    videoPlayer,
  },
};
</script>

<style>
.videos {
  position: relative;
}
.videos .vjs-custom-skin > .video-js .vjs-big-play-button {
  background: rgba(0, 0, 0, 0.4);
  font-size: 30px;
  border-radius: 50%;
  width: 50px;
  height: 50px;
  position: absolute;
  left: 50%;
  transform: translate(-50%, -50%);
}
</style>
