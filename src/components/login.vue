<template>
  <div class="index">
    <link rel="stylesheet" type="text/css" href="http://at.alicdn.com/t/font_727879_2lu52eba1jf.css">
    <div class="login_logo">
      <div class="login_img">
        <router-link to="/phonelogin" tag="div" class="phone">
          <span class="iconfont icon-phonenumber"></span>
        </router-link>
        <div class="weixin">
          <span class="iconfont icon-weixin"></span>
        </div>
        <div class="qq">
          <span class="iconfont icon-qq"></span>
        </div>
        <div class="login_more">
          <p>更多登陆方式 <span class="iconfont icon-right"></span></p>
        </div>
      </div>
    </div>
    <div class="function_box">
      <div class="function">
        <div class="shoucang">
          <div>
            <span class="iconfont icon-shoucang"></span>
            <p>收藏</p>
          </div>
        </div>
        <div class="history">
          <div>
            <span class="iconfont icon-lishi"></span>
            <p>历史</p>
          </div>
        </div>
        <div class="night">
          <div>
            <span class="iconfont icon-caidanmianban_yejianmoshi-"></span>
            <p>夜间</p>
          </div>
        </div>
      </div>
    </div>
    <div>
    <div class="mine_box">
      <div class="mine">
        <div class="mine_one">
          <p>我的关注</p>
          <span class="iconfont icon-right"></span>
        </div>
        <div class="mine_two">
          <p>消息通知</p>
          <span class="iconfont icon-right"></span>
        </div>
      </div>
    </div>
    <div class="money_box">
      <div class="money">
        <div class="money_one">
          <p>我的钱包</p>
          <span class="iconfont icon-right"></span>
          <span>手机充值</span>
        </div>
        <div class="money_two">
          <p>京东特供</p>
          <span class="iconfont icon-right"></span>
          <span>新人领188红包</span>
        </div>
      </div>
    </div>
    <div class="mine_box">
      <div class="mine">
        <div class="mine_one">
          <p>用户反馈</p>
          <span class="iconfont icon-right"></span>
        </div>
        <div class="mine_two">
          <p>系统设置</p>
          <span class="iconfont icon-right"></span>
        </div>
      </div>
    </div>
  </div>
</div>
</template>

<script>
export default {
  name: 'login',
  data () {
    return {
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style  scoped lang="scss">
@import '../assets/sass/base.scss';
@import '../assets/sass/login.scss';
</style>
