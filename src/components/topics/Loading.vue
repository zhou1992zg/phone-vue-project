<template>
    <div class="Loading">
        <topic-list :topics="topics"></topic-list>
        <!-- <img src="../../../static/images/32949b89889c88826ec6e9da01aeb4cc.gif" alt=""> -->
        <infinite-loading @infinite="infiniteHandler"></infinite-loading>
    </div>
</template>

<script>
// 引入主题 列表 组件
import TopicList from "@/components/topics/TopicList";

//引入请求数据的模块
import { getTopicList } from "@/getdata/index.js";

//引入挂载上下滑动模块
import InfiniteLoading from 'vue-infinite-loading';

export default {
  name: "Loading",
  data() {
    return {
      //用来装主题列表的数据
      topics: []
    };
  },
  //加载组件    
  components: {
    TopicList,
    InfiniteLoading
  },
  //钩子函数
  mounted() {
    getTopicList({
        limit:5,
        page:this.page
    }).then(data => {
      this.topics = data.data.data;
    });
  },
   methods: {
    infiniteHandler($state) {
      setTimeout(() => {

        getTopicList({limit:5,page:++(this.page)}).then(data=>{
            this.topics = this.topics.concat(data.data.data);
        })
              $state.loaded();
      }, 1000);
    },
  },
}
</script>
