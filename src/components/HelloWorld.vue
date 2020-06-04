<template>
  <div class="phone_ke">
    <div class="mainBox">
      <mt-search
        class="searchBox"
        v-model="value"
        cancel-text="取消"
        placeholder="搜索">
      </mt-search>

      <mt-navbar v-model="selected">
        <mt-tab-item v-for="(val,ind) in navBarData" :key="ind+'navBar'" :id="val.id">{{val.label}}</mt-tab-item>
      </mt-navbar>

      <!-- tab-container -->
      <mt-tab-container v-model="selected">
        <mt-tab-container-item id="2">
          <mt-cell v-for="(val,ind) in topCellList" :key="ind+'topCell'"
                   :title="val.title"
                   :label="val.subtitle"></mt-cell>

          <div class="infoBox">
            <div class="left_item" :class="{'left_item_end':videoEnd}"></div>
            <div class="right_item" :class="{'right_item_end':videoEnd}"></div>

            <div class="info_title" :class="{'info_title_end':videoEnd}">
              <div class="info_title_item">些许言语，让情感回味；无需音符，却因分享传声。这个夏天，让我们分享可口可乐，分享我们的歌！</div>
            </div>
            <img ref="infoImg" class="infoBox_img" src="https://large.magics-ad.com/my-website/webmTest/371589513137_.pic_hd.jpg" alt="">

            <div class="infoBox_video"
                 :class="{'infoBox_video_end':videoEnd}"
                 v-show="true">

              <video ref="myVideo" class="demo1-video" muted autoplay name="media">
                <source src="https://large.magics-ad.com/my-website/webmTest/kele%E9%80%9A%E9%81%93_12%7E2.webm" type="video/webm">
              </video>
            </div>
            <div class="info_foot" :class="{'info_foot_end':videoEnd}">
              <span>广告</span>
              <span>可口可乐</span>
            </div>
          </div>
<!--          <mt-button class="agianBtn" type="primary" size="small" @click="agianVideo">测试用&#45;&#45;复播</mt-button>-->
        </mt-tab-container-item>


        <mt-tab-container-item id="1">
          <my_demo></my_demo>
        </mt-tab-container-item>
        <mt-tab-container-item id="3">
          <mt-cell v-for="n in 6" :key="n+'22'" :title="'选项 ' + n" />
        </mt-tab-container-item>
      </mt-tab-container>

      <mt-tabbar v-model="selected" class="footBox">
        <mt-tab-item id="首页">
          <img slot="icon" src="static/magicLogo.png">
          首页
        </mt-tab-item>
        <mt-tab-item id="视频">
          <img slot="icon" src="static/magicLogo.png">
          视频
        </mt-tab-item>
        <mt-tab-item id="菜单">
          <img slot="icon" src="static/magicLogo.png">
          菜单
        </mt-tab-item>
        <mt-tab-item id="我的">
          <img slot="icon" src="static/magicLogo.png">
          我的
        </mt-tab-item>
      </mt-tabbar>
    </div>
  </div>

</template>

<script>
  import my_demo from './dome2'
export default {
    components:{
      my_demo
    },
  name: 'HelloWorld',
  data () {
    return {
      value:'',
      selected:'1',
      navBarData:[
        {
          id:'1',
          label:'关注'
        },
        {
          id:'2',
          label:'推荐'
        },
        {
          id:'3',
          label:'视频'
        },
        {
          id:'4',
          label:'北京'
        },
        {
          id:'5',
          label:'娱乐'
        },
        {
          id:'6',
          label:'财经'
        },
      ],
      topCellList:[
        {
          title:'总书记眼中的"小康菜谱"',
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
    // this.$refs.myVideo.pause()
    console.log(this.$refs.infoImg.clientHeight)
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

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.searchBox{
  height: auto;
}
  .infoBox{
    border-top: .5px solid #55595f;
    border-bottom: .5px solid #55595f;
    width: calc(100% - 24px);
    height: 324px;
    margin: 10px auto;
    position: relative;
  }
  .left_item{
    position: absolute;
    left: -12px;
    height: 100%;
    width: 0;
    z-index: 149;
    transition: all 1s;
    background: white;
  }
  .left_item_end{
    width: 12px;
  }
  .right_item{
    position: absolute;
    right: -12px;
    height: 100%;
    width: 0;
    z-index: 149;
    transition: all 1s;
    background: white;
  }
  .right_item_end{
    width: 12px;
  }

  .info_title{
    position: absolute;
    left: -1px;
    height: 0;
    overflow: hidden;
    z-index: 150;
    background: #fff;
    width: calc(100% + 2px);
    transition: height 1s;
  }
  .info_title_end{
    height: 60px;
  }
  .info_title_item{
    padding: 10px 0 2px;
    height: 50px;
  }

  .infoBox_img{
    width: 100%;
    position: relative;
    top: 60px;
    z-index: 1;
  }
  .infoBox_video{
    width: calc(100% + 24px);
    position: absolute;
    z-index: 111;
    top: -1px;
    left: -12px;
    opacity: 1;
    transition-property:opacity;
    transition-duration:2s;
    transition-delay:1s;
  }
  .infoBox_video_end{
    opacity: 0;
  }




  .demo1-video{
    width: 100%;
  }
  .info_foot{
    position: absolute;
    width: calc(100% + 2px);
    left: -1px;
    z-index: 150;
    background: white;
    bottom: 0;
    font-size: 13px;
    height: 0;
    overflow: hidden;
    transition: height 1s;
  }
  .info_foot_end{
    height: 45px;
    line-height: 45px;
  }
  .info_foot span:nth-child(1) {
    border: 1px solid ;
    border-radius: 3px;
    margin-right: 10px;
    padding: 0 3px;
  }

  .footBox{
    position: fixed;
    bottom: 0;
  }

@media screen and (min-width: 415px){
  .phone_ke{
    width: 320px;
    height: 623px;
    margin: 3vh auto 0;
    background: url("../assets/phoneke.png") no-repeat;
    background-size: 100% 100%;
    position: relative;
  }
  .mainBox{
    position: absolute;
    top: 18px;
    width: 278px;
    left: 24px;
    height: calc(100% - 18px);

  }
  .searchBox{
    border-radius: 27px 27px 0 0;
  }
  .footBox{
    position: absolute;
    bottom: 12px;
    border-radius: 0 0 27px 27px;
  }
  .agianBtn{
    position: absolute;

  }

}
</style>
