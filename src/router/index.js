import Vue from 'vue'
import Router from 'vue-router'
import login from '@/components/login'
import index from '@/components/index'
import phonelogin from '@/components/phonelogin'
import weitoutiao from '@/components/weitoutiao'
import topicId from '@/components/topic'
import know from '@/components/know'
import video from '@/components/video'

// 加载主题相关组件
import Weex from '@/components/topics/Weex'
import Share from '@/components/topics/Share'
import Job from '@/components/topics/Job'
import index1 from '@/components/topics/index1'
import Good from '@/components/topics/Good'
import ask from '@/components/topics/ask'
import Loading from '@/components/topics/Loading'

//video
import videoBox from '@/components/video/videoBox'
import attention from '@/components/video/attention'
import activity from '@/components/video/activity'

Vue.use(Router)

export default new Router({
    routes: [{
            path: '/index',
            name: 'index',
            component: index,
            children: [{
                    path: '/',
                    component: index1,
                },
                {
                    path: 'good',
                    component: Good,
                },
                {
                    path: 'weex',
                    component: Weex,
                },
                {
                    path: 'share',
                    component: Share,
                },
                {
                    path: 'job',
                    component: Job,
                },
                {
                    path: 'ask',
                    name: 'ask',
                    component: ask,
                },
                {
                    path: 'Loading',
                    name: 'Loading',
                    component: Loading
                }
            ]
        },
        {
            path: '/login',
            name: 'login',
            component: login
        },
        {
            path: '/phonelogin',
            name: 'phonelogin',
            component: phonelogin
        },
        {
            path: '/weitoutiao',
            name: 'weitoutiao',
            component: weitoutiao
        },
        {
            path: '/topic/:id',
            name: 'topic',
            component: topicId
        },
        {
            path: '/know',
            name: 'know',
            component: know
        },
        {
            path: '/video',
            name: 'video',
            component: video,
            children: [{
                    path: 'good',
                    component: videoBox,
                },
                {
                    path: 'attention',
                    component: attention,
                },
                {
                    path: 'activity',
                    component: activity
                }
            ]
        }
    ]
})