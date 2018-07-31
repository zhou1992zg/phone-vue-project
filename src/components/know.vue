<template>
  <div class="shouye">
    <link rel="stylesheet" type="text/css" href="http://at.alicdn.com/t/font_727879_sk8r1yih1jp.css">
	<link rel="stylesheet" type="text/css" href="http://at.alicdn.com/t/font_726058_kgtg6c094vm.css">
    <div class="top">
		<div class="logo">
			<router-link to="/index/" tag="div">
				<span class="iconfont icon-back"></span>
			</router-link>
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
			<p><a href="#">你的小区里有哪些有趣的社群活动？</a></p>
			<!-- <img src="#"> -->
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
				<img src="../assets/images/1529944821091c24fc6d8d3.jpeg" alt="header_img">
			</p>
			<span class="name">meinuz0898989</span>
			<button>关注</button>
		</div>
		<div class="content">
			<p>上船之前，每个人都会被注射麻醉剂，这个时候郑开司是想要逃的，他推开黑衣人随便找了辆车，开着就跑了，（这段车戏也是非常精彩的）但真正的郑开司并没有逃出去，这段也是他自己想象的，与前面不同的是，这次是他自己真的想逃亡而不是要借助小丑的身份。上船之前，每个人都会被注射麻醉剂，这个时候郑开司是想要逃的，他推开黑衣人随便找了辆车，开着就跑了，（这段车戏也是非常精彩的）但真正的郑开司并没有逃出去，这段也是他自己想象的，与前面不同的是，这次是他自己真的想逃亡而不是要借助小丑的身份。</p>
		</div>
		<div class="two_img">
			<img src="../assets/images/1526569964554eaa33ca7f3.jpeg" alt="img">
			<img src="../assets/images/1526569887434938e68274c.jpeg" alt="img">
		</div>
		<div class="time">创建于 <span>2018.8.8</span></div>
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
		<router-link to="/index/" tag="div" class="back">
			<span class="iconfont icon-forward ss"></span>
		</router-link>
	</div>
  </div>
</template>

<script>
export default {
  name: 'know'
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style  scoped lang="scss">
@import '../assets/sass/base.scss';
@import '../assets/sass/know.scss';
</style>
