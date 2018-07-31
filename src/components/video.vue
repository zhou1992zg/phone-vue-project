<template>
  <div class="video">
    <link rel="stylesheet" type="text/css" href="http://at.alicdn.com/t/font_727879_sk8r1yih1jp.css">
	<link rel="stylesheet" type="text/css" href="http://at.alicdn.com/t/font_726058_kgtg6c094vm.css">
    <div class="menu">
        <router-link to="/video/attention" tag="span" :class="respath=='attention'?'span_color':''">关注</router-link>
        <router-link to="/video/good" tag="span" :class="respath=='good'?'span_color':''">推荐</router-link>
        <router-link to="/video/activity" tag="span" :class="respath=='activity'?'span_color':''">活动</router-link>
    </div>
    <div class="menu_box">
        <span class="iconfont icon-camera"></span>
        <p>发布</p>
    </div>
	<!-- 放子组件的视图 -->
    <router-view/>
  </div>
</template>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style  scoped lang="scss">
@import "../assets/sass/base.scss";
@import "../assets/sass/video.scss";
</style>
<script type="text/javascript">
import axios from "axios";
export default {
  name: "index",
  computed: {
    respath: function() {
      var xpath = this.$route.path.split("/");
      return xpath[2];
    },
  },
  //钩子函数
  mounted() {
    // //推荐写到 对应组件的 钩子函数里
    //   var swiper = new Swiper(".swiper-container", {
    //     slidesPerView: 6,
    //     spaceBetween: 30
    //   });
  }
};
</script>