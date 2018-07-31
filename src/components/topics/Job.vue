<template>
    <div class="Job">
        <topic-list :topics="topics"></topic-list>
    </div>
</template>

<script>

// 引入请求数据的模块
import { getTopicList } from "@/getdata/index.js";

// 引入主题 列表 组件
import TopicList from "@/components/topics/TopicList";

export default {
  name: "Job",
  data () {
    return {
      //用来装主题列表的数据
      topics: []
    }
  },
  //加载组件
  components: {
    TopicList
  },
  //钩子函数
  mounted() {
    getTopicList({tab:'job'}).then(data => {
      this.topics = data.data.data;
    })
  }
}
</script>
