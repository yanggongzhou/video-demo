<template>
  <div>
    <mt-button class="agianBtn" style="margin-top: 10px" type="primary" size="small" @click="agianVideo">测试用--复播</mt-button>
    <mt-cell v-for="(val,ind) in topCellList" :key="ind+'topCell'"
             :title="val.title"
             :label="val.subtitle"></mt-cell>

    <div class="infoBox">
      <div class="info_title">
        <div class="info_title_item">些许言语，让情感回味；无需音符，却因分享传声。这个夏天，让我们分享可口可乐，分享我们的歌！</div>
      </div>
      <img ref="infoImg" class="infoBox_img" src="https://large.magics-ad.com/my-website/webmTest/371589513137_.pic_hd.jpg" alt="">

      <div class="infoBox_video"
           :class="{'infoBox_video_end':videoEnd}"
           v-show="true">

        <video ref="myVideo" class="demo2-video" muted autoplay name="media">
          <source src="https://large.magics-ad.com/my-website/webmTest/kele%E9%80%9A%E9%81%93_12%7E2.webm" type="video/webm">
        </video>

      </div>
      <div class="info_foot">
        <span>广告</span>
        <span>可口可乐</span>
      </div>
    </div>
  </div>
</template>
<script>
  export default{
    data(){
      return{
        topCellList:[
          {
            title:'demo_2 仅视频容器缩放',
            subtitle: '新华网'
          },
          {
            title:'总书记这番话说的很动情！',
            subtitle: '文汇网'
          },
          {
            title:'吴谦谈对美军售：搞武力对抗就是自取灭亡',
            subtitle: '两会专题'
          },
        ],
        videoEnd:false,
      }
    },
    mounted() {
      let self = this;

      this.$refs.infoImg.clientHeight
      this.$refs.myVideo.onended = function() {
        self.videoEnd = true;
      };
    },
    methods:{
      agianVideo(){
        let self = this;
        this.videoEnd = false;
        setTimeout(()=>{
          self.$refs.myVideo.play()
        },3000)
      }
    }
  }
</script>

<style scoped>
  .infoBox{
    width: calc(100% - 24px);
    margin: 0 auto;
    padding: 5px 0;
    border-top: .5px solid gray;
    border-bottom: .5px solid gray;
    position: relative;
  }
  .info_title{
    height: 50px;
  }
  .infoBox_img{
    width: 100%;
  }
  .infoBox_video{
    width: calc(100% + 24px);
    overflow: hidden;
    position: absolute;
    height: 247px;
    z-index: 11;
    top: 0;
    left: -12px;
    display: flex;
    align-items: center;
    transition: all 1s,opacity 1s 1s;

  }
  .infoBox_video_end{
    width: 100%;
    left: 0;
    height: 143px;
    top: 55px;
    opacity:0
  }
  .demo2-video{
    width: 278px;
  }
  .info_foot{
    font-size: 13px;
    height: 38px;
    line-height: 40px;
  }
  .info_foot span:nth-child(1) {
    border: 1px solid ;
    border-radius: 3px;
    margin-right: 10px;
    padding: 0 3px;
  }
  @media screen and (min-width: 415px){
    .agianBtn{
      position: absolute;
      z-index: 111;
      left: 0px;
    }
  }
</style>
