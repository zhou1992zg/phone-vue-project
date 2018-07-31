<template>
  <div class="topicList">
    <ul class="test_box">
      <li v-for="item in topics">
        <img v-lazy="item.author.avatar_url" alt="">
        <div><p><router-link :to="'/topic/'+item.id" tag="a">{{item.title}}</router-link></p></div>
        <div>
          <span v-if="item.top" id="style">置顶</span>
          <span v-else-if="item.tab=='weex'">weex</span>
          <span v-else-if="item.tab=='ask'">问答</span>
          <span v-else-if="item.tab=='job'">招聘</span>
          <span v-else-if="item.tab=='share'">分享</span>
          <span v-else></span>
          <span>新华网</span><span>{{item.reply_count}}评论</span>
          <span>{{item.last_reply_at}}</span><span>X</span>
        </div>
        <div></div>
        <div></div>
      </li>
    </ul>
  </div>
</template>

<script>
// 引入请求数据的模块
import { getTopicList } from "@/getdata/index.js";
//引入滑动的模块
import InfiniteLoading from 'vue-infinite-loading';

export default {
  name: "TopicList",
  // 数据
  data() {
    return {
    };
  },

  // 钩子函数
  mounted() {
  },
  //接收  父组件传递过来的值
  props: ["topics"]
};
</script>
<style lang="scss">
// 加载基础的样式
@import "../../assets/sass/base.scss";
@import "../../assets/sass/Good.scss";
</style>
