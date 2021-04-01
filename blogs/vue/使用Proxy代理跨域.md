---
title: 使用Proxy代理跨域
date: 2020-12-24
categories:
 - VUE
tags: 
 - vue基础
---

## 使用Proxy代理跨域

什么是跨域？

  域名 协议 ip地址 端口 任何一个不一样 就跨域

解决跨域？

   1 jsonp   ---使用script的src发送   只能get 请求

   2 cors 后台设置允许跨域    **需要后台设置** 允许跨域

​      所有后台语言 都可以设置       

   3  服务器代理

**重点 现在 前端 vue 框架 是可以自己设置 服务器代理的**  proxy

​         **配置就行**

  **vue在 vue.config.js  可以配置重写webpack**



>分析: 本题考查如何解决跨域问题
>
>解析: 解决跨域问题的方式有几种,
>
>**1 一种是服务端设置**  , 但这种方式依赖服务端的设置,在前后分离的场景下 ,不太方便
>
>```
>Access-Control-Allow-Origin：*
>Access-Control-Allow-Methods："POST, GET, OPTIONS, DELETE"
>```
>
>**2 还有一种jsonp形式**, 可以利用script标签 的特性解决同源策略带来的跨域问题,但这是这种方案对于请求的类型有限制,只能get
>
>**3 还有一种就可以在开发环境(本地调试)期间,进行代理**, 说白了 就是通过 在本地通过nodejs 启动一个微型服务, 
>
>然后我们先请求我们的微型服务, 微型服务是服务端, 服务端**`代我们`**去请求我们想要的跨域地址, 因为服务端是不受**`同源策略`**的限制的, 具体到开发中,打包工具webpack集成了代理的功能,可以采用配置webpack的方式进行解决, 但是这种仅限于 本地开发期间, **等项目上线时,还是需要另择代理 nginx**

以下为webpack配置代理的配置 

```json
// vue.config.js
module.exports = {
  // 修改的配置
  devServer: {
      proxy: {
          '/api': {
              target: 'http://122.51.238.153',
              changeOrigin: true,
              pathRewrite: {
                '^/api': ''
              }
          }
      }
  }
}
```

**`target`**：接口域名；

 **`changeOrigin`**： 如果设置为`true`,那么本地会虚拟一个服务端接收你的请求并代你发送该请求；

 **`pathRewrite`**：如果接口中是没有api的，那就直接置空（如上）如果接口中有api，就需要写成{‘^/api’:‘’}

**上线了如果还有跨域 可以让后台设置 允许跨域**

