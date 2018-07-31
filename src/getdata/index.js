// 用来请求数据的 模块
// 加载 axios 模块(用来 发送 ajax 的请求的)
import axios from 'axios';

// 基本的配置
var $http = axios.create({
    baseURL: 'https://www.vue-js.com/api/v1/',
    headers: { 'X-Custom-Header': 'foobar' }
});


// 请求主题列表的函数
function getTopicList(params) {
    // 默认的参数
    var newParams = Object.assign({
        limit: 10
    }, params)

    // 返回值
    return $http({
        // 请求的方法
        method: 'get',
        // 请求的url 会拼接 到 baseURL 中
        url: '/topics',
        params: newParams
    });
}

// 查主题 内容 的函数
function getTopicShow(id) {
    return $http({
        method: 'get',
        // 请求的url 会拼接 到 baseURL 中
        url: '/topic/' + id,
    })
}

export { getTopicList, getTopicShow }