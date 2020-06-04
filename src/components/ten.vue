<template>
  <div>
    <div class="contentBox">
<!--      <img src="../assets/phoneke.png" alt="">-->
      <img class="phoneBg" src="https://images.magicscorp.com/Mimg/background/phonebg.jpg" alt="">
      <div class="content-video-pack" :class="{'content-video-pack_end':contentVideoEndShow}">
        <video ref="myVideo5s" class="content-video" muted name="media">
          <source src="https://videos.magicscorp.com/Mvideo/advertisement/five_second.mp4" type="video/mp4">
        </video>
      </div>



      <img v-show="previewShow" class="preview" src="https://images.magicscorp.com/Mimg/other/mpreview.jpg" alt="">
<!--      muted autoplay-->
      <video v-show="previewShow" ref="myVideo" class="preview-video" autoplay :muted="videoMuted"  name="media" loop='loop'>
        <source src="https://videos.magicscorp.com/Mvideo/advertisement/ten_first.mp4" type="video/mp4">
      </video>
      <mt-button v-show="previewShow" class="skipBtn" type="default" plain size="small" @click="skipVideo">跳过&nbsp;&nbsp;{{remainingTime}}</mt-button>
      <img v-show="previewShow" @click.stop="syImgChange" class="syImg" :src="syImg" alt="">

    </div>
  </div>
</template>
<script>
  export default {
    data(){
      return{
        syImg:require('../assets/jingyin.png'),
        remainingTime:'5s',
        previewShow:true,
        contentVideoEndShow:false,
        videoMuted:true,
      }
    },
    mounted() {
      let self = this;
      let myVideo = this.$refs.myVideo


      this.$refs.myVideo.addEventListener('canplay', function(e) {
        console.log('提示该视频已准备好开始播放')
        console.log(e.timeStamp)

        var i =5;
       let myint = setInterval(()=>{
         i--
         self.remainingTime = i+'s'
         if(!i){
           clearInterval(myint);
           myVideo.removeEventListener('canplay', function(e) {
             console.log('提示该视频已准备好开始播放')
             console.log(e.timeStamp)
             var i =5;
             let myint = setInterval(()=>{
               i--
               self.remainingTime = i+'s'
               if(!i){
                 clearInterval(myint)
               }
             },1000)

             //控制时长
             setTimeout(() => {
               myVideo.src = ''
               self.previewShow= false
             }, 6000)
           },true)
         }
       },1000)

        //控制时长
        setTimeout(() => {
          myVideo.src = ''
          self.previewShow= false;
          self.$refs.myVideo5s.play();
        }, 6000)
      },true)

      //封面视频结束
      this.$refs.myVideo.onended = function() {
       console.log('video-end')
      };
      //内层视频结束
      this.$refs.myVideo5s.onended = function() {
        console.log('video5s-end')
        self.contentVideoEndShow = true;
      };
    },
    methods:{
      //跳过
      skipVideo(){
        this.$refs.myVideo.src = ''
        this.previewShow= false;
        this.$refs.myVideo5s.play();
      },
      //内层视频播放
      contentVideoPlay(){
        this.$refs.myVideo5s.play();
      },
      syImgChange(){
        if(this.videoMuted){
          this.videoMuted = false
          this.syImg = require('../assets/shengyin.png')
        }else{
          this.videoMuted = true
          this.syImg = require('../assets/jingyin.png')
        }

      },
    }
  }
</script>
<style lang="less" scoped>
.contentBox{
  width: 320px;
  height: 623px;
  margin: 3vh auto 0;
  background: url("../assets/phoneke.png") no-repeat;
  background-size: 100% 100%;
  position: relative;
  .phoneBg{
    width: 278px;
    margin: 18px 24px;
    border-radius: 27px;
  }
  .content-video-pack{
    font-size: 0;
    position: absolute;
    z-index: 11;
    top: 18px;
    width: 280px;
    left: 23px;
    display: flex;
    align-items: center;
    justify-content: center;
    overflow: hidden;
    border-radius: 27px;
    height: calc(100% - 29px);
    background: black;
    opacity: 1;
    transition: all 1s,opacity 1s 1s;
  }
  .content-video-pack_end{
    position: absolute;
    top: 119px;
    width: 179px;
    height: 125px;
    left: 73px;
    border-radius: 4px;
    opacity: 0;
  }
  .content-video{
    width: 280px;
  }

  .preview{
    position: absolute;
    z-index: 12;
    top: 18px;
    width: 278px;
    left: 24px;
    border-radius: 28px;
  }
  .preview-video{
    position: absolute;
    z-index: 13;
    top: 44px;
    width: 279px;
    left: 24px;
  }
  .skipBtn{
    position: absolute;
    z-index: 14;
    top: 59px;
    right: 46px;
    border: none;
    color: #b3afaf;
  }
  .syImg{
    position: absolute;
    z-index: 14;
    top: 70px;
    right: 30px;
    width: 14px;
  }
}
</style>
