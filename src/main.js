import Vue from 'vue'
import App from './App'
import router from './router'
import VueLazyload from 'vue-lazyload'



Vue.config.productionTip = false

// or with options
Vue.use(VueLazyload, {
    preLoad: 1.3,
    // 请求地址出错 会 加载 这里的图片
    error: require('../static/images/73acca56e75a30281cb3655bbd17d931.jpg'),
    // 正在请求时加载的图片
    loading: require('../static/images/32949b89889c88826ec6e9da01aeb4cc.gif'),
    // 正在请求时加载的图片
    attempt: 1
})

/* eslint-disable no-new */
new Vue({
    el: '#app',
    router,
    render: h => h(App)
})