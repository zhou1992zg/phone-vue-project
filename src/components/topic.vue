<template>
  <div class="shouye">
    <link rel="stylesheet" type="text/css" href="http://at.alicdn.com/t/font_727879_sk8r1yih1jp.css">
	<link rel="stylesheet" type="text/css" href="http://at.alicdn.com/t/font_726058_kgtg6c094vm.css">
    <div class="top">
		<div class="logo">
			<div>
				<span class="iconfont icon-back"></span>
			</div>
		</div>
		<div class="know">
			<span class="text">悟空问答</span>
		</div>
		<div class="logo">
			<div>
				<span class="iconfont icon-more"></span>
			</div>
		</div>
	</div>
	<ul class="test_box">
		<li>
			<p><a href="#">{{topicData.title}}</a></p>
			<div>
				<span class="iconfont icon-write"></span><a href="#">回答</a><a href="#">62个回答</a><span class="iconfont icon-right"></span>
			</div>
			<div></div>
			<div></div>
		</li>
	</ul>
	<div class="article">
		<div class="user">
			<p class="header">
				<img v-lazy="topicData.author.avatar_url">
			</p>
			<span class="name">{{topicData.author.loginname}}</span>
			<button>关注</button>
		</div>
		<div class="content">
			<p v-html="topicData.content"></p>
		</div>
		<div class="time">创建于 <span>{{topicData.create_at}}</span></div>
	</div>
	<div class="footer">
		<div class="search">
			<span class="iconfont icon-write ss"></span>
			<span class="text">写评论...</span>
			<span class="iconfont icon-emoji ss"></span>
		</div>
		<div class="message">
			<span class="iconfont icon-search ss">
				<p>2</p>
			</span>
		</div>
		<div class="good">
			<span class="iconfont icon-appreciate ss"></span>
		</div>
		<div class="back">
			<span class="iconfont icon-forward ss"></span>
		</div>
	</div>
  </div>
</template>

<script>
import axios from 'axios';

import { getTopicShow } from "@/getdata/index.js";

export default {
  name: 'topics',
  data () {
    return {
      topicData:[]
    }
  },
	// 钩子函数
  mounted(){
    // 获取到 主题的id
    // console.log(this.$route.params.id);
    getTopicShow(this.$route.params.id).then((data)=>{
        this.topicData = data.data.data;
        console.log(data)
    })
  }
}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style  scoped lang="scss">
@import '../assets/sass/base.scss';
@import '../assets/sass/topic.scss';
</style>
