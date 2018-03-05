# dmeo

> A Vue.js project

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report
```

For a detailed explanation on how things work, check out the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).


1、vue-cli 生成webpack项目
2、构建路由和路由页面
3、配置mockadapter接口
4、axios请求数据并渲染 
5、路由传参


路由传参

前端页面 路由路径传参
A:
<router-link :to="{ path:'/'},query:{ id:1111}">
	跳转页面
</router-link>
B:
通过this.$router取得浏览器挂参对象
this.$router.query

发起ajax并传参
axios.get("/",{params:{}});

服务端接参
axios.onGet("/").reply((config)=>{
	config.params
});

