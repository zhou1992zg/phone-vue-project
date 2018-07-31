<template>
  <div class="index">
    <link rel="stylesheet" type="text/css" href="http://at.alicdn.com/t/font_727879_bv76fwsvfv.css">
    <div class="phone_login_box">
		<div class="phone_login">
			<div class="cancel">
				<span class="iconfont icon-quxiao"></span>
			</div>
			<div class="cancel_title">
				<p>登陆你的头条，精彩永不丢失</p>
			</div>
			<div class="cancel_input">
				<input type="text" placeholder="手机号">
				<p>发送验证码</p>
			</div>
			<div class="cancel_code">
				<input type="text" placeholder="请输入验证码">
			</div>
			<div class="cancel_login">
				<p>进入头条</p>
			</div>
			<div class="cancel_agreement">
				<div class="agreement">
					<span>点击查看</span><span>“用户协议”</span><span>和</span><span>“隐私协议”</span>
				</div>
			</div>
			<div class="cancel_zhuce_denglu">
				<div class="zhuce_denglu">
					<span>账号注册</span><span> | </span>
					<span>密码登陆</span>
				</div>
			</div>
			<div class="cancel_youlian">
				<div class="youlian">
					<div><p><span class="iconfont icon-weixin"></span></p></div>
					<div><p><span class="iconfont icon-qq"></span></p></div>
					<div><p><span class="iconfont icon-tianyitianyi"></span></p></div>
					<div><p><span class="iconfont icon-xin-copy"></span></p></div>
				</div>
			</div>
		</div>
	</div>
</div>
</template>

<script>
export default {
  name: 'phonelogin',
  data () {
    return {
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style  scoped lang="scss">
@import '../assets/sass/base.scss';
@import '../assets/sass/phonelogin.scss';
</style>
