<template>
  <div id="app">
    <router-view/>
    <link rel="stylesheet" type="test/css" href="./static/js/swiper.min.js">
    <link rel="stylesheet" type="test/css" href="./assets/css/swiper.min.css">
    <div class="footer" v-show="respath!=='know'">
    <div class="footer" v-show="respath2!=='phonelogin'">
      <router-link to="/index/" tag="div" :class="respath=='index'?'logo_hover logo':'logo'">
        <div>
          <span class="iconfont icon-homepage"></span>
          <p>首页</p>
        </div>
      </router-link>
      <router-link to="/know" tag="div" :class="respath=='/know'?'logo_hover logo':'logo'">
        <div>
          <span class="iconfont icon-play"></span>
          <p>悟空问答</p>
        </div>
      </router-link>
      <router-link to="/weitoutiao" tag="div" :class="$route.path=='/weitoutiao'?'logo_hover logo':'logo'">
        <div>
          <span class="iconfont icon-message_fill"></span>
          <p>微头条</p>
        </div>
      </router-link>
      <router-link to="/video/good" tag="div" :class="$route.path=='/video/good'?'logo_hover logo':'logo'">
        <div>
          <span class="iconfont icon-playon"></span>
          <p>小视频</p>
        </div>
      </router-link>
    </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "App",
  computed: {
    respath: function() {
      var xpath = this.$route.path.split("/");
      return xpath[1];
    },
    respath1: function() {
      var xpath = this.$route.path.split("/");
      return xpath[2];
    },
    respath2: function() {
      var xpath = this.$route.path.split("/");
      return xpath[1];
    }
  },
  //钩子函数
  mounted() {
    //推荐写到 对应组件的 钩子函数里
      var swiper = new Swiper(".swiper-container", {
        slidesPerView: 6,
        spaceBetween: 30
      });
  }
};
</script>

<style lang="scss">
//加载基础样式
@import "./assets/sass/base.scss";
body {
  background: #fafafa;
}
.footer {
  position: fixed;
  bottom: 0;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: rem(82px);
  background: #fafafa;
  border-bottom: 1px solid #e8e8e8;
  background: #f2f2f2;
  .logo {
    display: flex;
    align-items: center;
    justify-content: center;
    width: rem(186px);
    color: #505050;
    span {
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: rem(48px);
    }
    p {
      font-family: "微软雅黑";
      font-size: rem(18px);
      text-align: center;
      margin-top: rem(-5px);
    }
  }
  .logo_hover {
    color: red;
    background: #d9e7fa;
    border-radius: 10px;
  }
}
.content_box {
  overflow: hidden;
}
</style>
