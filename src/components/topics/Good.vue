<template>
    <div class="good">
        <topic-list :topics="topics"></topic-list>
    </div>
</template>

<script>
// 引入请求数据的模块
import { getTopicList } from "@/getdata/index.js";

// 引入主题 列表 组件
import TopicList from "@/components/topics/TopicList";


export default {
  name: 'Good',
  data () {
    return {
      topics:[]
    }
  },
    // 加载组件
  components:{
    TopicList
  },
  // 钩子函数
  mounted(){
    // 调用查询数据的函数
    getTopicList({tab:'good',limit:20}).then((data)=>{
      this.topics = data.data.data
    })
  }
}
</script>
