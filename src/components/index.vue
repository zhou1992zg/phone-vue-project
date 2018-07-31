<template>
  <div class="shouye">
    <link rel="stylesheet" type="text/css" href="http://at.alicdn.com/t/font_727879_sk8r1yih1jp.css">
	<link rel="stylesheet" type="text/css" href="http://at.alicdn.com/t/font_726058_kgtg6c094vm.css">
	<link rel="stylesheet" type="test/css" href="../assets/css/swiper.min.css">
      <div class="top">
		<router-link to="/login" tag="div" class="logo">
			<div>
				<span class="iconfont icon-people"></span>
				<p>未登录</p>				
			</div>
		</router-link>
		<div class="search">
			<span class="iconfont icon-search ss"></span>
			<span class="text">搜你想搜的</span>
		</div>
		<div class="send">
			<div>
				<span class="iconfont icon-camera"></span>
				<p>发布</p>				
			</div>
		</div>
	</div>
	<div class="nav">
		<nav>
			<!-- Swiper -->
			<div class="swiper-container">
				<div class="swiper-wrapper">
					<router-link to="/index/" tag="div" class="swiper-slide">首页</router-link>		
					<router-link to="/index/Loading" tag="div" class="swiper-slide">加载</router-link>			
					<router-link to="/index/ask" tag="div" class="swiper-slide">问答</router-link>			
					<router-link to="/index/good" tag="div" class="swiper-slide">精华</router-link>
					<router-link to="/index/weex" tag="div" class="swiper-slide">weex</router-link>
        	<router-link to="/index/share" tag="div" class="swiper-slide">分享</router-link>
        	<router-link to="/index/job" tag="div" class="swiper-slide">招聘</router-link>
        	<router-link to="/index" tag="div" class="swiper-slide"></router-link>
				</div>
			</div>
		</nav>
		<div class="ico">
			<span class="iconfont icon-other"></span>
		</div>
	</div>
	<!-- 放子组件的视图 -->
    <router-view/>
  </div>
</template>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style  scoped lang="scss">
@import "../assets/sass/base.scss";
@import "../assets/sass/index.scss";
</style>
<script type="text/javascript">
import axios from "axios";
export default {
  name: "index",
  data() {
    return {
      topics: []
    };
  },
  //钩子函数
  mounted() {
    axios({
      method: "get",
      url: "https://www.vue-js.com/api/v1/topics"
    }).then(data => {
      this.topics = data.data.data;
    });
    //推荐写到 对应组件的 钩子函数里
    var swiper = new Swiper(".swiper-container", {
      slidesPerView: 6,
      spaceBetween: 30
    });
  }
};
</script>